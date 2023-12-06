// // Login.js
import React, { useState } from "react";
import "./Login.css";

const Login = ({ showLogin }) => {
  const [isSignUp, setSignUp] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  // set change from input
  const handChangeUser = (event) => {
    const userName = event.target.value;
    setUserName(userName);
  };

  const handChangePassWord = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleChangeConfirmPassword = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
  };

  const goToSignUp = () => {
    setSignUp(true); // show
  };

  const goToLogIn = () => {
    setSignUp(false); // hide
    setLogin(true); // show
  };

  const checkLogin = () => {
    // let regex = /^[a-z0-9_-]{3,16}$/
    // //tối thiểu tám ký tự, ít nhất một chữ cái và một số
    // let checkPass = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    if ((userName) === (password) ) {
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
        <button type="submit" onClick={showLogin}>
          &#10006;
        </button>
        <h1 className="title-login">{isSignUp ? "SignUp" : "Login"}</h1>
        <div className="form-text">USERNAME</div>
        <input
          type="text"
          className="login-account"
          onChange={handChangeUser}
        ></input>
        <div className="form-text">PASSWORD</div>
        <input
          type="password"
          className="login-password"
          onChange={handChangePassWord}
        ></input>

        {isSignUp && (
          <>
            <div className="form-text">CONFIRM PASSWORD</div>
            <input
              type="password"
              className="login-password"
              onChange={handleChangeConfirmPassword}
              placeholder="CONFIRM PASSWORD"
            ></input>
          </>
        )}

        <div className="container-button">
          <button
            type="submit"
            className="button-log-in"
            onClick={isSignUp ? checkSignup : checkLogin}
          >
            {isSignUp ? "SignUp" : "Login"}
          </button>
          <button
            type="button"
            className="button-sign-up"
            onClick={isSignUp ? goToLogIn : goToSignUp}
          >
            {isSignUp ? "Back to Login" : "SignUp"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;


// let nextId = 0;

// function Login() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Login;
