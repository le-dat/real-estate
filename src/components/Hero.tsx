"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebounceValue } from "usehooks-ts";

export default function Hero() {
  const defaultValue = "";
  const [debouncedValue, setValue] = useDebounceValue(defaultValue, 700);
  const router = useRouter();
  console.log(debouncedValue);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("enter");
      router.push(`/search?q=${debouncedValue}`);
    }
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-white/90">
            Search from millions of properties across the country
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="rent">Rent</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="buy" className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <Input
                  type="text"
                  defaultValue={defaultValue}
                  onChange={(event) => setValue(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter location, project name, or keyword"
                  className="flex-1"
                />
                <Button size="lg">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="rent" className="space-y-4">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter location or property type"
                  className="flex-1"
                />
                <Button size="lg">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="sell" className="space-y-4">
              <div className="flex gap-4">
                <Input type="text" placeholder="Enter your property location" className="flex-1" />
                <Button size="lg">Get Started</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
