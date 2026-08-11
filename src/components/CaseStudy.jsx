import React, { useEffect, useState } from "react";
import "./CaseStudy.css";

const screens = [
  {
    title: "Editing Management Layer",
    date: "2026-06-26",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Field Management",
    date: "2026-06-27",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Crop Analysis",
    date: "2026-06-28",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
  },
];

function CaseStudy() {
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % screens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentScreen = screens[screenIndex];

  return (
    <section className="fieldx-section">

      {/* Background */}
      <div className="fieldx-background"></div>

      {/* Dark overlay */}
      <div className="fieldx-overlay"></div>

      {/* Main content */}
      <div className="fieldx-content">

        <div className="fieldx-card">

          {/* LEFT SIDE */}
          <div className="fieldx-info">

            <div className="fieldx-logo">
              <span className="fieldx-logo-icon">×</span>
              <span>FieldX VRT</span>
            </div>

            <h2>
              Featured&nbsp; Case
              <br />
              Study
            </h2>

            <p>
              Where Agronomic Expertise Meets
              Precision Innovation – Transforming
              Agriculture, One Field at a Time
            </p>

            <button className="fieldx-button">
              View Case Study
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="browser-window">

            {/* Browser top */}
            <div className="browser-top">

              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="browser-nav">
                <span>◀</span>
                <span>›</span>
              </div>

              <div className="browser-lock">
                🔒
              </div>

              <div className="browser-url">
                https://vrt.fieldx.com
              </div>

              <div className="browser-icons">
                <span>↻</span>
                <span>+</span>
              </div>

            </div>


            {/* Browser content */}
            <div className="browser-content">

              {/* Fake navigation */}
              <div className="app-navigation">

                <div className="breadcrumb">
                  Geneva Acres
                  <span>›</span>
                  Western
                </div>

                <div className="zoom-controls">
                  <span>⌕</span>

                  <button>4x</button>

                  <span>⌕</span>
                </div>

              </div>


              {/* Editing bar */}
              <div className="editing-bar">

                <span>
                  {currentScreen.title} ({currentScreen.date})
                </span>

                <button className="save-button">
                  ◯ &nbsp; Save and Close
                </button>

                <button className="cancel-button">
                  Cancel
                </button>

              </div>


              {/* Map / image */}
              <div className="field-map">

                <img
                  key={currentScreen.image}
                  src={currentScreen.image}
                  alt="Field management"
                />

                {/* map overlay */}
                <div className="map-dark-overlay"></div>

                {/* Fake field boundary */}
                <div className="field-boundary"></div>

                {/* Cursor */}
                <div
                  className="animated-cursor"
                  key={screenIndex}
                >
                  <div className="cursor-arrow"></div>
                </div>

              </div>


              {/* Bottom browser bar */}
              <div className="browser-bottom">

                <div className="bottom-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="file-name">
                  central_crop_vrt.xlsx
                </span>

                <span className="warning">
                  OVERUSED SPREADSHEET
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CaseStudy;