import React from "react";
import "./logins.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
axios.defaults.headers.common["Auth"] = localStorage.getItem("token");
const Login = () => {
  const navigate = useNavigate();
  const [getuser, setgetuser] = useState({
    username: "",
    password: "",
  });

  const onhandlechange = (e) => {
    setgetuser({ ...getuser, [e.target.name]: e.target.value });
  };

  const onsubmit = () => {
    axios
      .post("/users/login", getuser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <section className="main ">
        <div className="bottom-grid mt-5">
          <div className="logo">
            <h1>
              {" "}
              <a href="index.html"> Meetup Login form</a>
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
                    id="text1"
                    type="text"
                    value={getuser.username}
                    placeholder="Username"
                    required
                    onChange={onhandlechange}
                  />
                </div>
              </div>
              <div className="field-group">
                <span className="fa fa-lock" aria-hidden="true"></span>
                <div className="wthree-field">
                  <input
                    name="password"
                    id="myInput"
                    type="Password"
                    value={getuser.password}
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
                  <a href="#url" className="">
                    Create Account
                  </a>
                </li>
                <li className="">
                  <a href="#url" className="text-right">
                    Need Help?
                  </a>
                </li>
                <li className="clearfix"></li>
              </ul>
              <div className="wthree-field">
                <button type="submit" className="btn" onClick={onsubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
