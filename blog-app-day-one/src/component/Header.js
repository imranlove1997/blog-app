import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="navbar">
      <div className="container flex justify-between item-center">
        <NavLink className="brand" to="/">
          <img src="/images/logo.svg" alt="Brand Logo" />
        </NavLink>
        <nav>
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
        </nav>
      </div>
    </header>
    )
}