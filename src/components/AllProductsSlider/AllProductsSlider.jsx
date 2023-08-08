import React from "react";
import "./AllProductsSlider.scss";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function AllProductsSlider() {
  return (
    <>
      <div className="parent">
        <div className="block1">
          <div className="c1">
            <img src="liv.png" alt="" />
          </div>
          <div className="c2">
            <img src="aws.png" alt="" />
          </div>
          <div className="c3">
            <img src="thegroove.png" alt="" />
          </div>
          <div className="c4">
            <img src="genenamall.png" alt="" />
          </div>
          <div className="c1">
            <img src="liv.png" alt="" />
          </div>
          <div className="c2">
            <img src="aws.png" alt="" />
          </div>
          <div className="c3">
            <img src="thegroove.png" alt="" />
          </div>
          <div className="c4">
            <img src="genenamall.png" alt="" />
          </div>
        </div>
        <div className="block2">
          <div className="c1">
            <img src="liv.png" alt="" />
          </div>
          <div className="c2">
            <img src="aws.png" alt="" />
          </div>
          <div className="c3">
            <img src="thegroove.png" alt="" />
          </div>
          <div className="c4">
            <img src="genenamall.png" alt="" />
          </div>
          <div className="c1">
            <img src="liv.png" alt="" />
          </div>
          <div className="c2">
            <img src="aws.png" alt="" />
          </div>
          <div className="c3">
            <img src="thegroove.png" alt="" />
          </div>
          <div className="c4">
            <img src="genenamall.png" alt="" />
          </div>
        </div>
      </div>
      <div className="textoverslider">
        <h3>See All Projects</h3>
        <a href="#">
          Discover{" "}
          <ArrowCircleRightIcon sx={{ color: "#ff6e29", fontSize: 40 }} />
        </a>
      </div>
    </>
  );
}
