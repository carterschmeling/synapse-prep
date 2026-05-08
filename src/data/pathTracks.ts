import type { SubjectId } from "../types";

/**
 * Each path is its own playthrough. Math, ELA, science, and history are split into
 * separate course-sized tracks (same idea as four math columns).
 */
export type TrackId =
  | "algebra-1"
  | "honors-geometry"
  | "precalculus"
  | "calculus"
  | "ela-literacy"
  | "ela-animal-farm-i"
  | "ela-animal-farm-ii"
  | "science-biology"
  | "science-honors-biology"
  | "science-chemistry"
  | "science-physics"
  | "history-world"
  | "history-industrial-ww1"
  | "history-midcentury"
  | "history-late";

export interface PathStepRef {
  subjectId: SubjectId;
  topicId: string;
}

export interface PathTrackMeta {
  id: TrackId;
  label: string;
  blurb: string;
  steps: PathStepRef[];
}

export const PATH_TRACKS: PathTrackMeta[] = [
  {
    id: "algebra-1",
    label: "Algebra 1",
    blurb: "Linear equations → systems",
    steps: [
      { subjectId: "algebra", topicId: "linear" },
      { subjectId: "algebra", topicId: "systems" },
    ],
  },
  {
    id: "honors-geometry",
    label: "Honors Geometry",
    blurb: "Logic → figures → proof & coordinate tools",
    steps: [
      { subjectId: "honors-geometry", topicId: "geo-reasoning" },
      { subjectId: "honors-geometry", topicId: "geo-parallel" },
      { subjectId: "honors-geometry", topicId: "geo-triangles" },
      { subjectId: "honors-geometry", topicId: "geo-similarity" },
      { subjectId: "honors-geometry", topicId: "geo-right-trig" },
      { subjectId: "honors-geometry", topicId: "geo-circles" },
      { subjectId: "honors-geometry", topicId: "geo-coordinate" },
      { subjectId: "honors-geometry", topicId: "geo-transformations" },
    ],
  },
  {
    id: "precalculus",
    label: "Precalculus",
    blurb: "Functions → trig → logs → sequences",
    steps: [
      { subjectId: "precalculus", topicId: "pc-functions" },
      { subjectId: "precalculus", topicId: "pc-trig" },
      { subjectId: "precalculus", topicId: "pc-exp" },
      { subjectId: "precalculus", topicId: "pc-seq" },
    ],
  },
  {
    id: "calculus",
    label: "Calculus",
    blurb: "Limits → derivatives → integrals → applications",
    steps: [
      { subjectId: "calculus", topicId: "calc-limits" },
      { subjectId: "calculus", topicId: "calc-derivatives" },
      { subjectId: "calculus", topicId: "calc-integrals" },
      { subjectId: "calculus", topicId: "calc-applications" },
    ],
  },
  {
    id: "ela-literacy",
    label: "ELA — Literacy",
    blurb: "Literary terms & writing",
    steps: [
      { subjectId: "english", topicId: "lit-terms" },
      { subjectId: "english", topicId: "writing" },
    ],
  },
  {
    id: "ela-animal-farm-i",
    label: "ELA — Animal Farm I",
    blurb: "Chapters 1–5",
    steps: [
      { subjectId: "english", topicId: "animal-farm-ch1" },
      { subjectId: "english", topicId: "animal-farm-ch2" },
      { subjectId: "english", topicId: "animal-farm-ch3" },
      { subjectId: "english", topicId: "animal-farm-ch4" },
      { subjectId: "english", topicId: "animal-farm-ch5" },
    ],
  },
  {
    id: "ela-animal-farm-ii",
    label: "ELA — Animal Farm II",
    blurb: "Chapters 6–10",
    steps: [
      { subjectId: "english", topicId: "animal-farm-ch6" },
      { subjectId: "english", topicId: "animal-farm-ch7" },
      { subjectId: "english", topicId: "animal-farm-ch8" },
      { subjectId: "english", topicId: "animal-farm-ch9" },
      { subjectId: "english", topicId: "animal-farm-ch10" },
    ],
  },
  {
    id: "science-biology",
    label: "Science — Biology",
    blurb: "Cells & genetics",
    steps: [
      { subjectId: "biology", topicId: "cells" },
      { subjectId: "biology", topicId: "genetics" },
    ],
  },
  {
    id: "science-honors-biology",
    label: "Science — Honors Biology",
    blurb: "Biochem through genetics",
    steps: [
      { subjectId: "honors-biology", topicId: "hb-biochem" },
      { subjectId: "honors-biology", topicId: "hb-cells" },
      { subjectId: "honors-biology", topicId: "hb-energetics" },
      { subjectId: "honors-biology", topicId: "hb-genetics" },
    ],
  },
  {
    id: "science-chemistry",
    label: "Science — Chemistry",
    blurb: "Structure → bonding → stoichiometry",
    steps: [
      { subjectId: "chemistry", topicId: "chem-structure" },
      { subjectId: "chemistry", topicId: "chem-bonding" },
      { subjectId: "chemistry", topicId: "chem-stoich" },
    ],
  },
  {
    id: "science-physics",
    label: "Science — Physics",
    blurb: "Kinematics → forces → energy",
    steps: [
      { subjectId: "physics", topicId: "ph-kin" },
      { subjectId: "physics", topicId: "ph-force" },
      { subjectId: "physics", topicId: "ph-energy" },
    ],
  },
  {
    id: "history-world",
    label: "History — World foundations",
    blurb: "Thinking skills & eras",
    steps: [
      { subjectId: "world-history", topicId: "skills" },
      { subjectId: "world-history", topicId: "eras" },
    ],
  },
  {
    id: "history-industrial-ww1",
    label: "History — Industrial era & WWI",
    blurb: "Industrial revolution through World War I",
    steps: [
      { subjectId: "modern-world-history", topicId: "mwh-industrial" },
      { subjectId: "modern-world-history", topicId: "mwh-ww1" },
    ],
  },
  {
    id: "history-midcentury",
    label: "History — Interwar & WWII",
    blurb: "Between the wars through World War II",
    steps: [
      { subjectId: "modern-world-history", topicId: "mwh-interwar" },
      { subjectId: "modern-world-history", topicId: "mwh-ww2" },
    ],
  },
  {
    id: "history-late",
    label: "History — Cold War & after",
    blurb: "Cold War through decolonization",
    steps: [
      { subjectId: "modern-world-history", topicId: "mwh-cold-war" },
      { subjectId: "modern-world-history", topicId: "mwh-decolonization" },
    ],
  },
];

export function getTrackMeta(id: TrackId): PathTrackMeta | undefined {
  return PATH_TRACKS.find((t) => t.id === id);
}
