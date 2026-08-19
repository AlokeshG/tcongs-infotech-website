"use client";

import { useEffect, useState } from "react";
import "./Footer.css";

import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =====================================
          MAIN FOOTER CONTENT
      ====================================== */}

      <div className="footer-content">


        {/* =====================================
            COMPANY
        ====================================== */}

        <div className="footer-column">

          <h4>COMPANY</h4>

          <div className="footer-line"></div>


          {/* ABOUT */}

          <a href="/#about">

            <ChevronRight size={11} />

            <span>
              About
            </span>

          </a>


          {/* OUR WORK */}

          <a href="/#work">

            <ChevronRight size={11} />

            <span>
              Our Work
            </span>

          </a>


          {/* CAREERS */}

          <a href="/careers/">

            <ChevronRight size={11} />

            <span>
              Careers
            </span>

          </a>


          {/* SERVICES */}

          <a href="/#services">

            <ChevronRight size={11} />

            <span>
              Services
            </span>

          </a>

        </div>



        {/* =====================================
            SOLUTIONS
        ====================================== */}

        <div className="footer-column">

          <h4>
            SOLUTIONS
          </h4>

          <div className="footer-line"></div>


          {/* WEB DEVELOPMENT */}

          <a href="/services/web-development/">

            <ChevronRight size={11} />

            <span>
              Web Development
            </span>

          </a>


          {/* APP DEVELOPMENT */}

          <a href="/services/app-development/">

            <ChevronRight size={11} />

            <span>
              App Development
            </span>

          </a>


          {/* UI/UX */}

          <a href="/services/ui-ux-design/">

            <ChevronRight size={11} />

            <span>
              UI/UX Design
            </span>

          </a>


          {/* SOFTWARE */}

          <a href="/services/custom-software/">

            <ChevronRight size={11} />

            <span>
              Software Development
            </span>

          </a>


          {/* AI */}

          <a href="/services/ai-and-machine-learning/">

            <ChevronRight size={11} />

            <span>
              AI & Machine Learning
            </span>

          </a>


          {/* DIGITAL */}

          <a href="/services/digital-solutions/">

            <ChevronRight size={11} />

            <span>
              Digital Solutions
            </span>

          </a>

        </div>



        {/* =====================================
            CONTACT INFORMATION
        ====================================== */}

        <div className="footer-column contact-column">

          <h4>
            CONTACT INFORMATION
          </h4>

          <div className="footer-line"></div>


          {/* CONSULTATION */}

          <a
            href="/#company-section"
            className="simple-footer-link"
          >

            <ChevronRight size={11} />

            <span>
              Schedule a Consultation
            </span>

          </a>


          {/* COMPANY ADDRESS */}

          <div className="contact-item">

            <MapPin
              className="contact-icon"
              size={14}
            />

            <div className="contact-text">

              <strong>
                Tcongs Infotech
              </strong>

              <span>
                Software & Technology Solutions
              </span>

              <span>
                India
              </span>

            </div>

          </div>


          {/* PHONE */}

          <a
            href="tel:+919833011764"
            className="contact-item contact-link"
          >

            <Phone
              className="contact-icon"
              size={14}
            />

            <span>
              +91 98330 11764
            </span>

          </a>


          {/* EMAIL */}

          <a
            href="mailto:info@tcongsinfotech.com"
            className="contact-item contact-link"
          >

            <Mail
              className="contact-icon"
              size={14}
            />

            <span>
              info@tcongsinfotech.com
            </span>

          </a>


          {/* =================================
              REVIEW - DESKTOP
          ================================= */}

          <div className="footer-review footer-review-desktop">

            <div className="review-divider"></div>

            <span className="review-title">
              REVIEWED BY OUR CLIENTS
            </span>

            <div className="review-row">

              <strong>
                Tcongs
              </strong>

              <span className="stars">
                ★★★★★
              </span>

            </div>

            <small>
              CLIENT REVIEWS
            </small>

          </div>

        </div>



        {/* =====================================
            FOLLOW US
        ====================================== */}

        <div className="footer-column follow-column">

          <h4>
            FOLLOW US
          </h4>

          <div className="footer-line"></div>


          <div className="social-icons">

            <a
              href="https://www.linkedin.com/company/tcongs-infotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn"
            >
              in
            </a>

          </div>


          {/* =================================
              REVIEW - MOBILE
          ================================= */}

          <div className="footer-review footer-review-mobile">

            <div className="review-divider"></div>

            <span className="review-title">
              REVIEWED BY OUR CLIENTS
            </span>

            <div className="review-row">

              <strong>
                Tcongs
              </strong>

              <span className="stars">
                ★★★★★
              </span>

            </div>

            <small>
              CLIENT REVIEWS
            </small>

          </div>

        </div>

      </div>



      {/* =====================================
          LARGE BACKGROUND LOGO
      ====================================== */}

      <div className="footer-big-logo">
        Tcongs Infotech
      </div>



      {/* =====================================
          BOTTOM BAR
      ====================================== */}

      <div className="footer-bottom">

        <div className="copyright">

          <span>
            © 2026 Tcongs Infotech. All Rights Reserved.
          </span>


          <span className="separator">
            |
          </span>


          {/* PRIVACY POLICY */}

          <a href="/privacy-policy/">
            Privacy Policy
          </a>

          <span className="separator">
            |
          </span>

          <a href="/terms-of-service/">
            Terms of Service
          </a>

          <span className="separator">
            |
          </span>

          <a href="/sitemap/">
            Sitemap
          </a>
        </div>



        {/* =====================================
            BACK TO TOP
        ====================================== */}

        <button
          type="button"
          className={`back-to-top ${showTop ? "show" : ""
            }`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >

          <ArrowUp size={15} />

        </button>

      </div>

    </footer>
  );
}

export default Footer;