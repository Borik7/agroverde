"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Thermometer,
  Snowflake,
  Droplets,
  Sun,
  Waves,
  Mountain,
  Calendar,
  Sprout,
  Package,
  ShieldCheck,
  AlertTriangle,
  Info,
} from "lucide-react";

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
};

export default function PlantsList({
  plantsData,
}: {
  plantsData: PlantFamily[];
}) {
  const [expandedFamilyId, setExpandedFamilyId] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const toggleFamily = (id: string) => {
    setExpandedFamilyId((current) => (current === id ? null : id));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const plantId = searchParams.get("plantId");

    if (plantId) {
      const familyWithPlant = plantsData.find((family) =>
        family.Plant.some((p) => p.id === plantId)
      );

      if (familyWithPlant) {
        setExpandedFamilyId(familyWithPlant.id);

        setTimeout(() => {
          const el = document.getElementById(`plant-${plantId}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.classList.add("ring", "ring-green-500", "bg-green-50");
          }
        }, 100);
      }
    }
  }, []);

  // === 🔡 Группировка по категории и сортировка ===
  const groupedByCategory = plantsData.reduce(
    (acc: Record<string, PlantFamily[]>, family) => {
      if (!acc[family.category]) acc[family.category] = [];

      const sortedFamily: PlantFamily = {
        ...family,
        Plant: [...family.Plant].sort((a, b) =>
          a.name.localeCompare(b.name, "hy")
        ),
      };

      acc[family.category].push(sortedFamily);
      return acc;
    },
    {}
  );

  // Сортировка семей внутри категории
  Object.keys(groupedByCategory).forEach((category) => {
    groupedByCategory[category].sort((a, b) =>
      a.name.localeCompare(b.name, "hy")
    );
  });

  const sortedCategories = Object.keys(groupedByCategory).sort((a, b) =>
    a.localeCompare(b, "hy")
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Բույսերի տեսակներ ըստ ընտանիքների
      </h1>

      {sortedCategories.map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            {category}
          </h2>

          <div className="space-y-6">
            {groupedByCategory[category].map((family) => (
              <div key={family.id} className="border rounded-lg shadow-sm">
                <button
                  className="w-full text-left px-6 py-4 bg-green-100 hover:bg-green-200 font-semibold text-lg flex justify-between items-center"
                  onClick={() => toggleFamily(family.id)}
                  type="button"
                >
                  {family.name}
                  <span className="text-xl">
                    {expandedFamilyId === family.id ? "−" : "+"}
                  </span>
                </button>

                {expandedFamilyId === family.id && (
                  <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {family.Plant.map((plant) => (
                      <Card
                        key={plant.id}
                        id={`plant-${plant.id}`}
                        onClick={() => setSelectedPlant(plant)}
                        className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={plant.imagePath}
                            alt={plant.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4 flex gap-2">
                            <Badge variant="secondary">{family.category}</Badge>
                          </div>
                        </div>

                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl">
                            {plant.name}
                          </CardTitle>
                          <p className="italic text-sm">{plant.family}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {plant.description}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Sun className="h-4 w-4 text-yellow-500" />
                              <span className="font-medium">Արևի պահանջ:</span>
                              <span className="text-muted-foreground">
                                {plant.sunRequirement}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                              <Droplets className="h-4 w-4 text-blue-500" />
                              <span className="font-medium">
                                Տարեկան տեղումներ:
                              </span>
                              <span className="text-muted-foreground">
                                {plant.minPrecipitation} -{" "}
                                {plant.maxPrecipitation} mm
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                              <Thermometer className="h-4 w-4 text-red-500" />
                              <span className="font-medium">
                                Օպտիմալ ջերմաստիճան:
                              </span>
                              <span className="text-muted-foreground">
                                {plant.minTemperature}°C -{" "}
                                {plant.maxTemperature}°C
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <Dialog
        open={!!selectedPlant}
        onOpenChange={() => setSelectedPlant(null)}
      >
        <DialogContent className="max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-md">
          {selectedPlant && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  {selectedPlant.name}
                </DialogTitle>
              </DialogHeader>

              <Image
                src={selectedPlant.imagePath}
                alt={selectedPlant.name}
                width={600}
                height={300}
                className="rounded-lg mb-4 w-full h-auto object-cover"
              />

              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="text-base font-semibold mb-2 text-muted-foreground">
                    Բնութագիր
                  </h3>
                  <div className="flex gap-2 text-gray-800 items-start">
                    <Info className="h-4 w-4 mt-1 text-blue-500" />
                    <span>{selectedPlant.description}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-2 text-muted-foreground">
                    Կլիմա և հող
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start">
                      <Snowflake className="h-4 w-4 text-cyan-600" />
                      <b>Ձմեռային պաշտպանություն:</b>{" "}
                      {selectedPlant.winterProtection}
                    </li>
                    <li className="flex gap-2 items-start">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <b>Խոնավություն:</b> {selectedPlant.airHumidity}
                    </li>
                    <li className="flex gap-2 items-start">
                      <Sun className="h-4 w-4 text-yellow-500" />
                      <b>Արևի պահանջ:</b> {selectedPlant.sunRequirement}
                    </li>
                    <li className="flex gap-2 items-start">
                      <Waves className="h-4 w-4 text-sky-600" />
                      <b>Հողային ջրի խորություն:</b>{" "}
                      {selectedPlant.depthOfGroundwater}
                    </li>
                    <li className="flex gap-2 items-start">
                      <Mountain className="h-4 w-4 text-gray-500" />
                      <b>Բարձրություն ծովի մակերևույթից:</b>{" "}
                      {selectedPlant.seaLevel}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-2 text-muted-foreground">
                    Բերքատվություն և աճ
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      <b>Վեգետացիոն սեզոն:</b> {selectedPlant.growingSeason}
                    </li>
                    <li className="flex gap-2 items-start">
                      <Sprout className="h-4 w-4 text-green-600" />
                      <b>Պտղատվություն սկսվում է:</b>{" "}
                      {selectedPlant.fertilityBegins}
                    </li>
                    <li className="flex gap-2 items-start">
                      <Package className="h-4 w-4 text-purple-600" />
                      <b>Միջին բերքատվություն:</b> {selectedPlant.averageYield}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-2 text-muted-foreground">
                    Դիմադրողականություն
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start">
                      <ShieldCheck className="h-4 w-4 text-lime-600" />
                      <b>Սառնամանիքի դիմադրություն:</b>{" "}
                      {selectedPlant.frostResistance}
                    </li>
                    <li className="flex gap-2 items-start">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <b>Հիվանդությունների ընկալունակություն:</b>{" "}
                      {selectedPlant.susceptibilityToDiseases}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
