import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      Navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    console.log("email,password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      Navigate("/");
    } else {
      alert("Please enter your correct details");
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="btn1" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
