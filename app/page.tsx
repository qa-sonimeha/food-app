"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { CategorySection } from "@/components/category-section";
import { FeaturedRestaurants } from "@/components/featured-restaurants";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Delicious Food Delivered To Your Doorstep
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Order from your favorite restaurants and track your delivery in real-time
            </p>
            <form onSubmit={handleSearch} className="flex gap-4 bg-white p-2 rounded-lg shadow-lg">
              <div className="flex-1 flex items-center gap-2 border-r">
                <MapPin className="text-primary ml-2" aria-hidden="true" />
                <Input
                  placeholder="Enter delivery address"
                  className="border-0 focus-visible:ring-0"
                  aria-label="Delivery address"
                />
              </div>
              <Button type="submit" className="px-8" aria-label="Search for restaurants">
                <Search className="mr-2 h-4 w-4" aria-hidden="true" /> Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CategorySection />
      <FeaturedRestaurants />
    </main>
  );
}