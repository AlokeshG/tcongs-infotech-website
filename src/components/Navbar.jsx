"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";

import tcongsLogo from "../assets/tcongs-logo.png";

function Navbar({ chatOpen, setChatOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleChat = () => {
    setMenuOpen(false);
    setChatOpen(!chatOpen);
  };

  return (
    <nav className="navbar">

      {/* =====================================================
          LOGO
      ===================================================== */}

      <Link
        href="/"
        className="navbar-brand"
        aria-label="Tcongs Infotech Home"
        onClick={closeMenu}
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
          VISIBLE ONLY ON DESKTOP
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
          RIGHT SIDE
      ===================================================== */}

      <div className="navbar-actions">



        {/* ===================================================
            LET'S TALK
        =================================================== */}

        <button
          type="button"
          className="talk-button"
          onClick={handleChat}
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

      </div>
      <div className="navbar-actions">

        {/* ===================================================
            MOBILE HAMBURGER
            HIDDEN COMPLETELY ON DESKTOP
        =================================================== */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X
              size={21}
              strokeWidth={2}
            />
          ) : (
            <Menu
              size={21}
              strokeWidth={2}
            />
          )}
        </button>
      </div>

      {/* =====================================================
    MOBILE DROPDOWN
===================================================== */}

      {menuOpen && (
        <div className="mobile-dropdown">

          <div className="mobile-dropdown-inner">

            <a
              href="#services"
              onClick={closeMenu}
              className="mobile-dropdown-link"
            >
              Services
            </a>

            <a
              href="#company-section"
              onClick={closeMenu}
              className="mobile-dropdown-link"
            >
              Company
            </a>

            <a
              href="#work"
              onClick={closeMenu}
              className="mobile-dropdown-link"
            >
              Our Work
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="mobile-dropdown-link"
            >
              About
            </a>

            <Link
              href="/careers/"
              onClick={closeMenu}
              className="mobile-dropdown-link"
            >
              Careers
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;