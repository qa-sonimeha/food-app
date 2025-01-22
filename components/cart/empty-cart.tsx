"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function EmptyCart() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
      <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
      <p className="text-muted-foreground mb-8">
        Looks like you haven't added any items to your cart yet
      </p>
      <Button onClick={() => router.push("/")}>
        Browse Restaurants
      </Button>
    </div>
  );
}