import React, { useEffect } from "react";
import "./Home.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OutlinedButton from "../../components/OutlinedButton/OutlinedButton";
import HorizontalScroll from "../../components/HorizontalScroll/HorizontalScroll";
import AboutUsLine from "../../components/AboutUsLine/AboutUsLine";
import ServicesLines from "../../components/ServicesLines/ServicesLines";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useEffect(() => {
    gsap.to(".horizontal .outlinetext", {
      x: "32vw",
      scrollTrigger: {
        trigger: ".horizontal .outlinetext",
        start: "center center",
        scrub: 1,
      },
    });
  });

  return (
    <div className="home-container no-width">
      <section className="aboutKinetics">
        <div className="designandmarketing pagemargins">
          <span className="greybg"></span>
          <div className="left">
            <h1>
              DESIGN <span>&</span> MARKETING
            </h1>
            <p>
              We are a diverse group of thinkers and tinkerers, strategists,
              creatives and technology experts.
            </p>
            <OutlinedButton href="#" text="Our Portfolio" />
          </div>
          <div className="right">
            <div className="vertical-txt">
              <span>Company</span>
              <span>
                Name<strong>®</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="aboutus pagemargins">
          <div className="left">
            <h2>About Us</h2>
            <span className="outlinetext">About Us</span>
            <p>
              We are an Egyptian company founded in 2004 offering your business
              a full-service technology solution. We are a group of developers,
              designers, and marketers who came together to fulfill all your
              digital needs. We believe in empowering our clients with the best
              digital solutions out there so they can stand out and compete in
              the market.
            </p>
            <OutlinedButton href="#" text="More About Us" />
          </div>
          <div className="right">
            <AboutUsLine />
          </div>
        </div>
      </section>
      <div className="scrollhorizontally">
        <HorizontalScroll />
      </div>
      <div className="ourservices pagemargins">
        <div className="left">
          <h2>
            Our Services
            <span className="outlinetext">Services</span>
          </h2>
          <p>
            We are a diverse group of thinkers and tinkerers, strategists,
            creatives and technology experts.
          </p>
          <OutlinedButton href="#" text="Our Portofolio" />
        </div>
        <div className="right">
          <ServicesLines />
        </div>
      </div>
    </div>
  );
};
