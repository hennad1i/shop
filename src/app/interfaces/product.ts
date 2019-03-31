export interface Product {
  id: number;
  name: string;
  description?: string;
  image?: string;
  count: number;
  price: number;
  basketCount?: number;
}
