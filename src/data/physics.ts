import type { Subject } from "../types";

export const physics: Subject = {
  id: "physics",
  name: "Physics",
  shortName: "Physics",
  tagline: "Motion, forces, and energy",
  topics: [
    {
      id: "ph-kin",
      title: "Kinematics",
      blurb: "Displacement, velocity, acceleration.",
      questions: [
        {
          id: "ph1",
          prompt: "Average velocity is defined as…",
          choices: [
            "Total distance only",
            "Displacement divided by elapsed time",
            "Acceleration times mass",
            "Force divided by distance",
          ],
          correctIndex: 1,
          explain: "Velocity tracks direction via displacement, not total path length traveled.",
        },
        {
          id: "ph2",
          prompt: "Under constant acceleration starting from rest, distance traveled grows like…",
          choices: ["t", "t²", "√t", "1/t"],
          correctIndex: 1,
          explain: "From kinematics, x ∝ t² for uniform acceleration from rest.",
        },
      ],
    },
    {
      id: "ph-force",
      title: "Forces & Newton’s laws",
      blurb: "F = ma, free-body thinking.",
      questions: [
        {
          id: "ph3",
          prompt: "Newton’s second law states net force equals…",
          choices: ["mv only", "mass times acceleration", "weight always", "zero in all cases"],
          correctIndex: 1,
          explain: "ΣF = ma links net force to how motion changes.",
        },
        {
          id: "ph4",
          prompt: "Action–reaction pairs in Newton’s third law…",
          choices: [
            "Act on the same object and cancel always",
            "Act on different objects and are equal in magnitude, opposite in direction",
            "Never happen in space",
            "Only appear for gravity",
          ],
          correctIndex: 1,
          explain: "Forces come in pairs across interacting bodies.",
        },
      ],
    },
    {
      id: "ph-energy",
      title: "Work & energy",
      blurb: "KE, PE, conservation ideas.",
      questions: [
        {
          id: "ph5",
          prompt: "Kinetic energy of a point particle is classically…",
          choices: ["mv", "½mv²", "mgh", "Fd"],
          correctIndex: 1,
          explain: "KE depends on speed squared for non-rotating point masses.",
        },
        {
          id: "ph6",
          prompt: "When non-conservative forces like friction do negative net work, mechanical energy often…",
          choices: ["Increases forever", "Decreases or dissipates as heat", "Stays exactly fixed always", "Doubles"],
          correctIndex: 1,
          explain: "Friction steals mechanical energy from the ideal conserved sum.",
        },
      ],
    },
    {
      id: "ph-waves",
      title: "Waves & sound",
      blurb: "Frequency, wavelength, wave speed.",
      questions: [
        {
          id: "ph7",
          prompt: "For a periodic wave, wave speed v relates to frequency f and wavelength λ by…",
          choices: ["v = f / λ", "v = f λ", "v = λ / f²", "v = f + λ"],
          correctIndex: 1,
          explain: "Each cycle spans one wavelength; cycles per second times length per cycle gives speed.",
        },
      ],
    },
  ],
};
