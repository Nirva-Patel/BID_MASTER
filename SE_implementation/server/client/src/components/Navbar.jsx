import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            {/* Correct the component name to NavLink */}
            <NavLink to="/">BIDMASTER</NavLink>
          </div>

          <nav>
            <ul>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
