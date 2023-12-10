import "../Shop/shop.css";
import React, {useState} from 'react';

function billLing({
  showQuickResponse,
  showPayCash,
  payQuickResponse,
  payCash,
  orderTotal,
  showBilling,
  totalQuantity,
  placeOrder

}) {

  // const [name,setFullName] = useState("");
  // const [tel,setTel] = useState("");
  // const [email,setEmail] = useState("");



  return (
    <>
      <div className="container-billing">
        <button className="cart-button-close" onClick={showBilling}>
          &#10006;
        </button>
        <form className="billing">
          <div className="container-radio">
          <div className="billing-title">Payment Methods</div>
          <label class="form-control">
            <input type="radio" name="radio" onClick={showPayCash}/>
            <div className="billing-method-text">
              Cash on Delivery
            </div>
          </label>
          <label class="form-control">
            <input type="radio" name="radio" onClick={showQuickResponse} />
            <div className="billing-method-text">
              QR Payment
            </div>
          </label>
          </div>
          {payQuickResponse && (
            <>
              <form className="billing-container-payQuickResponse">
                <div className="contaner-billing-qr">
                  <form className="billing-payQuickResponse">
                    <span className="billing-method-text-input">Full Name</span>
                    <input type="text" placeholder="Full Name"/>
                    <span className="billing-method-text-input">
                      Telephone Number
                    </span>
                    <input type="tel" placeholder="Input telephone Number" />
                    <span className="billing-method-text-input">Email</span>
                    <input type="text" placeholder="Enter Email" className="billing-text-email"/>
                    <div className="cart-product-total-billing quantity">Total quantity: {totalQuantity} </div>

                    <div className="cart-product-total-billing">
                    Total Payment: $ {orderTotal.toFixed(2)}
                    </div>
                  </form>
                </div>
                <div>
                    <img
                      src="https://synergy-print.co.uk/wp-content/uploads/2020/07/Synergy_QRcode.png"
                      className="billing-image-qr"
                    />
                  </div>
                <div className="container-button">
                  <button type="submit" className="billing-button-submit">
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
                  <input type="text" placeholder="Full Name" />
                  <span className="billing-method-text-input">
                    Telephone Number
                  </span>
                  <input type="tel" placeholder="Input telephone Number" />
                  <span className="billing-method-text-input">Email</span>
                  <input type="Email" placeholder="Enter Email" className="billing-text-email" />
                  <div className="cart-product-total-billing quantity" >Total quantity: {totalQuantity} </div>

                  <div className="cart-product-total-billing">
                  Total Payment: $ {orderTotal.toFixed(2)}
                  </div>
                </form>
              </div>
              <div className="container-button">
                    <button type="submit" className="billing-button-submit" onClick={placeOrder}>
                      Place Order
                    </button>
                  </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default billLing;
