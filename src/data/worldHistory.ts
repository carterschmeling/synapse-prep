import type { Subject } from "../types";

export const worldHistory: Subject = {
  id: "world-history",
  name: "World History",
  shortName: "History",
  tagline: "Patterns, causes, and timelines",
  topics: [
    {
      id: "skills",
      title: "Historical thinking",
      blurb: "Sourcing, cause/effect, and comparison.",
      questions: [
        {
          id: "h1",
          prompt: "When a document was written and by whom matters most for…",
          choices: [
            "Memorizing dates only",
            "Understanding bias, audience, and reliability (sourcing)",
            "Ignoring the author's purpose",
            "Skipping context entirely",
          ],
          correctIndex: 1,
          explain:
            "Sourcing asks who, when, why—essential for interpreting evidence.",
        },
        {
          id: "h2",
          prompt: "“Cause and effect” in history means…",
          choices: [
            "Listing random facts",
            "Explaining how one event influences later outcomes",
            "Only describing what people wore",
            "Avoiding timelines",
          ],
          correctIndex: 1,
          explain: "Strong essays connect events: short-term triggers vs. long-term pressures.",
        },
      ],
    },
    {
      id: "eras",
      title: "Big eras (survey)",
      blurb: "Broad brushstrokes for finals review.",
      questions: [
        {
          id: "h3",
          prompt: "The Agricultural Revolution is associated with…",
          choices: [
            "Immediate industrial factories",
            "Settled farming and food surplus enabling larger populations",
            "The first moon landing",
            "The end of all trade",
          ],
          correctIndex: 1,
          explain:
            "Farming allowed surplus, specialization, and eventually more complex societies.",
        },
        {
          id: "h4",
          prompt: "Empires often expand through…",
          choices: [
            "Only peaceful consensus every time",
            "Military conquest, alliances, trade networks—often combined",
            "Ignoring geography completely",
            "Avoiding written records",
          ],
          correctIndex: 1,
          explain: "Historians look for multiple factors: force, diplomacy, economics, and ideas.",
        },
      ],
    },
  ],
};
