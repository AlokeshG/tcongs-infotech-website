import { MessageCircle } from "lucide-react";
import tcongsLogo from "../assets/tcongs-logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT - LOGO + BRAND */}
      <div className="navbar-brand">

        <img
          src={tcongsLogo}
          alt="Tcongs Infotech Logo"
          className="navbar-logo"
        />

        <div className="brand-text">
          <span className="brand-name">TCONGS</span>
          <span className="brand-subtitle">INFOTECH</span>
        </div>

      </div>


      {/* CENTER - NAVIGATION */}
      <div className="navbar-links">

        <a href="#services">Services</a>

        <a href="#company">Company</a>

        <a href="#work">Our Work</a>

        <a href="#about">About</a>

      </div>


      {/* RIGHT - LET'S TALK */}
      <button className="talk-button">

        <MessageCircle size={17} />

        <span>Let's Talk</span>

      </button>

    </nav>
  );
}

export default Navbar;