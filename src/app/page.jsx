"use client";
import { Separator } from "@/components/ui/separator";
import HomeHero from "@/components/HomeHero";
import Work from "@/components/Work";
import About from "@/components/About";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <HomeHero />
      <Separator className="opacity-30" />
      <Work />
      <Separator className="opacity-30" />
      <About />
      <Separator className="opacity-30" />
    </div>
  );
}
