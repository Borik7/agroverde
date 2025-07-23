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
  // const regions = await RegionsRepository.getAll();
  const regions = [
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
  // const families = await PlantFamilyRepository.getAllByCategory([
  //   "Բանջարեղեն",
  //   "Հացահատիկ",
  // ]);
  const families = [
    {
      id: "2b1d7594-8cfe-4f5d-a9d1-8ba8bc0207bd",
      name: "Սպինացի",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:56.756Z)",
      updatedAt: "(2025-07-21T07:08:56.756Z)",
    },
    {
      id: "407df941-cdcf-4357-8b01-bfaa61c79298",
      name: "Գազար",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:56.934Z)",
      updatedAt: "(2025-07-21T07:08:56.934Z)",
    },
    {
      id: "ff62f186-fae4-4257-9946-07d6318d74e6",
      name: "Լոլիկ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:56.977Z)",
      updatedAt: "(2025-07-21T07:08:56.977Z)",
    },
    {
      id: "74ad878f-88e1-40ef-b63d-5c4996731e8f",
      name: "Վարունգ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.004Z)",
      updatedAt: "(2025-07-21T07:08:57.004Z)",
    },
    {
      id: "67b51cd2-a4f9-41dd-9241-ba8aa7ae15f3",
      name: "Պղպեղ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.031Z)",
      updatedAt: "(2025-07-21T07:08:57.031Z)",
    },
    {
      id: "f2f53614-fe60-4884-86ad-84558bffc859",
      name: "Սմբուկ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.072Z)",
      updatedAt: "(2025-07-21T07:08:57.072Z)",
    },
    {
      id: "14a5dedf-ee76-4a05-8fb8-3b4d52c1f1eb",
      name: "Կարտոֆիլ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.080Z)",
      updatedAt: "(2025-07-21T07:08:57.080Z)",
    },
    {
      id: "8df9048c-9ea4-4afb-b943-0e59815fe261",
      name: "Սոխ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.103Z)",
      updatedAt: "(2025-07-21T07:08:57.103Z)",
    },
    {
      id: "5d0984ae-5f24-4e6d-9ebc-2587923e4cb7",
      name: "Սխտոր",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.124Z)",
      updatedAt: "(2025-07-21T07:08:57.124Z)",
    },
    {
      id: "3e0c19b8-b5ff-4a7f-a9ca-336ed6c5ed9d",
      name: "Բազուկ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.143Z)",
      updatedAt: "(2025-07-21T07:08:57.143Z)",
    },
    {
      id: "01d1858d-371c-4870-81f0-d3be5c8419e7",
      name: "Կաղամբ",
      category: "Բանջարեղեն",
      createdAt: "(2025-07-21T07:08:57.168Z)",
      updatedAt: "(2025-07-21T07:08:57.168Z)",
    },
    {
      id: "72097dfb-22f7-4363-8cbe-2f896a52fb6c",
      name: "Ցորեն",
      category: "Հացահատիկ",
      createdAt: "(2025-07-21T07:08:57.193Z)",
      updatedAt: "(2025-07-21T07:08:57.193Z)",
    },
    {
      id: "bf8a7324-dc5d-4287-bde3-42fb2656b783",
      name: "Գարի",
      category: "Հացահատիկ",
      createdAt: "(2025-07-21T07:08:57.225Z)",
      updatedAt: "(2025-07-21T07:08:57.225Z)",
    },
    {
      id: "abe1fb0b-2295-441c-bff1-2151fa8ffac2",
      name: "Եգիպտացորեն",
      category: "Հացահատիկ",
      createdAt: "(2025-07-21T07:08:57.252Z)",
      updatedAt: "(2025-07-21T07:08:57.252Z)",
    },
    {
      id: "8ba0b6b6-b3e7-4f36-a166-4f84a0b27fcc",
      name: "Վարսակ",
      category: "Հացահատիկ",
      createdAt: "(2025-07-21T07:08:57.272Z)",
      updatedAt: "(2025-07-21T07:08:57.272Z)",
    },
    {
      id: "737cc6b7-a66c-49af-bf64-a40e437b0686",
      name: "Կորեկ",
      category: "Հացահատիկ",
      createdAt: "(2025-07-21T07:08:57.298Z)",
      updatedAt: "(2025-07-21T07:08:57.298Z)",
    },
    {
      id: "33dfdc0a-60c8-4750-8e7e-069598fe8451",
      name: "Հնդկացորեն",
      category: "Հացահատիկ",
      createdAt: "(2025-07-21T07:08:57.315Z)",
      updatedAt: "(2025-07-21T07:08:57.315Z)",
    },
    {
      id: "2dca9541-c0ba-4135-90e9-c0d0f8d960f9",
      name: "Տրիտիկալե",
      category: "Հացահատիկ",
      createdAt: "(2025-07-21T07:08:57.339Z)",
      updatedAt: "(2025-07-21T07:08:57.339Z)",
    },
  ];

  return <RotationList regions={regions} families={families} />;
}
