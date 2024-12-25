import { Card } from "@/components/ui/card";
import Image from "next/image";

const locations = [
  {
    id: 1,
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    properties: 1234,
  },
  {
    id: 2,
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    properties: 987,
  },
  {
    id: 3,
    name: "Miami",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    properties: 756,
  },
  {
    id: 4,
    name: "Chicago",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    properties: 543,
  },
];

export default function TopLocations() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">Popular Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location) => (
          <Card key={location.id} className="overflow-hidden group cursor-pointer">
            <div className="relative h-48">
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                  <p className="text-sm">{location.properties} properties</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}