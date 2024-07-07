import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container-fluid bg-dark text-light d-flex justify-content-between align-items-center p-3">
        <div className="d-flex align-items-center">
          <Link to="/Sample-React-App" id="brand">
            <h2 className="m-0">ORGANICS</h2>
          </Link>
          <i className="fa-solid fa-seedling fa-xl ml-2"></i>
        </div>
        <div>
          <Link to="/login" className="btn btn-outline-light">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
