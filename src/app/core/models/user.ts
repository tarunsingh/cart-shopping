export class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

}
