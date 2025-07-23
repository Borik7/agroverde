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
const data = [
  {
    id: "ff72e93c-f68a-4527-bed8-40af9dd053a9",
    name: "Սպիտակ",
    area: "Լոռու մարզ",
    longitude: "44.270416",
    latitude: "40.830741",
    temperature: 17,
    winterTemperature: -20,
    rainfall: 600,
    humidity: "70%",
    season: "Ձմեռը սառը, ամառը մեղմ",
    createdAt: "2025-07-21T07:08:56.116Z",
    updatedAt: "2025-07-21T07:08:56.116Z",
    soilId: "45a59413-9ce7-491a-9943-b0cdc80e64d9",
    soil: {
      id: "45a59413-9ce7-491a-9943-b0cdc80e64d9",
      name: "Լեռնային սևահողեր",
      createdAt: "2025-07-21T07:08:56.110Z",
      updatedAt: "2025-07-21T07:08:56.110Z",
    },
  },
  {
    id: "0bcdd54b-c435-46da-9e63-7e1c0228e19f",
    name: "Հոբարձի",
    area: "Լոռու մարզ",
    longitude: "44.495667",
    latitude: "40.959921",
    temperature: 16,
    winterTemperature: -20,
    rainfall: 610,
    humidity: "71%",
    season: "Ձմեռը սառը, ամառը մեղմ",
    createdAt: "2025-07-21T07:08:56.119Z",
    updatedAt: "2025-07-21T07:08:56.119Z",
    soilId: "45a59413-9ce7-491a-9943-b0cdc80e64d9",
    soil: {
      id: "45a59413-9ce7-491a-9943-b0cdc80e64d9",
      name: "Լեռնային սևահողեր",
      createdAt: "2025-07-21T07:08:56.110Z",
      updatedAt: "2025-07-21T07:08:56.110Z",
    },
  },
  {
    id: "5e023638-8d00-4726-94bf-66a4271a522e",
    name: "Ղուրսալի",
    area: "Լոռու մարզ",
    longitude: "44.335027",
    latitude: "40.832351",
    temperature: 17,
    winterTemperature: -21,
    rainfall: 615,
    humidity: "71%",
    season: "Ձմեռը սառը, ամառը մեղմ",
    createdAt: "2025-07-21T07:08:56.121Z",
    updatedAt: "2025-07-21T07:08:56.121Z",
    soilId: "45a59413-9ce7-491a-9943-b0cdc80e64d9",
    soil: {
      id: "45a59413-9ce7-491a-9943-b0cdc80e64d9",
      name: "Լեռնային սևահողեր",
      createdAt: "2025-07-21T07:08:56.110Z",
      updatedAt: "2025-07-21T07:08:56.110Z",
    },
  },
];

export default async function RegionPage() {
  // const regions = await RegionsRepository.getAll();

  return <RegionList regions={data} />;
}
