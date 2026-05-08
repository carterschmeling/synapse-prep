import type { Subject } from "../types";

export const spanish1: Subject = {
  id: "spanish-1",
  name: "Spanish 1",
  shortName: "Spanish",
  tagline: "Foundations for class",
  topics: [
    {
      id: "es-greet",
      title: "Greetings & classroom",
      blurb: "Survival phrases for day one.",
      questions: [
        {
          id: "es1",
          prompt: "“¿Cómo te llamas?” most closely asks…",
          choices: ["What time is it?", "What is your name?", "Where is the library?", "How old are you?"],
          correctIndex: 1,
          explain: "Literally “how do you call yourself?”—common way to ask names informally.",
        },
        {
          id: "es2",
          prompt: "“Gracias” means…",
          choices: ["Please", "Goodbye", "Thank you", "Excuse me"],
          correctIndex: 2,
          explain: "Pair with “por favor” for polite requests.",
        },
      ],
    },
    {
      id: "es-present",
      title: "Present tense (-ar pattern)",
      blurb: "Regular -ar verb endings.",
      questions: [
        {
          id: "es3",
          prompt: "For “hablar,” the “we” (nosotros) form is typically…",
          choices: ["hablo", "hablas", "hablamos", "hablan"],
          correctIndex: 2,
          explain: "Nosotros takes -amos for regular -ar verbs.",
        },
      ],
    },
    {
      id: "es-ser-estar",
      title: "Ser vs estar",
      blurb: "Identity vs state/location basics.",
      questions: [
        {
          id: "es4",
          prompt: "Which fits best: “María ___ muy inteligente.” (trait)",
          choices: ["está", "es", "hay", "tiene"],
          correctIndex: 1,
          explain: "Ser often carries durable traits; estar handles states and many locations.",
        },
        {
          id: "es5",
          prompt: "“Estamos en la escuela” emphasizes…",
          choices: [
            "Permanent identity",
            "Current location/state",
            "Tomorrow’s plan only",
            "Possession",
          ],
          correctIndex: 1,
          explain: "Estar + en often marks where someone is right now.",
        },
      ],
    },
    {
      id: "es-vocab",
      title: "School & family words",
      blurb: "High-frequency nouns.",
      questions: [
        {
          id: "es6",
          prompt: "“El profesor / la profesora” refers to…",
          choices: ["A student", "A teacher", "A pencil", "A grade"],
          correctIndex: 1,
          explain: "Gendered endings match feminine/masculine agreement patterns.",
        },
      ],
    },
  ],
};
