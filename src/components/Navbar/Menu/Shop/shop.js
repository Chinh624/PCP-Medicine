import React, { useState } from "react";
import "../Shop/shop.css";
import Data from "../../../../Database/data.json";
import "../../../Button/buttoncart.css";
import ButtonClick from "../../../Button/button";
function Shop() {
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

  const [cart, setCart] = useState(false);
  // set show hide cart
  const showCart = () => {
    setCart(!cart);
  };

  return (
    <div className="Body-shop">
      <div className="container-navbar-shop">
        <h2 className="Title-shop">Product in PCP Medicine</h2>
        <div></div>
        <div></div>
        <div onClick={showCart}>
          <ButtonClick text="Cart" />
        </div>
      </div>
      <div className="container-item">
        {Data.product.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-item">
              <h3 className="product-item-name">{product.name}</h3>
              <img
                className="product-img"
                src={product.img}
                alt={product.name}
              />
              <h4 className="product-item-price">{product.price}</h4>
              <button type="button" className="product-button">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* show cart */}
      {cart && (
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

          {/* <div className="cart-product-total">
            Overall Total: $
          </div> */}
        </>
      )}
    </div>
  );
}

export default Shop;
