export interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "shirt", price: 45},
    {name: "shoes", price: 60},
    {name: "jeans", price: 65}
];

export function calcAverageProductPrice(products: Product[]) {
    let value: number = 0;
    if (products === undefined || products.length == 0) {
        return value;
    } else {
        let prodAvg = products.reduce((a, b) => a + b.price, 0)/products.length;
        return prodAvg;
    }
}

