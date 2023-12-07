import React, { useState } from "react";
import "./Login.css";

const Login = ({ showLogin }) => {
  const [isSignUp, setSignUp] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [account, setAccount] = useState([]);
  const [setPassWordSignUp, setPasswordSignUp] = useState("");
  const [userNameSignUp, setUserNameSignUp] = useState("");
  // set change from input
  const handleChange = (type, event) => {
    const value = event.target.value;

    switch (type) {
      case "loginUsername":
        setUserName(value);
        break;
      case "loginPassword":
        setPassword(value);
        break;
      case "signUpUsername":
        setUserNameSignUp(value);
        break;
      case "signUpPassword":
        setPasswordSignUp(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const goToSignUp = () => {
    setSignUp(true); // show
  };

  const goToLogIn = () => {
    setSignUp(false); // hide
    setLogin(true); // show
  };

  const checkLogin = () => {
    if (userName === password) {
      setUserName("");
      setPassword("");
      //   setLogin(false)
      alert("Login Successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  const checkSignup = () => {
    if (password === confirmPassword) {
      setUserName("");
      setPassword("");
      goToLogIn(true);
      //   setSignUp(false);
      setLogin(true);
      alert("Signup successful!");
    } else {
      alert("Signup failed!");
    }
  };

  return (
    <>
        <div className="form-login">
          <button className="cart-button-close" onClick={showLogin}>
                &#10006;
          </button>
          <div className="container-login-title">
            <h1 className="title-login">Login</h1>
          </div>
        <div className="form-text">USERNAME</div>
        <input
          type="text"
          className="login-account"
          onChange={(e) => handleChange("loginUsername", e)}
        ></input>
        <div className="form-text">PASSWORD</div>
        <input
          type="password"
          className="login-password"
          onChange={(e) => handleChange("loginPassword", e)}
        ></input>
        <div className="container-button">
          <button type="submit" className="button-log-in" onClick={checkLogin}>
            Log In
          </button>
          <button type="button" className="button-sign-up" onClick={goToSignUp}>
            Sign Up
          </button>
        </div>
        </div>

      {isSignUp && (
        <>
          <div className="form-login">
            <h1 className="title-login">Sign Up</h1>
            <div className="form-text">USERNAME</div>
            <input
              type="text"
              className="login-account"
              onChange={(e) => handleChange("signUpUsername", e)}
            ></input>
            <div className="form-text">PASSWORD</div>
            <input
              type="password"
              className="login-password"
              onChange={(e) => handleChange("signUpPassword", e)}
            ></input>
            <div className="form-text">CONFIRM PASSWORD</div>
            <input
              type="password"
              className="login-password"
              onChange={(e) => handleChange("confirmPassword", e)}
              placeholder="CONFIRM PASSWORD"
            ></input>

            <button
              type="button"
              className="button-sign-up"
              onClick={checkSignup}
            >
              Sign Up
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
