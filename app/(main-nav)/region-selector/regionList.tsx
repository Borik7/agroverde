"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
} from "recharts";

import {
  MapPin,
  Search,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  BarChart3,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Region {
  id: string;
  name: string;
  area: string;
  longitude: number;
  latitude: number;
  temperature: string;
  rainfall: string;
  humidity: string;
  season: string;
  soil: {
    id: string;
    name: string;
  };
}

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ARMENIA_COORDS: [number, number] = [40.0691, 45.0382];
const DEFAULT_ZOOM = 7;
const REGION_ZOOM = 13;
const COLORS = [
  "#6CB28E",
  "#FFD166",
  "#EF476F",
  "#118AB2",
  "#FF8C42",
  "#73A9AD",
  "#A78BFA",
  "#F4A261",
  "#8D99AE",
  "#06D6A0",
];

export default function RegionList({ regions }: { regions: Region[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [plants, setPlants] = useState<any[]>([]);
  const [loadingPlants, setLoadingPlants] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (!selectedRegion) return;

    const fetchPlants = async () => {
      setLoadingPlants(true);
      try {
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
        // const res = await fetch(`/api/plant-by-region`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ regionId: selectedRegion.id }),
        // });
        // const data = await res.json();
        setPlants(staticData);
      } catch (err) {
        console.error("Error fetching plants:", err);
        setPlants([]);
      } finally {
        setLoadingPlants(false);
      }
    };

    fetchPlants();
  }, [selectedRegion]);

  const areas = Array.from(new Set(regions.map((r) => r.area)));

  const filteredRegions = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return regions.filter(
      (r) =>
        (r.name.toLowerCase().includes(q) ||
          r.area.toLowerCase().includes(q)) &&
        (areaFilter === "all" || r.area === areaFilter)
    );
  }, [searchQuery, areaFilter, regions]);

  const plantDistribution = useMemo(() => {
    const countByFamily: Record<string, number> = {};
    plants.forEach((plant) => {
      const family = plant.plantFamily?.name || "Այլ";
      countByFamily[family] = (countByFamily[family] || 0) + 1;
    });
    return Object.entries(countByFamily).map(([name, value]) => ({
      name,
      value,
    }));
  }, [plants]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Շրջաններ</h1>

      <div className="max-w-md mx-auto mb-6 relative">
        <Input
          placeholder="Որոնել մարզով կամ շրջանով..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
      </div>

      <div className="max-w-md mx-auto mb-6">
        <select
          value={areaFilter}
          onChange={(e) => setAreaFilter(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="all">Բոլոր մարզերը</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="space-y-6 max-h-[700px] overflow-y-auto p-5">
          {filteredRegions.map((region) => (
            <Card
              key={region.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedRegion?.id === region.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => {
                setSelectedRegion(region);
                if (isMobile && mapRef.current) {
                  setTimeout(() => {
                    mapRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 150);
                }
              }}
            >
              <CardHeader>
                <CardTitle>{region.name}</CardTitle>
                <CardDescription>{region.area}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <MapPin className="inline-block w-4 h-4 mr-1" />
                  {region.latitude}°, {region.longitude}°
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Thermometer className="inline-block w-4 h-4 mr-1 text-red-500" />
                    Ջերմաստիճան: {region.temperature}
                  </div>
                  <div>
                    <Droplets className="inline-block w-4 h-4 mr-1 text-blue-500" />
                    Տեղումներ: {region.rainfall}
                  </div>
                  <div>
                    <Wind className="inline-block w-4 h-4 mr-1 text-gray-500" />
                    Խոնավություն: {region.humidity}
                  </div>
                  <div>
                    <Sun className="inline-block w-4 h-4 mr-1 text-yellow-500" />
                    Սեզոն: {region.season}
                  </div>
                </div>
                <div className="pt-2">
                  <span className="text-sm font-medium">Հողի տեսակ:</span>{" "}
                  <Badge variant="outline">{region.soil.name}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={mapRef} className="space-y-6">
          {selectedRegion && (
            <h2 className="text-2xl font-semibold mb-4">
              {selectedRegion.name}, {selectedRegion.area}
            </h2>
          )}

          <div className="h-[400px] z-20 rounded-lg overflow-hidden border border-gray-300">
            <MapContainer
              center={
                selectedRegion
                  ? [selectedRegion.latitude, selectedRegion.longitude]
                  : ARMENIA_COORDS
              }
              zoom={selectedRegion ? REGION_ZOOM : DEFAULT_ZOOM}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              key={selectedRegion ? selectedRegion.id : "armenia-map"}
              className="z-20"
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {selectedRegion && (
                <Marker
                  position={[selectedRegion.latitude, selectedRegion.longitude]}
                >
                  <Popup>
                    {selectedRegion.name} <br /> {selectedRegion.area}
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          </div>

          {!selectedRegion && (
            <div className="text-center text-muted-foreground py-4">
              Ընտրեք շրջան՝ քարտեզի վրա դիտելու համար և համապատասխան բույսերի
              դիտման համար
            </div>
          )}

          {selectedRegion && !loadingPlants && plantDistribution.length > 0 && (
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-700">
                  Բույսերի բաշխվածություն ըստ ընտանիքի
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={plantDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {plantDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

          {selectedRegion && (
            <div className="mt-6">
              {loadingPlants ? (
                <div className="text-center text-muted-foreground mt-6">
                  Բեռնում է բույսերը...
                </div>
              ) : plants.length > 0 ? (
                <>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Համապատասխան բույսեր
                  </h3>
                  <Accordion type="multiple" className="space-y-2">
                    {Object.entries(
                      plants.reduce(
                        (acc: Record<string, any[]>, plant: any) => {
                          const family = plant.plantFamily?.name || "Այլ";
                          if (!acc[family]) acc[family] = [];
                          acc[family].push(plant);
                          return acc;
                        },
                        {}
                      )
                    ).map(([familyName, groupedPlants], idx) => (
                      <AccordionItem value={`item-${idx}`} key={idx}>
                        <AccordionTrigger>{familyName}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {groupedPlants.map((plant) => (
                              <li key={plant.id}>
                                <a
                                  href={`/plants?plantId=${plant.id}`}
                                  className="text-green-600 hover:underline"
                                >
                                  {plant.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              ) : (
                <div className="text-sm text-muted-foreground mt-6">
                  Այս շրջանի համար համապատասխան բույսեր չեն գտնվել։
                </div>
              )}
            </div>
          )}

          <div className="text-center text-muted-foreground text-xs mt-4">
            Մանրամասն Հայաստանի բոլոր հողերի մասին կարող եք իմանալ&nbsp;
            <a
              href="https://www.maparmenia.am/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Հայաստանի հողի կադաստրի պաշտոնական կայքից
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
