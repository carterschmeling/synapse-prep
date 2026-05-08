import type { StoredProgress } from "./types";

const KEY = "onw-core-tutor-v1";

const empty = (): StoredProgress => ({
  version: 1,
  xp: 0,
  streakDays: 0,
  lastStudyDate: null,
  topicProgress: {},
  finalsSessionsCompleted: 0,
});

function todayISO(): string {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function updateStreak(prev: StoredProgress): StoredProgress {
  const today = todayISO();
  if (prev.lastStudyDate === today) return prev;
  if (!prev.lastStudyDate) {
    return { ...prev, streakDays: 1, lastStudyDate: today };
  }
  const last = new Date(prev.lastStudyDate + "T12:00:00");
  const todayD = new Date(today + "T12:00:00");
  const diffMs = todayD.getTime() - last.getTime();
  const diffDays = Math.round(diffMs / (24 * 60 * 60 * 1000));
  if (diffDays === 1) {
    return { ...prev, streakDays: prev.streakDays + 1, lastStudyDate: today };
  }
  if (diffDays > 1) {
    return { ...prev, streakDays: 1, lastStudyDate: today };
  }
  return prev;
}

export function loadProgress(): StoredProgress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as StoredProgress;
    if (parsed.version !== 1) return empty();
    return {
      ...empty(),
      ...parsed,
      topicProgress: parsed.topicProgress ?? {},
    };
  } catch {
    return empty();
  }
}

export function saveProgress(p: StoredProgress): void {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function recordStudySession(base: StoredProgress): StoredProgress {
  return updateStreak({ ...base });
}

export function addXp(base: StoredProgress, amount: number): StoredProgress {
  const withStudy = recordStudySession(base);
  return { ...withStudy, xp: withStudy.xp + amount };
}

export function bumpFinalsCount(base: StoredProgress): StoredProgress {
  const withStudy = recordStudySession(base);
  return {
    ...withStudy,
    finalsSessionsCompleted: withStudy.finalsSessionsCompleted + 1,
  };
}
