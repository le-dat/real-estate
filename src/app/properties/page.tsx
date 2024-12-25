"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "@/components/PropertyCard";

// Mock data - replace with actual API call
const properties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    location: "Downtown District",
    price: 450000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2340&q=80",
    beds: 2,
    baths: 2,
    area: 1200,
    type: "For Sale",
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    location: "Beverly Hills",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2340&q=80",
    beds: 5,
    baths: 4,
    area: 4500,
    type: "For Sale",
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    location: "Central Park",
    price: 320000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2340&q=80",
    beds: 1,
    baths: 1,
    area: 600,
    type: "For Sale",
  },
];

export default function PropertiesPage() {
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [propertyType, setPropertyType] = useState("");
  const [minArea, setMinArea] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <Card className="p-6 h-fit lg:sticky lg:top-20">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          
          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <Slider
                defaultValue={[0, 3000000]}
                max={3000000}
                step={50000}
                onValueChange={setPriceRange}
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Property Type
              </label>
              <Select onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Min Area */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Minimum Area (sq ft)
              </label>
              <Input
                type="number"
                value={minArea}
                onChange={(e) => setMinArea(Number(e.target.value))}
                placeholder="Enter minimum area"
              />
            </div>

            {/* Bedrooms */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Bedrooms
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </div>
        </Card>

        {/* Property Listings */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Properties</h1>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}