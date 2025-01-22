import { restaurants } from "@/data/restaurants";
import { RestaurantClient } from "./restaurant-client";

// Server-side static params generation
export function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    id: restaurant.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const restaurant = restaurants.find(
    (r) => r.name.toLowerCase().replace(/\s+/g, '-') === params.id
  ) || restaurants[0];

  return <RestaurantClient restaurant={restaurant} />;
}