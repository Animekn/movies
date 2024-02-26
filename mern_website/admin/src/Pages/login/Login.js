import React, { useContext, useState } from "react";
import { login } from "../../context/authcontext/ApiCalls";
import { AuthContext } from "../../context/authcontext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    // <div className="login">
    //   <form className="loginForm">
    //     <input
    //       type="text"
    //       placeholder="email"
    //       className="loginInput"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       className="loginInput"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button
    //       className="loginButton"
    //       onClick={handleLogin}
    //       disabled={isFetching}
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>

    //2nd
    <div className="login-container">
    <form className="login-form" >
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit"
        onClick={handleLogin}
        disabled={isFetching}>LOGIN</button>
    </form>
  </div>
  );
}