"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import PropertyCardSkeleton from "@/components/PropertyCardSkeleton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function LoadingContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Hero Section Skeleton */}
        <motion.div variants={item} className="relative h-[400px] mb-12">
          <Skeleton className="w-full h-full rounded-lg" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
        </motion.div>

        {/* Categories Section Skeleton */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} variants={item}>
              <div className="p-6 rounded-lg border">
                <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-24 mx-auto" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Properties Section Skeleton */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} variants={item}>
              <PropertyCardSkeleton />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}