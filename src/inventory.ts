import { Product } from "./products";

export interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];

export function calcInventoryValue(products: InventoryItem[]): number {
    if (products.length === 0) {
        return 0;
    } else {
        const total = products.reduce((a, b) => a + b.product.price * b.quantity, 0);
        return total;
    }
}
const inventoryResult: number = calcInventoryValue(inventory);
console.log(inventoryResult);
