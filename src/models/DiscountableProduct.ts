import { Product } from './Products'

export interface DiscountProduct {
    applyDiscount (discountPercent: number): void
}