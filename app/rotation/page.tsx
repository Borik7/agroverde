import { RegionsRepository } from "@/lib/repositories/regions.repository";
import RotationList from "./rotationList";
import { PlantFamilyRepository } from "@/lib/repositories/plantFamily.repository";

// interface Region {
//   id: string;
//   name: string;
// }

// interface Plant {
//   id: string;
//   name: string;
// }

// interface AIResponse {
//   crop: string;
//   recommendation: string;
//   reasons: string[];
// }

export default async function RotationPage() {
  const regions = await RegionsRepository.getAll();
  const families = await PlantFamilyRepository.getAllByCategory([
    "Բանջարեղեն",
    "Հացահատիկ",
  ]);

  return <RotationList regions={regions} families={families} />;
}
