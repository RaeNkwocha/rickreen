import React from "react";
import authService from "../../../auth/Services";
import ButtonDarkExample from "../../Settingsdropdwn";

const Nav = () => {
  const user = authService.user;
  return (
    <div>
      {" "}
      <nav
        style={{ background: "red" }}
        class="navbar navbar-light bg-light p-3"
      >
        <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
          <a class="navbar-brand" href="#">
            Rickreen
          </a>
          <button
            class="navbar-toggler d-md-none collapsed mb-3"
            type="button"
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
          <input
            class="form-control form-control-dark"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <div class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
          <div class="mr-3 mt-1">
            <a
              class="github-button"
              href="https://github.com/themesberg/simple-bootstrap-5-dashboard"
              data-color-scheme="no-preference: dark; light: light; dark: light;"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star /themesberg/simple-bootstrap-5-dashboard"
            >
              Star
            </a>
          </div>
          <ButtonDarkExample />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
