import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../googleauth/GoogleContext";
import ButtonDarkExample from "../../Settingsdropdwn";

const Nav = () => {
  const { cart } = useContext(GoogleAuth);

  return (
    <div style={{ background: "#6aa3ff" }}>
      <nav class="navbar navbar p-3">
        <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
          <a class="navbar-brand" style={{ color: "white" }} href="#">
            Rickreen
          </a>
          <button
            class="navbar-toggler d-md-none collapsed mb-3"
            type="button"
            style={{ border: "1px solid black" }}
            data-toggle="collapse"
            data-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="col-12 col-md-12 col-lg-2">
          <div>
            <input
              class="form-control form-control-dark"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>

        <div class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
          <ButtonDarkExample />
          <Link
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/orders"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                color: "white",
              }}
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            ({cart.length})
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
