import React  from "react";
import "../Shop/shop.css";
import Data from "../../../../Database/Product.json";
export default function cart({showCart}) {
  
  return (
    <>
      <div className="cart">
        <div className="cart-container-title">
          <div className="cart-title">
            <h1>My cart</h1>
          </div>
          <button className="cart-button-close" onClick={showCart}>
            &#10006;
          </button>
        </div>
        <div className="cart-list-products">
          {Data.product.map((product2) => (
            <div className="cart-product" key={product2.id}>
              <img
                className="cart-product-image"
                src={product2.img}
                alt={product2.name}
              />
              <div className="cart-product-container-text">
                <div className="cart-product-name">{product2.name}</div>
                <div className="cart-product-quantity">Quantity</div>
                <div className="cart-product-price">${product2.price}</div>
              </div>
              <input
                type="button"
                className="cart-product-quantity-up"
                value={"+"}
                // onClick={upQuantity}
              ></input>

              <input
                type="number"
                className="cart-product-show-quantity"
                value={0}
              ></input>

              <input
                type="button"
                className="cart-product-quantity-down"
                value={"-"}
                // onClick={downQuantity}
              ></input>

              <button className="cart-product-remove">&#10006;</button>
            </div>
          ))}
        </div>
        <div className="cart-container-payment">
          <div className="cart-container-show-total">
            <div className="cart-product-total-quantity">Quantity: </div>
            <div className="cart-product-total">Order Total: $ </div>
          </div>
          <button className="cart-product-pay">Discharge</button>
        </div>
      </div>
    </>
  );
}
