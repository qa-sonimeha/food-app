interface MenuCategoryProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function MenuCategory({ selectedCategory, onSelectCategory }: MenuCategoryProps) {
  return (
    <div 
      className="flex gap-4 border-b overflow-x-auto pb-4"
      role="tablist"
      aria-label="Menu categories"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          role="tab"
          aria-selected={selectedCategory === category}
          aria-controls={`${category.toLowerCase()}-panel`}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

const categories = [
  "Popular",
  "Pizza",
  "Pasta",
  "Salads",
  "Drinks",
  "Desserts",
];