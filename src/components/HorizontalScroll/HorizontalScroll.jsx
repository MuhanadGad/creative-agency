import React, { useEffect } from "react";
import "./HorizontalScroll.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import AllProductsSlider from "../AllProductsSlider/AllProductsSlider";

export default function HorizontalScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".slide");
    let sectionScroll = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scrollhorizontally",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      },
    });
    let projectImg = gsap.utils.toArray(".project img");
    projectImg.forEach(img => {
      // console.log(img.offsetWidth, img.offsetHeight, img.scrollLeft, img.scrollTop)
      gsap.to(img,  {
        opacity: 1, 
        y: 0,
        x: 0,
        scrollTrigger:{
        trigger:img,
        // markers:true,
        start:`left center`,
        containerAnimation:sectionScroll,
        id:'img',
      }}
      );
    })

    let projectDetails = gsap.utils.toArray(".project .details");
    projectDetails.forEach(details => {
      // console.log(img.offsetWidth, img.offsetHeight, img.scrollLeft, img.scrollTop)
      gsap.to(details,  {
        opacity: 1, 
        scrollTrigger:{
        trigger:details,
        // markers:true,
        start:`left-=100 center`,
        containerAnimation:sectionScroll,
        id:'details',
      }}
      );
    })
   
  }, []);

  return (
    <div className="horizontal">
      <div className="slide">
        <div className="textwithbgstroke">
          <h3>Projects</h3>
          <strong className="outlinetext">Projects</strong>
        </div>
      </div>
      <div className="slide">
        <div className="project">
          <img src="petitbebewebsite.png" alt="" />
          <div className="details">
            <span className="job">UI / UX Design</span>
            <span className="client">Petit Bebe Website</span>
            <span className="viewprojectbtn">
              <a href="#">
                Discover{" "}
                <ArrowCircleRightIcon sx={{ color: "#ff6e29", fontSize: 40 }} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="project">
          <img src="dolcevitacampaign.png" alt="" />
          <div className="details">
            <span className="job">Photography & Marketing</span>
            <span className="client">DolceVita Campaign</span>
            <span className="viewprojectbtn">
              <a href="#">
                Discover{" "}
                <ArrowCircleRightIcon sx={{ color: "#ff6e29", fontSize: 40 }} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="slide seeallprojects">
        <AllProductsSlider />
      </div>
    </div>
  );
}
