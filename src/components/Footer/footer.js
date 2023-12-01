import "./footer.css";
import React, { useState } from "react";

export default function Footer() {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessConfirm, setShowSuccessConfirm] = useState(false);
  const [showErrorConfirm, setShowErrorConfirm] = useState(false);
  const [emailInput, setEmail] = useState("");
  const [emailShow, setShowEmail] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setShowEmail(inputValue);
    setShowErrorAlert(false);
    setShowSuccessConfirm(false);
    setShowErrorConfirm(false);
  };

  const handleJoinNowClick = () => {
    if (emailInput.trim() !== "" && emailInput.includes("@")) {
      const isConfirmed = window.confirm(`Do you want to join with us?`);
      if (isConfirmed) {
        setShowSuccessConfirm(true);
        setEmail("");
      } else {
        setEmail("");
        setShowErrorConfirm(true);
      }
    } else {
      setShowErrorAlert(true);
    }
  };

  return (
    <div className="medicine-footer">
      <div className="container-input-information">
        <div className="container-input">
          <div className="footer-text-main">Stay up to date with Us</div>
          <div className="footer-text-extra">Get in touch</div>
          <div className="container-footer-input">
            <div className="footer-input-out">
              <input
                typeof="text"
                type="text"
                className="footer-input"
                placeholder="Enter your email address"
                value={emailInput}
                onChange={handleInputChange}
              ></input>
              <button className="footer-button" onClick={handleJoinNowClick}>
                Join now
              </button>
            </div>
            {showErrorAlert && (
              <div className="showAlert error center">
                Please enter a valid email address
              </div>
            )}

            {showSuccessConfirm && (
              <div className="showAlert success center">
                We have sent an invitation to your email: {emailShow}
              </div>
            )}

            {showErrorConfirm && (
              <div className="showAlert center">
                Thanks for visiting our web.
              </div>
            )}
          </div>
        </div>
        <div className="container-footer-menu-products-investors">
          <div className="container-footer-menu">
            <div className="footer-menu">Home</div>
            <div className="footer-menu">Programs</div>
            <div className="footer-menu">Why Us</div>
            <div className="footer-menu">About Us</div>
          </div>
          <div className="container-footer-products-investors">
            <div className="container-footer-products">
              <div className="footer-text-main-products">PRODUCTS</div>
              <div className="footer-text-extra-products">Generics</div>
              <div className="footer-text-extra-products">Biosimilars</div>
              <div className="footer-text-extra-products">Over-The-Counter</div>
            </div>
            <div class="container-footer-investors">
              <div className="footer-text-main-investors">INVESTORS</div>
              <div className="footer-text-extra-investors">Financials</div>
              <div className="footer-text-extra-investors">News and Events</div>
              <div className="footer-text-extra-investors">
                Reports and fillings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-soure">
         <div>&copy;2023 PCP Medicine.</div>
         <div>All rights reserved.</div>
      </div>
    </div>
  );
}
