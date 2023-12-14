import React, { useState, useEffect } from "react";
import "./Login.css";
import SignUp from "./Signup";

const Login = ({ showLogin, onSignupComplete }) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [loginError, setLoginError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);

  useEffect(() => {
    if (signupSuccess) {
      setUser({
        username: signupSuccess.username,
        password: signupSuccess.password
      });
    }
  }, [signupSuccess]);

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
    if (user.username && user.password) {
      setLoginError("");
      alert("Đăng nhập thành công!");
    } else {
      setLoginError("Tên người dùng hoặc mật khẩu không hợp lệ");
    }
  };

  const handleSignupClick = () => {
    setIsSigningUp(true);
  };

  const handleSignupComplete = (userData) => {
    setIsSigningUp(false);
    setSignupSuccess(userData);
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
        <h1 className="title-login">{isSigningUp ? "Đăng Ký" : "Đăng Nhập"}</h1>
      </div>
      <div className="form-text">TÊN NGƯỜI DÙNG</div>
      <input
        type="text"
        className="login-account"
        onChange={(e) => handleChange("loginUsername", e)}
        value={user.username}
      />
      <div className="form-text">MẬT KHẨU</div>
      <input
        type="password"
        className="login-password"
        onChange={(e) => handleChange("loginPassword", e)}
        value={user.password}
      />

      {loginError && <div className="error-message">{loginError}</div>}

      <div className="container-button">
        {isSigningUp ? (
          <SignUp showSignUp={() => setIsSigningUp(false)} onSignupComplete={handleSignupComplete} />
        ) : (
          <>
            <button type="button" className="button-log-in" onClick={checkLogin}>
              Đăng Nhập
            </button>
            <button type="button" className="button-sign-up" onClick={handleSignupClick}>
              Đăng Ký
            </button>
          </>
        )}
      </div>

      {signupSuccess && !isSigningUp && (
        <div className="user-info-container">
          <h2>Thông Tin Người Dùng</h2>
          <div>
            <strong>Tên người dùng:</strong> {user.username}
          </div>
          <div>
            <strong>Mật khẩu:</strong> {user.password}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;












