export class Product {

  private id: string;
  private name: string;
  private price: number;
  private imageUrl: string;

  constructor(product: any) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.imageUrl = product.imageUrl;
  }

  setId(id: string): void {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

}
