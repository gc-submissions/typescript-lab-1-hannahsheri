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

export function calcInventoryValue(products: InventoryItem[]) {
    //total value of all products in the array in inventory array as an argument
    //if empty, return 0

    //for each inventory item take the product price times the quantity, add all together

    //call calcInventoryValue, passing it your inventory array as an argument
    //store result of the return value in a variable and then console.log variable (170)
}
