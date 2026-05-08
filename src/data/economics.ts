import type { Subject } from "../types";

export const economics: Subject = {
  id: "economics",
  name: "Economics",
  shortName: "Econ",
  tagline: "Choices, markets, and policy basics",
  topics: [
    {
      id: "eco-micro",
      title: "Supply & demand",
      blurb: "Equilibrium, shifters, elasticity intuition.",
      questions: [
        {
          id: "ec1",
          prompt: "Ceteris paribus, higher prices usually…",
          choices: [
            "Increase quantity supplied along a supply curve",
            "Decrease quantity demanded along a demand curve",
            "Both A and B in basic competitive markets",
            "Have no effect ever",
          ],
          correctIndex: 2,
          explain: "Price moves you along curves; shifters move whole curves.",
        },
        {
          id: "ec2",
          prompt: "A binding price ceiling set below equilibrium tends to cause…",
          choices: ["Surpluses", "Shortages", "Instant balance", "Higher quality always"],
          correctIndex: 1,
          explain: "Legal max below market-clearing price encourages excess demand.",
        },
      ],
    },
    {
      id: "eco-structures",
      title: "Market structures",
      blurb: "Competition, monopoly basics.",
      questions: [
        {
          id: "ec3",
          prompt: "A pure monopoly’s market power partly stems from…",
          choices: [
            "Perfectly elastic demand",
            "High barriers preventing easy entry of rivals",
            "Free unlimited entry",
            "Identical products from infinite firms",
          ],
          correctIndex: 1,
          explain: "Without substitutes or entrants, price-setting room grows.",
        },
      ],
    },
    {
      id: "eco-macro",
      title: "Macro snapshots",
      blurb: "GDP, inflation, unemployment basics.",
      questions: [
        {
          id: "ec4",
          prompt: "GDP aims to measure…",
          choices: [
            "Total happiness scores",
            "Market value of finished goods/services produced in a period",
            "Only government spending",
            "Stock prices only",
          ],
          correctIndex: 1,
          explain: "Definitions exclude non-market transfers and focus on production boundaries.",
        },
      ],
    },
    {
      id: "eco-personal",
      title: "Personal finance hooks",
      blurb: "Interest, budgeting intuition.",
      questions: [
        {
          id: "ec5",
          prompt: "Compound interest growth accelerates relative to simple interest because…",
          choices: [
            "Principal earns interest, then future interest applies to a larger base",
            "Banks never lend",
            "Inflation stops",
            "Time shrinks",
          ],
          correctIndex: 0,
          explain: "Earnings-on-earnings snowball over periods.",
        },
      ],
    },
  ],
};
