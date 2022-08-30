import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartLengthState, cartQtyState } from "../../../shared/atoms/auth";

import ButtonDarkExample from "../../Settingsdropdwn";

const Nav = () => {
  const cartLength = useRecoilValue(cartLengthState);
  const cartQty = useRecoilValue(cartQtyState);

  return (
    <div style={{ background: "#6aa3ff" }}>
      <nav className="navbar navbar p-3">
        <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
          <a className="navbar-brand" style={{ color: "white" }} href="#">
            Rickreen
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            style={{ cursor: "pointer", marginBottom: "20px" }}
            fill="currentColor"
            className="  bi bi-list  d-md-none "
            data-toggle="collapse"
            data-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>

        <div className="col-12 col-md-6 col-lg-2">
          <div>
            <input
              className="form-control form-control-dark"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
          <ButtonDarkExample />
          {cartLength != 0 ? (
            <Link
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              to="/food/orders"
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
                className="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              ({cartQty})
            </Link>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
