"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function RestaurantCart() {
  return (
    <Card className="p-4 sticky top-4">
      <h3 className="font-semibold text-lg mb-4">Your Order</h3>
      <div className="text-center text-muted-foreground">
        <p>No items in cart</p>
        <Button className="mt-4">Start Order</Button>
      </div>
    </Card>
  );
}