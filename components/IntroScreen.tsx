
import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center p-4 text-white font-mono bg-slate-900">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 animate-pulse">Petualangan Komputasional</h1>
        <h2 className="text-2xl md:text-3xl text-cyan-200 mt-2 mb-8">Misi: Pemberantasan BUGTRON</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12 backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-cyan-500/50">
          Dunia digital Neo-Cyber Realm sedang diserang oleh virus ganas yang dikenal sebagai <span className="text-red-400 font-bold">BUGTRON</span>. Sistem gagal, data rusak, dan dunia di ambang kehancuran. Kamu adalah Aero, seorang programmer muda yang menjanjikan. Dengan teman AI-mu, LUNO, kamu harus menjelajah ke inti sistem untuk memberantas virus. Misimu membutuhkan penguasaan empat pilar berpikir komputasional. Apakah kamu siap?
        </p>
        <button
          onClick={onStart}
          className="px-12 py-4 bg-cyan-500 text-slate-900 font-bold text-2xl rounded-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-400 hover:scale-105 transform transition-all duration-300"
        >
          Mulai Misi
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
