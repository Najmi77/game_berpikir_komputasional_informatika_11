
import React from 'react';
import { LightbulbIcon } from './icons';

interface HeaderProps {
  levelTitle: string;
  score: number;
  onHint: () => void;
  isHintLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ levelTitle, score, onHint, isHintLoading }) => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 bg-slate-900/50 backdrop-blur-sm flex justify-between items-center text-white font-mono z-30">
      <div className="border border-cyan-500 px-3 py-1 rounded">
        <h1 className="text-xl text-cyan-300">{levelTitle}</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-2xl text-yellow-400">
          Skor: <span className="font-bold">{score}</span>
        </div>
        <button
          onClick={onHint}
          disabled={isHintLoading}
          className="flex items-center space-x-2 bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500 text-cyan-200 px-4 py-2 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isHintLoading ? (
            <span className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></span>
          ) : (
            <LightbulbIcon className="w-6 h-6 group-hover:text-yellow-300 transition-colors" />
          )}
          <span>Petunjuk (-5)</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
