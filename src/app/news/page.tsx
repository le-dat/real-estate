import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "The Future of Real Estate: Trends to Watch in 2024",
    excerpt: "Discover the emerging trends that will shape the real estate market in the coming year...",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    date: "Mar 15, 2024",
    author: "Jane Smith",
    category: "Market Trends",
  },
  // Add more articles...
];

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Real Estate News & Insights</h1>
      
      {/* Featured Article */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center text-muted-foreground mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm mr-4">{articles[0].date}</span>
              <span className="text-sm">{articles[0].category}</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{articles[0].title}</h2>
            <p className="text-muted-foreground">{articles[0].excerpt}</p>
          </CardContent>
          <CardFooter className="px-6 py-4 border-t">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm">By {articles[0].author}</span>
              <a href={`/news/${articles[0].id}`} className="text-primary hover:underline">
                Read more →
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(1).map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center text-muted-foreground mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm mr-4">{article.date}</span>
                <span className="text-sm">{article.category}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-muted-foreground text-sm">{article.excerpt}</p>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm">By {article.author}</span>
                <a href={`/news/${article.id}`} className="text-primary hover:underline">
                  Read more →
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}