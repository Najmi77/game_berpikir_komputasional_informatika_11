
import React from 'react';

interface OutroScreenProps {
  score: number;
  onPlayAgain: () => void;
}

const OutroScreen: React.FC<OutroScreenProps> = ({ score, onPlayAgain }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center p-4 text-white font-mono bg-slate-900">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-green-400">MISI SELESAI!</h1>
        <p className="text-2xl text-slate-300 mt-6 mb-4">
          Anda telah berhasil membersihkan BUGTRON dan mengembalikan keseimbangan ke Neo-Cyber Realm. Penguasaan Anda dalam berpikir komputasional telah menyelamatkan hari!
        </p>
        <div className="my-10 p-8 bg-black/30 border-2 border-yellow-400 rounded-lg inline-block">
          <h2 className="text-3xl text-yellow-300 mb-2">Skor Akhir</h2>
          <p className="text-6xl font-bold text-white">{score}</p>
        </div>
        <div>
          <button
            onClick={onPlayAgain}
            className="px-12 py-4 bg-cyan-500 text-slate-900 font-bold text-2xl rounded-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-400 hover:scale-105 transform transition-all duration-300"
          >
            Main Lagi
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutroScreen;
