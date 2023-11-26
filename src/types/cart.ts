export type AddToCartType = {
    id:string;
}

export type SubtractFromCart = {
    id:string;
}

export type CartType = {
    productId:string;
    name:string;
    price: number;
    quantity:number;
}