import "./footer.css";
import React, { useState, useEffect } from "react";

export default function Footer() {
  // show alert when user imput valid
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  // show alert when click ok 
  const [showSuccessConfirm, setShowSuccessConfirm] = useState(false);
  // show email if confirm cancel
  const [showErrorConfirm, setShowErrorConfirm] = useState(false);
  // set input from email
  const [inputEmail, setEmail] = useState("");
  // show email
  const [showEmail, setShowEmail] = useState("");
  // show array of email success
  const [successEmails, setSuccessfulEmails] = useState([]);
  // input email
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setShowEmail(inputValue);
    setShowErrorAlert(false);
    setShowSuccessConfirm(false);
    setShowErrorConfirm(false);
  };
    var checkEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

  const handleJoinNowClick = () => {
    if (inputEmail !== checkEmail && inputEmail.includes("@")) {
      const isConfirmed = window.confirm(`Do you want to join with us?`);
      if (isConfirmed) {
        //confirm ok
        setShowSuccessConfirm(true);
        // input ->> " "
        setEmail("");


        setSuccessfulEmails((prevEmails) => {
          return [...prevEmails, showEmail];
        });

        setTimeout(() => {
          setShowSuccessConfirm(false);
        }, 2000);
      } else {
        // confirm when cancel
        // visit website
        setEmail("");
        setShowErrorConfirm(true);
      }
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 2000);
    }
  };
  
  // set change
  useEffect(() => {
    // swap array success email - >> string --> add localStorage
    const successEmailArray = JSON.stringify(successEmails);
    localStorage.setItem('DataSuccessEmails', successEmailArray);
  }, [successEmails]
  );



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
                value={inputEmail}
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
                We have sent an invitation to your email: {showEmail}
              </div>
            )}

            {showErrorConfirm && (
              <div className="showAlert success center">
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
    </div>
  );
}


