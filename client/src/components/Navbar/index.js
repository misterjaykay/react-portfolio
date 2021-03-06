import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={props.logo} alt="brand" width="30" height="30" />
        Jonghyun Kang
      </Link>
      <div>
        <ul className="navbar-nav margin-left">
          <li className="nav-item">
            <Link to="/home"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio"
              className={
                window.location.pathname === "/portfolio"  ? "nav-link active"  : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/project"
              className={
                window.location.pathname === "/project"  ? "nav-link active"  : "nav-link"}
            >
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume"
              className={
                window.location.pathname === "/resume"  ? "nav-link active"  : "nav-link"}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"
              className={
                window.location.pathname === "/contact"  ? "nav-link active"  : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
