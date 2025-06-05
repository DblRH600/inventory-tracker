

class Stack<T> {
  private arr: T[]; // if the property is private, the constructor is typically not required

   constructor() {
    this.arr = [];
   }

   push(value: T): void {
    this.arr.push(value)
   }

   pop(): T | undefined {
    return this.arr.pop()
   }

   peek(): T | undefined {
    return this.arr.at(-1)
   }

}

interface Product {
   name: string;
   price: number;
}

const productStack = new Stack<Product>();

const tv: Product = {
   name: "LG Oled",
   price: 1000
}

const keyboard: Product = {
   name: "Keyboard",
   price: 120
}

productStack.push(tv)
productStack.push(keyboard)

// console.log("STACK", productStack)

// console.log("LAST PRODUCT", productStack.peek())

// console.log("POPPED PRODUCT", productStack.pop())

// console.log("PEEKED STACK", productStack)


// inteserction -- this AND this -- can be used to create a new type
interface HasName {
  name: string;
}

interface HasPrice {
price: number;
}

type ProductWithDetails = HasName & HasPrice;

const product: ProductWithDetails = {
name: "Laptop",
price: 999.99
};

console.log(`${product.name} costs $${product.price}`);

// Union -- this OR this --- used to annotate -- used more often than intersection
function formatInput(input: string | number): string {
  if (typeof input === "number") {
    return `Number: ${input.toFixed(2)}`;
  } else {
    return `String: ${input.toUpperCase()}`;
  }
}

console.log(formatInput(42.789)); // Outputs "Number: 42.79"
console.log(formatInput("hello")); // Outputs "String: HELLO"


// custom error classes w/ typescript
// class ValidationError extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function validateUsername(username: string) {
// if (username.length < 5) {
// throw new ValidationError("Username must be at least 5 characters long.");
// }
// }

// try {
// validateUsername("Tom");
// } catch (error) {
// if (error instanceof ValidationError) {
// console.error("Validation Error:", error.message);
// } else {
// console.error("Unknown Error:", error.message);
// }
// }