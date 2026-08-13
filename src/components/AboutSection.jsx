import "./AboutSection.css";

import desktopTeam from "../assets/world-map-desktop.png";
import mobileTeam from "../assets/world-map-mobile.png";

function AboutSection() {
  return (
    <section className="about-section" id="about">

      {/* Team Image */}
      <div className="about-image">
        <picture>
          {/* Mobile image */}
          <source
            media="(max-width: 768px)"
            srcSet={mobileTeam.src}
          />

          {/* Laptop/Desktop image */}
          <img
            src={desktopTeam.src}
            alt="Tcongs Infotech Team"
          />
        </picture>
      </div>

      {/* Dark Overlay */}
      <div className="about-overlay"></div>

      {/* Content */}
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">

          <span className="about-label">
            ABOUT TCONGS INFOTECH
          </span>

          <h2>
            Long-term
            <br />
            partnership
            <br />
            focused on
            <br />
            technology.
          </h2>

          <p className="about-description">
            Serving businesses with reliable digital solutions
            designed to grow and evolve with your needs.
          </p>

          <p className="about-highlight">
            We build <span>smart</span>, <span>scalable</span> software
            that helps businesses grow.
          </p>

          <button className="about-button">
            Want to learn more?
            <span>→</span>
          </button>

        </div>

        {/* RIGHT STATS */}
        <div className="about-stats">

          <div className="stat-card">
            <strong>10+</strong>
            <span>Years in Business</span>
          </div>

          <div className="stat-card">
            <strong>50+</strong>
            <span>Projects Delivered</span>
          </div>

          <div className="stat-card">
            <strong>25+</strong>
            <span>Team Members</span>
          </div>

          <div className="stat-card">
            <strong>100%</strong>
            <span>Client Focused</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;