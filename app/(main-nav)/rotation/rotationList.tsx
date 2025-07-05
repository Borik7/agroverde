"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface Region {
  id: string;
  name: string;
}

interface Family {
  id: string;
  name: string;
  category: string;
}

interface Props {
  regions: Region[];
  families: Family[];
}

interface Result {
  result: string;
}

export default function RotationList({ regions, families }: Props) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory1, setSelectedCategory1] = useState("");
  const [selectedFamily1, setSelectedFamily1] = useState("");
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [selectedFamily2, setSelectedFamily2] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const categories = ["Բանջարեղեն", "Հացահատիկ"];

  const filteredFamilies1 = families.filter(
    (f) => f.category === selectedCategory1
  );
  const filteredFamilies2 = families.filter(
    (f) => f.category === selectedCategory2
  );

  const handleSubmit = async () => {
    if (!selectedRegion || !selectedFamily1 || !selectedFamily2) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));
    const result = await fetch("/api/rotation-suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        regionId: selectedRegion,
        firstYearFamily: selectedFamily1,
        secondYearFamily: selectedFamily2,
      }),
    });
    const data = await result.json();

    setResult(data);
    setLoading(false);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto py-10 p-3">
      <div className="space-y-4">
        <div className="space-y-4 max-w-3xl mx-auto">
          <img
            src="/pages/rotation/rotation-page-cover.jpg"
            alt="Ռոտացիայի պատկերը"
            className="pt-5 w-full h-auto rounded-2xl shadow-md object-cover"
          />

          <div className="mt-4 py-5 text-gray-700 text-base leading-relaxed">
            <p>
              <strong>🌿 Ի՞նչ է հողի ռոտացիան </strong>
              Հողի ռոտացիան գյուղատնտեսական մեթոդ է, երբ յուրաքանչյուր տարի
              նույն հողատարածքում տնկվում են տարբեր տեսակի մշակաբույսեր։ Սա
              օգնում է պահպանել հողի սննդային բաղադրությունը, կանխել
              վնասատուների ու հիվանդությունների տարածումը և բարձրացնել
              բերքատվությունը։
            </p>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1">
            Քաղաք/Գյուղ
          </label>
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger>
              <SelectValue placeholder="Ընտրիր քաղաքը/գյուղը" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region.id} value={region.id}>
                  {region.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Past Years (2024) */}
        <div>
          <h3 className="font-semibold mb-2">Ի՞նչ է աճեցվել 2024-ին</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              value={selectedCategory1}
              onValueChange={(val) => {
                setSelectedCategory1(val);
                setSelectedFamily1("");
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Ընտրիր խումբը" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedFamily1} onValueChange={setSelectedFamily1}>
              <SelectTrigger>
                <SelectValue placeholder="Ընտրիր բուսատեսակը" />
              </SelectTrigger>
              <SelectContent>
                {filteredFamilies1.map((fam) => (
                  <SelectItem key={fam.id} value={fam.id}>
                    {fam.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Past Years (2025) */}
        <div>
          <h3 className="font-semibold mb-2">Ի՞նչ է աճեցվել 2025-ին</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              value={selectedCategory2}
              onValueChange={(val) => {
                setSelectedCategory2(val);
                setSelectedFamily2("");
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Ընտրիր խումբը" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedFamily2} onValueChange={setSelectedFamily2}>
              <SelectTrigger>
                <SelectValue placeholder="Ընտրիր բուսատեսակը" />
              </SelectTrigger>
              <SelectContent>
                {filteredFamilies2.map((fam) => (
                  <SelectItem key={fam.id} value={fam.id}>
                    {fam.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Brain className="w-4 h-4 animate-spin" />
              Մշակվում է...
            </span>
          ) : (
            "Հաշվել ռոտացիան"
          )}
        </Button>
      </div>

      {result && (
        <Card className="mt-6 border-green-400">
          <CardHeader>
            <CardTitle className="text-green-600 text-xl">
              Առաջարկվող մշակաբույս
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div
              className="space-y-2 text-gray-800 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: result.result }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
