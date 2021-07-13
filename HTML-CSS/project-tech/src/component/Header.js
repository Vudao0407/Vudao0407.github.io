import React from "react";

function Header() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
