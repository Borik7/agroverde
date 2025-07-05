"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const tags = ["Ռոտացիա", "Բանջարեղեն", "Հող", "Պարարտանյութ", "Ջրում"];

const questions = [
  {
    id: "1",
    title: "Ինչպես պլանավորել բանջարեղենի ռոտացիա գարնանը?",
    tags: ["Ռոտացիա", "Բանջարեղեն"],
    date: "5 Հուլիս, 2025",
  },
  {
    id: "2",
    title: "Ո՞ր պարարտանյութերն են լավագույնը հողում ազոտը բարձրացնելու համար",
    tags: ["Հող", "Պարարտանյութ"],
    date: "3 Հուլիս, 2025",
  },
];

export default function QuestionsPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = questions.filter((q) => {
    const matchSearch = q.title.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag ? q.tags.includes(activeTag) : true;
    return matchSearch && matchTag;
  });

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-primary text-center">
        Հարց ու պատասխան
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <Input
          placeholder="Որոնել հարցի վերնագրով..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2"
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`cursor-pointer ${
                activeTag === tag ? "bg-primary text-white" : ""
              }`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((q) => (
            <Link
              key={q.id}
              href={`/community/questions/${q.id}`}
              className="block border rounded-xl p-4 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{q.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {q.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2">📅 {q.date}</div>
            </Link>
          ))
        ) : (
          <p className="text-muted-foreground text-sm">Հարցեր չեն գտնվել։</p>
        )}
      </div>
    </div>
  );
}
