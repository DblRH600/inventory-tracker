"use strict";
// Product Class
// type ProdSku = number | string
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    // Constructor used to create new instances
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `Product: ${this.name} (SKU: ${this.sku}), costs $${this.price}. `;
    }
}
exports.Product = Product;
// taxRate
Product.taxRate = 0.06;
