import type { Subject } from "../types";

export const algebra: Subject = {
  id: "algebra",
  name: "Algebra 1",
  shortName: "Algebra",
  tagline: "Expressions, equations, and graphs",
  topics: [
    {
      id: "linear",
      title: "Linear equations",
      blurb: "Slope-intercept form and solving for x.",
      questions: [
        {
          id: "m1",
          prompt: "Solve for x: 3x − 7 = 14",
          choices: ["x = 7", "x = 9", "x = 21", "x = 3"],
          correctIndex: 0,
          explain: "Add 7 → 3x = 21; divide by 3 → x = 7.",
        },
        {
          id: "m2",
          prompt: "In y = mx + b, what does m represent?",
          choices: ["The y-intercept", "The slope", "The origin", "The x-intercept always"],
          correctIndex: 1,
          explain: "m is slope (rise over run); b is where the line crosses the y-axis.",
        },
        {
          id: "m3",
          prompt: "Lines with slopes 2 and −1/2 are…",
          choices: ["Parallel", "The same line", "Perpendicular", "Undefined"],
          correctIndex: 2,
          explain: "Perpendicular slopes multiply to −1 (when neither is vertical).",
        },
      ],
    },
    {
      id: "systems",
      title: "Systems",
      blurb: "Substitution and elimination basics.",
      questions: [
        {
          id: "m4",
          prompt: "You use substitution when…",
          choices: [
            "Both equations are already solved for the same variable",
            "You want to eliminate a variable by adding equations",
            "You only have one equation",
            "The system has no solution",
          ],
          correctIndex: 0,
          explain:
            "Substitution shines when one equation is easy to solve for one variable, then plug into the other.",
        },
        {
          id: "m5",
          prompt: "The solution to a system of two linear equations is…",
          choices: [
            "Always two points",
            "The intersection point(s), if any",
            "Only the y-intercepts",
            "The average of all coefficients",
          ],
          correctIndex: 1,
          explain: "Graphically, solutions are where the lines cross—if they do.",
        },
      ],
    },
  ],
};
