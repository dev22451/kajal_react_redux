/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./style1.css";

// eslint-disable-next-line arrow-body-style
const LoginForm = () => {
  const [name, setUsername] = useState(" ");
  const [password, setPassword] = useState("");
  return (
    <>
      <form className="action">
        <div>
          <label htmlFor="Name">Username</label>
          <input
            type="text"
            name="Username"
            placeholder="username"
            autoComplete="off"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Login</button>

      </form>
    </>
  );
};
export default LoginForm;
