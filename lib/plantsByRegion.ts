import { PlantRepository } from "./repositories/plant.repository";
import { RegionsRepository } from "./repositories/regions.repository";

export async function getPlantsByRegion(regionId: string) {
  const region = await RegionsRepository.getById(regionId);
  if (region === null) return "Region not found";

  const plants = await PlantRepository.getManyByAllCategories(
    region.temperature,
    region.rainfall,
    region.soilId
  );
  console.log("-plants:", plants);

  return plants;
}
