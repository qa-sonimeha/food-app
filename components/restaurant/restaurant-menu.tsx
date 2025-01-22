"use client";

import { MenuCategory } from "@/components/menu-category";
import { MenuItem } from "@/components/menu-item";
import { menuItems } from "@/data/menu-items";

interface RestaurantMenuProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function RestaurantMenu({ selectedCategory, onSelectCategory }: RestaurantMenuProps) {
  return (
    <div>
      <MenuCategory
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <div className="space-y-6 mt-8">
        {menuItems.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}