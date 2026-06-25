"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function WorkSection({ title, description, images }) {
  const [plugin] = React.useState(() => Autoplay({ delay: 4000 }));
  const hasImages = images && images.length > 0;

  return (
    <div className="flex gap-4 font-light flex-col md:flex-row md:justify-between my-5">
      <div
        className={`flex flex-col justify-center gap-3 ${hasImages ? "md:w-5/12" : "w-full"}`}
      >
        <div className="text-2xl">{title}</div>
        <div className="text-md flex flex-col gap-4 opacity-75 font-light">
          {description}
        </div>
      </div>
      {hasImages && (
        <div className="md:w-1/2 h-fit rounded-xl border-2 border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 p-2 flex items-center overflow-hidden">
          <Carousel
            plugins={[plugin]}
            onMouseEnter={plugin.stop}
            onMouseLeave={plugin.play}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    alt={title}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </div>
  );
}
