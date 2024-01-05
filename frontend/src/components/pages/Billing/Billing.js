import "../Shop/shop.css";
import React, { useState, useEffect } from "react";
import QR from "../../../image/icon/QR.jpg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function BillLing({
  showQuickResponse,
  showPayCash,
  payQuickResponse,
  payCash,
  orderTotal,
  showBilling,
  totalQuantity,
  cart,
}) {
  const [name, setFullName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const placeOrder = () => {
    if (
      email.toLocaleLowerCase() &&
      email.includes("@") &&
      !isNaN(tel) &&
      name.toLocaleLowerCase() &&
      totalQuantity > 0
    ) {
      alert("Order Successfully.");
      // setCart([]);
    } else {
      alert("Please Enter Information.");
    }
  };

  const handleChangeName = (e) => {
    const inputName = e.target.value;
    setFullName(inputName);
  };

  const handleChangeTel = (value) => {
    setTel(value);
  };

  const handleChangeEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  useEffect(() => {
    // create object
    const userInformation = {
      name: name,
      tel: tel,
      email: email,
      totalQuantity: totalQuantity,
      cart: cart,
    };

    localStorage.setItem(
      "Information-Person-Buy",
      JSON.stringify(userInformation)
    );
  }, [name, tel, email, totalQuantity, cart]);
  // set form array have element

  return (
    <>
      <div className="container-billing">
        <button className="cart-button-close" onClick={showBilling}>
          &#10006;
        </button>
        <form className="billing">
          <div className="container-radio">
            <div className="billing-title">Payment Methods</div>
            <label className="form-control">
              <input type="radio" name="radio" onClick={showPayCash} />
              <div className="billing-method-text">Cash on Delivery</div>
            </label>
            <label className="form-control">
              <input type="radio" name="radio" onClick={showQuickResponse} />
              <div className="billing-method-text">QR Payment</div>
            </label>
          </div>
          {payQuickResponse && (
            <>
              <form className="billing-container-payQuickResponse">
                <div className="contaner-billing-qr">
                  <form className="billing-payQuickResponse">
                    <span className="billing-method-text-input">Full Name</span>
                    <input
                      type="text"
                      placeholder="Full Name"
                      onChange={handleChangeName}
                      className="billing-input-name"
                    />
                    <span className="billing-method-text-input">Telephone</span>
                    <div className="billing-input-tel">
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="VN"
                        placeholder="Enter telephone Number"
                        value={tel}
                        onChange={handleChangeTel}
                      />
                    </div>
                    <span className="billing-method-text-input">Email</span>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="billing-text-email"
                      onChange={handleChangeEmail}
                    />
                    <div className="cart-product-total-billing quantity">
                      Total quantity: {totalQuantity}
                    </div>

                    <div className="cart-product-total-billing">
                      Total Payment: $ {orderTotal.toFixed(2)}
                    </div>
                  </form>
                </div>
                <div>
                  <img src={QR} className="billing-image-qr" alt="QR Code" />
                </div>
                <div className="container-button">
                  <button
                    type="button"
                    className="billing-button-submit"
                    onClick={placeOrder}
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </>
          )}

          {payCash && (
            <>
              <div className="contaner-billing-cash">
                <form className="billing-payCash">
                  <span className="billing-method-text-input">Full Name</span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={handleChangeName}
                    className="billing-input-name"
                  />
                  <span className="billing-method-text-input">Telephone</span>
                  <div className="billing-input-tel">
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="VN"
                      placeholder="Enter telephone Number"
                      value={tel}
                      onChange={handleChangeTel}
                    />
                  </div>
                  <span className="billing-method-text-input">Email</span>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="billing-text-email"
                    onChange={handleChangeEmail}
                  />
                  <div className="cart-product-total-billing quantity">
                    Total quantity: {totalQuantity}
                  </div>

                  <div className="cart-product-total-billing">
                    Total Payment: $ {orderTotal.toFixed(2)}
                  </div>
                </form>
              </div>
              <div className="container-button">
                <button
                  type="button"
                  className="billing-button-submit"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default BillLing;
