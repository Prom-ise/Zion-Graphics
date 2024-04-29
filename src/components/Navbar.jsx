import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [toggleInfoVisible, setToggleInfoVisible] = useState(false);

  const handleToggleClick = () => {
    setToggleInfoVisible(!toggleInfoVisible); // Toggle the state
  };
  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg navbar-expand-md ">
        <div className="container-fluid">
          <NavLink
            className={({ isActive }) => (isActive ? "navlink" : "navlink")}
            to="/"
          >
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="44"
              className="d-inline-block align-text-middle me-2"
            />
            Zion Graphics
          </NavLink>

          <button
            className="navbar-toggler btn btn-outline-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
            onFocus={(e) => e.target.blur()}
          >
            {toggleInfoVisible ? (
              <span style={{ display: "none" }}>
                <CgDetailsMore className="navbar-button" />
              </span>
            ) : (
              <span>
                <CgDetailsMore className="navbar-button" />
              </span>
            )}
            {toggleInfoVisible ? (
              <span>
                <RxCross2 className="navbar-button" />
              </span>
            ) : (
              <span style={{ display: "none" }}>
                <RxCross2 className="navbar-button" />
              </span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto mx-4 gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinked" : "navlinks"
                }
                to="/about-us"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinked" : "navlinks"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlinked" : "navlinks"
                }
                to="/products"
              >
                Products
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
