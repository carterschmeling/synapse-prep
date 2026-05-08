import type { Subject } from "../types";

export const honorsGeometry: Subject = {
  id: "honors-geometry",
  name: "Honors Geometry",
  shortName: "Honors Geo",
  tagline: "Proofs, figures, and spatial reasoning",
  topics: [
    {
      id: "geo-reasoning",
      title: "Logic & constructions",
      blurb: "Definitions, inductive vs deductive reasoning, basic constructions.",
      questions: [
        {
          id: "hg-r1",
          prompt: "A good geometric definition should…",
          choices: [
            "Use only examples without rules",
            "State what something means using precise terms so others can identify it",
            "Avoid naming shapes",
            "Change depending on the diagram",
          ],
          correctIndex: 1,
          explain:
            "Definitions fix vocabulary—every proof builds on agreed meanings.",
        },
        {
          id: "hg-r2",
          prompt: "Deductive reasoning moves from…",
          choices: [
            "Patterns only → never conclusions",
            "Accepted facts and definitions → conclusions that must follow",
            "Guesses → experiments only",
            "Diagram appearance → truth without proof",
          ],
          correctIndex: 1,
          explain:
            "Deduction chains statements: if premises are true and logic is valid, the conclusion is forced.",
        },
        {
          id: "hg-r3",
          prompt: "Which tool pair is standard for copying a segment length?",
          choices: [
            "Protractor and ruler only",
            "Straightedge and compass",
            "Calculator and grid paper only",
            "Thermometer and tape",
          ],
          correctIndex: 1,
          explain:
            "Classical constructions use an unmarked straightedge plus compass—idealized tools for pure geometry.",
        },
      ],
    },
    {
      id: "geo-parallel",
      title: "Parallel lines & angles",
      blurb: "Transversals, angle pairs, and parallel-line theorems.",
      questions: [
        {
          id: "hg-p1",
          prompt: "Two parallel lines cut by a transversal create corresponding angles that are…",
          choices: ["Supplementary always", "Congruent", "Complementary always", "Undefined"],
          correctIndex: 1,
          explain:
            "Corresponding angles match across the transversal; when lines are parallel, those pairs are congruent.",
        },
        {
          id: "hg-p2",
          prompt: "Same-side interior angles formed by parallel lines and a transversal are…",
          choices: ["Congruent", "Supplementary (sum to 180°)", "Always 90°", "Equal to vertical angles"],
          correctIndex: 1,
          explain:
            "Interior angles on the same side of the transversal add to 180° when the lines are parallel.",
        },
        {
          id: "hg-p3",
          prompt: "If two lines are cut by a transversal and alternate interior angles are congruent, then…",
          choices: [
            "The lines must be parallel (converse setup uses matching criteria)",
            "The lines cannot be parallel",
            "The triangle is equilateral",
            "All angles are 90°",
          ],
          correctIndex: 0,
          explain:
            "Parallel-line converses let you prove lines parallel from angle relationships.",
        },
      ],
    },
    {
      id: "geo-triangles",
      title: "Triangle congruence",
      blurb: "SSS, SAS, ASA, AAS, HL—and what congruence lets you claim.",
      questions: [
        {
          id: "hg-t1",
          prompt: "Which shortcut is usually used when you know two angles and the included side?",
          choices: ["SSS", "SAS", "ASA", "AAA"],
          correctIndex: 2,
          explain:
            "ASA: two angles and the included side fix triangle size and shape (up to congruence).",
        },
        {
          id: "hg-t2",
          prompt: "Why is “AAA” generally not a triangle congruence shortcut (for non-degenerate triangles)?",
          choices: [
            "Because angles can match while triangles differ in size (similar, not necessarily congruent)",
            "Because AAA always proves congruence",
            "Because triangles have four sides",
            "Because AAA only works for right triangles",
          ],
          correctIndex: 0,
          explain:
            "Matching angles gives similarity; you need a side to pin down scale for congruence.",
        },
        {
          id: "hg-t3",
          prompt: "HL applies to proving two right triangles congruent when…",
          choices: [
            "Any three angles match",
            "Hypotenuse and one leg of one right triangle match those of the other",
            "Only the legs differ",
            "Only acute angles match",
          ],
          correctIndex: 1,
          explain:
            "HL is the right-triangle case pairing hypotenuse with one corresponding leg.",
        },
      ],
    },
    {
      id: "geo-similarity",
      title: "Similarity & proportional reasoning",
      blurb: "AA similarity, side splitter ideas, scale factors.",
      questions: [
        {
          id: "hg-s1",
          prompt: "Two polygons are similar if…",
          choices: [
            "They have the same perimeter",
            "Corresponding angles are congruent and corresponding sides are proportional",
            "They share a vertex",
            "Their areas are equal",
          ],
          correctIndex: 1,
          explain:
            "Similarity = same shape (angles), possibly different size (scale factor on sides).",
        },
        {
          id: "hg-s2",
          prompt: "If scale factor from triangle A to similar triangle B is k, the ratio of their areas is…",
          choices: ["k", "k²", "k³", "2k"],
          correctIndex: 1,
          explain:
            "Area scales with the square of linear dimensions—think base and height both multiplied by k.",
        },
      ],
    },
    {
      id: "geo-right-trig",
      title: "Right triangles & intro trig",
      blurb: "Pythagorean theorem, special triangles, sine/cosine/tangent.",
      questions: [
        {
          id: "hg-rt1",
          prompt: "In a right triangle, sin θ equals…",
          choices: [
            "Opposite / hypotenuse",
            "Adjacent / hypotenuse",
            "Opposite / adjacent",
            "Hypotenuse / opposite",
          ],
          correctIndex: 0,
          explain:
            "SOH: sine is opposite over hypotenuse relative to angle θ.",
        },
        {
          id: "hg-rt2",
          prompt: "A 45°-45°-90° triangle with legs of length s has hypotenuse…",
          choices: ["s√2", "2s", "s/2", "s√3"],
          correctIndex: 0,
          explain:
            "By Pythagoras: √(s² + s²) = √(2s²) = s√2.",
        },
      ],
    },
    {
      id: "geo-circles",
      title: "Circles",
      blurb: "Radii, chords, arcs, inscribed angles.",
      questions: [
        {
          id: "hg-c1",
          prompt: "A central angle’s measure equals…",
          choices: [
            "Half its intercepted arc",
            "The measure of its intercepted arc",
            "Twice the inscribed angle anywhere",
            "Always 90°",
          ],
          correctIndex: 1,
          explain:
            "At the circle’s center, the angle opens exactly as wide as its intercepted arc.",
        },
        {
          id: "hg-c2",
          prompt: "An inscribed angle’s measure equals…",
          choices: [
            "The full arc",
            "Half the measure of its intercepted arc",
            "Double the central angle for the same arc",
            "Zero",
          ],
          correctIndex: 1,
          explain:
            "Inscribed angles opening to the same arc are half the central angle / half the arc.",
        },
      ],
    },
    {
      id: "geo-coordinate",
      title: "Coordinate geometry",
      blurb: "Distance, midpoint, slope, parallel/perpendicular via slope.",
      questions: [
        {
          id: "hg-co1",
          prompt: "Parallel non-vertical lines share…",
          choices: ["Midpoints", "Equal slopes", "Opposite reciprocals always", "Same y-intercept always"],
          correctIndex: 1,
          explain:
            "Parallel lines rise/run the same way—equal slopes (vertical lines are a separate case).",
        },
        {
          id: "hg-co2",
          prompt: "Perpendicular non-vertical lines have slopes that…",
          choices: ["Are equal", "Multiply to −1 (negative reciprocals)", "Sum to 1", "Are both zero"],
          correctIndex: 1,
          explain:
            "Slopes m and −1/m give right angles (except horizontal/vertical pairs).",
        },
      ],
    },
    {
      id: "geo-transformations",
      title: "Rigid motions & symmetry",
      blurb: "Translations, rotations, reflections, symmetry on the plane.",
      questions: [
        {
          id: "hg-tr1",
          prompt: "Which transformation preserves distance between every pair of points?",
          choices: ["Dilation by k ≠ 1", "Translation", "Stretch along x only", "Horizontal shear"],
          correctIndex: 1,
          explain:
            "Translations are rigid motions—shape and size stay the same.",
        },
        {
          id: "hg-tr2",
          prompt: "Reflecting a figure across a line produces an image that is…",
          choices: ["Always smaller", "Congruent to the preimage", "Never congruent", "Always larger"],
          correctIndex: 1,
          explain:
            "Reflection is a rigid motion; lengths and angles match the original.",
        },
      ],
    },
  ],
};
