import React from "react";
import "../css/styles.css"
const ChangePhoto = () => {
  return (
    <div>
      <strong>User Details</strong>
      <div className="user-details-grid">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>{" "}
        </div>
        <div>
          <div>
            <button>Change Photo</button>
          </div>
          <div>
            <button>Remove Photo</button>
          </div>
        </div>
      </div>
      <span>Image must be crisp and clear and must 256px x 256px</span>
    </div>
  );
};

export default ChangePhoto;
