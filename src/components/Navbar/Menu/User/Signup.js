import React, { useState, useEffect } from "react";
import "./Signup.css";

const SignUp = ({ showSignUp, onSignupComplete }) => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [signupError, setSignupError] = useState("");
    // SAVE DATA USER SIGN UP
    useEffect(() => {
        const saveUser = {
            userSignUp: user
        };
        localStorage.setItem("saveUserSignUp", JSON.stringify(saveUser))
    }, [user]);

    const handleChange = (type, event) => {
        const value = event.target.value;
        switch (type) {
            case "signUpUsername":
                setUser((prevUser) => ({ ...prevUser, username: value }));
                break;
            case "signUpPassword":
                setUser((prevUser) => ({ ...prevUser, password: value }));
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const checkSignup = () => {
        if (user.username.trim() && user.password.trim() && user.password === confirmPassword) {
            setSignupError("");
            alert("Signup successful!");
        } else {
            alert("Please Enter full information");
        }
    };

    return (
        <div className="form-sign-up">
            <button className="cart-button-close" onClick={showSignUp}>
                &#10006;
            </button>
            <div className="container-sign-up-title">
                <h1 className="title-sign-up">SignUp</h1>
            </div>
            <div className="form-text">Username</div>
            <input
                type="text"
                className="sign-up-account"
                onChange={(e) => handleChange("signUpUsername", e)}
            ></input>
            <div className="form-text">Password</div>
            <input
                type="password"
                className="sign-up-password"
                onChange={(e) => handleChange("signUpPassword", e)}
            ></input>
            <div className="form-text">ConfirmPassword</div>
            <input
                type="password"
                className="sign-up-password"
                onChange={(e) => handleChange("confirmPassword", e)}
            ></input>

            {signupError && <div className="error-message">{signupError}</div>}

            <div className="container-button">
                <button type="submit" className="button-sign-up" onClick={checkSignup}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default SignUp;


