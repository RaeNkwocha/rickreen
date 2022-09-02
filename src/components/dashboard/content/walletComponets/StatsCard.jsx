import React from "react";
import WalletModal from "../../../../shared/modal/walletModal";
import "./css/styles.css";

const StatsCard = () => {
  return (
    <>
      <div>
        <WalletModal />
      </div>

      <div className="stats-card-grid">
        <div className="stats-card-card">
          <div className="inner-stats-grid">
            <div className="income-holder">
              {" "}
              <h6>Total Revenue</h6>
              <h4>$100,000</h4>
            </div>
            <div className="stats-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="lightGreen"
                class="bi bi-arrow-up-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
              <strong style={{ color: "lightGreen" }}>100%</strong>
            </div>{" "}
          </div>
        </div>
        <div className="stats-card-card">
          <div className="inner-stats-grid">
            <div className="income-holder">
              {" "}
              <h6>Income</h6>
              <h4>$20,000</h4>
            </div>
            <div className="stats-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="lightGreen"
                class="bi bi-arrow-up-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
              <strong style={{ color: "lightGreen" }}>100%</strong>
            </div>{" "}
          </div>
        </div>
        <div className="stats-card-card">
          <div className="inner-stats-grid">
            <div className="income-holder">
              {" "}
              <h6>Expenditure</h6>
              <h4>$45,000</h4>
            </div>
            <div className="stats-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="red"
                class="bi bi-arrow-down-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
              <strong style={{ color: "red" }}>-67%</strong>
            </div>{" "}
          </div>
        </div>
        <div className="stats-card-card">
          <div className="inner-stats-grid">
            <div className="income-holder">
              {" "}
              <h6>Total Revenue</h6>
              <h4>$100,000</h4>
            </div>
            <div className="stats-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="lightGreen"
                class="bi bi-arrow-up-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
              <strong style={{ color: "lightGreen" }}>100%</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
