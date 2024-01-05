import React from "react";
import Addtocart from "../../img-icon/addtocart.png"
import './buttoncart.css';
function buttoncart(){
    return(
        <div className="container-button-cart">
            <div className="button-cart-text">ADD TO CART 
            </div>
            <div>
                <img src={Addtocart} className="img-addtocart"></img>
            </div>
        </div>
    )
}

export default buttoncart;