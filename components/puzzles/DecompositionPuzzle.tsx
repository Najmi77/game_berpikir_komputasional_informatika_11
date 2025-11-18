
import React, { useState, useCallback } from 'react';
import { Puzzle } from '../../types';

interface DecompositionPuzzleProps {
  puzzle: Puzzle;
  onComplete: () => void;
}

const DecompositionPuzzle: React.FC<DecompositionPuzzleProps> = ({ puzzle, onComplete }) => {
  const { parts, slots } = puzzle.data;
  const [placedParts, setPlacedParts] = useState<{ [key: string]: string | null }>({});

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, partId: string) => {
    e.dataTransfer.setData('partId', partId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, slotId: string, accepts: string) => {
    e.preventDefault();
    const partId = e.dataTransfer.getData('partId');
    if (partId === accepts) {
      setPlacedParts(prev => {
        const newPlaced = { ...prev, [slotId]: partId };
        if (Object.keys(newPlaced).length === slots.length) {
          onComplete();
        }
        return newPlaced;
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const isPartPlaced = useCallback((partId: string) => {
    return Object.values(placedParts).includes(partId);
  }, [placedParts]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 p-8 text-white w-full">
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        <h3 className="text-2xl text-cyan-300 font-mono mb-2 text-center">Komponen</h3>
        {parts.map((part: any) => (
          !isPartPlaced(part.id) && (
            <div
              key={part.id}
              draggable
              onDragStart={(e) => handleDragStart(e, part.id)}
              className="p-4 bg-slate-700 border-2 border-slate-500 rounded-lg cursor-grab active:cursor-grabbing text-center hover:border-cyan-400 hover:bg-slate-600 transition-all"
            >
              {part.name}
            </div>
          )
        ))}
      </div>
      <div className="w-px bg-cyan-500 h-64 hidden lg:block"></div>
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        <h3 className="text-2xl text-cyan-300 font-mono mb-2 text-center">Inti Mesin</h3>
        {slots.map((slot: any) => (
          <div
            key={slot.id}
            onDrop={(e) => handleDrop(e, slot.id, slot.accepts)}
            onDragOver={handleDragOver}
            className={`p-4 h-20 flex items-center justify-center border-2 border-dashed rounded-lg transition-all ${
              placedParts[slot.id] ? 'border-green-500 bg-green-500/20' : 'border-cyan-500 hover:bg-cyan-500/10'
            }`}
          >
            {placedParts[slot.id] ? (
              <span className="text-green-300 font-bold">{parts.find((p: any) => p.id === placedParts[slot.id])?.name}</span>
            ) : (
              <span className="text-cyan-400">{slot.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecompositionPuzzle;
