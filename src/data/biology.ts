import type { Subject } from "../types";

export const biology: Subject = {
  id: "biology",
  name: "Biology",
  shortName: "Bio",
  tagline: "Cells, energy, and heredity",
  topics: [
    {
      id: "cells",
      title: "Cell structure",
      blurb: "Organelles and how they cooperate.",
      questions: [
        {
          id: "b1",
          prompt: "Which organelle is the primary site of ATP production in eukaryotes?",
          choices: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
          correctIndex: 2,
          explain:
            "Mitochondria carry out cellular respiration to produce ATP—the cell's usable energy.",
        },
        {
          id: "b2",
          prompt: "The nucleus mainly stores…",
          choices: ["Glucose", "DNA", "Lysosomal enzymes only", "Chlorophyll"],
          correctIndex: 1,
          explain: "The nucleus houses chromosomes made of DNA.",
        },
        {
          id: "b3",
          prompt: "Plant cells often have chloroplasts and…",
          choices: [
            "A cell wall and often a large central vacuole",
            "No membrane around the cell",
            "No genetic material",
            "Centrioles used for photosynthesis",
          ],
          correctIndex: 0,
          explain:
            "Plant cells typically include a cell wall, chloroplasts, and a central vacuole for storage and turgor.",
        },
      ],
    },
    {
      id: "genetics",
      title: "Heredity basics",
      blurb: "Punnett squares and vocabulary.",
      questions: [
        {
          id: "b4",
          prompt: "An organism's observable traits are its…",
          choices: ["Genotype", "Phenotype", "Karyotype", "Allele pool"],
          correctIndex: 1,
          explain:
            "Phenotype is what you see; genotype is the allele combination behind it.",
        },
        {
          id: "b5",
          prompt: "If both alleles are the same at a gene locus, the organism is…",
          choices: ["Heterozygous", "Homozygous", "Dominant", "Recessive"],
          correctIndex: 1,
          explain: "Homozygous = two identical alleles; heterozygous = two different alleles.",
        },
      ],
    },
  ],
};
