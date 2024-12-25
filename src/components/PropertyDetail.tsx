"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    price: string;
    location: string;
    description: string;
    images: string[];
    details: {
      beds: number;
      baths: number;
      area: string;
      type: string;
      status: string;
      yearBuilt: number;
    };
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          <div className="relative h-[400px]">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{property.location}</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <p className="text-2xl font-bold text-primary mb-6">{property.price}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-2" />
                    <span>Bedrooms</span>
                  </div>
                  <span className="font-semibold">{property.details.beds}</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-2" />
                    <span>Bathrooms</span>
                  </div>
                  <span className="font-semibold">{property.details.baths}</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-2" />
                    <span>Area</span>
                  </div>
                  <span className="font-semibold">{property.details.area} sq ft</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Year Built</span>
                  </div>
                  <span className="font-semibold">{property.details.yearBuilt}</span>
                </div>
              </Card>
            </div>

            <Button size="lg" className="w-full">Contact Agent</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-muted-foreground">{property.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}