import React, { useState, useEffect } from "react";
import "./Login.css";
import SignUp from "./Signup";
import UserInfo from "./UserInfo";
const Login = ({ showLogin, onSignupComplete }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      setUser({
        username: loggedInUser.username,
        password: loggedInUser.password,
      });
    }
  }, [loggedInUser]);

  const handleChange = (type, event) => {
    const value = event.target.value;
    switch (type) {
      case "loginUsername":
        setUser((prevUser) => ({ ...prevUser, username: value }));
        break;
      case "loginPassword":
        setUser((prevUser) => ({ ...prevUser, password: value }));
        break;
      default:
        break;
    }
  };

  const checkLogin = () => {
    if (!user.username && !user.password) {
      setLoginError("Please enter username and password");
    } else if (!user.username) {
      setLoginError("Enter username");
    } else if (!user.password) {
      setLoginError("Enter password");
    } else if (
      user.username === loggedInUser?.username &&
      user.password === loggedInUser?.password
    ) {
      setLoginError("");
      alert("Login success");
      setShowUserInfo(true);
    } else {
      setLoginError("Invalid username or password");
      setShowUserInfo(false);
    }
  };
  

  const handleSignupClick = () => {
    setIsSigningUp(true);
  };

  const handleSignupComplete = (userData) => {
    setIsSigningUp(false);
    setLoggedInUser(userData);
    if (typeof onSignupComplete === "function") {
      onSignupComplete(userData);
    }
  };
  

  return (
    <div className="form-login">
      <button className="cart-button-close" onClick={showLogin}>
        &#10006;
      </button>
      <div className="container-login-title">
        <h1 className="title-login">{isSigningUp ? "Signup" : "Login"}</h1>
      </div>
      <div className="form-text">Username </div>
      <input
        type="text"
        className="login-account"
        onChange={(e) => handleChange("loginUsername", e)}
        value={user.username}
      />
      <div className="form-text">Password</div>
      <input
        type="password"
        className="login-password"
        onChange={(e) => handleChange("loginPassword", e)}
        value={user.password}
      />

      {loginError && <div className="error-message">{loginError}</div>}

      <div className="container-button">
        {isSigningUp ? (
          <SignUp
            showSignUp={() => setIsSigningUp(false)}
            onSignupComplete={handleSignupComplete}
          />
        ) : (
          <>
            <button
              type="button"
              className="button-log-in"
              onClick={checkLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="button-sign-up"
              onClick={handleSignupClick}
            >
              Signup
            </button>
          </>
        )}
      </div>

      {loggedInUser && showUserInfo && !isSigningUp && <UserInfo loggedInUser={loggedInUser} />}
    </div>
  );
};

export default Login;
