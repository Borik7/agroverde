import { PlantFamilyRepository } from "@/lib/repositories/plantFamily.repository";
import PlantsList from "./pageList";

type Plant = {
  id: string;
  name: string;
  plantFamilyId: string;
  minTemperature: number;
  maxTemperature: number;
  minPrecipitation: number;
  maxPrecipitation: number;
  imagePath: string;
  family: string;
  description: string;
  winterProtection: string;
  airHumidity: string;
  sunRequirement: string;
  depthOfGroundwater: string;
  seaLevel: string;
  growingSeason: string;
  fertilityBegins: string;
  averageYield: string;
  frostResistance: string;
  susceptibilityToDiseases: string;
  createdAt: string;
  updatedAt: string;
};

type PlantFamily = {
  id: string;
  name: string;
  category: string;
  Plant: Plant[];
  createdAt: string;
  updatedAt: string;
};

const staticData = [
  {
    id: "62ab8762-7483-4992-87a0-afc63f085ee1",
    name: "Դեղձ",
    category: "Միրգ",
    createdAt: "2025-07-21T07:08:56.523Z",
    updatedAt: "2025-07-21T07:08:56.523Z",
    Plant: [
      {
        id: "4b4b9cf0-0e74-4867-a16e-563fb52a3669",
        name: "Էրզրումի դեղձ",
        plantFamilyId: "62ab8762-7483-4992-87a0-afc63f085ee1",
        minTemperature: 18,
        maxTemperature: 30,
        minPrecipitation: 500,
        maxPrecipitation: 800,
        imagePath: "/plantsPage/erzrum.jpg",
        description:
          "Տեղական հայկական սորտ, պատմականորեն՝ Արևմտյան Հայաստան (Էրզրում)",
        winterProtection: "Ձմռանը դիմացկուն մինչև –25°C",
        airHumidity: "40-70%",
        sunRequirement: "Բարձր",
        depthOfGroundwater: "≥1.5 մ",
        seaLevel: "600–1600 մ",
        growingSeason: "Ապրիլ – Սեպտեմբեր",
        fertilityBegins: "3–4 տարեկանից",
        averageYield: "15–30 կգ",
        frostResistance: -25,
        susceptibilityToDiseases: "Միջին",
        createdAt: "2025-07-21T07:08:56.525Z",
        updatedAt: "2025-07-21T07:08:56.525Z",
      },
      {
        id: "3a0f47fc-0887-459e-94ce-bc10d3a617eb",
        name: "Saturn (Flat Peach)",
        plantFamilyId: "62ab8762-7483-4992-87a0-afc63f085ee1",
        minTemperature: 18,
        maxTemperature: 30,
        minPrecipitation: 600,
        maxPrecipitation: 900,
        imagePath: "/plantsPage/saturn.jpg",
        description: "Ամերիկյան ծագում",
        winterProtection:
          "Ձմռանը դիմացկուն մինչև –15°C (միջին դիմացկունություն)",
        airHumidity: "40-70%",
        sunRequirement: "Բարձր",
        depthOfGroundwater: "≥1.5 մ",
        seaLevel: "0–1200 մ",
        growingSeason: "Ապրիլ – Սեպտեմբեր",
        fertilityBegins: "3 տարեկանից",
        averageYield: "12–20 կգ",
        frostResistance: -15,
        susceptibilityToDiseases: "Ցածր (տարածված հիվանդություններին դիմադրող)",
        createdAt: "2025-07-21T07:08:56.534Z",
        updatedAt: "2025-07-21T07:08:56.534Z",
      },
      {
        id: "9f61cdee-7cfa-4571-8a34-0d732237586d",
        name: "Հարանցի",
        plantFamilyId: "62ab8762-7483-4992-87a0-afc63f085ee1",
        minTemperature: 18,
        maxTemperature: 28,
        minPrecipitation: 550,
        maxPrecipitation: 800,
        imagePath: "/plantsPage/haranci.jpg",
        description:
          "Տեղական հայկական սորտ, տարածված է Վայոց Ձոր և Սյունիք մարզերում",
        winterProtection: "Ձմռանը դիմացկուն մինչև –22°C",
        airHumidity: "45-70%",
        sunRequirement: "Բարձր",
        depthOfGroundwater: "≥1.5 մ",
        seaLevel: "700–1400 մ",
        growingSeason: "Ապրիլ – Սեպտեմբեր",
        fertilityBegins: "3–4 տարեկանից",
        averageYield: "18–25 կգ",
        frostResistance: -22,
        susceptibilityToDiseases: "Միջին (պահանջում է կանոնավոր մշակում)",
        createdAt: "2025-07-21T07:08:56.546Z",
        updatedAt: "2025-07-21T07:08:56.546Z",
      },
      {
        id: "ff268937-ab3d-4cd0-89e0-08eef149a69f",
        name: "Redhaven",
        plantFamilyId: "62ab8762-7483-4992-87a0-afc63f085ee1",
        minTemperature: 18,
        maxTemperature: 30,
        minPrecipitation: 600,
        maxPrecipitation: 900,
        imagePath: "/plantsPage/redhaven.jpg",
        description:
          "Ամերիկյան սորտ, շատ տարածված աշխարհում, հատկապես կլիմայական ճնշումներին դիմացկուն",
        winterProtection: "Ձմռանը դիմացկուն մինչև –20°C",
        airHumidity: "40-70%",
        sunRequirement: "Բարձր",
        depthOfGroundwater: "≥1.5 մ",
        seaLevel: "0–1200 մ",
        growingSeason: "Ապրիլ – Սեպտեմբեր",
        fertilityBegins: "3 տարեկանից",
        averageYield: "15–25 կգ",
        frostResistance: -20,
        susceptibilityToDiseases: "Միջին",
        createdAt: "2025-07-21T07:08:56.554Z",
        updatedAt: "2025-07-21T07:08:56.554Z",
      },
    ],
  },
  {
    id: "bec5d2f1-55e6-413f-a9db-e581381add01",
    name: "Խնձոր",
    category: "Միրգ",
    createdAt: "2025-07-21T07:08:56.563Z",
    updatedAt: "2025-07-21T07:08:56.563Z",
    Plant: [
      {
        id: "85019c71-b425-41ef-8a96-a7b828a53eea",
        name: "Սիմիրենկո խնձոր",
        plantFamilyId: "bec5d2f1-55e6-413f-a9db-e581381add01",
        minTemperature: 15,
        maxTemperature: 25,
        minPrecipitation: 600,
        maxPrecipitation: 1000,
        imagePath: "/plantsPage/simirenko.jpg",
        description: "Ուկրաինա, հին ԽՍՀՄ տարածքում լայնորեն տարածված սորտ",
        winterProtection:
          "Ձմռանը դիմացկուն մինչև –25°C (բարձր ցրտադիմացկունություն)",
        airHumidity: "50-80%",
        sunRequirement: "Միջինից բարձր",
        depthOfGroundwater: "≥1.5 մ",
        seaLevel: "600–1500 մ",
        growingSeason: "Ապրիլ – Հոկտեմբեր",
        fertilityBegins: "4 տարեկանից",
        averageYield: "30–40 կգ",
        frostResistance: -25,
        susceptibilityToDiseases:
          "Միջին (խոցելի է որոշ սնկային հիվանդությունների հանդեպ)",
        createdAt: "2025-07-21T07:08:56.565Z",
        updatedAt: "2025-07-21T07:08:56.565Z",
      },
      {
        id: "2fa3311c-19f0-467b-8930-b7f4faf57bf8",
        name: "Բելֆլոր",
        plantFamilyId: "bec5d2f1-55e6-413f-a9db-e581381add01",
        minTemperature: 16,
        maxTemperature: 26,
        minPrecipitation: 600,
        maxPrecipitation: 900,
        imagePath: "/plantsPage/bellefleur.jpg",
        description:
          "Ֆրանսիա (XIX դար), տարածված է Կովկասում որպես դասական եվրոպական սորտ",
        winterProtection: "Ձմռանը դիմացկուն մինչև –20°C",
        airHumidity: "50-75%",
        sunRequirement: "Բարձր",
        depthOfGroundwater: "≥1.2 մ",
        seaLevel: "600–1500 մ",
        growingSeason: "Ապրիլ – Հոկտեմբեր",
        fertilityBegins: "4–5 տարեկանից",
        averageYield: "25–35 կգ",
        frostResistance: -20,
        susceptibilityToDiseases:
          "Բարձր (հատկապես՝ խնձորի խեժոտություն, միլդիո)",
        createdAt: "2025-07-21T07:08:56.573Z",
        updatedAt: "2025-07-21T07:08:56.573Z",
      },
      {
        id: "1855f836-13c5-4082-9205-6faf4d7cc986",
        name: "Գոլդեն Դելիշես խնձոր",
        plantFamilyId: "bec5d2f1-55e6-413f-a9db-e581381add01",
        minTemperature: 16,
        maxTemperature: 28,
        minPrecipitation: 600,
        maxPrecipitation: 900,
        imagePath: "/plantsPage/golden-delicious.jpg",
        description: "ԱՄՆ, 1914թ․, լայնորեն տարածված ամբողջ աշխարհում",
        winterProtection: "Ձմռանը դիմացկուն մինչև –18°C",
        airHumidity: "50-75%",
        sunRequirement: "Բարձր",
        depthOfGroundwater: "≥1.5 մ",
        seaLevel: "400–1200 մ",
        growingSeason: "Ապրիլ – Հոկտեմբեր",
        fertilityBegins: "4–5 տարեկանից",
        averageYield: "30–45 կգ",
        frostResistance: -18,
        susceptibilityToDiseases:
          "Միջինից բարձր (հատկապես՝ բորբոս, միլդիո, խնձորի խեժոտություն)",
        createdAt: "2025-07-21T07:08:56.584Z",
        updatedAt: "2025-07-21T07:08:56.584Z",
      },
    ],
  },
];
export default async function PlantsPage() {
  // const plantsData = (await PlantFamilyRepository.getAll()) as PlantFamily[];
  return <PlantsList plantsData={staticData} />;
}
