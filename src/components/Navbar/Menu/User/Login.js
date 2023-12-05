import React, { useState, useEffect } from "react";

function Login() {
    const  [userSignUp , setUserSignUp] = useState ({
        userName : "",
        email:  "",
        passWord: "",
        phoneNumber: "",
    })







  // State for user data
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const handleLogin = () => {
    console.log("User logged in:", userData);
  };

  return (
    <div>
      <h1>User Information</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
      </form>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
