"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorContentProps {
  reset: () => void;
}

export default function ErrorContent({ reset }: ErrorContentProps) {
  return (
    <motion.div 
      className="container mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-6" />
      </motion.div>
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        We apologize for the inconvenience. Please try again later or contact support if the problem persists.
      </p>
      <Button
        onClick={reset}
        size="lg"
        className="mx-auto"
      >
        Try again
      </Button>
    </motion.div>
  );
}