import type { Subject } from "../types";
import { animalFarmTopics } from "./animalFarm";

export const english: Subject = {
  id: "english",
  name: "English 9",
  shortName: "English",
  tagline: "Reading, writing, literary foundations, and Animal Farm",
  topics: [
    {
      id: "lit-terms",
      title: "Literary devices",
      blurb: "Spot metaphor, symbol, tone, and POV on exams.",
      questions: [
        {
          id: "e1",
          prompt: "First-person narration means the story is told by…",
          choices: [
            "An outside narrator who knows everyone's thoughts",
            "A character inside the story using “I”",
            "A narrator who only follows one character",
            "The author breaking the fourth wall only at the end",
          ],
          correctIndex: 1,
          explain:
            "First person uses a narrator who participates in the story and refers to themselves as “I.”",
        },
        {
          id: "e2",
          prompt: "Which is the best definition of “tone”?",
          choices: [
            "The lesson or moral the author wants you to learn",
            "The narrator's attitude toward the subject, conveyed through word choice",
            "The time and place where the story happens",
            "The central problem that drives the plot",
          ],
          correctIndex: 1,
          explain:
            "Tone is how the writing sounds emotionally—often revealed through diction and imagery.",
        },
        {
          id: "e3",
          prompt: "A symbol in literature is…",
          choices: [
            "Any object that appears more than once",
            "Something concrete that stands for a bigger idea",
            "The same thing as the story's theme",
            "A footnote the author adds for clarity",
          ],
          correctIndex: 1,
          explain:
            "Symbols carry extra meaning beyond their literal sense (for example, a storm for conflict).",
        },
      ],
    },
    {
      id: "writing",
      title: "Claims and evidence",
      blurb: "Build arguments your teachers expect on essays.",
      questions: [
        {
          id: "e4",
          prompt: "A strong thesis statement should…",
          choices: [
            "List every fact you know about the topic",
            "Make a clear, arguable claim you can support with evidence",
            "Repeat the essay prompt in different words only",
            "End with a rhetorical question",
          ],
          correctIndex: 1,
          explain:
            "Your thesis previews your argument; it should be specific enough to defend with quotes and analysis.",
        },
        {
          id: "e5",
          prompt: "After introducing a quote, you should usually…",
          choices: [
            "Move directly to the next quote",
            "Explain how the quote supports your point",
            "Summarize the entire book",
            "Change the topic to something easier",
          ],
          correctIndex: 1,
          explain:
            "Commentary connects evidence back to your claim—otherwise the quote stands alone.",
        },
      ],
    },
    ...animalFarmTopics,
  ],
};
