/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";

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
  // const [emailValidation, setemailValidation] = useState(false);

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
      <Row className="g-0">
        <Col md={6}>
          <div className="for h-100 p-5">
            <h1>Shehnshah</h1>
            <h4 className="h44">Create Your Account</h4>
            <p>Enter your full name and email address to create your account</p>
            <form className="row">
              <div className="field col-md-6 my-2">
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

              <div className="field col-md-6 my-2">
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

              <div className="field col-md-6 my-2">
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

              <div className="field col-md-6 my-2">
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

              <div className="field col-md-6 my-2">
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

              <div className="field col-md-6 my-2">
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

              {checkPassword === false && userRegistration.ConfirmPassword !== "" ? (
                <span>Passwords are not equal</span>
              ) : null}
              {" "}
              <div className="mb-3 form-check ms-3">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">I agree to receive instructional and promotional emails</label>
              </div>
              <div className="mb-3 form-check ms-3">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                <label className="form-check-label" htmlFor="exampleCheck2">
                  I agree to Shehnshah's
                  {" "}
                  <a href="#">Terms of Use</a>
                  {" "}
                  &amp;
                  {" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
              <Button className="btn btn-theme" onClick={handleSubmit}>Register</Button>
              <br />
              {" "}
              <p className="my-3 text-center">
                Already have an account?
                <a href="#"> Login</a>
              </p>
              <Button className="btn border-1 mb-3" variant="outline-dark">Sign in with Phone Number</Button>
              <p className="text-center"> &copy; 2021 shehnshah. All Rights Reserved</p>

            </form>
          </div>
        </Col>
        <Col md={6}>
          <div className="right-img">
            <div className="bg-img">
              <div className="d-flex align-items-center flex-column justify-content-center img-content px-5">
                <h3>About Shehnshah</h3>
                <p>
                  Long queues time works, that's what comes to your
                  mind when you think about getting your car washed.Shehnshah is here
                  to change this forever.Car washing won't be the same again
                  {" "}
                </p>
              </div>
            </div>
          </div>
        </Col>

      </Row>

    </>
  );
};
export default Signup;
