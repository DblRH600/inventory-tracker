import { Product } from './Products'
import { DiscountProduct } from './DiscountableProduct';

export class PhysicalProduct extends Product {
    protected weight: number;
    public static taxRate: number = 0.1

    // Constructor used to create new instances for weight
    constructor(sku: string, name: string, price: number, weight: number, newTaxRate: number) {
        // super to inherit from 'Parent' class 
        super(sku, name, price);
        this.weight = weight;
    }


    getPriceWithTax(): number {
        let finalPrice = this.price;
        if (this.weight > 10) {
            finalPrice *= 0.85; // 15% discount for bulk items
        }
        return finalPrice *1.1
    }

    get weightKg(): string {
        // displays the converted weight in kilos 
        // unit converter 
        const weightKg = Math.floor(this.weight * 0.454)
        return super.displayDetails() + `It weighs ${weightKg} kg`
    }

    applyDiscount (discountPercent: number): void {
        this.price -= this.price * (discountPercent / 100)
    }
}



