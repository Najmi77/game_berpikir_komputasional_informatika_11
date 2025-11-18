
export enum GamePhase {
  INTRO,
  LEVEL_INTRO,
  LEVEL_PLAY,
  QUIZ,
  OUTRO
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Puzzle {
  type: 'decomposition' | 'pattern' | 'abstraction' | 'algorithm';
  description: string;
  data: any;
}

export interface Level {
  id: number;
  title: string;
  concept: string;
  story: string;
  npc: string;
  dialogue: string;
  puzzle: Puzzle;
  quiz: QuizQuestion[];
}
