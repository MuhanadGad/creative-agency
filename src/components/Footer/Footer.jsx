import React from "react";
import "./Footer.scss";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="vertical-txt">
        <div className="left">
          <span>Company</span>
          <span>
            Name<strong>®</strong>
          </span>
        </div>
        <div className="right">
          <p>Let's</p>
          <p>Talk</p>
          <div className="contactbtn">
            Contact{" "}
            <ArrowCircleRightIcon sx={{ color: "#ff6e29", fontSize: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
};
