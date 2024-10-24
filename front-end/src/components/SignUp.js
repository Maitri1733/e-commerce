import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const CollectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };

  return (
    <div className="register">
      <h1>Registration Form</h1>
      <input
        className="inputBox"
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <input
        className="inputBox"
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        className="inputBox"
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button className="btn1" type="button" name="login" onClick={CollectData}>
        Login
      </button>
    </div>
  );
};

export default SignUp;
