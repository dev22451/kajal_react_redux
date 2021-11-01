/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line import/no-duplicates
import { Row, Col } from "react-bootstrap";
// eslint-disable-next-line import/no-duplicates
import { Button } from "react-bootstrap";
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

  // eslint-disable-next-line no-unused-vars
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
          <div className="for h-100">
            <form>
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
              <div>
                <input type="checkbox" name="checkbox1" />
                <p>I agree to receive instructional and promotional emails</p>
                <input type="checkbox" name="checkbox2" />
                <p>I agree t</p>
              </div>
              <Button variant="primary" className="btn">Register</Button>
              {" "}
              {checkPassword === false && userRegistration.ConfirmPassword !== "" ? (
                <span>Passwords are not equal</span>
              ) : null}

            </form>
          </div>
        </Col>
        <Col md={6}>
          <div className="right-img">
            <div className="bg-img">
              <div className="d-flex align-items-center flex-column justify-content-center img-content">
                <h3>About Shehnshah</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
        </Col>

      </Row>

    </>
  );
};
export default Signup;
