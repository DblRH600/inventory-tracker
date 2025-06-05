
//Order Type
interface Order {
    productId: string,
    quantity: number,
    price: number
}

// Class custom errors
export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ValidationError'
    }
}

export class PaymentError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'PaymentError'
    }
}

// Function to process order(s)
export function processOrder (order: Order): void {
    if (order.quantity < 1) {
        throw new ValidationError('Quantity must be at least 1.')
    }  
    if (order.price <= 0) {
        throw new PaymentError('Price must be a positive number.')
    }

    // Process order if no errors
    console.log(`Order processed: ${order.productId} x${order.quantity} @$${order.price}`)

}

let myOrder: Order = {
    productId: "PR:2021:2E34:A.02",
    quantity: 2,
    price: 37.99
}

console.error(processOrder(myOrder))

// Custom Error Catching function to handle errors processing orders
export function handleOrder(order: Order): void {
    try {
        processOrder(order)
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(`Validation Error: ${error.message}`)
        } else if (error instanceof PaymentError) {
            console.error(`Payment Error: ${error.message}`)
        } else {
            console.error(`Unknown Error: ${error}`)
        }
    }
}

const order1 = {productId: 'P001', quantity: 0, price: 20}
const order2 = {productId: 'P002', quantity: 2, price: -5}
const order3 = {productId: 'P003', quantity: 3, price: 30}

handleOrder(order1)
handleOrder(order2)
handleOrder(order3)