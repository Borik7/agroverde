import { getPlantsByRegion } from "@/lib/plantsByRegion";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // const body = await req.json();

    // const { regionId } = body;

    // if (!regionId) {
    //   return NextResponse.json(
    //     { error: "Missing required fields" },
    //     { status: 400 }
    //   );
    // }
    // const result = await getPlantsByRegion(regionId);

    const staticData = [
      {
        id: "336c0e9e-4060-4b11-b7eb-a890b1fa4e38",
        name: "Դեմերչյան",
        plantFamilyId: "bec5d2f1-55e6-413f-a9db-e581381add01",
        minTemperature: 12,
        maxTemperature: 24,
        minPrecipitation: 600,
        maxPrecipitation: 1100,
        imagePath: "/plantsPage/demertsyan.jpg",
        description:
          "Տեղական հայկական սորտ, տարածված Լոռի, Տավուշ, Սյունիք տարածաշրջաններում",
        winterProtection:
          "Ձմռանը դիմացկուն մինչև –28°C (շատ բարձր ցրտադիմացկունություն)",
        airHumidity: "45-75%",
        sunRequirement: "Միջին (օրական ≥4-5 ժամ ուղիղ արև)",
        depthOfGroundwater: "≥1.3 մ",
        seaLevel: "700–1600 մ",
        growingSeason: "Ապրիլ – Սեպտեմբեր",
        fertilityBegins: "4–5 տարեկանից",
        averageYield: "20–30 կգ",
        frostResistance: -28,
        susceptibilityToDiseases: "Ցածր",
        createdAt: "2025-07-21T07:08:56.638Z",
        updatedAt: "2025-07-21T07:08:56.638Z",
        plantFamily: {
          id: "bec5d2f1-55e6-413f-a9db-e581381add01",
          name: "Խնձոր",
          category: "Միրգ",
          createdAt: "2025-07-21T07:08:56.563Z",
          updatedAt: "2025-07-21T07:08:56.563Z",
        },
      },
      {
        id: "f2299e07-8a82-4f50-8798-bb4249cf9fc0",
        name: "Սարայի խնձոր",
        plantFamilyId: "bec5d2f1-55e6-413f-a9db-e581381add01",
        minTemperature: 10,
        maxTemperature: 22,
        minPrecipitation: 500,
        maxPrecipitation: 900,
        imagePath: "/plantsPage/sara.jpg",
        description:
          "Տեղական հայկական սորտ, տարածված հատկապես Լոռի, Սյունիք, Վայոց Ձոր և Տավուշի լեռնային շրջաններում",
        winterProtection:
          "Ձմռանը դիմացկուն մինչև –30°C (շատ բարձր ցրտադիմացկունություն)",
        airHumidity: "40-70%",
        sunRequirement: "Միջին (օրական ≥4-5 ժամ արև)",
        depthOfGroundwater: "≥1.5 մ",
        seaLevel: "900–1800 մ",
        growingSeason: "Մայիս – Սեպտեմբեր",
        fertilityBegins: "5–7 տարեկանից",
        averageYield: "10–20 կգ",
        frostResistance: -30,
        susceptibilityToDiseases: "Ցածր",
        createdAt: "2025-07-21T07:08:56.634Z",
        updatedAt: "2025-07-21T07:08:56.634Z",
        plantFamily: {
          id: "bec5d2f1-55e6-413f-a9db-e581381add01",
          name: "Խնձոր",
          category: "Միրգ",
          createdAt: "2025-07-21T07:08:56.563Z",
          updatedAt: "2025-07-21T07:08:56.563Z",
        },
      },
      {
        id: "846e592f-7035-4f13-b546-b5d1ec94253a",
        name: "Ղարդաբանի",
        plantFamilyId: "bec5d2f1-55e6-413f-a9db-e581381add01",
        minTemperature: 14,
        maxTemperature: 26,
        minPrecipitation: 600,
        maxPrecipitation: 1000,
        imagePath: "/plantsPage/qardabani.jpg",
        description:
          "Վրաստան, Ղարդաբանի շրջան (լեռնային պայմաններին հարմարեցված տեղական սորտ)",
        winterProtection: "Ձմռանը դիմացկուն մինչև –25°C",
        airHumidity: "50-75%",
        sunRequirement: "Բարձր (օրվա ≥6 ժամ ուղիղ արև)",
        depthOfGroundwater: "≥1.3 մ",
        seaLevel: "700–1500 մ",
        growingSeason: "Ապրիլ – Սեպտեմբեր",
        fertilityBegins: "3–4 տարեկանից",
        averageYield: "20–35 կգ",
        frostResistance: -25,
        susceptibilityToDiseases: "Միջին (պահանջում է սեզոնային մշակում)",
        createdAt: "2025-07-21T07:08:56.626Z",
        updatedAt: "2025-07-21T07:08:56.626Z",
        plantFamily: {
          id: "bec5d2f1-55e6-413f-a9db-e581381add01",
          name: "Խնձոր",
          category: "Միրգ",
          createdAt: "2025-07-21T07:08:56.563Z",
          updatedAt: "2025-07-21T07:08:56.563Z",
        },
      },
      {
        id: "4f8199aa-d73a-4377-9b9d-1cc7d5382ded",
        name: "Մալասիյա տեղական",
        plantFamilyId: "bec5d2f1-55e6-413f-a9db-e581381add01",
        minTemperature: 12,
        maxTemperature: 24,
        minPrecipitation: 500,
        maxPrecipitation: 1000,
        imagePath: "/plantsPage/malasiya.jpg",
        description:
          "Տեղական հայկական վայրի կամ կիսամշակված սորտ, լայն տարածում լեռնային գոտիներում",
        winterProtection:
          "Ձմռանը դիմացկուն մինչև –30°C (շատ բարձր ցրտադիմացկունություն)",
        airHumidity: "45-80%",
        sunRequirement: "Միջինից բարձր",
        depthOfGroundwater: "≥1.2 մ",
        seaLevel: "800–1800 մ",
        growingSeason: "Մայիս – Սեպտեմբեր",
        fertilityBegins: "4–6 տարեկանից",
        averageYield: "15–25 կգ",
        frostResistance: -30,
        susceptibilityToDiseases: "Ցածր (բնական դիմադրողականություն)",
        createdAt: "2025-07-21T07:08:56.620Z",
        updatedAt: "2025-07-21T07:08:56.620Z",
        plantFamily: {
          id: "bec5d2f1-55e6-413f-a9db-e581381add01",
          name: "Խնձոր",
          category: "Միրգ",
          createdAt: "2025-07-21T07:08:56.563Z",
          updatedAt: "2025-07-21T07:08:56.563Z",
        },
      },
    ];

    return NextResponse.json({ staticData });
  } catch (error) {
    console.error("Error in plant-by-region route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
