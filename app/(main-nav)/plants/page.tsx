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

// Temporary lighter type to match what getAll() returns
type PlantWithoutFamily = Omit<Plant, "family">;

type PlantFamilyForList = Omit<PlantFamily, "Plant"> & {
  Plant: PlantWithoutFamily[];
};


export default async function PlantsPage() {
const plantsData = (await PlantFamilyRepository.getAll()) as unknown as PlantFamily[];
  return <PlantsList plantsData={plantsData} />;
}
