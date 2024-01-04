import React, { useState, useEffect } from "react";
import "./shop.css";
import "../../../Button/buttoncart.css";
import "../../../Header/header.css";
import drugstore from "../../../../img-icon/drugstore.png";
import Cart from "./cart";
import Data from "../../../../Database/Product.json";
import Billing from "./billing";
import data from "../../../../Database/data";
const Shop = () => {
  const [showCart, setShowCart] = useState(false); // set show
  const [searchItem, setSearchItem] = useState(""); // set search iteam
  const [selected, setSelected] = useState(null); // set detail
  const [selectedCategory, setSelectedCategory] = useState("Choose"); // dropwdown
  const [selectedProduct, setSelectedProduct] = useState(null); // set cartgory
  const [cart, setCart] = useState([]); // set cart create array
  const [payCash, setPayCash] = useState(false); // set show type pay
  const [payQuickResponse, setPayQuickResponse] = useState(false); // set show type pay
  const [bilLing, setShowBilling] = useState(false); // set show tbilling

  // set show paycash
  const showPayCash = () => {
    setPayCash(true);
    setPayQuickResponse(false);
  };
  // set show billing
  const showBilling = () => {
    setShowBilling(!bilLing);
  };
  // set show payment qr
  const showQuickResponse = () => {
    setPayQuickResponse(true);
    setPayCash(false);
  };
  // add to cart
  const addToCart = (product) => {
    const ProductIndex = cart.findIndex((item) => item.id === product.id);
    if (ProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[ProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((beforeCart) => [...beforeCart, { ...product, quantity: 1 }]);
    }
  };
  // delete cart
  const removeCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  // () => removeFromCart(cartItem.id)
  // set show dischanrge
  const dischargeCart = () => {
    if (totalProduct > 0) {
      setShowBilling(true);
      setShowCart(false);
    } else {
      alert("Please Order");
    }
  };
  // set quantity when + -
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };
  // () => updateQuantity(cartItem.id, cartItem.quantity + 1)
  //set input choose category
  // Dropdown change handler
  const handleDropdownChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // hide card
  const showCarts = () => {
    setShowCart(!showCart);
  };
  // show detail product
  const showDetail = (product) => {
    setSelectedProduct(product);
  };
  // set input from input search
  const handleSearch = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  // set search
  const openMedicine = (medicine) => {
    setSelected(medicine);
  };
  // set category
  // Filter products based on the selected category
  const getProducts = () => {
    if (selectedCategory === "Choose") {
      return Data.product;
    } else {
      const categoryObject = Data.dropdown.find(
        (category) => category.name === selectedCategory
      );
      if (categoryObject) {
        return Data.product.filter(
          (product) => product.category === categoryObject.category
        );
      }
    }
    return Data.product;
  };

  // total order
  const orderTotal = cart.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
  // total quantity
  const totalQuantity = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  // total product quantity
  const totalProduct = Array.from(
    new Set(cart.map((cartItem) => cartItem.id))
  ).length;

  // save cart form localstorage
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const renderProducts = (products, searchItem, openMedicine) =>
    products
      .filter((medicine) =>
        medicine.name.toLowerCase().includes(searchItem.toLowerCase())
      )
      .map((product) => (
        <div key={product.id} onClick={() => openMedicine(product)}>
          <div className="product-item">
            <img
              className="product-img"
              src={product.img}
              alt={product.name}
              onClick={() => showDetail(product)}
            />
            <h3 className="product-item-name">{product.name}</h3>
            <h4 className="product-item-price"> ${product.price}</h4>
            <button
              type="button"
              className="product-button"
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ));

  return (
    <div className="Body-shop">
      <div className="container-navbar-shop">
        <h2 className="Title-shop">Product PCP Medicine</h2>
        <div className="container-button-search">
          <input
            type="search"
            className="button-menu-search"
            placeholder="Search..."
            onChange={handleSearch}
            list="product-pcp-medicine"
          ></input>
        </div>
        <div>
          <select className="Dropdown" onChange={handleDropdownChange}>
            {Data.dropdown.map((dropdown) => (
              <option key={dropdown.id} value={dropdown.value}>
                {dropdown.name}
              </option>
            ))}
          </select>
        </div>
        <div className="container-button-cart-show">
          <div className="button-cart" onClick={showCarts}>
            <img src={drugstore} className="cart-icon"></img>
          </div>
          <div className="total-quantity-product-cart">{totalProduct}</div>
        </div>
      </div>
      <div className="container-item">
        {selectedCategory === "Choose"
          ? renderProducts(Data.product, searchItem, openMedicine)
          : renderProducts(getProducts(), searchItem, openMedicine)}

        {selected && <></>}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="left-right">
            <div className="left">
              <>{selectedProduct.name}</>
              <img
                className="selectedProduct-img"
                src={selectedProduct.img}
                alt={selectedProduct.name}
              />
            </div>
            <div className="right">
              <p>
                <b>Uses:</b> {selectedProduct.title}
              </p>
              <p>
                <b>Subjects of use: </b>
                {selectedProduct.object}
              </p>
              <p>
                <b>Form: </b>
                {selectedProduct.formality}
              </p>
              <p>
                <b>Trademark: </b>
                {selectedProduct.trademark}
              </p>
              <p>
                <b>Where production: </b>
                {selectedProduct.made}
              </p>
              <p>
                <b>Ingredient: </b> {selectedProduct.ingredient}
              </p>
              <p>
                <b>Nominate: </b>
                {selectedProduct.allocate}
              </p>
              <div className="Container-price-button">
                <h1 className="product-item-detail-price">
                  Price: ${selectedProduct.price}
                </h1>
              </div>
              <div className="Container-price-button">
                <button
                  type="button"
                  className="product-button"
                  onClick={() => addToCart(selectedProduct)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <span className="close" onClick={() => setSelectedProduct(null)}>
              &#10006;
            </span>
          </div>
        </div>
      )}

      {showCart && (
        <>
          <Cart
            showCarts={showCarts}
            cart={cart}
            removeCart={removeCart}
            updateQuantity={updateQuantity}
            dischargeCart={dischargeCart}
            orderTotal={orderTotal}
            totalProduct={totalProduct}
          />
        </>
      )}

      {bilLing && (
        <>
          <Billing
            showQuickResponse={showQuickResponse}
            showPayCash={showPayCash}
            payQuickResponse={payQuickResponse}
            payCash={payCash}
            orderTotal={orderTotal}
            showBilling={showBilling}
            totalProduct={totalProduct}
            totalQuantity={totalQuantity}
            cart={cart}
            setCart={setCart}
          />
        </>
      )}
    </div>
  );
};
export default Shop;
