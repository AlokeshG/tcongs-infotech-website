"use client";

import { MessageCircle } from "lucide-react";
import tcongsLogo from "../assets/tcongs-logo.png";

function Navbar({ chatOpen, setChatOpen }) {
  return (
    <nav className="navbar">

      {/* ================= LOGO + BRAND ================= */}
      <div className="navbar-brand">

        <img
          src={tcongsLogo.src}
          alt="Tcongs Infotech Logo"
          className="navbar-logo"
        />

        <div className="brand-text">
          <span className="brand-name">TCONGS</span>
          <span className="brand-subtitle">INFOTECH</span>
        </div>

      </div>


      {/* ================= NAVIGATION ================= */}
      <div className="navbar-links">

        <a href="#services">Services</a>

        <a href="#company">Company</a>

        <a href="#work">Our Work</a>

        <a href="#about">About</a>

      </div>


      {/* ================= LET'S TALK ================= */}
      <button
        type="button"
        className="talk-button"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <MessageCircle size={20} />

        <span>
          {chatOpen ? "Close" : "Let's Talk"}
        </span>

      </button>

    </nav>
  );
}

export default Navbar;