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
  // Add more properties...
];

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [propertyType, setPropertyType] = useState("");
  const [minArea, setMinArea] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <Card className="p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          
          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <Slider
                defaultValue={[0, 1000000]}
                max={1000000}
                step={10000}
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

            <Button className="w-full">Apply Filters</Button>
          </div>
        </Card>

        {/* Property Listings */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Search Results</h1>
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