
import CardOne from './CardOne';
import { useDispatch, useSelector } from "react-redux";
import { AddNewItemToCart, ClearToCart } from '../actions/shoppingActions';

const GridProducts = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {products, cart} = state.products;
    return (
        <div>
            <h1>Grid Products</h1>
            <article style={{display:"flex"}}>
                {
                    products.map(product => (
                        <CardOne 
                            key={product.id} 
                            informationProduct={product}
                            AddNewItemToCart={() => dispatch(AddNewItemToCart(product.id))}/>
                ))}
            </article>
            <h3>Carrito</h3>
            <article>
                <button onClick={() => dispatch(ClearToCart)}>Limpiar Carro</button>
                {
                    cart.map((product, index) => (
                        <CardOne key={index} informationProduct={product}></CardOne>
                    ))
                }
            </article>
        </div>
    );
};

export default GridProducts;