import React, { useState } from 'react';
import { Bot, MessageSquare, X, Zap } from 'lucide-react';
import { ActiveTab, PokemonSummary } from '../types/pokemon';
import { soundFx } from '../utils/audio';
import { ChatBotView } from './ChatBotView';

interface FloatingRotomWidgetProps {
  onShowPokemonDetails: (pokemonNameOrId: string) => void;
  onFilterPokemon: (filters: { type?: string; generation?: number; query?: string; specialCategory?: string }) => void;
  onAddToTeam: (pokemonNameOrId: string) => void;
  onSwitchTab: (tab: ActiveTab) => void;
  allPokemonList: PokemonSummary[];
  language: 'de' | 'en';
  currentTab: ActiveTab;
  isPro?: boolean;
  onOpenPaywall?: (reason?: string) => void;
}

export const FloatingRotomWidget: React.FC<FloatingRotomWidgetProps> = ({
  onShowPokemonDetails,
  onFilterPokemon,
  onAddToTeam,
  onSwitchTab,
  allPokemonList,
  language,
  currentTab,
  isPro = false,
  onOpenPaywall,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // If already on the chat tab, don't show the floating widget to prevent double display
  if (currentTab === 'chat') {
    return null;
  }

  const handleOpenClick = () => {
    if (!isPro) {
      soundFx.playSelect();
      if (onOpenPaywall) {
        onOpenPaywall('Die Rotom-K.I. wird mit dem Community-Pass (an 5 Freunde senden) oder per Gutschein-Code freigeschaltet!');
      }
      return;
    }
    soundFx.playSelect();
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Floating launcher button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-rotom-btn"
          onClick={handleOpenClick}
          className="relative group p-3.5 rounded-full bg-[#DC0A2D] hover:bg-red-500 border-4 border-white shadow-[0_0_25px_rgba(220,10,45,0.8)] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
          title={isPro ? "Rotom-Dex KI-Assistent öffnen" : "Rotom-Dex KI (Freischalten per Community-Pass oder Gutschein)"}
        >
          {/* Animated antenna pulse */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <Zap className="w-4 h-4 text-[#FFCC00] animate-bounce" />
          </div>

          <Bot className="w-7 h-7 text-white" />

          {/* Badge */}
          <span className={`absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-black font-mono shadow ${
            isPro ? 'bg-[#FFCC00] text-[#222222]' : 'bg-[#111111] text-[#FFCC00] border border-[#FFCC00]'
          }`}>
            {isPro ? 'KI' : '🔒 PASS'}
          </span>
        </button>
      </div>

      {/* Slide-over Mini Chat Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end p-2 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-xl h-[85vh] max-h-[700px] bg-[#181818] border-4 border-[#DC0A2D] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Top Bar */}
            <div className="p-4 bg-[#DC0A2D] text-white flex items-center justify-between border-b-2 border-[#8B0000]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#222222] border-2 border-[#FFCC00] flex items-center justify-center text-[#FFCC00]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wide">
                    {language === 'de' ? 'Rotom-Dex KI' : 'Rotom-Dex AI'}
                  </h3>
                  <span className="text-[10px] text-red-100 font-mono">
                    {language === 'de' ? 'Interaktiver Pokédex-Assistent' : 'Interactive Assistant'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="expand-rotom-tab-btn"
                  onClick={() => {
                    soundFx.playSelect();
                    setIsOpen(false);
                    onSwitchTab('chat');
                  }}
                  className="px-2.5 py-1 rounded-xl bg-[#222222] hover:bg-[#333333] border border-[#333] text-[11px] font-bold text-[#FFCC00]"
                >
                  {language === 'de' ? 'Vollbild' : 'Full Screen'}
                </button>
                <button
                  id="close-rotom-widget-btn"
                  onClick={() => {
                    soundFx.playSelect();
                    setIsOpen(false);
                  }}
                  className="p-1 rounded-xl text-white hover:bg-black/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden">
              <ChatBotView
                onShowPokemonDetails={(p) => {
                  setIsOpen(false);
                  onShowPokemonDetails(p);
                }}
                onFilterPokemon={(f) => {
                  setIsOpen(false);
                  onFilterPokemon(f);
                }}
                onAddToTeam={onAddToTeam}
                onSwitchTab={(t) => {
                  setIsOpen(false);
                  onSwitchTab(t);
                }}
                allPokemonList={allPokemonList}
                language={language}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
