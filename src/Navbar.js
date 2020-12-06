import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar () {
  
    return (
      <div className='Navbar'>
        <NavLink exact activeClassName='Navbar-active' to='/'>
          Home
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/chips'>
          Chips
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/soda'>
          Soda
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/sardines'>
          Sardines
        </NavLink>
      </div>
    );
  
}
export default Navbar;
