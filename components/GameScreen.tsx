
import React from 'react';
import { Level } from '../types';
import Header from './Header';
import DialogueBox from './DialogueBox';
import DecompositionPuzzle from './puzzles/DecompositionPuzzle';
import PatternPuzzle from './puzzles/PatternPuzzle';
import AbstractionPuzzle from './puzzles/AbstractionPuzzle';
import AlgorithmPuzzle from './puzzles/AlgorithmPuzzle';

interface GameScreenProps {
  level: Level;
  score: number;
  onPuzzleComplete: () => void;
  onHint: () => void;
  hint: string | null;
  isHintLoading: boolean;
}

const GameScreen: React.FC<GameScreenProps> = ({ level, score, onPuzzleComplete, onHint, hint, isHintLoading }) => {
  const renderPuzzle = () => {
    switch (level.puzzle.type) {
      case 'decomposition':
        return <DecompositionPuzzle puzzle={level.puzzle} onComplete={onPuzzleComplete} />;
      case 'pattern':
        return <PatternPuzzle puzzle={level.puzzle} onComplete={onPuzzleComplete} />;
      case 'abstraction':
        return <AbstractionPuzzle puzzle={level.puzzle} onComplete={onPuzzleComplete} />;
      case 'algorithm':
        return <AlgorithmPuzzle puzzle={level.puzzle} onComplete={onPuzzleComplete} />;
      default:
        return <div>Teka-teki tidak ditemukan!</div>;
    }
  };

  return (
    <div className="w-full h-screen bg-slate-800 bg-grid-cyan-500/10 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Header levelTitle={level.title} score={score} onHint={onHint} isHintLoading={isHintLoading} />
        <main className="w-full h-full pt-20 pb-40 flex items-center justify-center z-10">
            {renderPuzzle()}
        </main>
        <DialogueBox npc={hint ? "LUNO (PETUNJUK)" : level.npc} text={hint || level.dialogue} />
    </div>
  );
};

export default GameScreen;
