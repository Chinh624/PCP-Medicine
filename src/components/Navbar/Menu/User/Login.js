// // Login.js
// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [isSignUp, setSignUp] = useState(true);
//   const [isLogin, setLogin] = useState(true);
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [password, setPassword] = useState("");
//   const [userName, setUserName] = useState("");
//   const [signupSuccess, setSignupSuccess] = useState(false);

//  // set change from input
//   const handChangeUser = (event) => {
//     const userName = event.target.value;
//     setUserName(userName);
//   };
//   const handChangePassWord = (event) => {
//     const password = event.target.value;
//     setPassword(password);
//   };
//   const handleChangeConfirmPassword = (event) => {
//     const confirmPassword = event.target.value;
//     setConfirmPassword(confirmPassword);
//   };

//   const goToSignUp = () => {
//         setSignUp(true); 
//   };

//   const checkLogin = () => {
//       if (userName === password) {
//         setUserName("")
//         setPassword("")
//         alert("Login Successful!");
//       } else {
//         alert("Invalid username or password");
//       }
//     }

//   const checkSignup = () => {
//     if(password === confirmPassword) {
//       setUserName("")
//       setPassword("")
//       setLogin(true);
//       setSignupSuccess(true);

//       alert("signup successful!");
//     }else{
//       alert("signup failed!");
//     }
//   };


//   return (
//     <>
//       {/* inter face show */}
//       {/* <div className="form-login">
//         <h1 className="title-login">Login</h1>
//         <div className="form-text">USERNAME</div>
//         <input
//           type="text"
//           className="login-account"
//           onChange={handChangeUser}
//         ></input>
//         <div className="form-text">PASSWORD</div>
//         <input
//           type="password"
//           className="login-password"
//           onChange={handChangePassWord}
//         ></input>
//         <div className="container-button">
//                 <button
//                   type="submit"
//                   className="button-log-in"
//                   onClick={checkLogin}
//                 >
//                   Login
//                 </button>
//                 <button
//                   type="button"
//                   className="button-sign-up"
//                 onclick={goToSignUp}>
//                   SignUp
//                 </button>
//         </div>
//       </div> */}
//         {/* into signup */}
//       {isSignUp && (
//           <>
//             <div className="form-login">
//               <h1 className="title-login">Login</h1>
//               <div className="form-text">USERNAME</div>
//               <input
//                 type="text"
//                 className="login-account"
//                 onChange={handChangeUser}
//               ></input>
//               <div className="form-text">PASSWORD</div>
//               <input
//                 type="password"
//                 className="login-password"
//                 onChange={handChangePassWord}
//               ></input>
//               <div className="form-text">CONFIRM PASSWORD</div>
//               <input
//                 type="password"
//                 className="login-password"
//                 onChange={handleChangeConfirmPassword}
//                 placeholder="CONFIRM PASSWORD"
//               ></input>

//               <div className="container-button">
//                 <button
//                   type="button"
//                   className="button-sign-up"
//                   onClick={checkSignup}
//                 >
//                   SignUp
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//           {/* into login */}
//       {isLogin && (
//          <div className="form-login">
//          <h1 className="title-login">Login</h1>
//          <div className="form-text">USERNAME</div>
//          <input
//            type="text"
//            className="login-account"
//            onChange={handChangeUser}
//          ></input>
//          <div className="form-text">PASSWORD</div>
//          <input
//            type="password"
//            className="login-password"
//            onChange={handChangePassWord}
//          ></input>
//          <div className="container-button">
//                  <button
//                    type="submit"
//                    className="button-log-in"
//                    onClick={checkLogin}
//                  >
//                    Login
//                  </button>
//                  <button
//                   type="button"
//                   className="button-sign-up"
//                 onclick={goToSignUp}>
//                   SignUp
//                 </button>
//          </div>
//        </div>
//       )}
//     </>
//   );
// }


// export default Login;
