import React, { useState } from 'react';
import { Swords, Shield, X, Sparkles } from 'lucide-react';
import { ALL_POKEMON_TYPES, calculateTypeDefenses, POKEMON_TYPES } from '../data/pokemonTypes';
import { PokemonSummary, PokemonType } from '../types/pokemon';
import { soundFx } from '../utils/audio';
import { TypeBadge } from './TypeBadge';

interface TypeCalculatorModalProps {
  allPokemonList: PokemonSummary[];
  onSelectPokemon: (pokemon: PokemonSummary) => void;
  language: 'de' | 'en';
}

export const TypeCalculatorModal: React.FC<TypeCalculatorModalProps> = ({
  allPokemonList,
  onSelectPokemon,
  language,
}) => {
  const [type1, setType1] = useState<PokemonType>('fire');
  const [type2, setType2] = useState<PokemonType | null>('flying');

  const selectedTypes = type2 ? [type1, type2] : [type1];
  const defenses = calculateTypeDefenses(selectedTypes);

  // Group defenses by multiplier
  const quadrupleWeak = ALL_POKEMON_TYPES.filter((t) => defenses[t] === 4);
  const doubleWeak = ALL_POKEMON_TYPES.filter((t) => defenses[t] === 2);
  const normalDamage = ALL_POKEMON_TYPES.filter((t) => defenses[t] === 1);
  const halfResist = ALL_POKEMON_TYPES.filter((t) => defenses[t] === 0.5);
  const quarterResist = ALL_POKEMON_TYPES.filter((t) => defenses[t] === 0.25);
  const immune = ALL_POKEMON_TYPES.filter((t) => defenses[t] === 0);

  // Find existing Pokémon matching this combination
  const matchingPokemon = allPokemonList.filter((p) => {
    if (type2) {
      return (
        (p.types[0] === type1 && p.types[1] === type2) ||
        (p.types[0] === type2 && p.types[1] === type1)
      );
    } else {
      return p.types.length === 1 && p.types[0] === type1;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header - Vibrant Palette */}
      <div className="p-6 rounded-3xl bg-[#222222] border-4 border-[#333333] shadow-2xl space-y-2">
        <div className="flex items-center gap-2">
          <Swords className="w-6 h-6 text-[#DC0A2D]" />
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
            {language === 'de' ? 'Typ-Rechner & Matchup-Matrix' : 'Type Matchup Calculator'}
          </h2>
        </div>
        <p className="text-xs text-gray-400">
          {language === 'de'
            ? 'Wähle einen Primär- und Sekundär-Typ, um alle Resistenzen, Schwächen und Immunitäten zu berechnen.'
            : 'Select primary and secondary types to compute all resistances, weaknesses, and immunities.'}
        </p>
      </div>

      {/* Type Pickers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Type 1 Selector */}
        <div className="bg-[#222222] border-4 border-[#333333] rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#333333] pb-3">
            <span className="text-xs font-black font-mono text-[#FFCC00] uppercase">
              1. Primär-Typ:
            </span>
            <TypeBadge type={type1} size="md" language={language} />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
            {ALL_POKEMON_TYPES.map((t) => (
              <TypeBadge
                key={t}
                type={t}
                size="sm"
                language={language}
                isSelected={type1 === t}
                onClick={() => {
                  soundFx.playSelect();
                  setType1(t);
                  if (type2 === t) setType2(null);
                }}
              />
            ))}
          </div>
        </div>

        {/* Type 2 Selector (Optional) */}
        <div className="bg-[#222222] border-4 border-[#333333] rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#333333] pb-3">
            <span className="text-xs font-black font-mono text-[#FFCC00] uppercase">
              2. Sekundär-Typ (Optional):
            </span>
            {type2 ? (
              <div className="flex items-center gap-2">
                <TypeBadge type={type2} size="md" language={language} />
                <button
                  id="clear-type2-btn"
                  onClick={() => {
                    soundFx.playSelect();
                    setType2(null);
                  }}
                  className="p-1 rounded-xl text-gray-400 hover:text-white bg-[#333333] border border-[#444]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <span className="text-xs text-[#00D1FF] font-mono font-bold">Keiner (Reiner Typ)</span>
            )}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
            {ALL_POKEMON_TYPES.map((t) => {
              const isDisabled = t === type1;
              return (
                <button
                  key={t}
                  disabled={isDisabled}
                  onClick={() => {
                    soundFx.playSelect();
                    setType2(type2 === t ? null : t);
                  }}
                  className={`opacity-${isDisabled ? '25' : '100'}`}
                >
                  <TypeBadge
                    type={t}
                    size="sm"
                    language={language}
                    isSelected={type2 === t}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Defensive Breakdown Results */}
      <div className="bg-[#222222] border-4 border-[#333333] rounded-3xl p-6 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b-2 border-[#333333] pb-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00D1FF]" />
            <h3 className="text-base font-black text-white font-mono uppercase">
              Defensives Profil für {POKEMON_TYPES[type1].germanName}
              {type2 ? ` / ${POKEMON_TYPES[type2].germanName}` : ''}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 4x Weaknesses */}
          {quadrupleWeak.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#FF0000]/20 border-2 border-[#FF0000] space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-[#FF5959] font-mono">
                <span>4× EXTREME SCHWÄCHE</span>
                <span>{quadrupleWeak.length}</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {quadrupleWeak.map((t) => (
                  <TypeBadge key={t} type={t} size="sm" language={language} />
                ))}
              </div>
            </div>
          )}

          {/* 2x Weaknesses */}
          <div className="p-4 rounded-2xl bg-orange-500/20 border-2 border-orange-500 space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-orange-400 font-mono">
              <span>2× SCHWÄCHE</span>
              <span>{doubleWeak.length}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {doubleWeak.length > 0 ? (
                doubleWeak.map((t) => (
                  <TypeBadge key={t} type={t} size="sm" language={language} />
                ))
              ) : (
                <span className="text-xs text-gray-400">Keine 2× Schwächen</span>
              )}
            </div>
          </div>

          {/* 0.5x Resistances */}
          <div className="p-4 rounded-2xl bg-[#49B65F]/20 border-2 border-[#49B65F] space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-[#49B65F] font-mono">
              <span>½× RESISTENZ</span>
              <span>{halfResist.length}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {halfResist.length > 0 ? (
                halfResist.map((t) => (
                  <TypeBadge key={t} type={t} size="sm" language={language} />
                ))
              ) : (
                <span className="text-xs text-gray-400">Keine ½× Resistenzen</span>
              )}
            </div>
          </div>

          {/* 0.25x Super Resistances */}
          {quarterResist.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#00D1FF]/20 border-2 border-[#00D1FF] space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-[#00D1FF] font-mono">
                <span>¼× SUPER-RESISTENZ</span>
                <span>{quarterResist.length}</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {quarterResist.map((t) => (
                  <TypeBadge key={t} type={t} size="sm" language={language} />
                ))}
              </div>
            </div>
          )}

          {/* 0x Immunities */}
          <div className="p-4 rounded-2xl bg-purple-500/20 border-2 border-purple-500 space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-purple-300 font-mono">
              <span>0× IMMUNITÄT (0 SCHADEN)</span>
              <span>{immune.length}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {immune.length > 0 ? (
                immune.map((t) => (
                  <TypeBadge key={t} type={t} size="sm" language={language} />
                ))
              ) : (
                <span className="text-xs text-gray-400">Keine Immunitäten</span>
              )}
            </div>
          </div>

          {/* 1x Neutral */}
          <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-gray-300 font-mono">
              <span>1× NORMALER SCHADEN</span>
              <span>{normalDamage.length}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {normalDamage.map((t) => (
                <TypeBadge key={t} type={t} size="sm" language={language} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Existing Pokémon with this Type Combination */}
      {matchingPokemon.length > 0 && (
        <div className="bg-[#222222] border-4 border-[#333333] rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#333333] pb-3">
            <h3 className="text-sm font-black text-[#FFCC00] font-mono uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFCC00]" />
              <span>Bekannte Pokémon mit dieser Typ-Kombination ({matchingPokemon.length})</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {matchingPokemon.map((p) => (
              <div
                key={p.id}
                id={`matching-pkmn-${p.id}`}
                onClick={() => {
                  soundFx.playSelect();
                  onSelectPokemon(p);
                }}
                className="p-3.5 bg-[#1a1a1a] hover:bg-[#333333] border-2 border-[#333333] hover:border-[#FFCC00] rounded-2xl text-center cursor-pointer transition-all hover:scale-105 shadow-md"
              >
                <img
                  src={p.artwork || p.sprite}
                  alt={p.germanName}
                  className="w-16 h-16 mx-auto object-contain drop-shadow"
                />
                <div className="text-xs font-black text-white mt-1 truncate">{p.germanName}</div>
                <div className="text-[10px] text-[#49B65F] font-mono font-bold">#{p.id}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
