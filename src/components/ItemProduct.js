
import { Component } from "react";
import 'boxicons'
import './components-css/ItemProduct.css'

class ItemProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { informationProduct } = this.props;
        return (
            <div>
                <div className="Container-ItemProduct">
                    <div className="Specs-ItemProduct"><i class='bx bxs-purchase-tag'></i></div>
                    <div className="Specs-ItemProduct">{informationProduct.name}</div>
                    <div className="Specs-ItemProduct">
                        Precio: ${informationProduct.price}
                    </div>
                    <div className="Specs-ItemProduct">Cantidad: {informationProduct.quantity}</div>
                    <div className="Specs-ItemProduct">Total:{informationProduct.quantity*informationProduct.price}</div>
                </div>
            </div>
        );
    }
}

export default ItemProduct;