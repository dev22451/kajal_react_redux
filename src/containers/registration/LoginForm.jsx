/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./style1.css";

const LoginForm = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState("");

  const onChangeHandler = (fieldName, value) => {
    if (fieldName === "username") {
      setUsername(value);
    } else if (fieldName === "password") {
      setPassword(value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // eslint-disable-next-line eqeqeq
    if (username.trim() === "" || password.trim() == "") {
      alert("required both field");
    } else {
      alert(`${username} ${password}`);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <form onSubmit={(e) => { onSubmitHandler(e); }}>
        <div>
          <label htmlFor="Username" className="user">Username</label>
          <input
            type="text"
            name="Username"
            placeholder="username"
            autoComplete="off"
            value={username}
            onChange={(e) => { onChangeHandler("username", e.target.value); }}
          />
        </div>
        <div>
          <label htmlFor="Password" className="pass">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="password"
            autoComplete="off"
            value={password}
            onChange={(e) => { onChangeHandler("password", e.target.value); }}
          />
        </div>
        <button type="submit" className="btn">Login</button>

      </form>
    </>
  );
};

export default LoginForm;
