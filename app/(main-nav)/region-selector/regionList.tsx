"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { MapPin, Search, Thermometer, Droplets, Wind, Sun } from "lucide-react";
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

export default function RegionList({ regions }: { regions: Region[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [plants, setPlants] = useState([]);
  const [loadingPlants, setLoadingPlants] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (!selectedRegion) return;

    const fetchPlants = async () => {
      setLoadingPlants(true);
      try {
        const res = await fetch(`/api/plant-by-region`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ regionId: selectedRegion.id }),
        });
        const data = await res.json();
        setPlants(data.result);
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

          {selectedRegion && (
            <div>
              {loadingPlants ? (
                <div className="text-center text-muted-foreground mt-6">
                  Բեռնում է բույսերը...
                </div>
              ) : plants.length > 0 ? (
                <div className="mt-6">
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
                </div>
              ) : (
                <div className="text-sm text-muted-foreground mt-6">
                  Այս շրջանի համար համապատասխան բույսեր չեն գտնվել։
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
