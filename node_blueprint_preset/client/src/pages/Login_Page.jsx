import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_Page = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const login_user = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8797/user/login", {
        email: user.email,
        password: user.password,
      })
      .then((data) => {
        navigate("/main");
        setUser(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mainLoginContainer">
      <div className="loginBox">
        <div className="titlecontainer">
          <h1>Registration</h1>
        </div>
        <div className="fieldforms">
          <form action="" onSubmit={login_user}>
            <div className="inputEmail">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                required
                name="email"
                placeholder="email. . ."
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="inputPassword">
              <label htmlFor="">Password:</label>
              <input
                type="passowrd"
                required
                name="password"
                placeholder="password. . ."
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="buttonLogin">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_Page;
