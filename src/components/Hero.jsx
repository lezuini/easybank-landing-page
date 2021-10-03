// import { ReactComponent as DesktopIntroBg } from "../images/bg-intro-desktop.svg";
import { ReactComponent as MobileIntroBg } from "../images/bg-intro-mobile.svg";

import Mockup from "../images/image-mockups.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="mockup">
        <MobileIntroBg />
        <div className="img">
          <img src={Mockup} alt="Mockups" />
        </div>
      </div>
      <h1>Next generation digital banking</h1>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button className="request-btn">Request Invite</button>
    </section>
  );
};

export default Hero;
