import type { Subject } from "../types";

export const precalculus: Subject = {
  id: "precalculus",
  name: "Precalculus",
  shortName: "Precalc",
  tagline: "Functions through trig and beyond",
  topics: [
    {
      id: "pc-functions",
      title: "Functions & transformations",
      blurb: "Domain, range, shifts, compositions.",
      questions: [
        {
          id: "pc1",
          prompt: "For f(x) = x², shifting the graph up 3 units gives…",
          choices: ["f(x) = (x+3)²", "f(x) = x² + 3", "f(x) = x² − 3", "f(x) = 3x²"],
          correctIndex: 1,
          explain: "Vertical shifts add outside the function; horizontal shifts change inputs.",
        },
        {
          id: "pc2",
          prompt: "The composition (f ∘ g)(x) means…",
          choices: ["f(x) · g(x)", "f(g(x))", "g(f(x)) always", "f(x) + g(x)"],
          correctIndex: 1,
          explain: "Apply g first, then feed its output into f.",
        },
      ],
    },
    {
      id: "pc-trig",
      title: "Trigonometry",
      blurb: "Unit circle, radians, identities intro.",
      questions: [
        {
          id: "pc3",
          prompt: "sin² θ + cos² θ equals…",
          choices: ["0", "1", "tan θ", "2"],
          correctIndex: 1,
          explain: "Pythagorean identity from the unit circle coordinates.",
        },
        {
          id: "pc4",
          prompt: "π radians corresponds to…",
          choices: ["90°", "180°", "360°", "45°"],
          correctIndex: 1,
          explain: "π rad is a half-turn on the circle.",
        },
      ],
    },
    {
      id: "pc-exp",
      title: "Exponential & log",
      blurb: "Growth vs decay, inverse relationship.",
      questions: [
        {
          id: "pc5",
          prompt: "log_b(b^x) simplifies to…",
          choices: ["0", "1", "x", "b"],
          correctIndex: 2,
          explain: "Logarithms undo exponentials with matching bases.",
        },
      ],
    },
    {
      id: "pc-seq",
      title: "Sequences & series intro",
      blurb: "Arithmetic vs geometric patterns.",
      questions: [
        {
          id: "pc6",
          prompt: "In a geometric sequence each term is…",
          choices: [
            "The previous term plus a fixed constant",
            "The previous term times a common ratio",
            "Always zero",
            "Unrelated",
          ],
          correctIndex: 1,
          explain: "Multiply by r repeatedly—contrasts with arithmetic add-d sequences.",
        },
      ],
    },
  ],
};
