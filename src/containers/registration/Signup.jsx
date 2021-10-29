/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./style.css";

const Signup = () => {
  const [userRegistration, setUserRegistration] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [checkPassword, setCheckPassword] = useState(false);

  const handleSubmit = () => {
    if (userRegistration.Password === userRegistration.ConfirmPassword) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  const handleInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };
  return (
    <>
      <form className="for">
        <h1>Sign Up</h1>

        <div className="field">
          <label htmlFor="FirstName">First Name</label>
          <br />
          <div className="action">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt=""
              width="20px"
              height="auto"
            />
            <input
              type="text"
              autoComplete="off"
              name="FirstName"
              id="firstname"
              value={userRegistration.FirstName}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="LastName">Last Name</label>
          <br />
          <div className="action">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt=""
              width="20px"
              height="auto"
            />
            <input
              type="text"
              autoComplete="off"
              name="LastName"
              id="lastname"
              value={userRegistration.LastName}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="Username">Username</label>
          <br />
          <div className="action">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt=""
              width="20px"
              height="auto"
            />
            <input
              type="text"
              autoComplete="off"
              name="Username"
              id="username"
              value={userRegistration.Username}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="Email">Email</label>
          <br />
          <div className="action">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt=""
              width="20px"
              height="auto"
            />
            <input
              type="text"
              autoComplete="off"
              name="Email"
              id="email"
              value={userRegistration.Email}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="Password">Password</label>
          <br />
          <div className="action">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt=""
              width="20px"
              height="auto"
            />
            <input
              type="password"
              autoComplete="off"
              name="Password"
              id="password"
              value={userRegistration.Password}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <br />
          <div className="action">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt=""
              width="20px"
              height="auto"
            />
            <input
              type="password"
              autoComplete="off"
              name="ConfirmPassword"
              id="confirmPassword"
              value={userRegistration.ConfirmPassword}
              onChange={handleInput}
            />
            <br />
          </div>
        </div>

        <button type="button" className="btn" onClick={handleSubmit}>
          Register
        </button>
        {checkPassword === false && userRegistration.ConfirmPassword !== "" ? (
          <span>Passwords are not equal</span>
        ) : null}
      </form>
    </>
  );
};
export default Signup;
