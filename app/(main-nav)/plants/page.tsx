import { PlantFamilyRepository } from "@/lib/repositories/plantFamily.repository";
import PlantsList from "./pageList";

export type PlantListItem = {
  id: string;
  name: string;
  plantFamilyId: string;
  minTemperature: number;
  maxTemperature: number;
  minPrecipitation: number;
  maxPrecipitation: number;
  imagePath: string;
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
  family: string; // ensure present for the UI
  createdAt: string; // ISO string for client component
  updatedAt: string; // ISO string for client component
};

export type PlantFamilyListItem = {
  id: string;
  name: string;
  category: string;
  Plant: PlantListItem[];
  createdAt: string; // ISO
  updatedAt: string; // ISO
};

export default async function PlantsPage() {
  const raw = await PlantFamilyRepository.getAll();

  // Shape data for the client: add `family`, serialize Dates
  const plantsData: PlantFamilyListItem[] = (raw as any[]).map((f: any) => ({
    id: f.id,
    name: f.name,
    category: f.category,
    createdAt: new Date(f.createdAt).toISOString(),
    updatedAt: new Date(f.updatedAt).toISOString(),
    Plant: (f.Plant ?? []).map((p: any) => ({
      id: p.id,
      name: p.name,
      plantFamilyId: p.plantFamilyId,
      minTemperature: p.minTemperature,
      maxTemperature: p.maxTemperature,
      minPrecipitation: p.minPrecipitation,
      maxPrecipitation: p.maxPrecipitation,
      imagePath: p.imagePath,
      description: p.description,
      winterProtection: p.winterProtection,
      airHumidity: p.airHumidity,
      sunRequirement: p.sunRequirement,
      depthOfGroundwater: p.depthOfGroundwater,
      seaLevel: p.seaLevel,
      growingSeason: p.growingSeason,
      fertilityBegins: p.fertilityBegins,
      averageYield: p.averageYield,
      frostResistance: p.frostResistance,
      susceptibilityToDiseases: p.susceptibilityToDiseases,
      family: p.family ?? f.name, // fill if missing
      createdAt: new Date(p.createdAt).toISOString(),
      updatedAt: new Date(p.updatedAt).toISOString(),
    })),
  }));

  return <PlantsList plantsData={plantsData} />;
}
