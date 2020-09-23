import React from 'react'
import { SmileOutlined } from "@ant-design/icons";

function Footer() {
    return (
      <div
        style={{
          height: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
        }}
      >
        <p>
          {" "}
          ©DSU2020 All reserved
        </p>
      </div>
    );
}

export default Footer
