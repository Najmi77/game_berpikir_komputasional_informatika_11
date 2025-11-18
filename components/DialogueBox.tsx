
import React, { useState, useEffect } from 'react';

interface DialogueBoxProps {
  npc: string;
  text: string;
  onFinished?: () => void;
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ npc, text, onFinished }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        if (onFinished) {
          onFinished();
        }
      }
    }, 25);
    return () => clearInterval(intervalId);
  }, [text, onFinished]);

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm border-2 border-cyan-400 p-4 rounded-lg shadow-lg shadow-cyan-500/30 text-white font-mono z-20">
      <h3 className="text-xl font-bold text-cyan-300 mb-2">{npc}:</h3>
      <p className="text-lg text-cyan-100">{displayedText}<span className="animate-ping">|</span></p>
    </div>
  );
};

export default DialogueBox;
