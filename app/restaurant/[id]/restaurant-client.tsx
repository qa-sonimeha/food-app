"use client";

import { useState } from "react";
import { RestaurantHeader } from "@/components/restaurant/restaurant-header";
import { RestaurantMenu } from "@/components/restaurant/restaurant-menu";
import { RestaurantCart } from "@/components/restaurant/restaurant-cart";
import type { Restaurant } from "@/types/restaurant";

interface RestaurantClientProps {
  restaurant: Restaurant;
}

export function RestaurantClient({ restaurant }: RestaurantClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RestaurantMenu 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          <div>
            <RestaurantCart />
          </div>
        </div>
      </div>
    </div>
  );
}