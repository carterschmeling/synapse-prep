import type { Subject } from "../types";

export const usHistory: Subject = {
  id: "us-history",
  name: "U.S. History",
  shortName: "U.S. Hist",
  tagline: "Survey from colonies to modern era",
  topics: [
    {
      id: "us-colonial",
      title: "Colonial America",
      blurb: "Motives, regions, Native relations.",
      questions: [
        {
          id: "us1",
          prompt: "Many New England colonies mixed Puritan religion with…",
          choices: ["Plantation slavery economies first", "Town meetings and literacy-focused communities", "Spanish missions only", "Immediate independence"],
          correctIndex: 1,
          explain: "Regional patterns differed—New England emphasized congregational life and local governance threads.",
        },
        {
          id: "us2",
          prompt: "Mercantilist policies toward colonies often aimed to…",
          choices: [
            "Let colonies freely trade with all nations equally",
            "Benefit the mother country’s wealth through controlled trade",
            "End colonial agriculture",
            "Guarantee democratic votes for all adults",
          ],
          correctIndex: 1,
          explain: "Empires treated colonies as sources of raw goods and markets.",
        },
      ],
    },
    {
      id: "us-revolution",
      title: "Revolution & Constitution",
      blurb: "Rights, Articles, framing debates.",
      questions: [
        {
          id: "us3",
          prompt: "The Declaration of Independence drew heavily on ideas about…",
          choices: ["Divine right of kings", "Natural rights and consent of the governed", "Feudal obligations", "Mercantilist quotas"],
          correctIndex: 1,
          explain: "Lockean language about life, liberty, and pursuing welfare shapes its logic.",
        },
        {
          id: "us4",
          prompt: "The Articles of Confederation weakness often cited before the Constitution was…",
          choices: [
            "Too strong a president",
            "Weak central revenue and enforcement power",
            "Universal suffrage",
            "Banned slavery nationwide",
          ],
          correctIndex: 1,
          explain: "Shays-type crises highlighted inability to coordinate debts and security.",
        },
      ],
    },
    {
      id: "us-civil",
      title: "Civil War era",
      blurb: "Causes, emancipation, outcomes.",
      questions: [
        {
          id: "us5",
          prompt: "Debates over slavery’s expansion often centered on…",
          choices: [
            "Whether to colonize Mars",
            "Balance of free vs slave states and federal power",
            "Stock market indexes",
            "Women’s suffrage exclusively",
          ],
          correctIndex: 1,
          explain: "Westward expansion repeatedly reopened sectional conflict.",
        },
      ],
    },
    {
      id: "us-gilded",
      title: "Industrial America",
      blurb: "Labor, immigration, reform.",
      questions: [
        {
          id: "us6",
          prompt: "Gilded Age politics often featured…",
          choices: [
            "No inequality",
            "Machine politics and sharp wealth divides alongside rapid industrial growth",
            "Universal healthcare",
            "End of railroads",
          ],
          correctIndex: 1,
          explain: "Growth collided with corruption fights and labor unrest.",
        },
      ],
    },
  ],
};
