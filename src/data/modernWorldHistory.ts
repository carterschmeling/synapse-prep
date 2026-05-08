import type { Subject } from "../types";

export const modernWorldHistory: Subject = {
  id: "modern-world-history",
  name: "Modern World History",
  shortName: "Modern WH",
  tagline: "Industrial age through Cold War & beyond",
  topics: [
    {
      id: "mwh-industrial",
      title: "Industrialization & imperialism",
      blurb: "Factories, nationalism, scramble for colonies.",
      questions: [
        {
          id: "mw-i1",
          prompt: "Industrialization most directly reshaped daily life by…",
          choices: [
            "Eliminating cities entirely",
            "Creating wage labor, factories, and new class tensions",
            "Ending all trade",
            "Stopping technological change",
          ],
          correctIndex: 1,
          explain:
            "Machines + fossil fuels shifted work rhythms, migration, and inequality.",
        },
        {
          id: "mw-i2",
          prompt: "European imperialism in Africa (late 1800s) often combined…",
          choices: [
            "Random borders only",
            "Military force, diplomacy, economic extraction, and racist ideology",
            "Pure volunteer cooperation only",
            "Complete rejection of technology",
          ],
          correctIndex: 1,
          explain:
            "Historians emphasize multiple drivers—profit, power, prestige, and “civilizing” myths.",
        },
      ],
    },
    {
      id: "mwh-ww1",
      title: "World War I & aftermath",
      blurb: "Causes, trench war, Treaty of Versailles tensions.",
      questions: [
        {
          id: "mw-w1",
          prompt: "Which long-term tension is commonly cited before WWI?",
          choices: [
            "Global internet regulation",
            "Militarism, alliances, imperial rivalry, nationalism",
            "Moon colonization",
            "Universal free trade with no conflict",
          ],
          correctIndex: 1,
          explain:
            "The classic “MAIN” frame isn’t the whole story but captures big pressures.",
        },
        {
          id: "mw-w2",
          prompt: "The Treaty of Versailles (1919) contributed to later instability partly because…",
          choices: [
            "It rewarded Germany with massive colonies",
            "War guilt clauses, reparations, and territorial losses fed resentment in Germany",
            "It banned all European armies forever",
            "It ignored the League entirely",
          ],
          correctIndex: 1,
          explain:
            "Historians debate degrees, but punitive terms mattered in interwar politics.",
        },
      ],
    },
    {
      id: "mwh-interwar",
      title: "Interwar years & rise of dictators",
      blurb: "Depression, fascism, Stalinism—contrasts and causes.",
      questions: [
        {
          id: "mw-n1",
          prompt: "The Great Depression spread globally partly through…",
          choices: [
            "Closed economies only",
            "Bank failures, trade contraction, and reduced lending across borders",
            "Stable wheat prices everywhere",
            "Universal healthcare",
          ],
          correctIndex: 1,
          explain:
            "Financial links meant crashes rippled—people demanded radical solutions.",
        },
        {
          id: "mw-n2",
          prompt: "Fascist movements often promised…",
          choices: [
            "Classless utopia without nationalism",
            "National renewal through authoritarian leadership and violent exclusion",
            "Pacifism only",
            "Immediate world government",
          ],
          correctIndex: 1,
          explain:
            "Ideologies varied, but glorifying nation/race and crushing dissent were core patterns.",
        },
      ],
    },
    {
      id: "mwh-ww2",
      title: "World War II",
      blurb: "Aggression, total war, Holocaust, turning points.",
      questions: [
        {
          id: "mw-2a",
          prompt: "The Holocaust refers centrally to…",
          choices: [
            "Only battles on the Eastern Front",
            "Nazi Germany’s systematic genocide targeting Jews and persecuting many groups",
            "Economic competition between Britain and France",
            "The Pacific island campaign alone",
          ],
          correctIndex: 1,
          explain:
            "Industrial-scale murder and ideology—central to WWII-era crimes against humanity.",
        },
        {
          id: "mw-2b",
          prompt: "A major turning point opening a western front against Nazi Germany was…",
          choices: [
            "Pearl Harbor alone",
            "D-Day (Allied invasion of Normandy, 1944)",
            "Treaty of Versailles signing",
            "Berlin Airlift",
          ],
          correctIndex: 1,
          explain:
            "Opening France pressured Germany from west while Soviets pressed east.",
        },
      ],
    },
    {
      id: "mwh-cold-war",
      title: "Cold War",
      blurb: "Containment, proxy wars, nuclear dread.",
      questions: [
        {
          id: "mw-c1",
          prompt: "Early Cold War Europe was often described as divided by…",
          choices: [
            "The Berlin Olympics only",
            "An “iron curtain” between Soviet-dominated east and western allies",
            "A single world government",
            "Decolonization only in Asia",
          ],
          correctIndex: 1,
          explain:
            "Churchill’s metaphor captured spheres of influence hardening after WWII.",
        },
        {
          id: "mw-c2",
          prompt: "Proxy wars during the Cold War meant…",
          choices: [
            "No violence anywhere",
            "US and USSR often backed opposing sides indirectly rather than fighting direct total war",
            "Only economic aid",
            "Space races only",
          ],
          correctIndex: 1,
          explain:
            "Korea, Vietnam, Afghanistan, etc.—superpowers clashed through third parties.",
        },
      ],
    },
    {
      id: "mwh-decolonization",
      title: "Decolonization & globalization",
      blurb: "New nations, Cold War competition, modern ties.",
      questions: [
        {
          id: "mw-d1",
          prompt: "Decolonization after WWII happened because…",
          choices: [
            "Empires voluntarily vanished overnight without struggle everywhere",
            "Anti-colonial movements, weakened empires, international politics, and varying bargains combined",
            "Only one treaty ended all colonies in 1945",
            "Cold War ignored colonies",
          ],
          correctIndex: 1,
          explain:
            "Paths differed—India, Algeria, Vietnam—share pressures but not identical stories.",
        },
        {
          id: "mw-d2",
          prompt: "Globalization since the late 1900s often involves…",
          choices: [
            "Complete end of trade",
            "Denser flows of goods, capital, ideas—and debates over winners/losers",
            "Isolation of every economy",
            "Deletion of technology",
          ],
          correctIndex: 1,
          explain:
            "Integration connects growth with inequality and cultural change.",
        },
      ],
    },
  ],
};
