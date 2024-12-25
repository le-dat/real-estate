import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import HorizontalSlider from "@/components/HorizontalSlider";

const news = [
  {
    id: 1,
    title: "The Future of Real Estate: Trends to Watch in 2024",
    excerpt: "Discover the emerging trends that will shape the real estate market in the coming year...",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    date: "Mar 15, 2024",
  },
  {
    id: 2,
    title: "Investment Opportunities in Commercial Real Estate",
    excerpt: "Learn about the most promising commercial real estate investment opportunities...",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    date: "Mar 12, 2024",
  },
  {
    id: 3,
    title: "Guide to First-Time Home Buying",
    excerpt: "Everything you need to know about purchasing your first home in today's market...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    date: "Mar 10, 2024",
  },
  {
    id: 4,
    title: "Sustainable Housing Solutions",
    excerpt: "Exploring eco-friendly and sustainable housing options for modern living...",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    date: "Mar 8, 2024",
  },
  {
    id: 5,
    title: "Real Estate Market Analysis 2024",
    excerpt: "In-depth analysis of current market trends and future predictions...",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    date: "Mar 5, 2024",
  },
];

export default function NewsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <a href="/news" className="text-primary hover:underline">
          View all articles →
        </a>
      </div>
      <HorizontalSlider itemWidth="w-[300px] sm:w-[350px]">
        {news.map((article) => (
          <Card key={article.id} className="overflow-hidden h-full">
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
                <span className="text-sm">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-muted-foreground text-sm">{article.excerpt}</p>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t">
              <a href={`/news/${article.id}`} className="text-primary hover:underline">
                Read more →
              </a>
            </CardFooter>
          </Card>
        ))}
      </HorizontalSlider>
    </section>
  );
}