import React, { useEffect } from "react";
import "./Line.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function Line() {
  useEffect(() => {
    // For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


    const expline = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutus",
        start:'top+=200 center',
        end: 'bottom+=500 center',
        id:'line',
        markers:true,
        ease: "power1.inOut",
        pin: '.aboutKinetics',
        scrub:2,
        stagger:0.2
      }
    });
    expline//.from('.experience-line', {y:-450})
    .to('.experience-line', {y:-350})
    .from ('.experience-text span', {y:350, opacity:0})
    .to ('.experience-text span', {y:-350, opacity: 0.8, stagger:0.1});
    
  }, []);

  return (
    <div className="line-anim-wrapper">
      <div className="experience">
        <div className="experience-line">
          <div className="vertical-line"></div>
          <div className="line-circle"></div>
          <h2>50</h2>
        </div>
        <div className="experience-text">
          <span>Years of development</span>
        </div>
      </div>
    </div>
  );
}

export default Line;
