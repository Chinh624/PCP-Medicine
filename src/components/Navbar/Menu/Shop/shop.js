import React, { useState } from "react";
import "../Shop/shop.css";
import Data from "../../../../Database/data.json";
import "../../../Button/buttoncart.css";
import "../../../Header/header.css";
import drugstore from "../../../../img-icon/drugstore.png";
import Cart from "./cart";
function Shop() {
  // set cart
  const [cart, setCart] = useState(false);
  // set search
  const [searchItem, setSearchItem] = useState("");
  const [selected, setSelected] = useState(null);
  //set dropdown menu items
  const [selectedItem, setSelectedItem] = useState();


  // use switch case show product 
  const renderSelectedItem = () => {
    switch (selectedItem) {
      case "A":
        return (
          <>
            {Data.product
              .filter((medicine) =>
                medicine.name.toLowerCase().includes(searchItem)
              )
              .map((product) => (
                <div
                  className="product"
                  key={product.id}
                  onClick={openMedicine}
                >
                  <div className="product-item">
                    <img
                      className="product-img"
                      src={product.img}
                      alt={product.name}
                    />
                    <h3 className="product-item-name">{product.name}</h3>
                    <h4 className="product-item-price">{product.price}</h4>
                    <button type="button" className="product-button">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
          </>
        );;
      case "B":
        return <h1>Data Skin - Care</h1>;
      case "C":
        return <h1>Data vitamins</h1>
      case "D":
        return <h1>Data heath - Condition</h1>
      default:
        return (
          <>
            {Data.product
              .filter((medicine) =>
                medicine.name.toLowerCase().includes(searchItem)
              )
              .map((product) => (
                <div
                  className="product"
                  key={product.id}
                  onClick={openMedicine}
                >
                  <div className="product-item">
                    <img
                      className="product-img"
                      src={product.img}
                      alt={product.name}
                    />
                    <h3 className="product-item-name">{product.name}</h3>
                    <h4 className="product-item-price">{product.price}</h4>
                    <button type="button" className="product-button">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
          </>
        );
    }
  };
  // set dropdown menu
  const handleChangeDropDown = (event) => {
    setSelectedItem(event.target.value);
  };

  // set show hide cart
  const showCart = () => {
    setCart(!cart);
  };
  // set change from input
  const handleSearch = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };
  // return search
  const openMedicine = (medicine) => {
    setSelected(medicine);
  };

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
          <select value={selectedItem} onChange={handleChangeDropDown} className="Dropdown">
            <option  value="A" >Product - PCP</option>
            <option value="B">Vitamins</option>
            <option value="C">Skin Care</option>
            <option value="D">Health - Condition</option>
          </select>
        </div>
        <div className="button-cart" onClick={showCart}>
          <img src={drugstore} className="cart-icon"></img>
        </div>
      </div>
      <div className="container-item">{renderSelectedItem()}</div>
      {/* show cart */}
      {cart && (
        <>
          <Cart showCart={showCart} />
        </>
      )}

      {selected && (
        <></>
      )}
    </div>

    // {/* show cart */}
  );
}

export default Shop;
