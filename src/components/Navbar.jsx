"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

import tcongsLogo from "../assets/tcongs-logo.png";

function Navbar({ chatOpen, setChatOpen }) {
  return (
    <nav className="navbar">

      {/* =====================================================
          LOGO + BRAND
      ===================================================== */}

      <Link
        href="/"
        className="navbar-brand"
        aria-label="Tcongs Infotech Home"
      >
        <img
          src={tcongsLogo.src || tcongsLogo}
          alt="Tcongs Infotech Logo"
          className="navbar-logo"
        />

        <div className="brand-text">
          <span className="brand-name">
            TCONGS
          </span>

          <span className="brand-subtitle">
            INFOTECH
          </span>
        </div>
      </Link>


      {/* =====================================================
          DESKTOP NAVIGATION
      ===================================================== */}

      <div className="navbar-links">

        <a href="#services">
          Services
        </a>

        <a href="#company-section">
          Company
        </a>

        <a href="#work">
          Our Work
        </a>

        <a href="#about">
          About
        </a>

        <Link href="/careers/">
          Careers
        </Link>

      </div>


      {/* =====================================================
          LET'S TALK
      ===================================================== */}

      <button
        type="button"
        className="talk-button"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label={
          chatOpen
            ? "Close chat"
            : "Open chat"
        }
      >
        <MessageCircle
          size={20}
          strokeWidth={1.8}
        />

        <span>
          {chatOpen ? "Close" : "Let's Talk"}
        </span>
      </button>

    </nav>
  );
}

export default Navbar;