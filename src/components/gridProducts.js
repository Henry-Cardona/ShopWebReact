import CardProduct from "./CardProduct";
import ItemProduct from "./ItemProduct";
import { useDispatch, useSelector } from "react-redux";
import { AddNewItemToCart, ClearToCart } from "../actions/shoppingActions";
import { useState, useEffect } from "react";
import {
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/db";

const GridProducts = () => {
    const [lstClientes, setLstClientes] = useState([]);
    useEffect(() => {
        const coleccionCliente = collection(db, "cv19014Productos");
        getDocs(coleccionCliente).then((response) => {
            const ob = response.docs.map((doc) => ({
                Id : doc.id,
                Data: doc.data()
            }));
            setLstClientes(ob);
        });
    }, []);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { products, cart } = state.products;
    return (
        <div>
            <h1>Grid Products</h1>
            <article style={{ display: "flex", width: "100%"}}>
                {products.map((product) => (
                    <CardProduct
                        key={product.id}
                        informationProduct={product}
                        AddNewItemToCart={() => dispatch(AddNewItemToCart(product.id))}
                    />
                ))}
            </article>
            <h3>Carrito</h3>
            <article>
                {cart.map((product, index) => (
                    <ItemProduct key={index} informationProduct={product}></ItemProduct>
                ))}
            </article>
        </div>
    );
};

export default GridProducts;
