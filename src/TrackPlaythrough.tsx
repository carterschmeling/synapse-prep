import { PATH_TRACKS, getTrackMeta, type PathTrackMeta, type TrackId } from "./data/pathTracks";
import { nextStepIndex, resolvePathStep, trackProgress } from "./pathUtils";
import { topicKey } from "./progressUtils";
import type { StoredProgress, Subject, Topic } from "./types";

type Props = {
  trackId: TrackId;
  progress: StoredProgress;
  onBack: () => void;
  onStartTopic: (subject: Subject, topic: Topic) => void;
};

export function TrackPlaythrough({ trackId, progress, onBack, onStartTopic }: Props) {
  const meta = getTrackMeta(trackId);
  const nextIdx = nextStepIndex(trackId, progress.topicProgress);
  const { done, total, pct } = trackProgress(trackId, progress.topicProgress);

  if (!meta) return null;

  return (
    <div className="track-playthrough">
      <button type="button" className="back-btn" onClick={onBack}>
        Back to paths
      </button>
      <div className="track-playthrough-head">
        <h2 className="page-title">{meta.label}</h2>
        <p className="track-blurb">{meta.blurb}</p>
        <div className="track-progress-summary">
          <div className="track-progress-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <div className="track-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="track-progress-label">
            {done}/{total} lessons cleared
          </span>
        </div>
      </div>

      <ol className="path-spine" aria-label={`${meta.label} lesson path`}>
        {meta.steps.map((step, i) => {
          const resolved = resolvePathStep(step);
          if (!resolved) return null;
          const key = topicKey(step.subjectId, step.topicId);
          const mastered = progress.topicProgress[key]?.mastered;
          const isNext = nextIdx === i;
          const shortTitle =
            resolved.topic.title.replace(/^Animal Farm — /, "AF ").replace(/^Honors Biology — /, "HB ");

          return (
            <li key={key} className={`path-step ${i % 2 === 0 ? "path-step--left" : "path-step--right"}`}>
              <div className="path-step-inner">
                <button
                  type="button"
                  className={`path-bubble ${mastered ? "path-bubble--done" : ""} ${isNext ? "path-bubble--next" : ""}`}
                  onClick={() => onStartTopic(resolved.subject, resolved.topic)}
                  aria-label={`Lesson ${i + 1}: ${resolved.topic.title}${mastered ? ", mastered" : ""}`}
                >
                  {mastered ? "✓" : i + 1}
                </button>
                <div className="path-step-label">
                  <strong>{shortTitle}</strong>
                  <span>{resolved.subject.shortName}</span>
                </div>
              </div>
              {i < meta.steps.length - 1 && <div className="path-connector" aria-hidden />}
            </li>
          );
        })}
      </ol>

      <p className="path-hint">
        {nextIdx != null
          ? `Suggested next: lesson ${nextIdx + 1}. Tap any lesson to practice—it never locks.`
          : "Path complete. Replay any bubble or try another track."}
      </p>
    </div>
  );
}

/** Home layout: four math tracks, then ELA / Science / History split the same way (multiple boxes each). */
const PATH_SECTIONS: { title: string; trackIds: TrackId[] }[] = [
  {
    title: "Math",
    trackIds: ["algebra-1", "honors-geometry", "precalculus", "calculus"],
  },
  {
    title: "ELA",
    trackIds: ["ela-literacy", "ela-animal-farm-i", "ela-animal-farm-ii"],
  },
  {
    title: "Science",
    trackIds: ["science-biology", "science-honors-biology", "science-chemistry", "science-physics"],
  },
  {
    title: "History",
    trackIds: ["history-world", "history-industrial-ww1", "history-midcentury", "history-late"],
  },
];

function shortTopicTitle(topic: Topic): string {
  return topic.title.replace(/^Animal Farm — /, "AF ").replace(/^Honors Biology — /, "HB ");
}

function TopicTrackSection(props: {
  track: PathTrackMeta;
  progress: StoredProgress;
  onPracticeTopic: (subject: Subject, topic: Topic) => void;
  /** Larger heading when this is the only section on the track topics page */
  headingLevel?: "courseHome" | "trackPage";
}) {
  const { track, progress, onPracticeTopic, headingLevel = "courseHome" } = props;
  const { done, total } = trackProgress(track.id, progress.topicProgress);
  const nextIdx = nextStepIndex(track.id, progress.topicProgress);

  const HeadingTag = headingLevel === "trackPage" ? "h2" : "h3";
  const titleClass =
    headingLevel === "trackPage" ? "topic-track-title topic-track-title--page" : "topic-track-title";

  return (
    <section className="topic-track-section" aria-labelledby={`track-heading-${track.id}`}>
      <div className="topic-track-head">
        <HeadingTag className={titleClass} id={`track-heading-${track.id}`}>
          {track.label}
        </HeadingTag>
        <span className="topic-track-badge" aria-hidden>
          {done}/{total}
        </span>
      </div>
      <p className="topic-track-blurb">{track.blurb}</p>
      <div className="topic-mini-grid">
        {track.steps.map((step, i) => {
          const resolved = resolvePathStep(step);
          if (!resolved) return null;
          const key = topicKey(step.subjectId, step.topicId);
          const mastered = progress.topicProgress[key]?.mastered;
          const isNext = nextIdx === i;
          const label = shortTopicTitle(resolved.topic);

          return (
            <button
              key={key}
              type="button"
              className={`topic-mini-box ${mastered ? "topic-mini-box--done" : ""} ${isNext ? "topic-mini-box--next" : ""}`}
              onClick={() => onPracticeTopic(resolved.subject, resolved.topic)}
              aria-label={`${track.label}: ${resolved.topic.title}${mastered ? ", mastered" : ""}. Practice.`}
            >
              <span className="topic-mini-box-title">{label}</span>
              <span className="topic-mini-box-sub">{resolved.subject.shortName}</span>
              {mastered && <span className="topic-mini-box-check" aria-hidden>
                ✓
              </span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function renderCourseBoxes(tracks: PathTrackMeta[], progress: StoredProgress, onOpenTrack: (id: TrackId) => void) {
  return tracks.map((track) => {
    const { done, total, pct } = trackProgress(track.id, progress.topicProgress);

    return (
      <button
        key={track.id}
        type="button"
        className="path-course-box"
        onClick={() => onOpenTrack(track.id)}
        aria-label={`${track.label}: ${done} of ${total} lessons mastered. Open lessons.`}
      >
        <span className="path-course-box-title">{track.label}</span>
        <span className="path-course-box-blurb">{track.blurb}</span>
        <span className="path-course-box-meta">
          {done}/{total} lessons
        </span>
        <div className="path-course-box-bar" aria-hidden>
          <div className="path-course-box-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="path-course-box-cta">Open lessons →</span>
      </button>
    );
  });
}

/** Home: grouped like Math — multiple boxes per subject area; tap opens lesson tiles for that track. */
export function PathLaneGrid(props: {
  progress: StoredProgress;
  onOpenTrack: (id: TrackId) => void;
}) {
  const { progress, onOpenTrack } = props;

  return (
    <div className="path-course-surround">
      {PATH_SECTIONS.map((section, i) => {
        const tracks = section.trackIds
          .map((id) => PATH_TRACKS.find((t) => t.id === id))
          .filter((t): t is PathTrackMeta => t != null);

        return (
          <div key={section.title} className="path-course-section">
            <h3 className={`path-course-section-title ${i > 0 ? "path-course-section-title--spaced" : ""}`}>
              {section.title}
            </h3>
            <div className="path-course-grid">{renderCourseBoxes(tracks, progress, onOpenTrack)}</div>
          </div>
        );
      })}
    </div>
  );
}

/** Single track: small topic tiles (same layout for every subject path). */
export function TrackTopicsPage(props: {
  trackId: TrackId;
  progress: StoredProgress;
  onBack: () => void;
  onPracticeTopic: (subject: Subject, topic: Topic) => void;
}) {
  const { trackId, progress, onBack, onPracticeTopic } = props;
  const track = getTrackMeta(trackId);
  if (!track) return null;

  return (
    <div className="track-topics-page">
      <button type="button" className="back-btn" onClick={onBack}>
        Back to paths
      </button>
      <TopicTrackSection
        track={track}
        progress={progress}
        onPracticeTopic={onPracticeTopic}
        headingLevel="trackPage"
      />
    </div>
  );
}
