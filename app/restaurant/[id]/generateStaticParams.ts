import { restaurants } from "@/data/restaurants";

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    id: restaurant.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}