import React from "react";
import authService from "../../../services/Services";
import Table from "../widgets/Table";
import Widgets from "../widgets/Widgets";
import Wallet from "./Wallet";

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
      <Wallet />
      <Widgets />
      <Table />
    </div>
  );
};

export default Content;
