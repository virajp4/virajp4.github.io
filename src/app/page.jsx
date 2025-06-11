"use client";
import { Separator } from "@/components/ui/separator";
import Home from "@/components/Home";
import Work from "@/components/Work";
import About from "@/components/About";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <Home />
      <Separator className="opacity-30" />
      <Work />
      <Separator className="opacity-30" />
      <About />
      <Separator className="opacity-30" />
    </div>
  );
}
