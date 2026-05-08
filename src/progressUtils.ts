import type { StoredProgress, Subject } from "./types";

export function topicKey(subjectId: string, topicId: string): string {
  return `${subjectId}:${topicId}`;
}

export function subjectMasteryStats(
  s: Subject,
  topicProgress: StoredProgress["topicProgress"],
): { mastered: number; total: number; pct: number; attemptedTopics: number } {
  let mastered = 0;
  let attemptedTopics = 0;
  const total = s.topics.length;
  for (const t of s.topics) {
    const tp = topicProgress[topicKey(s.id, t.id)];
    if (tp?.mastered) mastered++;
    if (tp && tp.attempts > 0) attemptedTopics++;
  }
  const pct = total ? Math.round((mastered / total) * 100) : 0;
  return { mastered, total, pct, attemptedTopics };
}
