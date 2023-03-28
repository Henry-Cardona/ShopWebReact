/**
 *** Primer diseño de carta realizado
 *** by Henry Cardona
 **/

import "./components-css/CardOne.css";
import React, { Component } from "react";
import TestImageBrand from "../test images/nike.png";
import TestImageProductOne from "../test images/ImageTestProductOne.png";
import TestImageProductTwo from "../test images/ImageTestProductTwo.png";
import TestImageProductThree from "../test images/ImageTestProductThree.png";

class CardOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPictureOne: true,
            showPictureTwo: false,
            showPictureThree: false,
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
        const { informationProduct } = this.props;
        return (
            <div className="Container">
                <div className="Card-Container">
                    {/* Header with brands */}
                    <div className="Card-Brand">
                        <img src={TestImageBrand} alt="Brand"></img>
                        <i className="bx bxs-shopping-bags"></i>
                    </div>
                    {/* Image of product */}
                    <div className="Card-Product">
                        <img
                            className={
                                "Image " + (this.state.showPictureOne ? "Active" : "Inactive")
                            }
                            src={TestImageProductOne}
                            alt="Product"
                        ></img>
                        <img
                            className={
                                "Image " + (this.state.showPictureTwo ? "Active" : "Inactive")
                            }
                            src={TestImageProductTwo}
                            alt="Product"
                        ></img>
                        <img
                            className={
                                "Image " + (this.state.showPictureThree ? "Active" : "Inactive")
                            }
                            src={TestImageProductThree}
                            alt="Product"
                        ></img>
                    </div>
                    {/* Detail of product */}
                    <div className="Card-Details">
                        <h5 className="Product-Name">
                            {informationProduct && <>{informationProduct.name}</>}
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    {/* Options of product */}
                    <div className="Card-Options">
                        <div className="Options">
                            <h6>Options:</h6>
                            <div className="Picks">
                                <span
                                    className={
                                        "Option " +
                                        (this.state.showPictureOne ? "Active" : "Inactive")
                                    }
                                    onClick={this.ChangePictureOne}
                                ></span>
                                <span
                                    className={
                                        "Option " +
                                        (this.state.showPictureTwo ? "Active" : "Inactive")
                                    }
                                    onClick={this.ChangePictureTwo}
                                ></span>
                                <span
                                    className={
                                        "Option " +
                                        (this.state.showPictureThree ? "Active" : "Inactive")
                                    }
                                    onClick={this.ChangePictureThree}
                                ></span>
                            </div>
                        </div>
                        <div className="Price">
                            <span className="Number">
                                ${informationProduct && <>{informationProduct.price}</>}
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
            </div>
        );
    }
}

CardOne.defaultProps = {
    cadena: "Add to bag",
};

export default CardOne;
