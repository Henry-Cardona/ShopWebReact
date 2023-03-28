
import { AddNewItem, ClearCart, DeleteItem, RemoveAllItems } from "../types";

export const ClearToCart = () => ({type:ClearCart});
export const AddNewItemToCart = (id_item) => ({type:AddNewItem, payload: id_item});
export const DeleteItemToCart = (id_item, all_items = false) => 
    all_items ? ({type:RemoveAllItems, payload: id_item}):({type:DeleteItem, payload: id_item});