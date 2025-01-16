import Hero from '@/components/Hero';
import FeaturedListings from '@/components/FeaturedListings';
import PropertyCategories from '@/components/PropertyCategories';
import TopLocations from '@/components/TopLocations';
import NewsSection from '@/components/NewsSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <PropertyCategories />
      <FeaturedListings />
      <TopLocations />
      <NewsSection />
    </div>
  );
}