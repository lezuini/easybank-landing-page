import { ReactComponent as Logo } from "../images/logo.svg";

import { ReactComponent as FacebookLogo } from "../images/icon-facebook.svg";
import { ReactComponent as YoutubeLogo } from "../images/icon-youtube.svg";
import { ReactComponent as TwitterLogo } from "../images/icon-twitter.svg";
import { ReactComponent as PinterestLogo } from "../images/icon-pinterest.svg";
import { ReactComponent as InstagramLogo } from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="col-1">
        <div className="logo">
          <Logo />
        </div>
        <div className="social">
          <FacebookLogo />
          <YoutubeLogo />
          <TwitterLogo />
          <PinterestLogo />
          <InstagramLogo />
        </div>
      </div>

      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>

      <div className="col-2">
        <button className="request-btn">Request Invite</button>
        <p className="copyright">© Easybank. All Rigths Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
