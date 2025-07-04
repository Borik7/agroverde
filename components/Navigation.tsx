"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Home, TreePine, MapPin, RotateCcw, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Գլխավոր", icon: Home },
    { href: "/plants", label: "Բույսեր", icon: TreePine },
    { href: "/region-selector", label: "Շրջանների ընտրություն", icon: MapPin },
    {
      href: "/rotation",
      label: "Մշակաբույսերի ռոտացիա",
      icon: RotateCcw,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">AgroVerde</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={cn(
                    "flex items-center space-x-2",
                    pathname === item.href &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>Հայերեն</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex items-center justify-start space-x-1 pb-2 px-2 min-w-max">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "flex items-center space-x-1 text-xs",
                    pathname === item.href &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  <item.icon className="h-3 w-3" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
