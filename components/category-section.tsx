"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CategorySection() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/search?category=${category.toLowerCase()}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-label={`Browse ${category.name} restaurants`}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Image
                    src={category.image}
                    alt=""
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  {
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop",
  },
  {
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop",
  },
  {
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=300&fit=crop",
  },
  {
    name: "Asian",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=300&fit=crop",
  },
  {
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop",
  },
  {
    name: "Healthy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
  },
];