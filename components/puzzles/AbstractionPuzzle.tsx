
import React, { useState } from 'react';
import { Puzzle } from '../../types';

interface AbstractionPuzzleProps {
  puzzle: Puzzle;
  onComplete: () => void;
}

interface Node {
  id: string;
  type: 'key' | 'junk';
  label: string;
}

const AbstractionPuzzle: React.FC<AbstractionPuzzleProps> = ({ puzzle, onComplete }) => {
  const nodes: Node[] = puzzle.data.nodes;
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const keyNodeIds = nodes.filter(n => n.type === 'key').map(n => n.id);

  const handleNodeClick = (node: Node) => {
    if (node.type === 'junk') {
      // Maybe add a visual feedback for wrong clicks
      return;
    }

    setSelectedNodes(prev => {
      const newSelected = prev.includes(node.id) ? prev.filter(id => id !== node.id) : [...prev, node.id];
      
      const allKeyNodesSelected = keyNodeIds.every(id => newSelected.includes(id));
      if (allKeyNodesSelected && newSelected.length === keyNodeIds.length) {
        setTimeout(onComplete, 500);
      }
      
      return newSelected;
    });
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white w-full">
      <h3 className="text-2xl text-cyan-300 font-mono mb-6">Pilih hanya simpul data yang penting.</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {nodes.map(node => (
          <button
            key={node.id}
            onClick={() => handleNodeClick(node)}
            className={`p-6 rounded-lg border-2 text-center transition-all duration-300 transform hover:scale-105
              ${node.type === 'junk' ? 'bg-red-900/50 border-red-500 text-red-300 cursor-not-allowed opacity-70' : 'bg-slate-700 border-slate-500 cursor-pointer hover:border-cyan-400'}
              ${selectedNodes.includes(node.id) ? 'bg-green-500/50 border-green-400 ring-2 ring-green-300' : ''}
            `}
          >
            <div className="text-lg font-bold">{node.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AbstractionPuzzle;
