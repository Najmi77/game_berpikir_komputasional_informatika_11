
import React, { useState } from 'react';
import { Puzzle } from '../../types';

interface Step {
  id: string;
  text: string;
}

interface AlgorithmPuzzleProps {
  puzzle: Puzzle;
  onComplete: () => void;
}

const AlgorithmPuzzle: React.FC<AlgorithmPuzzleProps> = ({ puzzle, onComplete }) => {
  const { steps, correctOrder } = puzzle.data;
  const [unarrangedSteps, setUnarrangedSteps] = useState<Step[]>(steps);
  const [arrangedSteps, setArrangedSteps] = useState<Step[]>([]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, step: Step) => {
    e.dataTransfer.setData('step', JSON.stringify(step));
  };

  const handleDropOnArrange = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const step: Step = JSON.parse(e.dataTransfer.getData('step'));
    
    setArrangedSteps(prev => {
      if (prev.find(s => s.id === step.id)) return prev;
      const newArranged = [...prev, step];
      
      if (newArranged.length === correctOrder.length) {
        const isCorrect = newArranged.every((s, i) => s.id === correctOrder[i]);
        if (isCorrect) {
          setTimeout(onComplete, 500);
        }
      }
      return newArranged;
    });

    setUnarrangedSteps(prev => prev.filter(s => s.id !== step.id));
  };
  
  const handleDropOnUnarrange = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const step: Step = JSON.parse(e.dataTransfer.getData('step'));

    setUnarrangedSteps(prev => {
        if (prev.find(s => s.id === step.id)) return prev;
        return [...prev, step];
    });

    setArrangedSteps(prev => prev.filter(s => s.id !== step.id));
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const getBorderColor = () => {
    if (arrangedSteps.length === 0) return 'border-cyan-500';
    if (arrangedSteps.length < correctOrder.length) return 'border-yellow-500';
    const isCorrect = arrangedSteps.every((s, i) => s.id === correctOrder[i]);
    return isCorrect ? 'border-green-500' : 'border-red-500';
  }

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 p-8 text-white w-full">
      <div 
        className="w-full lg:w-1/3 p-4 bg-slate-800 border-2 border-slate-600 rounded-lg min-h-[200px]"
        onDrop={handleDropOnUnarrange}
        onDragOver={handleDragOver}
      >
        <h3 className="text-xl text-cyan-300 font-mono mb-4 text-center">Perintah Tersedia</h3>
        <div className="flex flex-col gap-2">
          {unarrangedSteps.map((step) => (
            <div
              key={step.id}
              draggable
              onDragStart={(e) => handleDragStart(e, step)}
              className="p-3 bg-slate-700 border border-slate-500 rounded cursor-grab active:cursor-grabbing hover:bg-slate-600"
            >
              {step.text}
            </div>
          ))}
        </div>
      </div>
      <div
        onDrop={handleDropOnArrange}
        onDragOver={handleDragOver}
        className={`w-full lg:w-1/2 p-4 bg-slate-900/50 border-4 border-dashed rounded-lg min-h-[400px] transition-colors ${getBorderColor()}`}
      >
        <h3 className="text-xl text-cyan-300 font-mono mb-4 text-center">Urutan Algoritma</h3>
        <div className="flex flex-col gap-2">
          {arrangedSteps.map((step, index) => (
            <div 
              key={step.id}
              draggable
              onDragStart={(e) => handleDragStart(e, step)}
              className="p-3 bg-slate-700 border border-slate-500 rounded flex items-center gap-4 cursor-grab active:cursor-grabbing"
            >
                <span className="text-cyan-400 font-bold">{index + 1}.</span>
                <span>{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmPuzzle;
