"use client";

import Image from "next/image";
import { Clock, Star } from "lucide-react";
import type { Restaurant } from "@/types/restaurant";

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

export function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <div className="relative h-[300px]">
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              {restaurant.rating}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {restaurant.deliveryTime} min
            </span>
            <span>{restaurant.cuisine}</span>
          </div>
        </div>
      </div>
    </div>
  );
}