"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

export function NavLogo() {
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push("/")}
      className="flex items-center gap-2 focus:outline-none"
      aria-label="Go to home page"
    >
      <Utensils className="w-6 h-6 text-primary" />
      <span className="text-2xl font-bold text-primary">FoodHub</span>
    </motion.button>
  );
}