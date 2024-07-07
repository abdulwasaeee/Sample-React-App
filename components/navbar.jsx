import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success text-light">
        <div className="container-fluid justify-content-end">
          <div className="ml-auto d-flex">
            <div className="nav-item mx-2">
              <Link className="nav-link text-light" to="/items">ITEMS</Link>
            </div>
            <div className="nav-item mx-2">
              <Link className="nav-link text-light" to="/contact">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
