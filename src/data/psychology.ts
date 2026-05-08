import type { Subject } from "../types";

export const psychology: Subject = {
  id: "psychology",
  name: "Psychology",
  shortName: "Psych",
  tagline: "Mind, behavior, and research basics",
  topics: [
    {
      id: "psy-methods",
      title: "Research methods",
      blurb: "Experiments, ethics, correlation limits.",
      questions: [
        {
          id: "py1",
          prompt: "Random assignment in an experiment mainly helps…",
          choices: [
            "Guarantee representative samples always",
            "Reduce systematic differences between groups before manipulation",
            "Eliminate placebos",
            "Publish faster",
          ],
          correctIndex: 1,
          explain: "Random assignment supports causal claims about the independent variable.",
        },
        {
          id: "py2",
          prompt: "Correlation does not imply…",
          choices: ["Data visualization", "Causation", "Covariance", "Statistics"],
          correctIndex: 1,
          explain: "Third variables can drive both correlated measures.",
        },
      ],
    },
    {
      id: "psy-brain",
      title: "Brain & biology",
      blurb: "Neurons, neurotransmitters introduction.",
      questions: [
        {
          id: "py3",
          prompt: "The synapse is best described as…",
          choices: [
            "The skull bone",
            "A gap region where chemical signals bridge neurons",
            "Only muscle tissue",
            "White blood cells",
          ],
          correctIndex: 1,
          explain: "Signals cross synapses via neurotransmitters and receptors.",
        },
      ],
    },
    {
      id: "psy-learning",
      title: "Learning",
      blurb: "Classical and operant conditioning basics.",
      questions: [
        {
          id: "py4",
          prompt: "In classical conditioning, the bell becomes a…",
          choices: ["Unconditioned stimulus always", "Conditioned stimulus after pairing", "Random noise always", "Punishment"],
          correctIndex: 1,
          explain: "Neutral cues gain predictive power after association with US.",
        },
        {
          id: "py5",
          prompt: "Negative reinforcement means…",
          choices: [
            "Punishment always",
            "Removing an aversive stimulus to increase a behavior",
            "Removing rewards only",
            "Ignoring behavior entirely",
          ],
          correctIndex: 1,
          explain: "Reinforcement raises behavior frequency; negative removes something bad.",
        },
      ],
    },
    {
      id: "psy-memory",
      title: "Memory",
      blurb: "Encoding, storage, retrieval.",
      questions: [
        {
          id: "py6",
          prompt: "Retrieval failure on a test despite knowing the material earlier highlights…",
          choices: [
            "Encoding never happened",
            "Possible retrieval cues mismatching study context",
            "Impossible neural storage",
            "Sleep deleting memory",
          ],
          correctIndex: 1,
          explain: "Encoding specificity and cue dependence affect recall.",
        },
      ],
    },
  ],
};
