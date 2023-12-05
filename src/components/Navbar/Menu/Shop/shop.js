import React, { useState } from "react";
import "../Shop/shop.css";
import "../../../Button/buttoncart.css";
import "../../../Header/header.css";
import drugstore from "../../../../img-icon/drugstore.png";
import Cart from "./cart";
import Data from "../../../../Database/data";

const Shop = () => {
  const [cart, setCart] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [selected, setSelected] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Choose");

  const handleDropdownChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  };

  const showCart = () => {
    setCart(!cart);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  const openMedicine = (medicine) => {
    setSelected(medicine);
  };

  const getProducts = () => {
    const mapProducts = Data.product.map(
      (product) => product 
    );

    const filterProductsPCP = Data.product.filter(
      (product) => product.title === "product-pcp"
    );

    const filterProductVitamins = Data.product.filter(
      (product) => product.title === "vitamin"
    );

    const filterProductSkincare = Data.product.filter(
      (product) => product.title === "skincare"
    );

    const filterProductHealthCondition = Data.product.filter(
      (product) => product.title === "healthcondition"
    );

    return {
      mapProducts,
      filterProductsPCP,
      filterProductVitamins,
      filterProductSkincare,
      filterProductHealthCondition,
    };
  };

  const renderProducts = (products, searchItem, openMedicine) =>
    products
      .filter((medicine) => medicine.name.toLowerCase().includes(searchItem))
      .map((product) => (
        <div
          className="product"
          key={product.id}
          onClick={() => openMedicine(product)}
        >
          <div className="product-item">
            <img className="product-img" src={product.img} alt={product.name} />
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
