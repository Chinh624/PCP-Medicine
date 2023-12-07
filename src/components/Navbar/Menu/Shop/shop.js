import React, { useState,useEffect } from "react";
import "../Shop/shop.css";
import "../../../Button/buttoncart.css";
import "../../../Header/header.css";
import drugstore from "../../../../img-icon/drugstore.png";
import Cart from "./cart";
import Data from "../../../../Database/Product.json";
const Shop = () => {
  const [showCart, setShowCart] = useState(false); // set show
  const [searchItem, setSearchItem] = useState(""); // set search iteam
  const [selected, setSelected] = useState(null); // set detail
  const [selectedCategory, setSelectedCategory] = useState("Choose"); // dropwdown
  const [selectedProduct, setSelectedProduct] = useState(null); // set cartgory
  const [cart, setCart] = useState([]); // set cart create array

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  // () => removeFromCart(cartItem.id)
  const dischargeCart = () => {
    const confirmed = window.confirm("Are you sure you want to discharge");
    if (confirmed) {
      setCart([]);
      alert("Pay success");
    }
  };


  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };
  // () => updateQuantity(cartItem.id, cartItem.quantity + 1)



  const handleDropdownChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
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

  const openMedicine = (medicine) => {
    setSelected(medicine);
  };

  const getProducts = () => {
    // show all
    const mapProducts = Data.product.map((product) => product);
    // show of - product-pcp
    const filterProductsPCP = Data.product.filter(
      (product) => product.category.toLowerCase()  === "product-pcp"
    );
    // show category ->> vitamin
    const filterProductVitamins = Data.product.filter(
      (product) => product.category.toLowerCase()  === "vitamin"
    );
    // show category ->> skin care

    const filterProductSkincare = Data.product.filter(
      (product) => product.category.toLowerCase()  === "skincare"
    );
    // show category ->> heathcondition
    const filterProductHealthCondition = Data.product.filter(
      (product) => product.category.toLowerCase() === "healthcondition"
    );

    return {
      mapProducts,
      filterProductsPCP,
      filterProductVitamins,
      filterProductSkincare,
      filterProductHealthCondition,
    };
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const renderProducts = (products, searchItem, openMedicine) =>
    products
      .filter((medicine) =>
        medicine.name.toLowerCase().includes(searchItem.toLowerCase())
      )
      .map((product) => (
        <div
          className="product"
          key={product.id}
          onClick={() => openMedicine(product)}
        >
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
        <div className="button-cart" onClick={showCarts}>
          <img src={drugstore} className="cart-icon"></img>
        </div>
      </div>
      <div className="container-item">
        {selectedCategory === "Choose" &&
          renderProducts(getProducts().mapProducts, searchItem, openMedicine)}
        {selectedCategory === "Product-PCP" &&
          renderProducts(
            getProducts().filterProductsPCP,
            searchItem,
            openMedicine
          )}
        {selectedCategory === "Skin-Care" &&
          renderProducts(
            getProducts().filterProductSkincare,
            searchItem,
            openMedicine
          )}
        {selectedCategory === "Vitamins" &&
          renderProducts(
            getProducts().filterProductVitamins,
            searchItem,
            openMedicine
          )}
        {selectedCategory === "Heath-condition" &&
          renderProducts(
            getProducts().filterProductHealthCondition,
            searchItem,
            openMedicine
          )}
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
              <h1 className="product-item-detail-price">
                Price: ${selectedProduct.price}
              </h1>
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
            cart ={cart}
            removeCart={removeCart}
            updateQuantity={updateQuantity}
            dischargeCart={dischargeCart}
          />
        </>
      )}
    </div>
  );
};
export default Shop;
