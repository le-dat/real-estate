import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bath, BedDouble, MapPin, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredListings = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    location: "Downtown District",
    price: "$450,000",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    beds: 2,
    baths: 2,
    area: "1,200",
    type: "For Sale",
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    location: "Beverly Hills",
    price: "$2,500,000",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    beds: 5,
    baths: 4,
    area: "4,500",
    type: "For Sale",
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    location: "Central Park",
    price: "$1,800/mo",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    beds: 1,
    baths: 1,
    area: "600",
    type: "For Rent",
  },
  {
    id: 4,
    title: "Penthouse with Ocean View",
    location: "Miami Beach",
    price: "$3,200,000",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    beds: 3,
    baths: 3.5,
    area: "2,800",
    type: "For Sale",
  },
  {
    id: 5,
    title: "Modern Office Space",
    location: "Financial District",
    price: "$5,500/mo",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    beds: 0,
    baths: 2,
    area: "1,800",
    type: "For Rent",
  },
];

export default function FeaturedListings() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold">Featured Properties</h2>
        <Link href="/properties" className="hidden lg:block text-primary hover:underline">
          View all properties →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredListings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden h-full">
            <div className="relative h-48">
              <Badge variant="warning" className="absolute top-2 right-2 z-10">
                {listing.type}
              </Badge>
              <Image src={listing.image} alt={listing.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{listing.location}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
              <p className="text-lg font-bold text-info">{listing.price}</p>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t flex justify-between text-muted-foreground">
              <div className="flex items-center">
                <BedDouble className="w-4 h-4 mr-1" />
                <span className="text-sm">{listing.beds} beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span className="text-sm">{listing.baths} baths</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span className="text-sm">{listing.area} m2</span>
              </div>
            </CardFooter>
          </Card>
        ))}

        <Link href="/properties" className="lg:hidden text-primary text-center hover:underline mt-4">
          View all properties →
        </Link>
      </div>
    </section>
  );
}
