
import React, { useState, useCallback } from 'react';
import { GamePhase, Level } from './types';
import { GAME_LEVELS } from './constants';
import { getHint } from './services/geminiService';

import IntroScreen from './components/IntroScreen';
import LevelIntro from './components/LevelIntro';
import GameScreen from './components/GameScreen';
import QuizScreen from './components/QuizScreen';
import OutroScreen from './components/OutroScreen';

const App: React.FC = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.INTRO);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState<string | null>(null);
  const [isHintLoading, setIsHintLoading] = useState(false);

  const currentLevel = GAME_LEVELS[currentLevelIndex];

  const resetGame = () => {
    setGamePhase(GamePhase.INTRO);
    setCurrentLevelIndex(0);
    setScore(0);
    setHint(null);
  };

  const handleStartGame = () => setGamePhase(GamePhase.LEVEL_INTRO);
  const handleStartLevel = () => setGamePhase(GamePhase.LEVEL_PLAY);
  
  const handleCompletePuzzle = () => {
      setScore(prev => prev + 30);
      setGamePhase(GamePhase.QUIZ);
  };

  const handleCompleteQuiz = (quizScore: number) => {
    setScore(prev => prev + quizScore);
    if (currentLevelIndex < GAME_LEVELS.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
      setGamePhase(GamePhase.LEVEL_INTRO);
      setHint(null);
    } else {
      setGamePhase(GamePhase.OUTRO);
    }
  };

  const handlePlayAgain = () => {
    resetGame();
  };

  const handleUseHint = useCallback(async () => {
    if (isHintLoading || score < 5) return;
    
    setIsHintLoading(true);
    setScore(prev => prev - 5);
    try {
        const hintText = await getHint(currentLevel);
        setHint(hintText);
    } catch (error) {
        setHint("Gagal mendapatkan petunjuk. Periksa koneksi Anda.");
    } finally {
        setIsHintLoading(false);
    }
  }, [currentLevel, isHintLoading, score]);


  const renderGamePhase = () => {
    switch (gamePhase) {
      case GamePhase.INTRO:
        return <IntroScreen onStart={handleStartGame} />;
      case GamePhase.LEVEL_INTRO:
        return <LevelIntro level={currentLevel} onStartLevel={handleStartLevel} />;
      case GamePhase.LEVEL_PLAY:
        return <GameScreen 
                  level={currentLevel} 
                  score={score} 
                  onPuzzleComplete={handleCompletePuzzle} 
                  onHint={handleUseHint}
                  hint={hint}
                  isHintLoading={isHintLoading}
                />;
      case GamePhase.QUIZ:
        return <QuizScreen questions={currentLevel.quiz} onComplete={handleCompleteQuiz} />;
      case GamePhase.OUTRO:
        return <OutroScreen score={score} onPlayAgain={handlePlayAgain} />;
      default:
        return <div>Unknown game phase!</div>;
    }
  };

  return <div className="font-sans">{renderGamePhase()}</div>;
};

export default App;
