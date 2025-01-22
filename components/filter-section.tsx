import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export function FilterSection() {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-4">Filters</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Cuisine</h4>
            <div className="space-y-2">
              {cuisines.map((cuisine) => (
                <div key={cuisine} className="flex items-center space-x-2">
                  <Checkbox id={cuisine} />
                  <label htmlFor={cuisine} className="text-sm">{cuisine}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Dietary</h4>
            <div className="space-y-2">
              {dietary.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={item} />
                  <label htmlFor={item} className="text-sm">{item}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const cuisines = ["Italian", "Japanese", "American", "Indian", "Mexican"];
const dietary = ["Vegetarian", "Vegan", "Gluten Free", "Halal"];