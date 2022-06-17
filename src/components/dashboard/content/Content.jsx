import React from "react";
import authService from "../../../auth/Services";
import Chart from "../chart/Chart";
import Table from "../widgets/Table";
import Widgets from "../widgets/Widgets";

const Content = () => {
  let user = authService.user;

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol style={{ background: "white" }} className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Overview
          </li>
        </ol>
      </nav>
      {/* <marquee>
        {" "}
        <h1 class="h2"> Welcome to your Rickreen Dashboard {user.username}</h1>
      </marquee> */}
      {/* <p>
        This is the homepage of a simple admin interface which is part of a
        tutorial written on Themesberg
      </p> */}
      <Widgets />
      <Table />
    </div>
  );
};

export default Content;
