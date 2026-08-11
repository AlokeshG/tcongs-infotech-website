import "./AboutSection.css";
import rolemodelTeam from "../assets/rolemodel-team.jpg";

function AboutSection() {
  return (
    <section className="about-section" id="about">

      {/* Team Image */}
      <div className="about-image">
        <img
          src={rolemodelTeam}
          alt="Team"
        />
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