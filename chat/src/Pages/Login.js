import React from "react";
import { Link } from "react-router-dom";
import "../Components/Css/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-header">
        <p className="login-text">
          Welcome <br /> Please Log Inn
        </p>
      </div>
      <form>
        <input className="username-input" type="text" placeholder="Username" />
        <input
          className="password-input"
          type="password"
          placeholder="password"
        />
        <Link to="/chatlist">
          <button className="login-button">Log in</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
