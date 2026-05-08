import type { Question, Subject } from "../types";
import { algebra } from "./algebra";
import { biology } from "./biology";
import { english } from "./english";
import { honorsBiology } from "./honorsBiology";
import { honorsGeometry } from "./honorsGeometry";
import { modernWorldHistory } from "./modernWorldHistory";
import { worldHistory } from "./worldHistory";

export const subjects: Subject[] = [
  english,
  algebra,
  biology,
  worldHistory,
  honorsGeometry,
  honorsBiology,
  modernWorldHistory,
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
