/**
 *** Primer diseño de carta realizado
 *** by Henry Cardona
 **/

import "boxicons"
import "./components-css/CardProduct.css";
import React, { Component } from "react";
import * as Loader from "react-loader-spinner";
import imageDefaultProduct from "../test images/imagenDefault.png";
import imageDefaultBrand from "../test images/imageDefaultBrand.png";

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPictureOne: true,
            showPictureTwo: false,
            showPictureThree: false,
            isLoading: true,
        };
        this.ChangePictureOne = this.ChangePictureOne.bind(this);
        this.ChangePictureTwo = this.ChangePictureTwo.bind(this);
        this.ChangePictureThree = this.ChangePictureThree.bind(this);
    }
    /**
     *  In React, conditional rendering refers to the process of delivering elements
     *  and components based on certain conditions.
     *  Used method in this component for conditional rendering elements inline is to
     *  use the JavaScript conditional operator "CONDITION ? TRUE : FALSE".
     **/
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    }
    ChangePictureOne() {
        this.setState({
            showPictureOne: true,
            showPictureTwo: false,
            showPictureThree: false,
        });
    }
    ChangePictureTwo() {
        this.setState({
            showPictureOne: false,
            showPictureTwo: true,
            showPictureThree: false,
        });
    }
    ChangePictureThree() {
        this.setState({
            showPictureOne: false,
            showPictureTwo: false,
            showPictureThree: true,
        });
    }
    render() {
        const { isLoading } = this.state;
        const { informationProduct } = this.props;
        return (
            <div className="Container">
                <div className="Card-Container">
                    {isLoading ? (
                        <Loader.TailSpin color="#00BFFF" height={100} width={100} />
                    ) : (
                        <div>
                            {/* Header with brands */}
                            <div className="Card-Brand">
                                {informationProduct.Data.imageBrand === "" ? 
                                    <>
                                        <img src={imageDefaultBrand} alt="Brand"></img>
                                    </> :
                                    <>
                                        <img src={informationProduct.Data.imageBrand} alt="Brand"></img>
                                    </>
                                }
                                <i className="bx bxs-shopping-bags"></i>
                            </div>
                            {/* Image of product */}
                            <div className="Card-Product">
                                {informationProduct.Data.imageOne === "" ?
                                    <>
                                        <img
                                            className={"ImageDefault " + (this.state.showPictureOne ? "Active" : "Inactive")}
                                            src={imageDefaultProduct}
                                            alt="Product"
                                        ></img>
                                    </> :
                                    <>
                                        <img
                                            className={"Image " + (this.state.showPictureOne ? "Active" : "Inactive")}
                                            src={informationProduct.Data.imageOne}
                                            alt="Product"
                                        ></img>
                                    </>
                                }
                                {informationProduct.Data.imageTwo === "" ?
                                    <>
                                        <img
                                            className={"ImageDefault " + (this.state.showPictureTwo ? "Active" : "Inactive")}
                                            src={imageDefaultProduct}
                                            alt="Product"
                                        ></img>
                                    </> :
                                    <>
                                        <img
                                            className={"Image " + (this.state.showPictureTwo ? "Active" : "Inactive")}
                                            src={informationProduct.Data.imageTwo}
                                            alt="Product"
                                        ></img>
                                    </>
                                }
                                {informationProduct.Data.imageThree === "" ?
                                    <>
                                        <img
                                            className={"ImageDefault " + (this.state.showPictureThree ? "Active" : "Inactive")}
                                            src={imageDefaultProduct}
                                            alt="Product"
                                        ></img>
                                    </> :
                                    <>
                                        <img
                                            className={"Image " + (this.state.showPictureThree ? "Active" : "Inactive")}
                                            src={informationProduct.Data.imageThree}
                                            alt="Product"
                                        ></img>
                                    </>
                                }
                            </div>
                            {/* Detail of product */}
                            <div className="Card-Details">
                                <h5 className="Product-Name">
                                    {informationProduct.Data.model}
                                </h5>
                                <p>
                                    {informationProduct.Data.description}
                                </p>
                            </div>
                            {/* Options of product */}
                            <div className="Card-Options">
                                <div className="Options">
                                    <h6>Options:</h6>
                                    <div className="Picks">
                                        <span
                                            className={"Option " + (this.state.showPictureOne ? "Active" : "Inactive")}
                                            onClick={this.ChangePictureOne}
                                        ></span>
                                        <span
                                            className={"Option " + (this.state.showPictureTwo ? "Active" : "Inactive")}
                                            onClick={this.ChangePictureTwo}
                                        ></span>
                                        <span
                                            className={"Option " + (this.state.showPictureThree ? "Active" : "Inactive")}
                                            onClick={this.ChangePictureThree}
                                        ></span>
                                    </div>
                                </div>
                                <div className="Price">
                                    <span className="Number">
                                        ${informationProduct.Data.price}
                                        <i className="bx bxs-offer bx-rotate-90"></i>
                                    </span>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="Card-Button">
                                <button
                                    onClick={() => this.props.AddNewItemToCart(informationProduct.id)}
                                    className="Button">
                                    {this.props.cadena}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

CardProduct.defaultProps = {
    cadena: "Add to bag"
};

export default CardProduct;
