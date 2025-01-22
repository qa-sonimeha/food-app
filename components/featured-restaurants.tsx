"use client";

import { useRouter } from "next/navigation";
import { RestaurantCard } from "@/components/restaurant-card";
import { restaurants } from "@/data/restaurants";
import { Button } from "@/components/ui/button";

export function FeaturedRestaurants() {
  const router = useRouter();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Restaurants</h2>
          <Button 
            variant="outline"
            onClick={() => router.push("/search")}
            aria-label="View all restaurants"
          >
            View All
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}