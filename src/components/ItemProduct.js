
import { Component } from "react";
import './components-css/ItemProduct.css'

class ItemProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { informationProduct } = this.props;
        return (
            <div className="s">
                <div className="Container-ItemProduct">
                    <div className="Specs-ItemProduct">icon</div>
                    <div className="Specs-ItemProduct">{informationProduct.name}</div>
                    <div className="Specs-ItemProduct">{informationProduct.price}</div>
                    <div className="Specs-ItemProduct">{informationProduct.quantity}</div>
                </div>
            </div>
        );
    }
}

export default ItemProduct;