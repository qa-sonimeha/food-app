"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, TrendingUp, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface RestaurantCardProps {
  restaurant: {
    name: string;
    image: string;
    rating: number;
    cuisine: string;
    deliveryTime: number;
    trending?: boolean;
    description: string;
    priceRange: string;
    address: string;
    minimumOrder: number;
    deliveryFee: number;
  };
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const restaurantUrl = `/restaurant/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <Link href={restaurantUrl} className="block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={restaurant.image}
              alt=""
              fill
              className="object-cover"
            />
            {restaurant.trending && (
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1">{restaurant.rating}</span>
                </div>
                <span className="text-muted-foreground">{restaurant.priceRange}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3">{restaurant.description}</p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">{restaurant.cuisine}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {restaurant.deliveryTime} min
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {restaurant.address}
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4" />
                Min. order ${restaurant.minimumOrder} • Delivery ${restaurant.deliveryFee}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}