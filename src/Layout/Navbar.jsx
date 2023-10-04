import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.png";
const Navbar = () => {
  const navBer = (
    <div className="flex gap-3">
      <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black p-2 bg-[#F9A51A] rounded-md" : "p-2"
          }
        >
          News
        </NavLink>
        
        <NavLink
          to="/destination"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black p-2 bg-[#F9A51A] rounded-md" : "p-2"
          }
        >
          Destination
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black p-2 bg-[#F9A51A] rounded-md" : "p-2"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black p-2 bg-[#F9A51A]  rounded-md" : "p-2"
          }
        >
          Contact
        </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navBer}
        </ul>
      </div>
      <img className="w-1/5" src={logo} alt="" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navBer}
      </ul>
    </div>
    <div className="navbar-end">
      <NavLink to='/login' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black p-2 bg-[#F9A51A] rounded-md" : "p-2"
          }>Login</NavLink>
    </div>
  </div>
  );
};

export default Navbar;
