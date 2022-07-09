import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const rootprotect = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top rounded"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <a className="navbar-brand">
          <Link to="/" style={{ marginLeft: "1rem", fontWeight: "bold" }}>
            Hashmi's Production
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ml-auto mr-md-3 hoverapply"
            style={{ fontWeight: "bold" }}
          >
            <li className="nav-item active nav-link ">
              <Link to="/">Home</Link>
            </li>

            <li className="nav-item nav-link">
              <Link to="/AddData" className="applycolor">
                AddData
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/showdata">CheckData</Link>
            </li>
            {!rootprotect ? (
              <>
                <li className="nav-item nav-link ">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav-item nav-link buttonD">
                  <Link to="/signup">SignUp</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item nav-link buttonD">
                  <Button
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/");
                    }}
                  >
                    logout
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
