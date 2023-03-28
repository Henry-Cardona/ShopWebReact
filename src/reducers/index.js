
import { combineReducers } from "redux";
import { cartReducer } from "./reducerProducts";

const reducer = combineReducers ({
    products: cartReducer,
});

export default reducer;