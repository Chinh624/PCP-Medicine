import React, { useState } from "react";
import "../Shop/shop.css";
import "../../../Button/buttoncart.css";
import "../../../Header/header.css";
import drugstore from "../../../../img-icon/drugstore.png";
import Cart from "./cart";
import Data from "../../../../Database/Product.json";
const Shop = () => {
  const [cart, setCart] = useState(false); // set cart
  const [searchItem, setSearchItem] = useState(""); // set search iteam
  const [selected, setSelected] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState("Choose"); // dropwdown
  const [selectedProduct, setSelectedProduct] = useState(null); // set cartgory

  // set change from input search
  const handleDropdownChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  };
  // hide card
  const showCart = () => {
    setCart(!cart);
  };
  // show detail product
  const showDetail = (product) => {
    setSelectedProduct(product);
  }
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
      (product) => product.category === "product-pcp"
    );
    // show category ->> vitamin
    const filterProductVitamins = Data.product.filter(
      (product) => product.category === "vitamin"
    );
    // show category ->> skin care

    const filterProductSkincare = Data.product.filter(
      (product) => product.category === "skincare"
    );
    // show category ->> heathcondition
    const filterProductHealthCondition = Data.product.filter(
      (product) => product.category === "healthcondition"
    );

    return {
      mapProducts,
      filterProductsPCP,
      filterProductVitamins,
      filterProductSkincare,
      filterProductHealthCondition,
    };
  };

  const renderProducts = (products, searchItem, openMedicine ) =>
    products
      .filter((medicine) => medicine.name.toLowerCase().includes(searchItem.toLowerCase()))
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
            <h4 className="product-item-price">{product.price}</h4>
            <button type="button" className="product-button">
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
        <div className="button-cart" onClick={showCart}>
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
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedProduct(null)}>
              &times;
            </span>
            <div className="left-right">
              <div className="left">
                <h2>{selectedProduct.name}</h2>
                <img
                  className="selectedProduct-img"
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                />
              </div>
              <div className="right">
                <p>Uses: {selectedProduct.title}</p>
                <p>Subjects of use: {selectedProduct.object}</p>
                <p>Form: {selectedProduct.formality}</p>
                <p>Trademark: {selectedProduct.trademark}</p>
                <p>Where production: {selectedProduct.made}</p>
                <p>Ingredient {selectedProduct.ingredient}</p>
                <p>Nominate: {selectedProduct.allocate}</p>
              </div>
            </div>

            <p className="product-item-price">Price: {selectedProduct.price}</p>
          </div>
        </div>
      )}

      {/* show cart */}
      {cart && (
        <>
          <Cart showCart={showCart} />
        </>
      )}
    </div>
  );
};
export default Shop;
