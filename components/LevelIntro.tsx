
import React from 'react';
import { Level } from '../types';

interface LevelIntroProps {
  level: Level;
  onStartLevel: () => void;
}

const LevelIntro: React.FC<LevelIntroProps> = ({ level, onStartLevel }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center p-4 text-white font-mono bg-slate-900/80">
      <div className="max-w-2xl bg-black/30 backdrop-blur-md border border-cyan-500 rounded-lg p-8 shadow-2xl shadow-cyan-500/20">
        <h1 className="text-4xl font-bold text-cyan-300 mb-2">{level.title}</h1>
        <h2 className="text-2xl text-yellow-400 mb-6">Konsep: {level.concept}</h2>
        <p className="text-lg text-slate-200 mb-8">{level.story}</p>
        <button
          onClick={onStartLevel}
          className="px-8 py-3 bg-yellow-500 text-slate-900 font-bold text-xl rounded-lg shadow-lg shadow-yellow-500/50 hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300"
        >
          Mulai
        </button>
      </div>
    </div>
  );
};

export default LevelIntro;
