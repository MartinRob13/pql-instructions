import { useState } from "react";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="navbar-container">
          <input type="checkbox" checked={menuOpen} onChange={handleMenuToggle} id="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
          <div className="brand">
            <a href="#!">Quidditch League</a>
          </div>
          <div className="menu-items">
            <div className="nav-link">
              Home
            </div>
            <div className="nav-link">
              Teams
            </div>
            <div className="nav-link">
              Playes
            </div>
          </div>
        </div>
      </nav>
    );
  };
