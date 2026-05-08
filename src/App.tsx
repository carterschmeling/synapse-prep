import { useCallback, useMemo, useState } from "react";
import { subjects, allQuestionsFlat } from "./data/subjects";
import { addXp, bumpFinalsCount, loadProgress, saveProgress } from "./storage";
import type { Theme } from "./theme";
import { toggleTheme } from "./theme";
import type { Question, StoredProgress, Subject, Topic } from "./types";
import "./index.css";

function initialThemeFromDom(): Theme {
  const t = document.documentElement.dataset.theme;
  return t === "light" || t === "dark" ? t : "dark";
}

type View =
  | { name: "home" }
  | { name: "subject"; subject: Subject }
  | {
      name: "quiz";
      subject: Subject;
      topic: Topic;
      order: Question[];
      index: number;
      correctCount: number;
      selectedIndex: number | null;
    }
  | {
      name: "finals";
      order: { subject: Subject; topicId: string; q: Question }[];
      index: number;
      correctCount: number;
      selectedIndex: number | null;
    };

function topicKey(subjectId: string, topicId: string): string {
  return `${subjectId}:${topicId}`;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const FINALS_COUNT = 10;

export default function App() {
  const [progress, setProgress] = useState<StoredProgress>(() => loadProgress());
  const [view, setView] = useState<View>({ name: "home" });
  const [theme, setTheme] = useState<Theme>(initialThemeFromDom);

  const persist = useCallback((next: StoredProgress) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const masteredTopicCount = useMemo(() => {
    let n = 0;
    for (const s of subjects) {
      for (const t of s.topics) {
        const tp = progress.topicProgress[topicKey(s.id, t.id)];
        if (tp?.mastered) n++;
      }
    }
    return n;
  }, [progress.topicProgress]);

  const totalTopics = useMemo(
    () => subjects.reduce((acc, s) => acc + s.topics.length, 0),
    [],
  );

  const startTopicQuiz = (subject: Subject, topic: Topic) => {
    setView({
      name: "quiz",
      subject,
      topic,
      order: shuffle(topic.questions),
      index: 0,
      correctCount: 0,
      selectedIndex: null,
    });
  };

  const finishTopicQuiz = (
    subject: Subject,
    topic: Topic,
    correct: number,
    total: number,
  ) => {
    const key = topicKey(subject.id, topic.id);
    const prev = progress.topicProgress[key] ?? {
      attempts: 0,
      correct: 0,
      lastScorePercent: 0,
      mastered: false,
    };
    const pct = Math.round((correct / total) * 100);
    const mastered = pct >= 80;
    const topicProgress = {
      ...prev,
      attempts: prev.attempts + 1,
      correct: prev.correct + correct,
      lastScorePercent: pct,
      mastered: prev.mastered || mastered,
    };
    let next: StoredProgress = {
      ...progress,
      topicProgress: { ...progress.topicProgress, [key]: topicProgress },
    };
    const xpGain =
      correct * 12 + (pct === 100 ? 40 : 0) + (mastered && !prev.mastered ? 25 : 0);
    next = addXp(next, xpGain);
    persist(next);
    setView({ name: "subject", subject });
  };

  const startFinals = () => {
    const pool = allQuestionsFlat();
    const order = shuffle(pool).slice(0, Math.min(FINALS_COUNT, pool.length));
    setView({
      name: "finals",
      order,
      index: 0,
      correctCount: 0,
      selectedIndex: null,
    });
  };

  const finishFinals = (correct: number, total: number) => {
    let next = bumpFinalsCount(progress);
    const pct = total ? Math.round((correct / total) * 100) : 0;
    const xpGain = correct * 15 + (pct >= 80 ? 50 : 0);
    next = addXp(next, xpGain);
    persist(next);
    setView({ name: "home" });
  };

  const exitQuiz = () => {
    if (window.confirm("Leave quiz? This run will not be saved.")) {
      setView(
        view.name === "quiz"
          ? { name: "subject", subject: view.subject }
          : { name: "home" },
      );
    }
  };

  const cycleTheme = () => setTheme((t) => toggleTheme(t));

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-top">
          <div className="brand">
            <p className="brand-tagline">Olathe Northwest · study sidekick</p>
            <h1 className="brand-title">
              <span className="accent-word">Synapse</span> Prep
            </h1>
            <p>
              Quizzes for core and honors classes—English (Animal Farm by chapter), math through Honors Geometry, science
              through Honors Biology, history plus Modern World History. Your streak, XP, and scores stay in this browser.
              Crack a topic quiz or roll the finals sprint when you want mixed review.
            </p>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={cycleTheme}
              aria-pressed={theme === "dark"}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              <span className="theme-icon" aria-hidden>
                {theme === "dark" ? "☀" : "☾"}
              </span>
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
        <div className="stats-bar">
          <div className="stat-pill">
            <strong>{progress.xp}</strong> XP
          </div>
          <div className="stat-pill">
            Streak: <strong>{progress.streakDays}</strong> day{progress.streakDays === 1 ? "" : "s"}
          </div>
          <div className="stat-pill">
            Topics mastered: <strong>{masteredTopicCount}</strong> / {totalTopics}
          </div>
          <div className="stat-pill">
            Finals sprints: <strong>{progress.finalsSessionsCompleted}</strong>
          </div>
        </div>
      </header>

      {view.name !== "quiz" && view.name !== "finals" && (
        <nav className="nav-tabs" aria-label="Main">
          <button
            type="button"
            className={view.name === "home" ? "active" : ""}
            onClick={() => setView({ name: "home" })}
          >
            All classes
          </button>
          {view.name === "subject" && (
            <button type="button" className="active" disabled>
              {view.subject.shortName}
            </button>
          )}
        </nav>
      )}

      {view.name === "home" && (
        <>
          <section className="finals-intro">
            <h2>Finals sprint</h2>
            <p>
              {FINALS_COUNT} random questions pulled from every subject—quick pressure-test before a unit exam or finals
              week.
            </p>
            <button type="button" className="btn-primary" onClick={startFinals}>
              Start sprint
            </button>
          </section>
          <div className="card-grid">
            {subjects.map((s) => (
              <button
                key={s.id}
                type="button"
                className="subject-card"
                onClick={() => setView({ name: "subject", subject: s })}
              >
                <h2>{s.shortName}</h2>
                <p className="tag">{s.tagline}</p>
                <span className="badge">{s.topics.length} topics</span>
              </button>
            ))}
          </div>
        </>
      )}

      {view.name === "subject" && (
        <>
          <button type="button" className="back-btn" onClick={() => setView({ name: "home" })}>
            Back to classes
          </button>
          <h2 className="page-title">{view.subject.name}</h2>
          <div className="topic-list">
            {view.subject.topics.map((t) => {
              const tp = progress.topicProgress[topicKey(view.subject.id, t.id)];
              const pct = tp?.lastScorePercent;
              return (
                <div key={t.id} className="topic-row">
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.blurb}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {tp?.mastered && <span className="badge ok">Mastered</span>}
                    <div className="progress-mini">
                      {pct != null ? (
                        <>
                          Last score:{" "}
                          <span className={pct >= 80 ? "good" : ""}>{pct}%</span>
                          {" · "}
                          {t.questions.length} questions
                        </>
                      ) : (
                        <>{t.questions.length} questions</>
                      )}
                    </div>
                    <div style={{ marginTop: "0.5rem" }}>
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => startTopicQuiz(view.subject, t)}
                      >
                        Practice
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {view.name === "quiz" && (
        <>
          <button type="button" className="back-btn" onClick={exitQuiz}>
            Leave quiz
          </button>
          <QuizBody
            label={`${view.subject.shortName} — ${view.topic.title}`}
            counter={`Question ${view.index + 1} of ${view.order.length}`}
            q={view.order[view.index]}
            selectedIndex={view.selectedIndex}
            onSelect={(i) => {
              const q = view.order[view.index];
              const ok = i === q.correctIndex;
              setView({
                ...view,
                selectedIndex: i,
                correctCount: view.correctCount + (ok ? 1 : 0),
              });
            }}
            onContinue={() => {
              const last = view.index + 1 >= view.order.length;
              if (last) {
                finishTopicQuiz(view.subject, view.topic, view.correctCount, view.order.length);
              } else {
                setView({
                  ...view,
                  index: view.index + 1,
                  selectedIndex: null,
                });
              }
            }}
            continueLabel={
              view.index + 1 >= view.order.length ? "Save results" : "Next question"
            }
          />
        </>
      )}

      {view.name === "finals" && (
        <>
          <button type="button" className="back-btn" onClick={exitQuiz}>
            Leave sprint
          </button>
          <QuizBody
            label={`Finals sprint — ${view.order[view.index].subject.shortName}`}
            counter={`Question ${view.index + 1} of ${view.order.length}`}
            q={view.order[view.index].q}
            selectedIndex={view.selectedIndex}
            onSelect={(i) => {
              const q = view.order[view.index].q;
              const ok = i === q.correctIndex;
              setView({
                ...view,
                selectedIndex: i,
                correctCount: view.correctCount + (ok ? 1 : 0),
              });
            }}
            onContinue={() => {
              const last = view.index + 1 >= view.order.length;
              if (last) {
                finishFinals(view.correctCount, view.order.length);
              } else {
                setView({
                  ...view,
                  index: view.index + 1,
                  selectedIndex: null,
                });
              }
            }}
            continueLabel={
              view.index + 1 >= view.order.length ? "Finish sprint" : "Next question"
            }
          />
        </>
      )}
    </div>
  );
}

function QuizBody(props: {
  label: string;
  counter: string;
  q: Question;
  selectedIndex: number | null;
  onSelect: (i: number) => void;
  onContinue: () => void;
  continueLabel: string;
}) {
  const { q, selectedIndex } = props;
  const answered = selectedIndex !== null;

  return (
    <div className="quiz-panel">
      <div className="quiz-meta">
        {props.label} · {props.counter}
      </div>
      <p className="quiz-prompt">{q.prompt}</p>
      <div className="choices">
        {q.choices.map((c, i) => {
          let cls = "choice";
          if (answered) {
            if (i === q.correctIndex) cls += " correct";
            else if (i === selectedIndex && i !== q.correctIndex) cls += " wrong";
          }
          return (
            <button
              key={i}
              type="button"
              className={cls}
              disabled={answered}
              onClick={() => props.onSelect(i)}
            >
              {c}
            </button>
          );
        })}
      </div>
      {answered && (
        <>
          <div className="explain-box">
            <strong>Why:</strong> {q.explain}
          </div>
          <div className="quiz-footer">
            <button type="button" className="btn-primary" onClick={props.onContinue}>
              {props.continueLabel}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
