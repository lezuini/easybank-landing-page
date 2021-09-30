import { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const ham = "hamburger hamburger--squeeze";

  // Close menu by clicking on the button
  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Close menu by clicking on the gradient
  const closeMenu = (e) => {
    if (e.target.id === "nav") {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }
  }, [isActive]);

  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <nav
        id="nav"
        className={isActive ? "is-active" : undefined}
        onClick={closeMenu}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </nav>
      <button
        className={isActive ? `${ham} is-active` : ham}
        type="button"
        onClick={handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
};

export default Header;
