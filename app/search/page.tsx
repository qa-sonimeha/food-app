"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search as SearchIcon } from "lucide-react";
import { RestaurantCard } from "@/components/restaurant-card";
import { FilterSection } from "@/components/filter-section";
import { restaurants } from "@/data/restaurants";

export default function Search() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search
    router.push("/search?address=entered-address");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="flex gap-4 mb-8">
        <div className="flex-1 flex items-center gap-2 bg-white rounded-lg border p-2">
          <MapPin className="text-primary ml-2" aria-hidden="true" />
          <Input
            placeholder="Enter delivery address"
            className="border-0 focus-visible:ring-0"
            aria-label="Delivery address"
          />
        </div>
        <Button type="submit" aria-label="Search for restaurants">
          <SearchIcon className="mr-2 h-4 w-4" aria-hidden="true" /> Search
        </Button>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <FilterSection />
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Restaurants near you</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}