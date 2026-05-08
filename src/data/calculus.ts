import type { Subject } from "../types";

export const calculus: Subject = {
  id: "calculus",
  name: "Calculus",
  shortName: "Calc",
  tagline: "Limits, derivatives, integrals — AP-style intro",
  topics: [
    {
      id: "calc-limits",
      title: "Limits & continuity",
      blurb: "Approaching values and continuity intuition.",
      questions: [
        {
          id: "ca1",
          prompt: "Informally, limₓ→ₐ f(x) = L means…",
          choices: [
            "f(a) must equal L always",
            "f(x) can be forced arbitrarily close to L by taking x close enough to a",
            "The graph never crosses y = L",
            "L is always infinite",
          ],
          correctIndex: 1,
          explain:
            "Limits describe behavior near a point—not always the same as the point’s value.",
        },
        {
          id: "ca2",
          prompt: "A removable discontinuity often occurs when…",
          choices: [
            "The limit exists but the defined value differs or is missing",
            "The function grows without bound",
            "The domain excludes all reals",
            "The derivative is zero",
          ],
          correctIndex: 0,
          explain:
            "A hole can happen where limit exists but function definition doesn’t match.",
        },
      ],
    },
    {
      id: "calc-derivatives",
      title: "Derivatives",
      blurb: "Rates of change and differentiation basics.",
      questions: [
        {
          id: "ca3",
          prompt: "Geometrically, f′(a) is the slope of…",
          choices: [
            "The secant line through (a,f(a)) and (a+1,f(a+1))",
            "The tangent line to y = f(x) at x = a",
            "The average value of f",
            "The area under f",
          ],
          correctIndex: 1,
          explain:
            "Derivative at a point gives instantaneous rate—tangent slope.",
        },
        {
          id: "ca4",
          prompt: "Power rule: d/dx[xⁿ] for positive integer n typically equals…",
          choices: ["n xⁿ⁻¹", "xⁿ⁺¹/(n+1)", "n xⁿ", "0"],
          correctIndex: 0,
          explain: "Bring exponent down, reduce power by one—for basic polynomial terms.",
        },
      ],
    },
    {
      id: "calc-integrals",
      title: "Integrals",
      blurb: "Antiderivatives and area intuition.",
      questions: [
        {
          id: "ca5",
          prompt: "The definite integral ∫ₐᵇ f(x) dx often represents…",
          choices: [
            "The instantaneous slope at x = a",
            "Signed area between the curve and the x-axis from a to b",
            "The maximum value of f",
            "Whether f is odd or even",
          ],
          correctIndex: 1,
          explain:
            "Interpret accumulation net signed area under typical continuity assumptions.",
        },
        {
          id: "ca6",
          prompt: "An antiderivative F of f satisfies…",
          choices: ["F′ = f", "F = f²", "F′ = 1/f", "F is constant"],
          correctIndex: 0,
          explain: "Antiderivatives reverse differentiation up to +C.",
        },
      ],
    },
    {
      id: "calc-applications",
      title: "Applications",
      blurb: "Optimization and motion hooks.",
      questions: [
        {
          id: "ca7",
          prompt: "Critical points of differentiable f on an interval often occur where…",
          choices: ["f is undefined only", "f′ is zero or undefined", "f″ > 0 always", "x = 0 only"],
          correctIndex: 1,
          explain:
            "Candidates for local extrema often include stationary points and singularities.",
        },
        {
          id: "ca8",
          prompt: "If position is s(t), velocity is typically…",
          choices: ["∫ s dt", "s′(t)", "s(t)²", "1/s(t)"],
          correctIndex: 1,
          explain: "Velocity is the derivative of position with respect to time.",
        },
      ],
    },
  ],
};
