export class Product {
  id: number;
  name: string;
  description?: string;
  image?: string;
  count: number;
  price: number;
  basketCount?: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.image = product.image;
    this.count = product.count;
    this.price = product.price;
    this.basketCount = product.basketCount;
  }
}
