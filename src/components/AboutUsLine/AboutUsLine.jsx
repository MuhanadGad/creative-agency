import React, { useEffect } from "react";
import "./AboutUsLine.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUsLine() {
  useEffect(() => {
    // For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const expline = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutus",
        start: "top+=300 center",
        end: "bottom+=500 center",
        // id: "line",
        // markers: true,
        ease: "power1.inOut",
        pin: ".aboutKinetics",
        scrub: 2,
      },
    });

    expline
      .to(".experience-line.a", { y: "-30vh", stagger: 0.2 })
      .to(".experience-line.b", { y: "-50vh", stagger: 0.2 })
      .to(".experience-line.c", { y: "-40vh", stagger: 0.2 })
      .to(".experience-text.a span", { y: "-30vh", opacity: 0.8 })
      .to(".experience-text.b span", { y: "-50vh", opacity: 0.8 })
      .to(".experience-text.c span", { y: "-40vh", opacity: 0.8 });
  }, []);

  return (
    <div className="about-us-lines">
      <div className="experience">
        <div className="experience-line a">
          <div className="vertical-line"></div>
          <div className="line-circle"></div>
          <h2>485</h2>
        </div>
        <div className="experience-text a">
          <span>Clients</span>
        </div>
      </div>
      <div className="experience">
        <div className="experience-line b">
          <div className="vertical-line"></div>
          <div className="line-circle"></div>
          <h2>25+</h2>
        </div>
        <div className="experience-text b">
          <span>Active Accounts+</span>
        </div>
      </div>
      <div className="experience">
        <div className="experience-line c">
          <div className="vertical-line"></div>
          <div className="line-circle"></div>
          <h2>30+</h2>
        </div>
        <div className="experience-text c">
          <span>Employees</span>
        </div>
      </div>
    </div>
  );
}
