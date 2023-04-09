import CardProduct from "./CardProduct";
import ItemProduct from "./ItemProduct";
import "swiper/css";
import "swiper/css/scrollbar";
import "./components-css/Slide.css";
import { useDispatch, useSelector } from "react-redux";
import { AddNewItemToCart } from "../actions/shoppingActions";
import { useState, useEffect } from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/db";

//register();
const GridProducts = () => {
    const [lstClientes, setLstClientes] = useState([]);
    useEffect(() => {
        const coleccionCliente = collection(db, "cv19014Productos");
        getDocs(coleccionCliente).then((response) => {
            const ob = response.docs.map((doc) => ({
                Id: doc.id,
                Data: doc.data(),
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
            <Swiper className="mySwiper"
                scrollbar={{hide: true}}
                modules={[Scrollbar]}
                slidesPerView={3}>
                {
                    lstClientes.map((product) => (
                        <SwiperSlide className="Slide-Card">
                            <CardProduct
                                key={product.id}
                                informationProduct={product}
                                AddNewItemToCart={() => dispatch(AddNewItemToCart(product.id))}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
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
