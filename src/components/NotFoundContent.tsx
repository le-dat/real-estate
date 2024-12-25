"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

export default function NotFoundContent() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      </motion.div>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Go Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/properties">
            <Search className="mr-2 h-4 w-4" /> Browse Properties
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}