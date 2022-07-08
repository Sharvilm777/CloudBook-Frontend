import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("Token");
    history.push("/login");
  };
  const location = useLocation();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            CloudBook
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class={`nav-link ${location === "/" ? "active" : " "}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${location === "/about" ? "active" : " "}`}
                  to="/about"
                >
                  Link
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("Token") ? (
              <>
                <Link className="btn btn-primary mx-2" to="/login">
                  Log In
                </Link>
                <Link className="btn btn-primary mx-2" to="/signup">
                  Sign up
                </Link>
              </>
            ) : (
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
