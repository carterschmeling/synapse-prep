import type { Subject } from "../types";

export const honorsBiology: Subject = {
  id: "honors-biology",
  name: "Honors Biology",
  shortName: "Honors Bio",
  tagline: "Structure, energy, information, and systems",
  topics: [
    {
      id: "hb-biochem",
      title: "Biochemistry foundations",
      blurb: "Water, carbon, macromolecules, enzymes.",
      questions: [
        {
          id: "hb-bc1",
          prompt: "Water’s polarity mainly helps cells…",
          choices: [
            "Store unlimited ATP chemically in nuclei",
            "Dissolve ions and polar molecules and moderate temperature",
            "Destroy DNA",
            "Eliminate membranes",
          ],
          correctIndex: 1,
          explain:
            "Hydrogen bonding makes water an excellent solvent and thermal buffer for life.",
        },
        {
          id: "hb-bc2",
          prompt: "Enzymes speed reactions by…",
          choices: [
            "Being consumed in equal amounts with substrate",
            "Lowering activation energy so pathways proceed faster",
            "Raising activation energy",
            "Breaking every bond randomly",
          ],
          correctIndex: 1,
          explain:
            "Catalysts stabilize transition states—less energy needed to start the reaction.",
        },
        {
          id: "hb-bc3",
          prompt: "Which pair correctly matches polymer → monomer?",
          choices: [
            "Protein → nucleotide",
            "Polysaccharide → monosaccharide",
            "DNA → amino acid",
            "Lipid → glucose only",
          ],
          correctIndex: 1,
          explain:
            "Carbohydrate polymers are built from sugar monomers; proteins from amino acids; nucleic acids from nucleotides.",
        },
      ],
    },
    {
      id: "hb-cells",
      title: "Cell structure & membranes",
      blurb: "Organelles, surface-area-to-volume, transport across membranes.",
      questions: [
        {
          id: "hb-cl1",
          prompt: "Why do large cells often struggle without folding membranes or specialization?",
          choices: [
            "DNA disappears",
            "Surface-area-to-volume ratio drops—exchange across the membrane can’t keep up",
            "Mitochondria vanish",
            "They lack cytoskeleton entirely",
          ],
          correctIndex: 1,
          explain:
            "Volume grows faster than surface area; membranes must stay adequate for transport.",
        },
        {
          id: "hb-cl2",
          prompt: "Passive transport across a membrane moves substances…",
          choices: [
            "Always against concentration gradients using ATP directly",
            "Down gradients without metabolic energy (facilitated diffusion still passive)",
            "Only when ATP attaches to DNA",
            "Only during mitosis",
          ],
          correctIndex: 1,
          explain:
            "Diffusion and facilitated diffusion follow gradients; active transport costs energy.",
        },
      ],
    },
    {
      id: "hb-energetics",
      title: "Photosynthesis & cellular respiration",
      blurb: "Energy flow: light → glucose → ATP.",
      questions: [
        {
          id: "hb-en1",
          prompt: "The light-dependent reactions of photosynthesis mainly produce…",
          choices: [
            "Glucose only",
            "ATP and NADPH (and oxygen as a byproduct in oxygenic photosynthesis)",
            "Pure heat only",
            "Ethanol",
          ],
          correctIndex: 1,
          explain:
            "Light reactions harvest energy carried by ATP/NADPH toward the Calvin cycle.",
        },
        {
          id: "hb-en2",
          prompt: "In aerobic cellular respiration, most ATP forms during…",
          choices: [
            "Glycolysis only",
            "The Krebs cycle only",
            "Oxidative phosphorylation (electron transport & chemiosmosis)",
            "Fermentation",
          ],
          correctIndex: 2,
          explain:
            "ETC coupled to chemiosmosis yields the bulk of ATP under oxygen.",
        },
      ],
    },
    {
      id: "hb-genetics",
      title: "Mendelian & molecular genetics",
      blurb: "Inheritance patterns, DNA structure, replication basics.",
      questions: [
        {
          id: "hb-g1",
          prompt: "A heterozygous individual (Aa) crossed with a homozygous recessive (aa) is best described as…",
          choices: [
            "Dihybrid cross",
            "Test cross setup revealing gametes from the dominant-looking parent",
            "Impossible allele pairing",
            "Always produces AA offspring",
          ],
          correctIndex: 1,
          explain:
            "Test crosses help infer unknown genotypes by observing offspring ratios.",
        },
        {
          id: "hb-g2",
          prompt: "DNA replication is semiconservative because…",
          choices: [
            "Each new double helix keeps one parental strand and adds one new strand",
            "DNA never changes",
            "RNA replaces DNA completely",
            "Both strands are newly synthesized from scratch only",
          ],
          correctIndex: 0,
          explain:
            "Meselson–Stahl–style logic: each daughter molecule hybridizes old + new.",
        },
      ],
    },
    {
      id: "hb-dna-rna",
      title: "Gene expression overview",
      blurb: "Transcription vs translation; mutations at a intro level.",
      questions: [
        {
          id: "hb-dr1",
          prompt: "Translation synthesizes…",
          choices: ["DNA strands", "RNA from a DNA template", "Polypeptides at ribosomes", "Lipid bilayers"],
          correctIndex: 2,
          explain:
            "mRNA instructions are decoded by tRNA at ribosomes into amino-acid chains.",
        },
        {
          id: "hb-dr2",
          prompt: "A point mutation that replaces one amino acid might…",
          choices: [
            "Never affect protein function",
            "Change folding or activity depending on where it hits",
            "Always delete the entire chromosome",
            "Convert DNA to RNA automatically",
          ],
          correctIndex: 1,
          explain:
            "Effects range from silent to drastic—location and chemistry matter.",
        },
      ],
    },
    {
      id: "hb-evolution",
      title: "Evolution mechanisms",
      blurb: "Natural selection, variation, population thinking.",
      questions: [
        {
          id: "hb-ev1",
          prompt: "Natural selection acts on…",
          choices: [
            "Individual organisms’ wishes",
            "Heritable variation that affects survival or reproduction",
            "Traits acquired during an organism’s lifetime only",
            "Goals written into DNA literally",
          ],
          correctIndex: 1,
          explain:
            "Selection needs variation, inheritance, and differential success.",
        },
        {
          id: "hb-ev2",
          prompt: "Genetic drift has strongest effects when…",
          choices: [
            "Populations are huge",
            "Populations are small—chance can swing allele frequencies",
            "Mutation stops entirely",
            "Selection is infinite",
          ],
          correctIndex: 1,
          explain:
            "Sampling error matters more in small populations.",
        },
      ],
    },
    {
      id: "hb-ecology",
      title: "Ecology & systems",
      blurb: "Energy pyramids, cycles, interactions.",
      questions: [
        {
          id: "hb-ec1",
          prompt: "Energy generally flows through ecosystems…",
          choices: [
            "In cycles like carbon within one trophic level only",
            "From producers upward with heavy loss as heat between levels",
            "Back from decomposers to the sun directly",
            "Without loss",
          ],
          correctIndex: 1,
          explain:
            "Food chains lose usable energy to metabolism at each step—pyramids reflect this.",
        },
        {
          id: "hb-ec2",
          prompt: "A keystone species…",
          choices: [
            "Is always the largest organism",
            "Has disproportionate impact on community structure relative to biomass",
            "Never interacts with others",
            "Only lives in deserts",
          ],
          correctIndex: 1,
          explain:
            "Removing a keystone species can collapse diversity—classic ecology lesson.",
        },
      ],
    },
  ],
};
