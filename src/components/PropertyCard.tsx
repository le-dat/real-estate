"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [showContact, setShowContact] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden group">
          <div className="relative h-48">
            <Badge className="absolute top-2 right-2 z-10">{property.type}</Badge>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 left-2 z-10 bg-white/80 hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                setShowContact(true);
              }}
            >
              <Heart className="h-5 w-5 text-primary" />
            </Button>
            <Link href={`/properties/${property.id}`}>
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </Link>
          </div>
          <Link href={`/properties/${property.id}`}>
            <CardContent className="p-4">
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
              <p className="text-xl font-bold text-primary">
                ${property.price.toLocaleString()}
              </p>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t flex justify-between text-muted-foreground">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.beds} beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.baths} baths</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.area} sq ft</span>
              </div>
            </CardFooter>
          </Link>
        </Card>
      </motion.div>

      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Agent</DialogTitle>
            <DialogDescription>
              Get in touch with our agent to learn more about this property.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-sm font-medium">Property: {property.title}</p>
            <p className="text-sm text-muted-foreground">
              Our agent will contact you shortly with more information about this property.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowContact(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
}