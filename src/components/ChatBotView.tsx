import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Trash2,
  ExternalLink,
  Zap,
  Info,
  Layers,
  Search,
} from 'lucide-react';
import Markdown from 'react-markdown';
import { ActiveTab, PokemonSummary, PokemonType } from '../types/pokemon';
import { soundFx } from '../utils/audio';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  actions?: {
    name: string;
    args: any;
  }[];
}

interface ChatBotViewProps {
  onShowPokemonDetails: (pokemonNameOrId: string) => void;
  onFilterPokemon: (filters: { type?: string; generation?: number; query?: string; specialCategory?: string }) => void;
  onAddToTeam: (pokemonNameOrId: string) => void;
  onSwitchTab: (tab: ActiveTab) => void;
  allPokemonList: PokemonSummary[];
  language: 'de' | 'en';
}

const INITIAL_SUGGESTIONS_DE = [
  '🃏 Öffne das TCG & ziehe ein 151 Booster Pack!',
  '⚡ Zeige mir den Eintrag von Pikachu',
  '📷 Öffne den Live-Kamera Scanner',
  '🔥 Was sind die Schwächen und besten Konter für Glurak?',
  '🛡️ Wie schlägt sich der Typ Fee defensiv?',
  '🐉 Zeige mir starke Drachen-Pokémon',
  '🎒 Packe Gengar in mein Team',
];

const INITIAL_SUGGESTIONS_EN = [
  '🃏 Open TCG and open a 151 Booster Pack!',
  '⚡ Show me the entry for Pikachu',
  '📷 Open the Vision Camera Scanner',
  '🔥 What are the best counters and weaknesses for Charizard?',
  '🛡️ How does Fairy type hold up defensively?',
  '🐉 Show me powerful Dragon-type Pokémon',
  '🎒 Add Gengar to my battle team',
];

export const ChatBotView: React.FC<ChatBotViewProps> = ({
  onShowPokemonDetails,
  onFilterPokemon,
  onAddToTeam,
  onSwitchTab,
  allPokemonList,
  language,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('pokedex_chat_messages');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        id: 'welcome-msg',
        role: 'model',
        text:
          language === 'de'
            ? 'Zzzzt! Hallo Trainer! ⚡ Ich bin dein **Rotom-Dex KI-Assistent**.\n\nDu kannst mich alles über Pokémon fragen – Statuswerte, Entwicklungen, Typ-Effektivitäten oder Anime-Fakten! Du kannst mir auch Befehle geben wie:\n- *"Zeige mir den Eintrag von Pikachu"*\n- *"Filtere nach Wasser-Pokémon"*\n- *"Füge Mewtu zu meinem Team hinzu"*'
            : 'Zzzzt! Hello Trainer! ⚡ I am your **Rotom-Dex AI Assistant**.\n\nAsk me anything about Pokémon—stats, evolutions, type matchups, and battle strategies! You can also command me:\n- *"Show me the entry for Pikachu"*\n- *"Filter for Water-type Pokémon"*\n- *"Add Mewtwo to my team"*',
        timestamp: Date.now(),
      },
    ];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Save chat to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pokedex_chat_messages', JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleActionDispatch = (action: { name: string; args: any }) => {
    soundFx.playSelect();
    const { name, args } = action;

    if (name === 'showPokemonDetails') {
      if (args?.pokemonNameOrId) {
        onShowPokemonDetails(String(args.pokemonNameOrId));
      }
    } else if (name === 'filterPokemon') {
      onFilterPokemon({
        type: args?.type,
        generation: args?.generation,
        query: args?.query,
        specialCategory: args?.specialCategory,
      });
    } else if (name === 'addToTeam') {
      if (args?.pokemonNameOrId) {
        onAddToTeam(String(args.pokemonNameOrId));
      }
    } else if (name === 'switchTab') {
      if (args?.tabName) {
        onSwitchTab(args.tabName as ActiveTab);
      }
    }
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    soundFx.playSelect();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: Date.now(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Format messages history for server
      const payload = {
        messages: newMessages.map((m) => ({
          role: m.role,
          text: m.text,
        })),
        language,
      };

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const data = await response.json();
      soundFx.playSuccess();

      const botMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.text || 'Zzzzt! Aufgabe erledigt!',
        timestamp: Date.now(),
        actions: data.actions || [],
      };

      setMessages((prev) => [...prev, botMsg]);

      // Automatically execute actions if returned!
      if (data.actions && data.actions.length > 0) {
        data.actions.forEach((act: any) => {
          handleActionDispatch(act);
        });
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      soundFx.playError();
      const errorMsg: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'model',
        text:
          language === 'de'
            ? 'Zzzzt! Ich konnte leider keine Verbindung zur Rotom-Zentrale herstellen. Bitte stelle sicher, dass der Server aktiv ist!'
            : 'Zzzzt! Could not connect to Rotom Network. Please try again in a moment!',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    soundFx.playSelect();
    const freshWelcome: ChatMessage = {
      id: 'welcome-msg-fresh',
      role: 'model',
      text:
        language === 'de'
          ? 'Zzzzt! Chat-Verlauf zurückgesetzt. Worüber möchtest du sprechen? ⚡'
          : 'Zzzzt! Chat history cleared. What would you like to explore? ⚡',
      timestamp: Date.now(),
    };
    setMessages([freshWelcome]);
  };

  const suggestions = language === 'de' ? INITIAL_SUGGESTIONS_DE : INITIAL_SUGGESTIONS_EN;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col h-[calc(100vh-140px)] min-h-[550px] space-y-4">
      {/* Header Banner */}
      <div className="flex items-center justify-between p-4 sm:p-5 rounded-3xl bg-[#222222] border-4 border-[#333333] shadow-2xl">
        <div className="flex items-center gap-3">
          {/* Rotom Eye Orb */}
          <div className="relative w-12 h-12 rounded-2xl bg-[#DC0A2D] border-2 border-[#FFCC00] flex items-center justify-center shadow-[0_0_15px_rgba(220,10,45,0.6)]">
            <Zap className="w-6 h-6 text-[#FFCC00] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00D1FF] rounded-full border border-white"></span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide">
                {language === 'de' ? 'Rotom-Dex KI-Assistent' : 'Rotom-Dex AI Assistant'}
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#49B65F] text-[#222222]">
                ONLINE
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {language === 'de'
                ? 'Dein intelligenter Begleiter für Pokémon-Wissen und Sprachbefehle'
                : 'Your interactive AI companion for lore, stats, and Pokédex actions'}
            </p>
          </div>
        </div>

        <button
          id="chat-clear-history-btn"
          onClick={handleClearHistory}
          className="p-2.5 rounded-2xl bg-[#1a1a1a] hover:bg-[#333333] border-2 border-[#333333] text-gray-400 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
          title="Verlauf leeren"
        >
          <Trash2 className="w-4 h-4 text-gray-400" />
          <span className="hidden sm:inline">Verlauf leeren</span>
        </button>
      </div>

      {/* Message Feed Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 rounded-3xl bg-[#1a1a1a] border-4 border-[#333333] shadow-inner space-y-4">
        {messages.map((msg) => {
          const isBot = msg.role === 'model';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="w-9 h-9 rounded-xl bg-[#DC0A2D] border-2 border-[#FFCC00] flex items-center justify-center text-[#FFCC00] shadow-md flex-shrink-0 mt-1">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div className={`max-w-[85%] sm:max-w-[75%] space-y-2`}>
                <div
                  className={`p-4 rounded-3xl text-sm ${
                    isBot
                      ? 'bg-[#222222] border-2 border-[#333333] text-gray-100 shadow-xl rounded-tl-sm'
                      : 'bg-[#DC0A2D] text-white border-2 border-[#8B0000] shadow-lg rounded-tr-sm font-medium'
                  }`}
                >
                  {isBot ? (
                    <div className="prose prose-invert prose-sm max-w-none space-y-2 leading-relaxed">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  )}
                </div>

                {/* Render Triggered Actions if any */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {msg.actions.map((act, idx) => (
                      <button
                        key={idx}
                        id={`chat-action-btn-${idx}`}
                        onClick={() => handleActionDispatch(act)}
                        className="px-3 py-1.5 rounded-xl bg-[#00D1FF]/20 hover:bg-[#00D1FF]/30 border-2 border-[#00D1FF] text-[#00D1FF] hover:text-white text-xs font-black flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>
                          {act.name === 'showPokemonDetails' && `Eintrag öffnen: ${act.args.pokemonNameOrId}`}
                          {act.name === 'filterPokemon' && `Filter anwenden`}
                          {act.name === 'addToTeam' && `Zu Team hinzufügen: ${act.args.pokemonNameOrId}`}
                          {act.name === 'switchTab' && `Tab wechseln: ${act.args.tabName}`}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {!isBot && (
                <div className="w-9 h-9 rounded-xl bg-[#333333] border-2 border-[#555555] flex items-center justify-center text-white shadow-md flex-shrink-0 mt-1">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#DC0A2D] border-2 border-[#FFCC00] flex items-center justify-center text-[#FFCC00] shadow-md flex-shrink-0 animate-pulse">
              <Zap className="w-5 h-5" />
            </div>
            <div className="p-4 rounded-3xl bg-[#222222] border-2 border-[#333333] text-gray-400 text-xs font-mono flex items-center gap-2 shadow-xl rounded-tl-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-ping"></span>
              <span>Rotom-Dex analysiert die Datenbank...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        <span className="text-[11px] font-mono text-[#FFCC00] font-black uppercase whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          Vorschläge:
        </span>
        {suggestions.map((sug, i) => (
          <button
            key={i}
            id={`quick-suggestion-btn-${i}`}
            onClick={() => handleSend(sug)}
            disabled={isLoading}
            className="px-3 py-1.5 rounded-xl bg-[#222222] hover:bg-[#333333] border-2 border-[#333333] hover:border-[#FFCC00] text-xs font-bold text-gray-200 whitespace-nowrap transition-all flex-shrink-0 shadow-md active:scale-95 disabled:opacity-50"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2 p-2 rounded-3xl bg-[#222222] border-4 border-[#333333] shadow-2xl"
      >
        <input
          id="chat-user-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            language === 'de'
              ? 'Frag Rotom etwas oder sage "Zeige mir den Eintrag von Pikachu"...'
              : 'Ask Rotom anything or say "Show me Pikachu\'s entry"...'
          }
          disabled={isLoading}
          className="flex-1 bg-transparent px-4 py-2.5 text-white placeholder-gray-400 text-sm focus:outline-none"
        />

        <button
          id="chat-send-msg-btn"
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-5 py-2.5 bg-[#49B65F] hover:bg-emerald-400 disabled:bg-[#333333] text-[#222222] disabled:text-gray-500 rounded-2xl font-black text-xs uppercase flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer disabled:cursor-not-allowed"
        >
          <span>Senden</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
