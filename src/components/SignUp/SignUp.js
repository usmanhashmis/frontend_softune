import React, { useState } from "react";
import "../Login/logins.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [newuser, setNewuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onhandlechange = (e) => {
    setNewuser({ ...newuser, [e.target.name]: e.target.value });
  };
  const onsubmit = () => {
    axios
      .post("/users/signup", newuser)
      .then((res) => {
        navigate("/login");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="main">
        <div className="bottom-grid mt-5">
          <div className="logo">
            <h1>
              {" "}
              <a href="index.html"> Meetup SignUp form</a>
            </h1>
          </div>
        </div>
        <div className="content-w3ls">
          <div className="text-center icon">
            <span className="fa fa-meetup"></span>
          </div>
          <div className="content-bottom">
            <div className="form">
              <div className="field-group">
                <span className="fa fa-user" aria-hidden="true"></span>
                <div className="wthree-field">
                  <input
                    name="username"
                    type="text"
                    required
                    value={newuser.username}
                    placeholder="Username"
                    onChange={onhandlechange}
                  />
                </div>
              </div>
              <div className="field-group">
                <span className="fa fa-user" aria-hidden="true"></span>
                <div className="wthree-field">
                  <input
                    name="email"
                    type="text"
                    required
                    value={newuser.email}
                    placeholder="Email"
                    onChange={onhandlechange}
                  />
                </div>
              </div>
              <div className="field-group">
                <span className="fa fa-lock" aria-hidden="true"></span>
                <div className="wthree-field">
                  <input
                    name="password"
                    type="Password"
                    value={newuser.password}
                    placeholder="Password"
                    required
                    onChange={onhandlechange}
                  />
                </div>
              </div>
              <ul className="list-login">
                <li className="switch-agileits">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                    keep Logged in
                  </label>
                </li>
                <li>
                  <a href="#" className="text-right">
                    forgot password?
                  </a>
                </li>
                <li className="clearfix"></li>
              </ul>
              <ul className="list-login-bottom">
                <li className="">
                  <a href="#url" className="text-left">
                    Need Help?
                  </a>
                </li>
                <li className="clearfix"></li>
              </ul>
            </div>
            <div className="wthree-field">
              <button className="btn" type="submit" onClick={onsubmit}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
