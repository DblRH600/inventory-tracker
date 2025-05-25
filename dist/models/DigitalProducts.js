"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Products_1 = require("./Products");
class DigitalProduct extends Products_1.Product {
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get fileSizeMb() {
        // displays the filesize in MBs
        // unit converter
        const fileInMb = Math.log10(Number(this.fileSize.toFixed(2)));
        return super.displayDetails() + `and is a digital download of ${fileInMb}MB.`;
    }
}
exports.DigitalProduct = DigitalProduct;
