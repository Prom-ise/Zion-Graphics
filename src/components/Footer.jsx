import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg"

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer  py-2 px-4">
        <div className="footers">
        
          <div className="zion">Zion Graphics Limited &copy; 2024</div>

        <div className="cons gap-3">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/terms"
          >
            Terms
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/privacy"
          >
            Privacy
          </NavLink>
          </div>

          <div className="zion-logo mt-3">
          <img
              src={logo}
              alt="Logo"
              width="100"
              height="94"
              className="d-inline-block align-text-middle me-2"
            />
          </div>

          </div>

        <div className="navs gap-3">
            <div><NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/products/banners"
          >
            Banners
          </NavLink></div>
          
          <div><NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/products/flyers"
          >
            Flyers
          </NavLink></div>
          
          <div><NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/products/posters"
          >
            Posters
          </NavLink></div>

          <div><NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/products/id-cards"
          >ID Cards
          </NavLink></div>

          <div><NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/products/stickers"
          >
           Stickers
          </NavLink></div>

          <div><NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/products/business-logos"
          >
          Business Logos
          </NavLink></div>

          <div><NavLink
            className={({ isActive }) => (isActive ? "active" : "no-active")}
            to="/zion-graphics/products/business-cards"
          >
            Business Cards
          </NavLink></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
