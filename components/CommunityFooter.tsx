"use client";

import Link from "next/link";

export default function CommunityFooter() {
  return (
    <footer className="bg-muted/40 border-t mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} AgroCommunity 🍃 — Բոլոր իրավունքները
          պաշտպանված են
        </div>

        <div className="flex space-x-4 text-sm">
          <Link
            href="/community/posts"
            className="hover:text-primary transition"
          >
            Հոդվածներ
          </Link>
          <Link
            href="/community/questions"
            className="hover:text-primary transition"
          >
            Հարց ու պատասխան
          </Link>
          <Link href="/community/me" className="hover:text-primary transition">
            Իմ էջը
          </Link>
          <a
            href="mailto:hello@agrocommunity.am"
            className="hover:text-primary transition"
          >
            Կապ մեզ հետ
          </a>
        </div>
      </div>
    </footer>
  );
}
