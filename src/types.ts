export type SubjectId =
  | "english"
  | "algebra"
  | "biology"
  | "world-history"
  | "honors-geometry"
  | "honors-biology"
  | "modern-world-history";

export interface Question {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explain: string;
}

export interface Topic {
  id: string;
  title: string;
  blurb: string;
  questions: Question[];
}

export interface Subject {
  id: SubjectId;
  name: string;
  shortName: string;
  tagline: string;
  topics: Topic[];
}

export interface TopicProgress {
  attempts: number;
  correct: number;
  lastScorePercent: number;
  mastered: boolean;
}

export interface StoredProgress {
  version: 1;
  xp: number;
  streakDays: number;
  lastStudyDate: string | null;
  topicProgress: Partial<Record<string, TopicProgress>>;
  finalsSessionsCompleted: number;
}
