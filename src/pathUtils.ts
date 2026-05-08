import { getSubject } from "./data/subjects";
import type { PathStepRef, TrackId } from "./data/pathTracks";
import { getTrackMeta } from "./data/pathTracks";
import type { StoredProgress, Topic } from "./types";
import { topicKey } from "./progressUtils";

export function resolvePathStep(
  step: PathStepRef,
): { subject: NonNullable<ReturnType<typeof getSubject>>; topic: Topic } | undefined {
  const subject = getSubject(step.subjectId);
  if (!subject) return undefined;
  const topic = subject.topics.find((t) => t.id === step.topicId);
  if (!topic) return undefined;
  return { subject, topic };
}

export function trackProgress(
  trackId: TrackId,
  topicProgress: StoredProgress["topicProgress"],
): { done: number; total: number; pct: number } {
  const meta = getTrackMeta(trackId);
  if (!meta) return { done: 0, total: 0, pct: 0 };
  const total = meta.steps.length;
  let done = 0;
  for (const s of meta.steps) {
    const tp = topicProgress[topicKey(s.subjectId, s.topicId)];
    if (tp?.mastered) done++;
  }
  const pct = total ? Math.round((done / total) * 100) : 0;
  return { done, total, pct };
}

/** First step index not yet mastered (0-based); null if all done */
export function nextStepIndex(trackId: TrackId, topicProgress: StoredProgress["topicProgress"]): number | null {
  const meta = getTrackMeta(trackId);
  if (!meta) return null;
  for (let i = 0; i < meta.steps.length; i++) {
    const s = meta.steps[i];
    const tp = topicProgress[topicKey(s.subjectId, s.topicId)];
    if (!tp?.mastered) return i;
  }
  return null;
}
