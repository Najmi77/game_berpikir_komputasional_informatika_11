
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizScreenProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option: string) => {
    if (showResult) return;
    setSelectedAnswer(option);
    setShowResult(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      onComplete(score);
    }
  };

  const getButtonClass = (option: string) => {
    if (!showResult) {
      return 'bg-slate-700 hover:bg-cyan-900/50 border-slate-500 hover:border-cyan-400';
    }
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-500/50 border-green-400';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500/50 border-red-400';
    }
    return 'bg-slate-800 border-slate-600 opacity-60';
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 bg-slate-900/90 text-white font-mono">
      <div className="w-full max-w-2xl bg-slate-800 border-2 border-cyan-500 p-8 rounded-lg shadow-2xl shadow-cyan-500/20">
        <h2 className="text-2xl text-cyan-300 mb-6">{currentQuestion.question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={showResult}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
        {showResult && (
          <div className="text-center">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-yellow-500 text-slate-900 font-bold text-xl rounded-lg shadow-lg shadow-yellow-500/50 hover:bg-yellow-400"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Pertanyaan Berikutnya' : 'Selesaikan Level'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
