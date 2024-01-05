import React from "react";
import "./shop.css";
export default function cart({
  cart,
  showCarts,
  updateQuantity,
  removeCart,
  dischargeCart,
  orderTotal,
  totalProduct,
}) {
  return (
    <>
      <div className="cart">
        <div className="cart-container-title">
          <div className="cart-title">
            <h1>My cart</h1>
          </div>
          <button className="cart-button-close" onClick={showCarts}>
            &#10006;
          </button>
        </div>
        <div className="cart-list-products">
          {cart.map((cartItem) => (
            <div className="cart-product" key={cartItem.id}>
              <img
                className="cart-product-image"
                src={cartItem.img}
                alt={cartItem.name}
              />
              <div className="cart-product-container-text">
                <div className="cart-product-name">{cartItem.name}</div>
                <div className="cart-product-quantity">{cartItem.category}</div>
                <div className="cart-product-price">${cartItem.price}</div>
              </div>
              <input
                type="button"
                className="cart-product-quantity-up"
                value={"+"}
                onClick={() =>
                  updateQuantity(cartItem.id, cartItem.quantity + 1)
                }
              ></input>

              <input
                type="number"
                className="cart-product-show-quantity"
                value={cartItem.quantity}
              ></input>

              <input
                type="button"
                className="cart-product-quantity-down"
                value={"-"}
                onClick={() => {
                  const newQuantity = Math.max(0, cartItem.quantity - 1);
                  if (newQuantity === 0) {
                    removeCart(cartItem.id);
                  } else {
                    updateQuantity(cartItem.id, newQuantity);
                  }
                }}
              ></input>

              <button
                className="cart-product-remove"
                onClick={() => removeCart(cartItem.id)}
              >
                &#10006;
              </button>
            </div>
          ))}
        </div>
        <div className="cart-container-payment">
          <div className="cart-container-show-total">
            <div className="cart-product-total-quantity">
              Total product quantity: {totalProduct}{" "}
            </div>
            <div className="cart-product-total">
              Order total: $ {orderTotal.toFixed(2)}{" "}
            </div>
          </div>
          <button className="cart-product-pay" onClick={dischargeCart}>
            Discharge
          </button>
        </div>
      </div>
    </>
  );
}
