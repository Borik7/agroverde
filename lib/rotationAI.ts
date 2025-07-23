import { GoogleGenAI } from "@google/genai";
import { RegionsRepository } from "./repositories/regions.repository";
import { PlantFamilyRepository } from "./repositories/plantFamily.repository";

export async function fetchRotationAI({
  regionId,
  firstYearFamily,
  secondYearFamily,
}: {
  regionId: string;
  firstYearFamily: string;
  secondYearFamily: string;
}): Promise<string> {
  // const region = await RegionsRepository.getById(regionId);
  // if (region === null) return "Region not found";
  // const firstYearPlant = await PlantFamilyRepository.getById(firstYearFamily);
  // if (firstYearPlant === null) return "First year plant not found";
  // const secondYearPlant = await PlantFamilyRepository.getById(secondYearFamily);
  // if (secondYearPlant === null) return "Second year plant not found";
  //? add region Validation
  const prompt = makePromptForAI(
    "Սպիտակ",
    "Լեռնային սևահողեր",
    "Լոլիկ",
    "Կարտոֆիլ"
  );
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  const result = response.text;
  if (result === undefined) return "Result not found";
  return result;
}

function makePromptForAI(
  regionName: string,
  regionSoilType: string,
  firstYearFamily: string,
  secondYearFamily: string
): string {
  return `Հաշվի առնելով հետևյալ տվյալները՝ առաջարկիր կարճաժամկետ պլան Բերքատու մշակաբույսերի հերթագայության համար (2–3 տարի), նպատակ ունենալով հողի բարելավում և բարձր բերքատվություն։

- 📍 Գյուղ / քաղաք: ${regionName}
- 🧱 Հողի տեսակ: ${regionSoilType}
- 🌾 2025 թվականին աճեցված մշակաբույս: ${secondYearFamily}
- 🌿 2024 թվականին աճեցված մշակաբույս: ${firstYearFamily}

📌 Պատասխանը տուր միայն որպես **HTML**, որը կարելի է տեղադրել \`<div class="text-lg font-semibold">...</div>\` բաժնում։ Օգտագործիր միայն Tailwind CSS դասեր, որպեսզի արդյունքը լինի գեղեցիկ և կարդացվող:

- Յուրաքանչյուր տարի (Տարի 1, Տարի 2...) պետք է լինի \`<div class="mb-4">\`
- Վերնագիր տարիների համար՝ \`<h4 class="text-green-700 font-semibold">\`
- Մշակաբույսը՝ \`<p class="mt-1"><span class="font-medium">Մշակաբույսը:</span> ...</p>\`
- Պատճառը՝ \`<p class="text-sm text-gray-700"><span class="font-medium">Պատճառը (կարճ):</span> ...</p>\`

Ոչ Markdown, ոչ պարզ տեքստ — միայն HTML + Tailwind CSS, որը կարելի է անմիջապես ներմուծել React Card-ում։
`;
}
