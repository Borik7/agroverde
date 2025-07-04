import RegionList from "./regionList";
import { RegionsRepository } from "@/lib/repositories/regions.repository";

interface Region {
  id: string;
  name: string;
  area: string;
  longitude: string;
  latitude: string;
  temperature: string;
  rainfall: string;
  humidity: string;
  season: string;
  soil: {
    id: string;
    name: string;
  };
}

export default async function RegionPage() {
  const regions = await RegionsRepository.getAll();

  return <RegionList regions={regions} />;
}
