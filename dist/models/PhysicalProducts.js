"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Products_1 = require("./Products");
class PhysicalProduct extends Products_1.Product {
    // Constructor used to create new instances for weight
    constructor(sku, name, price, weight, newTaxRate) {
        // super to inherit from 'Parent' class 
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return this.price * (Products_1.Product.taxRate + 1);
    }
    get weightKg() {
        // displays the converted weight in kilos 
        // unit converter 
        const weightKg = Math.floor(this.weight * 0.454);
        return super.displayDetails() + `It weighs ${weightKg} kg`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
PhysicalProduct.taxRate = 0.1;
