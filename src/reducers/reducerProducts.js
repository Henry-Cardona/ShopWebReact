
import { AddNewItem, ClearCart, DeleteItem, RemoveAllItems } from "../types"

export const initialState = {
    products : [
        {id:1, name:"Agua", price:1},
        {id:2, name:"cloro", price:2},
        {id:3, name:"acetaminofen", price:3}
    ],
    cart : []
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case AddNewItem:
            let NewProduct = state.products.find((product) => product.id === action.payload);
            let ProductInCart = state.cart.find((product) => product.id === NewProduct.id);
            return ProductInCart? 
            {
                ...state,
                cart : state.cart.map((product) =>
                    product.id === NewProduct.id? 
                    {
                        ...product,
                        quantity: product.quantity + 1
                    } : product
                )
            }:
            {
                ...state,
                cart : [...state.cart, {...NewProduct, quantity: 1}]
            };
        case DeleteItem:
            let DeleteProduct = state.cart.find((product) => product.id === action.payload);
            return DeleteProduct > 1 ? 
            {
                ...state,
                cart : state.cart.map((product) =>
                    product.id === action.payload?
                    {
                        ...product,
                        quantity: product.quantity - 1
                    } : product 
                )
            }:
            {
                ...state,
                cart : state.cart.filter((product) => product.id !== action.payload)
            }; 
        case RemoveAllItems:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        case ClearCart:
            return initialState;
        default:
            return state
    }
}