import { useState } from "react";

import MobileIntroBg from "../images/bg-intro-mobile.svg";
import DesktopIntroBg from "../images/bg-intro-desktop.svg";

import Mockup from "../images/image-mockups.png";

const Hero = () => {
  const [visibleBG, setVisibleBG] = useState(false);
  const [visibleIMG, setVisibleIMG] = useState(false);

  const handleLoadBG = () => {
    setVisibleBG(true);
  };
  const handleLoadIMG = () => {
    setVisibleIMG(true);
  };

  return (
    <section className="hero">
      <div className="mockup-container">
        <div className="mockup-container-inner">
          <div
            className={visibleBG && visibleIMG ? "mockup visible" : "mockup"}
          >
            <div className="background">
              <img
                src={MobileIntroBg}
                alt="Mobile Background"
                className="mobile"
                onLoad={handleLoadBG}
              />
              <img
                src={DesktopIntroBg}
                alt="Desktop Background"
                className="desktop"
                onLoad={handleLoadBG}
              />
            </div>
            <div className="img">
              <img src={Mockup} alt="Mockups" onLoad={handleLoadIMG} />
            </div>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="container">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="request-btn">Request Invite</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
