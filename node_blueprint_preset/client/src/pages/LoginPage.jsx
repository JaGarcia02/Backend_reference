import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import moment from "moment";

const LoginPage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const login_user = () => {
    axios
      .post(
        "http://localhost:8888/test/login-user",

        {
          email: inputs.email,
          password: inputs.password,
        }
      )
      .then((res) => {
        Cookies.set("token", res.data.payload.token);
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeout(moment().format("MMMM DD, YYYY hh:mm A"));
  //   }, 2000);
  // }, []);
  return (
    <>
      <div className="loginMainContainer">
        <div className="loginBox">
          <h1>Welcome</h1>

          <div className="emailContainer">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              placeholder="email. . ."
              onChange={(e) => {
                setInputs({ ...inputs, email: e.target.value });
              }}
            />
          </div>
          <div className="passwordContainer">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              placeholder="password. . ."
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />
          </div>
          <button className="loginButton" onClick={login_user}>
            Login
          </button>

          <a className="linkSignup" href="/signup">
            Create account here
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
