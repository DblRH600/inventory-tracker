import { Product } from './Products'
import { DiscountProduct } from './DiscountableProduct';

export class DigitalProduct extends Product {
    protected fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize
    }

    getPriceWithTax(): number {
        let finalPrice = this.price;
        if (this.fileSize > 10) {
            finalPrice *= 0.9; // 10% discount for larger downloaded items
        }
        return this.price
    }
    get fileSizeMb(): string {
        // displays the filesize in MBs
        // unit converter
        const fileInMb = Math.log10(Number(this.fileSize.toFixed(2)))

        return super.displayDetails() + `and is a digital download of ${fileInMb}MB.`
    }

    applyDiscount(discountPercent: number): void {
        this.price -= this.price * (discountPercent / 100)
    }
}


