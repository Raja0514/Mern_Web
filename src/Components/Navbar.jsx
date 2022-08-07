import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand fw-folder fs-4 mx-4  " to="/">
                Marble World
              </Link>
              <li className="nav-item">
                <Link className="nav-link active fs-8" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-8" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-8" to="/services">
                  Service
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active fs-8" to="/client">
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-8" to="/project">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-8" to="/contact">
                  Contact
                </Link>
              </li>
              
            </ul>

            <Link className="nav-link active fs-8 text-white" to="/admin">
                  Admin
                </Link>

          {/* <Link
              className="btn btn-outline-light ms-2 px-1 rounded pill"
              to="/login"
            >
              <i className="fa fa-sign-in p-1" aria-hidden="true"></i>

              Login
            </Link> */}
            {/* <Link
              className="btn btn-outline-light ms-2 px-4 rounted pill"
              to="/register"
            >
              <i className="fa fa-user-plus  me-2"></i>
              Register
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
