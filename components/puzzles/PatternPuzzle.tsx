
import React, { useState, useEffect } from 'react';
import { Puzzle } from '../../types';
import { CheckCircleIcon, XCircleIcon } from '../icons';

interface PatternPuzzleProps {
  puzzle: Puzzle;
  onComplete: () => void;
}

const PatternPuzzle: React.FC<PatternPuzzleProps> = ({ puzzle, onComplete }) => {
  const { sequence, gridSize } = puzzle.data;
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [isDisplaying, setIsDisplaying] = useState(true);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  useEffect(() => {
    setIsDisplaying(true);
    let i = 0;
    const interval = setInterval(() => {
      setActiveTile(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveTile(null);
          setIsDisplaying(false);
        }, 500);
      }
    }, 700);
    return () => clearInterval(interval);
  }, [sequence]);
  
  const handleTileClick = (index: number) => {
    if (isDisplaying || status !== 'idle') return;
    const newSequence = [...playerSequence, index];
    setPlayerSequence(newSequence);

    if (sequence[newSequence.length - 1] !== index) {
      setStatus('wrong');
      setTimeout(() => {
        setPlayerSequence([]);
        setStatus('idle');
      }, 1000);
      return;
    }

    if (newSequence.length === sequence.length) {
      setStatus('correct');
      setTimeout(onComplete, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-white w-full">
      <h3 className="text-2xl text-cyan-300 font-mono mb-4">
        {isDisplaying ? "Hafalkan Polanya..." : "Giliranmu: Tiru Polanya"}
      </h3>
      <div className={`grid grid-cols-2 gap-4 w-full max-w-sm aspect-square mb-4`}>
        {Array.from({ length: gridSize }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleTileClick(index)}
            className={`border-2 rounded-lg transition-all duration-200 flex items-center justify-center
              ${activeTile === index ? 'bg-cyan-400 border-cyan-200 scale-105 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-500'}
              ${!isDisplaying && 'cursor-pointer hover:border-cyan-400'}`}
          >
            {playerSequence.includes(index) && <div className="w-8 h-8 rounded-full bg-white/50"></div>}
          </div>
        ))}
      </div>
      {status === 'correct' && <CheckCircleIcon className="w-16 h-16 text-green-400 mt-4" />}
      {status === 'wrong' && <XCircleIcon className="w-16 h-16 text-red-400 mt-4" />}
    </div>
  );
};

export default PatternPuzzle;
