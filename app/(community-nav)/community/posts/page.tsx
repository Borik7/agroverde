"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fakePosts = [
  {
    id: "1",
    title: "Ինչպես ճիշտ պլանավորել ռոտացիան",
    author: "Լևոն Կիրակոսյան",
    date: "5 Հուլիս, 2025",
    description:
      "Ռոտացիան օգնում է պահպանել հողի բերրիությունը։ Սովորիր քայլ առ քայլ մշակել պլան։",
    image: "/pages/community/posts/post1.jpg",
  },
  {
    id: "2",
    title: "Բանջարեղենների խնամքի գաղտնիքները",
    author: "Անի Սահակյան",
    date: "3 Հուլիս, 2025",
    description: "Ինչպես ճիշտ ջրել, պարարտացնել և խնամել բանջարեղենները։",
    image: "/pages/community/posts/post2.jpg",
  },
  {
    id: "3",
    title: "Երկարատեւ բերք ստանալու հնարքները",
    author: "Հովհաննես Պետրոսյան",
    date: "1 Հուլիս, 2025",
    description:
      "Ձեզ կներկայացնենք տեխնիկաներ, որոնք կօգնեն ստանալ կայուն բերք։",
    image: "/pages/community/posts/post3.jpg",
  },
];

export default function PostsPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-8">
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-2">
        <p className="text-muted-foreground">
          Ահա, թե ինչով են կիսվում մեր համայնքի անդամները․ փորձ, խորհուրդներ և
          նորարարություն։
        </p>
      </div>

      {fakePosts.map((post) => (
        <div
          key={post.id}
          className="rounded-xl shadow-md overflow-hidden border bg-white"
        >
          <div className="relative h-56 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-muted-foreground">{post.description}</p>
            <div className="text-xs text-gray-500">
              ✍️ {post.author} • 📅 {post.date}
            </div>
            <Link href={`/community/posts/${post.id}`}>
              <Button variant="outline" size="sm" className="mt-4">
                Կարդալ
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
