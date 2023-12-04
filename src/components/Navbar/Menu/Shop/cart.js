import React from "react";
import "../Shop/shop.css";
export default function cart({ showCart }) {
  const product2 = [
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Acetylcystein 200 Imexpharm ",
      price: 12.0,
    },

    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Acetylcystein Acetylcystein 200 Imexpharm",
      price: 12.0,
    },

    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Name",
      price: 12.0,
    },

    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Name",
      price: 12.0,
    },
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Name",
      price: 12.0,
    },
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Name",
      price: 12.0,
    },
  ];
  return (
    <>
      <div className="cart">
        <div className="cart-container-title">
          <h1 className="cart-title">My cart</h1>
          <button className="cart-button-close" onClick={showCart}>
            &#10006;
          </button>
        </div>
        <div className="cart-list-products">
          {product2.map((product2) => (
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
          <button className="cart-product-pay">Pay</button>
        </div>
      </div>
    </>
  );
}
