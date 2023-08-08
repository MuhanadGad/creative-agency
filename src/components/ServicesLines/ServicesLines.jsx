import React, { useEffect } from "react";
import "./ServicesLines.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesLines() {
  useEffect(() => {
    // For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const lines = gsap.utils.toArray(".service-line");

    lines.forEach((line) => {
      console.log();
      const servicetl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          // pin: ".ourservices .left",
          start: "bottom center",
          end: "bottom top+=200",
          scrub: 1,
          ease: "power1.inOut",
          // duration: 5,
          // stagger: 1.2,
          // markers: true,
        },
      });
      servicetl
        .to(line, {
          y: 0,
          // opacity: 1,
        })
        .to(line.parentNode.lastChild, { y: 0 });
    });
  }, []);

  return (
    <div className="our-services-lines">
      <div className="service a">
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle service-head"></div>
          </div>
          <div className="service-text service-head">
            <span>Digital Marketing</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Social Media Marketing</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Market Research & Analysis</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Content Strategy</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Media Buying Plan</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Email Marketing</span>
          </div>
        </div>
      </div>
      <div className="service b">
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle service-head"></div>
          </div>
          <div className="service-text service-head">
            <span>Design & Photography Services</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Branding</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Video Animation</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Social Media Designs</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Photo & Video Production</span>
          </div>
        </div>
      </div>
      <div className="service c">
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle service-head"></div>
          </div>
          <div className="service-text service-head">
            <span>Web Services</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Mobile Applications</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Augmented Reality</span>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="service-line">
            <div className="vertical-line"></div>
            <div className="line-circle"></div>
          </div>
          <div className="service-text">
            <span>Gaming</span>
          </div>
        </div>
      </div>
    </div>
  );
}
