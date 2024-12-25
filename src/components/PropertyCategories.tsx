import { Building2, Home, Warehouse, Building } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Apartments",
    icon: Building2,
    count: "24,156",
    href: "/category/apartments",
  },
  {
    title: "Houses",
    icon: Home,
    count: "12,345",
    href: "/category/houses",
  },
  {
    title: "Commercial",
    icon: Building,
    count: "5,678",
    href: "/category/commercial",
  },
  {
    title: "Industrial",
    icon: Warehouse,
    count: "2,345",
    href: "/category/industrial",
  },
];

export default function PropertyCategories() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-12">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            <category.icon className="w-12 h-12 mb-4 text-primary group-hover:text-primary/80" />
            <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
            <p className="text-sm text-muted-foreground">{category.count} listings</p>
          </Link>
        ))}
      </div>
    </section>
  );
}