import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";
import "leaflet/dist/leaflet.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgroVerde - Smart Agriculture Solutions",
  description:
    "Discover the best plants for your region and optimize your crop rotation with AgroVerde.",
  keywords:
    "agriculture, farming, plants, crop rotation, smart farming, sustainable agriculture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="am">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
