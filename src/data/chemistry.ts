import type { Subject } from "../types";

export const chemistry: Subject = {
  id: "chemistry",
  name: "Chemistry",
  shortName: "Chem",
  tagline: "Atoms, bonds, and reactions",
  topics: [
    {
      id: "chem-structure",
      title: "Atomic structure",
      blurb: "Protons, electrons, periodic trends.",
      questions: [
        {
          id: "ch1",
          prompt: "In a neutral atom, the number of protons equals…",
          choices: ["Mass number", "Number of neutrons only", "Number of electrons", "Atomic mass in grams"],
          correctIndex: 2,
          explain: "Neutral atoms balance positive nuclear charge with electron count.",
        },
        {
          id: "ch2",
          prompt: "Elements in the same column (group) of the periodic table usually share…",
          choices: ["The same atomic mass", "Similar valence electron patterns", "Identical melting points always", "No properties in common"],
          correctIndex: 1,
          explain: "Groups often repeat chemical behavior because outer electron configurations rhyme.",
        },
        {
          id: "ch3",
          prompt: "An isotope differs from another atom of the same element mainly in…",
          choices: ["Number of protons", "Number of neutrons", "Charge sign only", "Position in the table"],
          correctIndex: 1,
          explain: "Isotopes vary neutron count; proton count fixes the element identity.",
        },
      ],
    },
    {
      id: "chem-bonding",
      title: "Bonding",
      blurb: "Ionic vs covalent, polarity basics.",
      questions: [
        {
          id: "ch4",
          prompt: "A bond where electrons are transferred from metal to nonmetal is typically…",
          choices: ["Covalent", "Ionic", "Metallic only", "Hydrogen bond"],
          correctIndex: 1,
          explain: "Ionic bonding forms crystal lattices of cations and anions.",
        },
        {
          id: "ch5",
          prompt: "A polar covalent bond means…",
          choices: [
            "Electrons are shared unequally between atoms",
            "Full electron transfer always",
            "Only noble gases participate",
            "The bond has zero length",
          ],
          correctIndex: 0,
          explain: "Different electronegativity pulls electron density toward one atom.",
        },
      ],
    },
    {
      id: "chem-stoich",
      title: "Stoichiometry",
      blurb: "Moles, balanced equations, yields.",
      questions: [
        {
          id: "ch6",
          prompt: "The mole connects…",
          choices: [
            "Only volume to pressure",
            "Macroscopic mass to particle count via Avogadro’s number",
            "Speed to distance only",
            "pH to temperature only",
          ],
          correctIndex: 1,
          explain: "Use moles to translate grams ↔ molecules using balanced ratios.",
        },
        {
          id: "ch7",
          prompt: "Before doing mole ratios in a reaction, you should…",
          choices: [
            "Ignore states of matter",
            "Balance the chemical equation",
            "Assume products equal reactants in moles always",
            "Remove subscripts randomly",
          ],
          correctIndex: 1,
          explain: "Coefficients enforce conservation of atoms across the reaction.",
        },
      ],
    },
    {
      id: "chem-gas",
      title: "Gases",
      blurb: "Ideal gas law intuition.",
      questions: [
        {
          id: "ch8",
          prompt: "For an ideal gas held at constant temperature, squeezing volume tends to…",
          choices: ["Lower pressure", "Raise pressure", "Freeze instantly", "Break Avogadro’s rule"],
          correctIndex: 1,
          explain: "Boyle’s law: smaller volume means more frequent collisions → higher pressure.",
        },
      ],
    },
  ],
};
