"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProducts_1 = require("./models/PhysicalProducts");
const DigitalProducts_1 = require("./models/DigitalProducts");
const products = [
    new PhysicalProducts_1.PhysicalProduct("PX1001-2011", "MacBook", 1250, 15, 0.6),
    new DigitalProducts_1.DigitalProduct('DC3001-3011', "2K-Digital", 60, 350)
];
for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price (including tax): $${product.getPriceWithTax().toFixed(2)}`);
    if (product instanceof PhysicalProducts_1.PhysicalProduct) {
        console.log(`Weight: ${product.weightKg}`);
    }
    else if (product instanceof DigitalProducts_1.DigitalProduct) {
        console.log(`File Size: ${product.fileSizeMb}`);
    }
}
console.log(PhysicalProducts_1.PhysicalProduct);
console.log(DigitalProducts_1.DigitalProduct);
