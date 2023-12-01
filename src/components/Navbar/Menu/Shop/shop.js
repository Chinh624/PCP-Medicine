import React from "react";
import Data from "../../../../Database/data";
import "../Shop/shop.css";

function Shop() {
  return (
    <div className="Body-shop">
      <h2 className="Title-shop">Product</h2>
      <div className="container-item">
        {Data.product.map((product) => {
          return (
            <div className="product">
              <div className="product-item">
                <h3 className="product-item-name">{product.name}</h3>
                <img
                  className="product-img"
                  src={product.img}
                  alt={product.name}
                />
                {/* <h5 className="product-item-title">{product.title}</h5> */}
                <h4 className="product-item-price">{product.price}</h4>
                <button type="button" className="product-button">
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
