import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className="navbar">
      <div className="container flex justify-between item-center">
        <NavLink className="brand" to="/">
          <img src="/images/logo.svg" alt="Brand Logo" />
        </NavLink>
        <nav>{props.isLoggedIn ? <AuthHeader /> : <NonAuthHeader />}</nav>
      </div>
    </header>
  );
}

function NonAuthHeader() {
  return (
    <ul className="flex item-center nav-menu">
      <li className="nav-item">
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/signup">
          Signup
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
}

function AuthHeader() {
  return (
    <ul className="flex item-center nav-menu">
      <li className="nav-item">
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/new-post">
          New Article
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/settings">
          Settings
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
