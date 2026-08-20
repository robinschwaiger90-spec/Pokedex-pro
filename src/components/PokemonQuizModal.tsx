import React, { useState, useEffect, useCallback } from 'react';
import {
  Trophy,
  Volume2,
  Sparkles,
  Flame,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PokemonSummary } from '../types/pokemon';
import { soundFx } from '../utils/audio';

interface PokemonQuizModalProps {
  allPokemonList: PokemonSummary[];
  language: 'de' | 'en';
}

export const PokemonQuizModal: React.FC<PokemonQuizModalProps> = ({
  allPokemonList,
  language,
}) => {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonSummary | null>(null);
  const [options, setOptions] = useState<PokemonSummary[]>([]);
  const [selectedOption, setSelectedOption] = useState<PokemonSummary | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(() => {
    return parseInt(localStorage.getItem('pokedex_best_streak') || '0', 10);
  });
  const [timeLeft, setTimeLeft] = useState(15);
  const [isTimerActive, setIsTimerActive] = useState(true);

  // Generate new quiz question
  const nextQuestion = useCallback(() => {
    if (allPokemonList.length < 4) return;

    // Pick 1 correct target
    const targetIdx = Math.floor(Math.random() * allPokemonList.length);
    const target = allPokemonList[targetIdx];

    // Pick 3 distinct wrong options
    const pool = allPokemonList.filter((p) => p.id !== target.id);
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const wrongOptions = shuffledPool.slice(0, 3);

    const allOpts = [target, ...wrongOptions].sort(() => 0.5 - Math.random());

    setCurrentPokemon(target);
    setOptions(allOpts);
    setSelectedOption(null);
    setIsRevealed(false);
    setTimeLeft(15);
    setIsTimerActive(true);
  }, [allPokemonList]);

  useEffect(() => {
    if (allPokemonList.length > 0 && !currentPokemon) {
      nextQuestion();
    }
  }, [allPokemonList, currentPokemon, nextQuestion]);

  // Countdown timer
  useEffect(() => {
    if (!isTimerActive || isRevealed) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerActive, isRevealed]);

  const handleTimeOut = () => {
    soundFx.playError();
    setIsRevealed(true);
    setIsTimerActive(false);
    setStreak(0);
  };

  const handleSelectOption = (option: PokemonSummary) => {
    if (isRevealed || !currentPokemon) return;

    setSelectedOption(option);
    setIsRevealed(true);
    setIsTimerActive(false);

    if (option.id === currentPokemon.id) {
      // Correct!
      soundFx.playSuccess();
      soundFx.playCry(undefined, currentPokemon.id);
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
      });

      const nextStreak = streak + 1;
      setScore((s) => s + 100 + streak * 20);
      setStreak(nextStreak);

      if (nextStreak > bestStreak) {
        setBestStreak(nextStreak);
        localStorage.setItem('pokedex_best_streak', nextStreak.toString());
      }
    } else {
      // Wrong!
      soundFx.playError();
      setStreak(0);
    }
  };

  const handlePlayCryHint = () => {
    if (currentPokemon) {
      soundFx.playCry(undefined, currentPokemon.id);
    }
  };

  if (!currentPokemon) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner: Score, Streak, Best - Vibrant Palette */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-[#222222] border-4 border-[#333333] shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#FFCC00] text-[#222222] font-black border-2 border-[#B8860B]">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-wide">
              {language === 'de' ? 'Wer ist dieses Pokémon?' : "Who's that Pokemon?"}
            </h2>
            <p className="text-xs text-gray-400">
              {language === 'de' ? 'Erkenne das Pokémon an seiner Silhouette!' : 'Identify the Pokémon from its silhouette!'}
            </p>
          </div>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center gap-2">
          {/* Streak */}
          <div className="px-3.5 py-1.5 rounded-xl bg-[#1a1a1a] border-2 border-[#333333] flex items-center gap-1.5 text-xs font-mono">
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-[#FFCC00] fill-[#FFCC00]' : 'text-gray-500'}`} />
            <span className="text-gray-400 font-bold">Serie:</span>
            <strong className="text-[#FFCC00] font-black">{streak}</strong>
          </div>

          {/* Points */}
          <div className="px-3.5 py-1.5 rounded-xl bg-[#1a1a1a] border-2 border-[#333333] flex items-center gap-1.5 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-[#49B65F]" />
            <span className="text-gray-400 font-bold">Punkte:</span>
            <strong className="text-[#49B65F] font-black">{score}</strong>
          </div>
        </div>
      </div>

      {/* Main Guessing Arena */}
      <div className="bg-[#222222] border-4 border-[#333333] rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl">
        {/* Silhouette Display Container */}
        <div className="md:col-span-6 flex flex-col items-center justify-center p-6 rounded-3xl bg-[#111111] border-4 border-[#333333] relative overflow-hidden min-h-[300px] shadow-inner">
          {/* Circular Glowing Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

          {/* Timer bar */}
          <div className="w-full bg-[#222222] h-2.5 rounded-full overflow-hidden mb-4 border border-[#444] z-10">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                timeLeft <= 5 ? 'bg-[#FF0000]' : 'bg-[#FFCC00]'
              }`}
              style={{ width: `${(timeLeft / 15) * 100}%` }}
            />
          </div>

          <div className="relative z-10 my-4 flex items-center justify-center">
            <img
              src={currentPokemon.artwork || currentPokemon.sprite}
              alt="Mystery Pokemon"
              className={`w-52 h-52 object-contain transition-all duration-700 ${
                isRevealed
                  ? 'filter-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] scale-105 animate-float'
                  : 'brightness-0 contrast-200 drop-shadow-[0_0_20px_rgba(0,209,255,0.6)]'
              }`}
            />
          </div>

          {/* Cry Audio Hint */}
          <button
            id="quiz-cry-hint-btn"
            onClick={handlePlayCryHint}
            className="z-10 px-4 py-2 rounded-xl bg-[#222222] hover:bg-[#333333] text-[#00D1FF] hover:text-white border-2 border-[#333333] text-xs font-black flex items-center gap-1.5 transition-all shadow-md"
            title="Ruf-Hinweis anhören"
          >
            <Volume2 className="w-4 h-4" />
            <span>Ruf-Hinweis anhören</span>
          </button>
        </div>

        {/* 4 Choices & Feedback Area */}
        <div className="md:col-span-6 space-y-4">
          <div className="text-xs font-black font-mono text-[#FFCC00] uppercase tracking-wider">
            {isRevealed
              ? 'Ergebnis:'
              : 'Wähle den richtigen Namen:'}
          </div>

          <div className="grid grid-cols-1 gap-3">
            {options.map((opt) => {
              const isCorrect = opt.id === currentPokemon.id;
              const isSelected = selectedOption?.id === opt.id;

              let btnStyle = 'bg-[#1a1a1a] hover:bg-[#333333] border-2 border-[#333333] hover:border-[#FFCC00] text-white';

              if (isRevealed) {
                if (isCorrect) {
                  btnStyle = 'bg-[#49B65F]/20 border-2 border-[#49B65F] text-[#49B65F] font-black ring-2 ring-[#49B65F]';
                } else if (isSelected) {
                  btnStyle = 'bg-[#FF0000]/20 border-2 border-[#FF0000] text-[#FF5959] ring-2 ring-[#FF0000] font-black';
                } else {
                  btnStyle = 'bg-[#111111] border-2 border-[#222222] text-gray-500 opacity-40';
                }
              }

              return (
                <button
                  key={opt.id}
                  id={`quiz-option-${opt.id}`}
                  disabled={isRevealed}
                  onClick={() => handleSelectOption(opt)}
                  className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all active:scale-98 cursor-pointer ${btnStyle}`}
                >
                  <span className="text-sm font-black tracking-wide uppercase">
                    {language === 'de' ? opt.germanName : opt.name.toUpperCase()}
                  </span>
                  {isRevealed && isCorrect && <CheckCircle2 className="w-5 h-5 text-[#49B65F]" />}
                  {isRevealed && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-[#FF0000]" />}
                </button>
              );
            })}
          </div>

          {/* Action on Reveal (Next Button) */}
          {isRevealed && (
            <div className="pt-2 animate-fadeIn">
              <button
                id="quiz-next-question-btn"
                onClick={() => {
                  soundFx.playSelect();
                  nextQuestion();
                }}
                className="w-full py-3.5 bg-[#49B65F] hover:bg-emerald-400 text-[#222222] rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 cursor-pointer"
              >
                <span>Nächste Runde</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
