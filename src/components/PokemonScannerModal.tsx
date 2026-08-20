import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Camera,
  Upload,
  Sparkles,
  Volume2,
  VolumeX,
  RefreshCw,
  CheckCircle2,
  Users,
  ExternalLink,
  Zap,
  AlertCircle,
  Eye,
  SwitchCamera,
  Image as ImageIcon,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PokemonSummary, PokemonType, ScanResult } from '../types/pokemon';
import { TypeBadge } from './TypeBadge';
import { soundFx } from '../utils/audio';

interface PokemonScannerModalProps {
  allPokemonList: PokemonSummary[];
  onShowPokemonDetails: (pokemonNameOrId: string) => void;
  onAddToTeam: (pokemon: PokemonSummary) => void;
  onToggleCaught: (id: number) => void;
  caughtIds: number[];
  language: 'de' | 'en';
  isMuted: boolean;
}

// Sample demo images for testing without camera
const DEMO_SAMPLES = [
  {
    name: 'Pikachu',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    hint: 'Elektro-Maus (Gen 1)',
  },
  {
    name: 'Glurak',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    hint: 'Feuer/Flug (Gen 1)',
  },
  {
    name: 'Gengar',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    hint: 'Geist/Gift (Gen 1)',
  },
  {
    name: 'Mewtu',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    hint: 'Psycho Legendär (Gen 1)',
  },
  {
    name: 'Lucario',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
    hint: 'Kampf/Stahl (Gen 4)',
  },
  {
    name: 'Quajutsu',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    hint: 'Wasser/Unlicht (Gen 6)',
  },
];

export const PokemonScannerModal: React.FC<PokemonScannerModalProps> = ({
  allPokemonList,
  onShowPokemonDetails,
  onAddToTeam,
  onToggleCaught,
  caughtIds,
  language,
  isMuted,
}) => {
  const [activeMode, setActiveMode] = useState<'camera' | 'upload'>('camera');
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [matchedPokemon, setMatchedPokemon] = useState<PokemonSummary | null>(null);
  const [speechActive, setSpeechActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Stop camera helper
  const stopCamera = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  }, []);

  // Start camera
  const startCamera = useCallback(async () => {
    stopCamera();
    setCameraError(null);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Kamera-Zugriff wird von diesem Browser nicht unterstützt.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().catch((err) => {
            if (err.name !== 'AbortError') {
              console.warn('Video playback warning:', err);
            }
          });
        };
      }
      setCameraActive(true);
    } catch (err: any) {
      console.warn('Camera start error:', err);
      setCameraError(
        language === 'de'
          ? 'Kamera konnte nicht gestartet werden (Zugriff verweigert oder keine Kamera vorhanden). Du kannst stattdessen ein Bild hochladen oder Demo-Karten nutzen!'
          : 'Could not access camera. You can upload an image or choose a demo sample instead!'
      );
      setCameraActive(false);
    }
  }, [facingMode, language, stopCamera]);

  useEffect(() => {
    if (activeMode === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [activeMode, startCamera, stopCamera]);

  // Voice output function for Pokédex voice
  const speakAnnouncement = useCallback(
    (text: string) => {
      if (isMuted || !('speechSynthesis' in window)) return;
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
        utterance.rate = 1.05;
        utterance.pitch = 1.1;

        utterance.onstart = () => setSpeechActive(true);
        utterance.onend = () => setSpeechActive(false);
        utterance.onerror = () => setSpeechActive(false);

        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('Speech error:', e);
      }
    },
    [isMuted, language]
  );

  // Send image base64 to server API
  const analyzeImage = async (base64Data: string) => {
    setIsScanning(true);
    setScanResult(null);
    setMatchedPokemon(null);
    soundFx.playBeep();

    try {
      const response = await fetch('/api/scan-pokemon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: base64Data,
          language,
        }),
      });

      let result: ScanResult;
      try {
        result = await response.json();
      } catch (parseErr) {
        throw new Error('Ungültige Serverantwort');
      }

      if (!result || typeof result !== 'object') {
        throw new Error('Fehlerhaftes Format');
      }

      setScanResult(result);

      // Find matched pokemon in loaded dataset
      if (result.dexId > 0 || result.pokemonNameDe) {
        const found = allPokemonList.find(
          (p) =>
            p.id === result.dexId ||
            p.germanName.toLowerCase() === result.pokemonNameDe.toLowerCase() ||
            p.name.toLowerCase() === result.pokemonNameEn.toLowerCase()
        );
        if (found) {
          setMatchedPokemon(found);
        }
      }

      soundFx.playSuccess();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });

      // Announce with Pokédex voice
      if (result.voiceAnnouncement) {
        speakAnnouncement(result.voiceAnnouncement);
      }
    } catch (err: any) {
      console.error('Scan error:', err);
      soundFx.playError();
      setScanResult({
        detected: false,
        pokemonNameDe: 'Scan fehlgeschlagen',
        pokemonNameEn: 'Scan failed',
        dexId: 0,
        species: 'Unbekannt',
        types: ['normal'],
        confidence: 0,
        voiceAnnouncement:
          language === 'de'
            ? 'Rotom-Scan fehlgeschlagen. Bitte versuche es mit einem klareren Bild noch einmal!'
            : 'Scan failed. Please try again with a clearer picture!',
        visualAnalysis: 'Keine klaren Konturen erkannt.',
      });
    } finally {
      setIsScanning(false);
    }
  };

  // Capture current camera frame
  const captureFrame = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    setPreviewImage(dataUrl);
    analyzeImage(dataUrl);
  };

  // Handle uploaded file
  const handleFileUpload = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setPreviewImage(dataUrl);
      analyzeImage(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  // Select sample demo image
  const handleSelectSample = async (sampleUrl: string) => {
    setPreviewImage(sampleUrl);
    setIsScanning(true);
    try {
      // Convert image URL to Base64
      const res = await fetch(sampleUrl);
      const blob = await res.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        analyzeImage(base64);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      console.warn('Sample fetch failed:', e);
      setIsScanning(false);
    }
  };

  const isCurrentCaught = matchedPokemon ? caughtIds.includes(matchedPokemon.id) : false;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="p-5 rounded-3xl bg-[#222222] border-4 border-[#333333] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#00D1FF] border-2 border-white flex items-center justify-center shadow-[0_0_15px_#00D1FF] text-[#222222]">
            <Camera className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-white uppercase tracking-wide">
                {language === 'de' ? 'Optischer Pokédex-Scanner' : 'Pokédex Vision Scanner'}
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FFCC00] text-[#222222]">
                ROTO-SCAN
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {language === 'de'
                ? 'Richte die Kamera auf ein Pokémon (Sammelkarte, Plüschtier, Bildschirm oder Bild) oder lade ein Foto hoch!'
                : 'Point camera at any Pokémon (cards, plushies, screen, or art) or upload a photo!'}
            </p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 bg-[#1a1a1a] p-1.5 rounded-2xl border-2 border-[#333333]">
          <button
            id="scanner-mode-camera-btn"
            onClick={() => {
              soundFx.playSelect();
              setActiveMode('camera');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all ${
              activeMode === 'camera'
                ? 'bg-[#00D1FF] text-[#222222] shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>{language === 'de' ? 'Live-Kamera' : 'Live Camera'}</span>
          </button>

          <button
            id="scanner-mode-upload-btn"
            onClick={() => {
              soundFx.playSelect();
              setActiveMode('upload');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all ${
              activeMode === 'upload'
                ? 'bg-[#FFCC00] text-[#222222] shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>{language === 'de' ? 'Foto Upload' : 'Upload Image'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT / CENTER: Viewfinder / Camera / Upload Area (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#111111] border-4 border-[#DC0A2D] shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Live Camera Feed */}
            {activeMode === 'camera' && (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`w-full h-full object-cover ${!cameraActive && 'hidden'}`}
                />

                {!cameraActive && (
                  <div className="p-6 text-center space-y-3 max-w-md">
                    <AlertCircle className="w-12 h-12 text-[#FFCC00] mx-auto animate-bounce" />
                    <h3 className="text-base font-bold text-white">
                      {language === 'de' ? 'Kamera nicht aktiv' : 'Camera not active'}
                    </h3>
                    <p className="text-xs text-gray-400">{cameraError || 'Kamera wird initialisiert...'}</p>
                    <button
                      onClick={startCamera}
                      className="px-4 py-2 bg-[#00D1FF] text-[#222222] font-black text-xs rounded-xl shadow hover:bg-cyan-300 transition-all cursor-pointer"
                    >
                      {language === 'de' ? 'Kamera neu starten' : 'Restart Camera'}
                    </button>
                  </div>
                )}

                {/* Switch Camera Button if multiple exist */}
                {cameraActive && (
                  <button
                    id="switch-facing-camera-btn"
                    onClick={() => {
                      soundFx.playSelect();
                      setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
                    }}
                    className="absolute top-4 right-4 p-2.5 rounded-2xl bg-black/60 hover:bg-black/80 text-white border border-white/20 z-20 backdrop-blur-sm shadow"
                    title="Kamera wechseln"
                  >
                    <SwitchCamera className="w-5 h-5" />
                  </button>
                )}
              </>
            )}

            {/* Upload Mode Area */}
            {activeMode === 'upload' && (
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files?.[0]) {
                    handleFileUpload(e.dataTransfer.files[0]);
                  }
                }}
                className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-white/5 transition-all group"
              >
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Upload Preview"
                    className="w-full h-full object-contain p-4 filter drop-shadow-lg"
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#222222] border-2 border-[#FFCC00] flex items-center justify-center mx-auto text-[#FFCC00] group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase">
                        {language === 'de' ? 'Bild hier ablegen oder klicken' : 'Drop Pokémon Image or Click'}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        Unterstützt JPG, PNG, WEBP (Karten, Figuren, Screenshots)
                      </p>
                    </div>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
                  }}
                  className="hidden"
                />
              </div>
            )}

            {/* Futuristic Pokédex HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between z-10">
              {/* Top Corners */}
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 border-t-4 border-l-4 border-[#00D1FF]"></div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-black/60 rounded-full border border-[#00D1FF]/50 text-[10px] font-mono text-[#00D1FF] backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-ping"></span>
                  ROTOM-TARGET-LOCK: ACTIVE
                </div>
                <div className="w-8 h-8 border-t-4 border-r-4 border-[#00D1FF]"></div>
              </div>

              {/* Center Target Box */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto border-2 border-dashed border-[#FFCC00]/70 rounded-3xl flex items-center justify-center shadow-[0_0_20px_rgba(255,204,0,0.3)]">
                {/* Crosshairs */}
                <div className="absolute w-6 h-0.5 bg-[#FFCC00] left-2"></div>
                <div className="absolute w-6 h-0.5 bg-[#FFCC00] right-2"></div>
                <div className="absolute h-6 w-0.5 bg-[#FFCC00] top-2"></div>
                <div className="absolute h-6 w-0.5 bg-[#FFCC00] bottom-2"></div>

                {/* Laser scan line animation during scan */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent shadow-[0_0_15px_#00D1FF] animate-scanline"></div>
                )}
              </div>

              {/* Bottom Corners */}
              <div className="flex justify-between items-end">
                <div className="w-8 h-8 border-b-4 border-l-4 border-[#00D1FF]"></div>
                <div className="text-[10px] font-mono text-gray-400 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                  AI VISION: GEMINI 3.7 FLASH
                </div>
                <div className="w-8 h-8 border-b-4 border-r-4 border-[#00D1FF]"></div>
              </div>
            </div>

            {/* Hidden Canvas for Frame Capture */}
            <canvas ref={canvasRef} className="hidden" />
          </div>

          {/* Action Trigger Button */}
          <div className="flex items-center gap-3">
            {activeMode === 'camera' ? (
              <button
                id="capture-scan-btn"
                onClick={captureFrame}
                disabled={!cameraActive || isScanning}
                className="flex-1 py-4 bg-[#DC0A2D] hover:bg-red-600 active:scale-95 disabled:bg-gray-700 text-white font-black text-sm uppercase tracking-wider rounded-2xl border-2 border-white shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin text-[#FFCC00]" />
                    <span>{language === 'de' ? 'Pokédex analysiert...' : 'Scanning Pokémon...'}</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 text-[#FFCC00] animate-bounce" />
                    <span>{language === 'de' ? 'POKÉMON JETZT SCANNEN' : 'SCAN POKÉMON NOW'}</span>
                  </>
                )}
              </button>
            ) : (
              <button
                id="trigger-upload-btn"
                onClick={() => fileInputRef.current?.click()}
                disabled={isScanning}
                className="flex-1 py-4 bg-[#FFCC00] hover:bg-yellow-400 active:scale-95 disabled:bg-gray-700 text-[#222222] font-black text-sm uppercase tracking-wider rounded-2xl border-2 border-[#222] shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <Upload className="w-5 h-5" />
                <span>{language === 'de' ? 'Neues Bild wählen' : 'Select Image File'}</span>
              </button>
            )}
          </div>

          {/* Demo Cards for Instant Testing */}
          <div className="p-4 rounded-2xl bg-[#222222] border-2 border-[#333333]">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFCC00]" />
                {language === 'de' ? 'Schnell-Test (Ohne Kamera):' : 'Quick Demo Samples:'}
              </span>
              <span className="text-[10px] text-gray-500 font-mono">1-Klick Scan</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {DEMO_SAMPLES.map((sample, i) => (
                <button
                  key={i}
                  id={`demo-sample-btn-${i}`}
                  onClick={() => {
                    soundFx.playSelect();
                    handleSelectSample(sample.url);
                  }}
                  disabled={isScanning}
                  className="p-2 rounded-xl bg-[#181818] hover:bg-[#2e2e2e] border border-[#444] hover:border-[#00D1FF] flex flex-col items-center gap-1 transition-all group active:scale-95 cursor-pointer disabled:opacity-50"
                  title={sample.hint}
                >
                  <img
                    src={sample.url}
                    alt={sample.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform filter drop-shadow"
                  />
                  <span className="text-[11px] font-black text-gray-200 group-hover:text-[#00D1FF] truncate w-full text-center">
                    {sample.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Scan Results & Pokédex Voice Terminal (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="p-6 rounded-3xl bg-[#222222] border-4 border-[#333333] shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b-2 border-[#333333] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#49B65F] animate-ping"></div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono">
                  {language === 'de' ? 'SCAN-ERGEBNIS' : 'SCAN REPORT'}
                </h3>
              </div>

              {scanResult && scanResult.voiceAnnouncement && (
                <button
                  id="replay-voice-btn"
                  onClick={() => speakAnnouncement(scanResult.voiceAnnouncement)}
                  className={`p-2 rounded-xl border-2 transition-all ${
                    speechActive
                      ? 'bg-[#00D1FF] border-white text-[#222222] shadow-[0_0_15px_#00D1FF]'
                      : 'bg-[#181818] border-[#444] text-[#00D1FF] hover:bg-[#333]'
                  }`}
                  title="Pokédex-Sprachausgabe wiederholen"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Content Display */}
            {isScanning ? (
              <div className="py-16 text-center space-y-4">
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-[#00D1FF] border-t-transparent animate-spin"></div>
                  <Zap className="w-8 h-8 text-[#FFCC00] absolute animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-black text-white uppercase">
                    {language === 'de' ? 'Identifiziere Pokémon...' : 'Identifying Pokémon...'}
                  </h4>
                  <p className="text-xs text-gray-400 font-mono">
                    Rotom-Optik vergleicht biologische Muster
                  </p>
                </div>
              </div>
            ) : scanResult ? (
              <div className="space-y-5 animate-fadeIn">
                {/* Pokémon Primary Info Card */}
                <div className="p-4 rounded-2xl bg-[#181818] border-2 border-[#444] space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#FFCC00]">
                        #{String(scanResult.dexId).padStart(4, '0')}
                      </span>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                        {language === 'de' ? scanResult.pokemonNameDe : scanResult.pokemonNameEn}
                      </h4>
                      <p className="text-xs text-gray-400 italic">{scanResult.species}</p>
                    </div>

                    {/* Confidence Pill */}
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-[#49B65F]/20 border border-[#49B65F] text-[#49B65F]">
                        {Math.round(scanResult.confidence)}% Treffer
                      </span>
                      {scanResult.isShiny && (
                        <span className="ml-1 px-2 py-0.5 rounded-lg text-[10px] font-black bg-[#FFCC00] text-[#222222] block mt-1">
                          ✨ SHINY
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Types */}
                  <div className="flex items-center gap-2 pt-1">
                    {scanResult.types.map((t) => (
                      <TypeBadge key={t} type={t} size="sm" language={language} />
                    ))}
                  </div>

                  {/* Artwork if matched */}
                  {matchedPokemon && (
                    <div className="flex items-center justify-center py-2">
                      <img
                        src={matchedPokemon.artwork || matchedPokemon.sprite}
                        alt={matchedPokemon.germanName}
                        className="w-32 h-32 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] animate-float"
                      />
                    </div>
                  )}
                </div>

                {/* Pokédex Voice Announcement Box */}
                <div className="p-4 rounded-2xl bg-[#DC0A2D]/15 border-2 border-[#DC0A2D] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-[#FF0000]">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Pokédex-Eintrag & Audio-Log:</span>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed font-sans">
                    "{scanResult.voiceAnnouncement}"
                  </p>
                </div>

                {/* Visual Analysis */}
                {scanResult.visualAnalysis && (
                  <div className="p-3 rounded-xl bg-[#111] border border-[#333] text-[11px] text-gray-300 font-mono">
                    <span className="text-[#00D1FF] font-bold">Visuelle Analyse: </span>
                    {scanResult.visualAnalysis}
                  </div>
                )}

                {/* Direct Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    id="scan-open-detail-btn"
                    onClick={() => {
                      soundFx.playSelect();
                      onShowPokemonDetails(
                        scanResult.dexId > 0
                          ? String(scanResult.dexId)
                          : scanResult.pokemonNameDe
                      );
                    }}
                    className="w-full py-3 bg-[#00D1FF] hover:bg-cyan-300 text-[#222222] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Vollständigen Pokédex-Eintrag öffnen</span>
                  </button>

                  {matchedPokemon && (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id="scan-add-team-btn"
                        onClick={() => {
                          onAddToTeam(matchedPokemon);
                        }}
                        className="py-2.5 bg-[#49B65F] hover:bg-emerald-400 text-[#222222] font-black text-xs uppercase rounded-xl shadow flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                      >
                        <Users className="w-3.5 h-3.5" />
                        <span>Ins Team</span>
                      </button>

                      <button
                        id="scan-toggle-caught-btn"
                        onClick={() => {
                          soundFx.playSelect();
                          onToggleCaught(matchedPokemon.id);
                        }}
                        className={`py-2.5 font-black text-xs uppercase rounded-xl shadow flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer border ${
                          isCurrentCaught
                            ? 'bg-[#222222] text-[#49B65F] border-[#49B65F]'
                            : 'bg-[#FFCC00] text-[#222222] border-transparent hover:bg-yellow-400'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isCurrentCaught ? 'Gefangen ✓' : 'Fangen'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Idle Placeholder */
              <div className="py-14 text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border-2 border-[#444] flex items-center justify-center mx-auto text-gray-500">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-300 uppercase">
                    {language === 'de' ? 'Bereit zum Scannen' : 'Ready to Scan'}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                    {language === 'de'
                      ? 'Richte die Kamera aus oder wähle eine Testkarte, um die Erkennung zu starten.'
                      : 'Aim the camera or select a demo sample to start analysis.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
