import type { Subject } from "../types";

export const environmentalScience: Subject = {
  id: "environmental-science",
  name: "Environmental Science",
  shortName: "Env Sci",
  tagline: "Earth systems and human impact",
  topics: [
    {
      id: "env-eco",
      title: "Ecosystems",
      blurb: "Food webs, niches, biodiversity.",
      questions: [
        {
          id: "en1",
          prompt: "Primary producers in many terrestrial ecosystems are mainly…",
          choices: ["Fungi eating dead matter first", "Plants doing photosynthesis", "Top carnivores only", "Bacteria in deep ocean only"],
          correctIndex: 1,
          explain: "Energy enters most land food webs via plant capture of sunlight.",
        },
        {
          id: "en2",
          prompt: "Biodiversity loss threatens resilience partly because…",
          choices: [
            "Variety provides functional backups when conditions shift",
            "One species always does everything",
            "Genes become identical",
            "Photosynthesis stops globally",
          ],
          correctIndex: 0,
          explain: "Redundancy and complementary roles stabilize ecosystems.",
        },
      ],
    },
    {
      id: "env-pop",
      title: "Human population",
      blurb: "Demographics, carrying capacity ideas.",
      questions: [
        {
          id: "en3",
          prompt: "Demographic transition models often link falling birth rates with…",
          choices: [
            "Higher development indicators like healthcare and education over time",
            "Permanent famine only",
            "Zero migration",
            "Removal of all technology",
          ],
          correctIndex: 0,
          explain: "Patterns vary by region, but development correlates with fertility shifts.",
        },
      ],
    },
    {
      id: "env-climate",
      title: "Climate & atmosphere",
      blurb: "Greenhouse effect, evidence basics.",
      questions: [
        {
          id: "en4",
          prompt: "Greenhouse gases contribute to warming mainly by…",
          choices: [
            "Blocking all sunlight",
            "Absorbing and re-radiating infrared energy that would otherwise escape to space",
            "Removing oxygen",
            "Increasing Earth density",
          ],
          correctIndex: 1,
          explain: "They alter the planet’s energy balance—not by stopping all incoming sunlight.",
        },
      ],
    },
    {
      id: "env-resources",
      title: "Resources & waste",
      blurb: "Renewable vs nonrenewable, reduce/reuse/recycle.",
      questions: [
        {
          id: "en5",
          prompt: "A renewable resource is best described as…",
          choices: [
            "Infinite regardless of use rate",
            "Replenished on human-relevant timescales if managed sustainably",
            "Always synthetic",
            "Cannot be measured",
          ],
          correctIndex: 1,
          explain: "Renewable still requires stewardship—overuse can collapse stocks.",
        },
      ],
    },
  ],
};
