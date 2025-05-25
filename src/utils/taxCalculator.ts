import { Product } from '../models/Products'

export function calculateTax (product: Product): number {
    return product.getPriceWithTax()
}