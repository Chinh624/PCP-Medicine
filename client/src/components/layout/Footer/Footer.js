import "./footer.css";
import React, { useState, useEffect } from "react";

export default function Footer() {
  // show alert when user input valid
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  // show alert when click ok
  const [showSuccessConfirm, setShowSuccessConfirm] = useState(false);
  // show email if confirm cancel
  const [showErrorConfirm, setShowErrorConfirm] = useState(false);
  // set input from email
  const [email, setEmail] = useState("");
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

  const handleJoinNowClick = async () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && trimmedEmail.includes("@")) {
      const isConfirmed = window.confirm("Do you want to join with us?");
      if (isConfirmed) {
        setShowSuccessConfirm(true);
        setEmail("");
        try {
          const res = await fetch("/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: trimmedEmail }),
          }
          );
          
          if (res.ok) {
            setSuccessfulEmails((prevEmails) => [...prevEmails, trimmedEmail]);
          } else {
            throw new Error("Failed to send email");
          }
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setTimeout(() => {
            setShowSuccessConfirm(false);
          }, 2000);
        }
      } else {
        setEmail("");
        setShowErrorConfirm(true);
      }
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const successEmailArray = JSON.stringify(successEmails);
    localStorage.setItem("DataSuccessEmails", successEmailArray);
  }, [successEmails]);

  return (
    <footer>
      <div className="medicine-footer">
        <div className="container-input-information">
          <div className="container-input">
            <div className="footer-text-main">Stay up to date with Us</div>
            <div className="footer-text-extra">Get in touch</div>
            <div className="container-footer-input">
              <div className="footer-input-out">
                <input
                  typeof="email"
                  type="email"
                  className="footer-input"
                  placeholder="Enter your email address"
                  value={email}
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
                <div className="footer-text-extra-products">
                  Over The Counter
                </div>
              </div>
              <div class="container-footer-investors">
                <div className="footer-text-main-investors">INVESTORS</div>
                <div className="footer-text-extra-investors">Financials</div>
                <div className="footer-text-extra-investors">
                  News and Events
                </div>
                <div className="footer-text-extra-investors">
                  Reports and fillings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
