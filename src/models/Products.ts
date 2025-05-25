// Product Class
// type ProdSku = number | string

export abstract class Product {
    // taxRate
    public static taxRate = 0.06;

    private sku: string;
    public name: string;
    protected price: number;

    // Constructor used to create new instances
    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price
    }

    abstract getPriceWithTax(): number;

    displayDetails(): string {
        return `Product: ${this.name} (SKU: ${this.sku}), costs $${this.price}. `
    }
    

}
