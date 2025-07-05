"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  MessageCircle,
  BookOpenText,
  Leaf,
  User,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CommunityNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/community/posts", label: "Հրապարակումներ", icon: BookOpenText },
    {
      href: "/community/questions",
      label: "Հարց ու պատասխան",
      icon: MessageCircle,
    },
    { href: "/community/me", label: "Իմ էջը", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/community" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">
              AgroCommunity
            </span>
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
              variant="ghost"
              size="icon"
              className="group hidden sm:flex"
              aria-label="Փոխել լեզուն"
            >
              <Globe className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
            </Button>
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="space-x-1 group transition-colors"
              >
                <Leaf className="h-4 w-4 text-green-600 group-hover:text-white transition-colors" />
                <span className="text-muted-foreground group-hover:text-white transition-colors">
                  Գլխավոր
                </span>
              </Button>
            </Link>
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

export default CommunityNavigation;
