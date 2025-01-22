"use client";

import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function NavUser() {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button onClick={() => router.push("/auth/sign-in")}>
        <User className="w-5 h-5 mr-2" />
        Sign In
      </Button>
    </motion.div>
  );
}