"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HorizontalSliderProps {
  children: React.ReactNode[];
  itemWidth?: string;
  className?: string;
}

export default function HorizontalSlider({ 
  children, 
  itemWidth = "w-[280px]",
  className
}: HorizontalSliderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("relative", className)}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full slider__container"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {children.map((child, index) => (
            <CarouselItem key={index} className={cn("pl-2 md:pl-4 slider__slide", itemWidth)}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {child}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </motion.div>
  );
}