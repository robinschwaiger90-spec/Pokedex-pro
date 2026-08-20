import React, { useState } from 'react';
import {
  Trash2,
  Plus,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Copy,
  Check,
  Users,
  Search,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ALL_POKEMON_TYPES, POKEMON_TYPES, TYPE_CHART } from '../data/pokemonTypes';
import { PokemonSummary, PokemonType, TeamMember } from '../types/pokemon';
import { soundFx } from '../utils/audio';
import { TypeBadge } from './TypeBadge';

interface TeamBuilderModalProps {
  team: TeamMember[];
  onRemoveFromTeam: (slotId: string) => void;
  onAddToTeam: (pokemon: PokemonSummary) => void;
  onClearTeam: () => void;
  onSelectPokemon: (pokemon: PokemonSummary) => void;
  allPokemonList: PokemonSummary[];
  language: 'de' | 'en';
}

export const TeamBuilderModal: React.FC<TeamBuilderModalProps> = ({
  team,
  onRemoveFromTeam,
  onAddToTeam,
  onClearTeam,
  onSelectPokemon,
  allPokemonList,
  language,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerSearch, setPickerSearch] = useState('');
  const [copied, setCopied] = useState(false);

  // Calculate team stats
  const totalBST = team.reduce((sum, m) => sum + m.pokemon.totalStats, 0);
  const avgBST = team.length > 0 ? Math.round(totalBST / team.length) : 0;

  // Calculate team weaknesses & resistances matrix
  const teamDefensiveBalance: Record<PokemonType, { weakCount: number; resistCount: number; immuneCount: number }> = {} as any;

  ALL_POKEMON_TYPES.forEach((attType) => {
    let weak = 0;
    let resist = 0;
    let immune = 0;

    team.forEach((member) => {
      let multiplier = 1;
      member.pokemon.types.forEach((defType) => {
        const mult = TYPE_CHART[attType]?.[defType] ?? 1;
        multiplier *= mult;
      });

      if (multiplier > 1) weak++;
      else if (multiplier === 0) immune++;
      else if (multiplier < 1) resist++;
    });

    teamDefensiveBalance[attType] = { weakCount: weak, resistCount: resist, immuneCount: immune };
  });

  // Calculate offensive coverage
  const offensiveCoverage = new Set<PokemonType>();
  team.forEach((member) => {
    member.pokemon.types.forEach((attType) => {
      ALL_POKEMON_TYPES.forEach((targetType) => {
        if ((TYPE_CHART[attType]?.[targetType] ?? 1) > 1) {
          offensiveCoverage.add(targetType);
        }
      });
    });
  });

  const handleExport = () => {
    soundFx.playSelect();
    const text = team
      .map((m, idx) => {
        const p = m.pokemon;
        return `${idx + 1}. ${p.germanName} (${p.name}) | Typen: ${p.types.join('/')} | BST: ${p.totalStats}`;
      })
      .join('\n');

    navigator.clipboard.writeText(`=== MEIN POKÉMON DREAM TEAM ===\n${text}\nDurchschnitts-BST: ${avgBST}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePickPokemon = (p: PokemonSummary) => {
    soundFx.playSelect();
    if (team.length < 6) {
      onAddToTeam(p);
      if (team.length === 5) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    }
    setShowPicker(false);
  };

  const filteredPickerList = allPokemonList.filter((p) => {
    if (!pickerSearch.trim()) return true;
    const q = pickerSearch.toLowerCase().trim();
    return p.germanName.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.id.toString() === q;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner - Vibrant Palette */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-[#222222] border-4 border-[#333333] shadow-2xl">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-[#DC0A2D]" />
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
              {language === 'de' ? 'Mein 6er-Kampfteam' : 'My 6-Pokemon Battle Team'}
            </h2>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-[#FFCC00] text-[#222222] font-mono">
              {team.length} / 6
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {language === 'de'
              ? 'Plane dein Traum-Team und analysiere Typen-Schwächen und Synergien.'
              : 'Build your dream team and analyze defensive weaknesses and type synergies.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {team.length > 0 && (
            <>
              <button
                id="team-export-btn"
                onClick={handleExport}
                className="px-4 py-2 bg-[#333333] hover:bg-[#444444] text-white rounded-2xl text-xs font-black flex items-center gap-1.5 border-2 border-[#555555] transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-[#49B65F]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Kopiert!' : 'Team exportieren'}</span>
              </button>

              <button
                id="team-clear-btn"
                onClick={() => {
                  soundFx.playSelect();
                  onClearTeam();
                }}
                className="px-4 py-2 bg-[#DC0A2D]/20 hover:bg-[#DC0A2D]/40 text-[#FF5959] rounded-2xl text-xs font-black flex items-center gap-1.5 border-2 border-[#DC0A2D] transition-all"
              >
                <Trash2 className="w-4 h-4" />
                <span>Leeren</span>
              </button>
            </>
          )}

          {team.length < 6 && (
            <button
              id="team-add-member-btn"
              onClick={() => {
                soundFx.playSelect();
                setShowPicker(true);
              }}
              className="px-5 py-2.5 bg-[#49B65F] hover:bg-emerald-400 text-[#222222] rounded-2xl text-xs font-black flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Pokémon hinzufügen</span>
            </button>
          )}
        </div>
      </div>

      {/* 6 Pokémon Slots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const member = team[index];

          if (member) {
            const p = member.pokemon;
            const pType = POKEMON_TYPES[p.types[0]] || POKEMON_TYPES.normal;

            return (
              <div
                key={member.id}
                id={`team-slot-${index}`}
                onClick={() => onSelectPokemon(p)}
                className="relative bg-[#222222] hover:bg-[#1a1a1a] border-4 border-[#333333] hover:border-[#FFCC00] rounded-3xl p-4 flex flex-col items-center justify-between text-center transition-all group shadow-xl cursor-pointer"
              >
                {/* Remove button */}
                <button
                  id={`remove-team-slot-${index}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFx.playSelect();
                    onRemoveFromTeam(member.id);
                  }}
                  className="absolute top-3 right-3 p-1.5 rounded-xl bg-[#333333] hover:bg-[#DC0A2D] text-gray-400 hover:text-white transition-all z-10"
                  title="Aus Team entfernen"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <span className="font-mono text-xs font-bold text-[#49B65F] bg-[#111111] px-2 py-0.5 rounded-lg border border-[#333333]">
                  Slot {index + 1}
                </span>

                {/* Artwork */}
                <div className="relative my-3">
                  <div
                    className="absolute w-20 h-20 rounded-full blur-xl opacity-30"
                    style={{ backgroundColor: pType.color }}
                  />
                  <img
                    src={p.artwork || p.sprite}
                    alt={p.germanName}
                    className="w-24 h-24 object-contain filter drop-shadow group-hover:scale-110 transition-transform"
                  />
                </div>

                <div className="space-y-2 w-full">
                  <div className="text-sm font-black text-white uppercase truncate">{p.germanName}</div>
                  <div className="flex items-center justify-center gap-1 flex-wrap">
                    {p.types.map((t) => (
                      <TypeBadge key={t} type={t} size="sm" language={language} />
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#333333] text-[11px] font-mono text-gray-400 flex justify-between">
                    <span>BST:</span>
                    <span className="font-black text-[#FFCC00]">{p.totalStats}</span>
                  </div>
                </div>
              </div>
            );
          }

          // Empty Slot
          return (
            <div
              key={index}
              id={`empty-team-slot-${index}`}
              onClick={() => {
                soundFx.playSelect();
                setShowPicker(true);
              }}
              className="border-4 border-dashed border-[#444444] hover:border-[#FFCC00] rounded-3xl p-6 min-h-[220px] flex flex-col items-center justify-center text-center cursor-pointer transition-all bg-[#1a1a1a] hover:bg-[#222222] group"
            >
              <div className="w-12 h-12 rounded-full bg-[#333333] group-hover:bg-[#FFCC00] text-gray-400 group-hover:text-[#222222] flex items-center justify-center mb-2 transition-all">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-gray-300 group-hover:text-[#FFCC00]">
                Slot {index + 1}
              </span>
              <span className="text-[11px] text-gray-400">Pokémon wählen</span>
            </div>
          );
        })}
      </div>

      {/* Team Analytics Section */}
      {team.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Team Overview Stats */}
          <div className="lg:col-span-4 bg-[#222222] border-4 border-[#333333] rounded-3xl p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-black font-mono text-[#FFCC00] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FFCC00]" />
              <span>Team-Statistiken</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-[#1a1a1a] rounded-2xl border-2 border-[#333333]">
                <div className="text-[10px] text-gray-400 font-mono font-bold">DURCHSCHNITT BST</div>
                <div className="text-xl font-black text-white font-mono mt-0.5">{avgBST}</div>
              </div>
              <div className="p-3.5 bg-[#1a1a1a] rounded-2xl border-2 border-[#333333]">
                <div className="text-[10px] text-gray-400 font-mono font-bold">TYP-ABDECKUNG</div>
                <div className="text-xl font-black text-[#49B65F] font-mono mt-0.5">
                  {offensiveCoverage.size} <span className="text-xs text-gray-400 font-normal">/ 18</span>
                </div>
              </div>
            </div>

            {/* Synergies Advice */}
            <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] space-y-2 text-xs text-gray-300">
              <div className="font-black text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#49B65F]" />
                <span>Trainer-Tipp:</span>
              </div>
              {offensiveCoverage.size >= 14 ? (
                <p>Hervorragende Typen-Abdeckung! Dein Team kann fast jeden Gegner sehr effektiv treffen.</p>
              ) : (
                <p>Füge Pokémon mit weiteren Elementartypen hinzu, um deine Offensiv-Reichweite auf alle 18 Typen zu erweitern.</p>
              )}
            </div>
          </div>

          {/* Team Weakness & Resistance Matrix */}
          <div className="lg:col-span-8 bg-[#222222] border-4 border-[#333333] rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black font-mono text-[#FFCC00] uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#FF0000]" />
                <span>Defensive Team-Schwächen</span>
              </h3>
              <span className="text-xs text-gray-400 font-mono">Schwach (Rot) vs Resistent (Grün)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {ALL_POKEMON_TYPES.map((type) => {
                const info = POKEMON_TYPES[type];
                const stats = teamDefensiveBalance[type];
                const isHeavyWeak = stats.weakCount >= 3;

                return (
                  <div
                    key={type}
                    className={`p-2.5 rounded-2xl border-2 flex flex-col justify-between text-xs transition-all ${
                      isHeavyWeak
                        ? 'bg-[#FF0000]/20 border-[#FF0000] ring-1 ring-[#FF0000]'
                        : stats.weakCount > stats.resistCount
                        ? 'bg-orange-500/20 border-orange-500'
                        : stats.resistCount > stats.weakCount
                        ? 'bg-[#49B65F]/20 border-[#49B65F]'
                        : 'bg-[#1a1a1a] border-[#333333]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-white">{info.germanName}</span>
                      <span>{info.iconSymbol}</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono mt-2 pt-1 border-t border-[#333333]">
                      <span className={stats.weakCount > 0 ? 'text-[#FF5959] font-black' : 'text-gray-400'}>
                        -{stats.weakCount}
                      </span>
                      <span className={stats.resistCount > 0 ? 'text-[#49B65F] font-black' : 'text-gray-400'}>
                        +{stats.resistCount + stats.immuneCount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Pokémon Picker Dialog */}
      {showPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-[#222222] border-4 border-[#8B0000] rounded-3xl shadow-2xl p-6 space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#333333]">
              <h3 className="text-lg font-black text-white uppercase tracking-wide">Pokémon für Team wählen</h3>
              <button
                id="close-picker-dialog-btn"
                onClick={() => setShowPicker(false)}
                className="p-1 text-gray-400 hover:text-white rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="picker-search-input"
                type="text"
                value={pickerSearch}
                onChange={(e) => setPickerSearch(e.target.value)}
                placeholder="Pokémon nach Name oder Nummer suchen..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1a] border-2 border-[#333333] rounded-2xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#FFCC00]"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 overflow-y-auto flex-1 pr-1">
              {filteredPickerList.slice(0, 36).map((p) => (
                <div
                  key={p.id}
                  id={`picker-option-${p.id}`}
                  onClick={() => handlePickPokemon(p)}
                  className="p-3 bg-[#1a1a1a] hover:bg-[#333333] border-2 border-[#333333] hover:border-[#FFCC00] rounded-2xl flex items-center gap-3 cursor-pointer transition-all"
                >
                  <img src={p.sprite || p.artwork} alt={p.germanName} className="w-12 h-12 object-contain" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-black text-white truncate">{p.germanName}</div>
                    <div className="text-[10px] text-[#49B65F] font-mono font-bold">#{p.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
