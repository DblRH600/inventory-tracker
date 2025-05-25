import { Product } from './models/Products'
import { PhysicalProduct } from './models/PhysicalProducts'
import { DigitalProduct } from './models/DigitalProducts'
import { calculateTax } from './utils/taxCalculator'

const products: Product[] = [
    new PhysicalProduct("PX1001-2011", "MacBook", 1250, 15, 0.6),
    new DigitalProduct('DC3001-3011', "2K-Digital", 60, 350),
    new PhysicalProduct("BX4010-0411", "Laptop Batteries", 599, 80, 0.6),
    new DigitalProduct('DC3001-3011', "Gran Turismo 7", 60, 750)
];

for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price (including tax): $${product.getPriceWithTax().toFixed(2)}`);

    if (product instanceof PhysicalProduct) {
        console.log(`Weight: ${product.weightKg}`)
    } else if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.fileSizeMb}`)
    }
}

console.log(PhysicalProduct)
console.log(DigitalProduct)