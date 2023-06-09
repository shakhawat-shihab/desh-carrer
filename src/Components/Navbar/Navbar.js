import React from "react";
import logo from "../../assets/images/short-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { Button } from "bootstrap";

const Navbar = () => {
  return (
    // <React.Fragment>
    <div className="navbar-design">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="150"
              height="70"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-design " : "normal-design"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/privacy/policy"
                className={({ isActive }) =>
                  isActive ? "active-design " : "normal-design"
                }
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms/conditions"
                className={({ isActive }) =>
                  isActive ? "active-design " : "normal-design"
                }
              >
                Terms Condition
              </NavLink>
              <NavLink
                to="/about/us"
                className={({ isActive }) =>
                  isActive ? "active-design " : "normal-design"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact/us"
                className={({ isActive }) =>
                  isActive ? "active-design " : "normal-design"
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/advertise"
                className={({ isActive }) =>
                  isActive ? "active-design " : "normal-design"
                }
              >
                Advertise
              </NavLink>
              <NavLink to="/">
                <button className="btn btn-danger mx-3">Join Now</button>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    // </React.Fragment>
  );
};

export default Navbar;
