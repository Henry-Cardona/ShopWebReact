
const CartProducts = ({informationProducts})  => {
    let {id, name, price, quantity} = informationProducts;
    return (
        <div>
            <h4>{name}</h4>
            <h4>${price}.00</h4>
        </div>
    );
};

export default CartProducts;