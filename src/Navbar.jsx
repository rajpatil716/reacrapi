import React from "react";

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary border">
        <div className="container-fluid bg-success">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact
                </a>
              </li>
            </ul>
          </div>
        
      </nav>
    
  );
};

export default Navbar;
