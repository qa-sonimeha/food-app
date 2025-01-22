export interface Restaurant {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: number;
  trending?: boolean;
}