"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Leaf, Mail, User } from "lucide-react";

export default function MyPage() {
  const user = {
    name: "Լևոն Կարապետյան",
    email: "levon@example.com",
    region: "Լոռի / Վանաձոր",
    avatarUrl: "/placeholder-user.jpg",
    posts: [
      {
        id: "1",
        title: "Ինչպես խնամել լոլիկը բարձր ջերմաստիճանի պայմաններում",
      },
      { id: "2", title: "Երկարատև չորության ժամանակ ոռոգման խելացի մեթոդներ" },
    ],
    rotationResults: [
      {
        id: "r1",
        region: "Վանաձոր",
        input: ["Կաղամբ", "Լոլիկ"],
        suggestion: "Առաջարկվում է հաջորդ տարի աճեցնել սոխ կամ սխտոր։",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-8">
      {/* Profile Section */}
      <Card>
        <CardHeader className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>ԼԿ</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{user.name}</CardTitle>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              <Mail className="w-4 h-4" /> {user.email}
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              <Leaf className="w-4 h-4" /> Տարածաշրջան․ {user.region}
            </p>
          </div>
        </CardHeader>
      </Card>

      {/* My Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Իմ հրապարակումները</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {user.posts.length > 0 ? (
            user.posts.map((post) => (
              <div key={post.id} className="flex justify-between">
                <p>{post.title}</p>
                <Button size="sm" variant="link">
                  Դիտել
                </Button>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Դեռ չկան հրապարակումներ։
            </p>
          )}
        </CardContent>
      </Card>

      {/* Rotation Results */}
      <Card>
        <CardHeader>
          <CardTitle>Ռոտացիայի արդյունքներ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user.rotationResults.map((res) => (
            <div key={res.id} className="space-y-1">
              <p className="text-sm text-muted-foreground">
                📍 {res.region} — <strong>{res.input.join(" → ")}</strong>
              </p>
              <p>{res.suggestion}</p>
              <Separator />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Optional: Stats or Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Իմ ակտիվությունը</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4 flex-wrap">
          <Badge variant="outline">📄 2 Հրապարակում</Badge>
          <Badge variant="outline">🌿 1 Ռոտացիա</Badge>
          <Badge variant="outline">🗣️ 0 Պատասխան</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
