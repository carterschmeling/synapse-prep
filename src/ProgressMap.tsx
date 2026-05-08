import type { CSSProperties } from "react";
import type { StoredProgress, Subject } from "./types";
import { subjectMasteryStats } from "./progressUtils";

type Props = {
  subjects: Subject[];
  topicProgress: StoredProgress["topicProgress"];
  onOpenSubject: (s: Subject) => void;
};

export function ProgressMap({ subjects, topicProgress, onOpenSubject }: Props) {
  return (
    <section className="progress-map" aria-labelledby="progress-map-heading">
      <div className="map-intro">
        <h2 id="progress-map-heading" className="map-heading">
          Progress map
        </h2>
        <p>
          Each tile is a class. Fill height shows how many topics you’ve mastered (80%+ on a practice run). Tap a tile to
          open that class.
        </p>
      </div>
      <div className="map-legend">
        <span className="map-legend-item">
          <span className="map-swatch map-swatch-empty" /> Not started
        </span>
        <span className="map-legend-item">
          <span className="map-swatch map-swatch-partial" /> In progress
        </span>
        <span className="map-legend-item">
          <span className="map-swatch map-swatch-done" /> All topics mastered
        </span>
      </div>
      <div className="map-grid">
        {subjects.map((s) => {
          const { mastered, total, pct, attemptedTopics } = subjectMasteryStats(s, topicProgress);
          const doneAll = total > 0 && mastered === total;
          const touched = attemptedTopics > 0 || mastered > 0;
          let tileKind: "empty" | "partial" | "done" = "empty";
          if (doneAll) tileKind = "done";
          else if (touched || pct > 0) tileKind = "partial";

          return (
            <button
              key={s.id}
              type="button"
              className={`map-tile map-tile--${tileKind}`}
              style={{ "--fill": `${pct}%` } as CSSProperties}
              onClick={() => onOpenSubject(s)}
            >
              <span className="map-tile-fill" aria-hidden />
              <span className="map-tile-body">
                <span className="map-tile-name">{s.shortName}</span>
                <span className="map-tile-meta">
                  {mastered}/{total} mastered
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
