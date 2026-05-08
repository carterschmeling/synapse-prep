import type { Question, Subject } from "../types";
import { algebra } from "./algebra";
import { biology } from "./biology";
import { calculus } from "./calculus";
import { chemistry } from "./chemistry";
import { economics } from "./economics";
import { english } from "./english";
import { environmentalScience } from "./environmentalScience";
import { honorsBiology } from "./honorsBiology";
import { honorsGeometry } from "./honorsGeometry";
import { modernWorldHistory } from "./modernWorldHistory";
import { physics } from "./physics";
import { precalculus } from "./precalculus";
import { psychology } from "./psychology";
import { spanish1 } from "./spanish1";
import { usHistory } from "./usHistory";
import { worldHistory } from "./worldHistory";

export const subjects: Subject[] = [
  english,
  algebra,
  precalculus,
  calculus,
  honorsGeometry,
  biology,
  honorsBiology,
  chemistry,
  physics,
  environmentalScience,
  spanish1,
  worldHistory,
  modernWorldHistory,
  usHistory,
  psychology,
  economics,
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export function allQuestionsFlat(): { subject: Subject; topicId: string; q: Question }[] {
  const out: { subject: Subject; topicId: string; q: Question }[] = [];
  for (const subject of subjects) {
    for (const topic of subject.topics) {
      for (const q of topic.questions) {
        out.push({ subject, topicId: topic.id, q });
      }
    }
  }
  return out;
}
