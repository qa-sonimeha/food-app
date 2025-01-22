"use client";

import { useCart } from "@/hooks/use-cart";
import { CartItems } from "./cart-items";
import { CartSummary } from "./cart-summary";
import { EmptyCart } from "./empty-cart";

export function CartClient() {
  const { items, total } = useCart();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItems items={items} />
        </div>
        <div>
          <CartSummary total={total} />
        </div>
      </div>
    </div>
  );
}