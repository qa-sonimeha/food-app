"use client";

import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { motion } from "framer-motion";

export function NavCart() {
  const router = useRouter();
  const { items } = useCart();
  const itemCount = items.length;

  return (
    <Button
      variant="ghost"
      onClick={() => router.push("/cart")}
      className="relative"
    >
      <ShoppingBag className="w-5 h-5 mr-2" />
      Cart
      {itemCount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center"
        >
          {itemCount}
        </motion.div>
      )}
    </Button>
  );
}