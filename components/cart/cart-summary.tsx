"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface CartSummaryProps {
  total: number;
}

export function CartSummary({ total }: CartSummaryProps) {
  const router = useRouter();

  return (
    <Card className="p-4">
      <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>$2.99</span>
        </div>
        <div className="border-t pt-2 font-semibold flex justify-between">
          <span>Total</span>
          <span>${(total + 2.99).toFixed(2)}</span>
        </div>
      </div>
      <Button 
        className="w-full"
        onClick={() => router.push("/checkout")}
      >
        Proceed to Checkout
      </Button>
    </Card>
  );
}