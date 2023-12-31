import React from "react";
import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT us</Link>
            </li>
            <li>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <a>Our Shop</a>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-lg">
          BISTRO BOSS <br /> Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">CONTACT us</Link>
          </li>
          <li>
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
          <li>
            <a>Our Menu</a>
          </li>
          <li>
            <a>Our Shop</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Nabvar;
