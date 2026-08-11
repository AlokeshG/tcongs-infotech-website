import React from "react";
import "./ResourcesSection.css";

function ResourcesSection() {
  return (
    <section className="resources-section">

      <div className="resources-container">

        {/* TOP CONTENT */}
        <div className="resources-main">

          {/* LEFT SIDE */}
          <div className="resources-content">

            <span className="resources-label">
              FREE RESOURCE
            </span>

            <h2>
              Four Free Guides
              <br />
              for <span>AI Productivity</span>
            </h2>

            <div className="resources-line"></div>

            <p className="resources-intro">
              Being productive with AI isn't about the tools. It's how you
              use them.
            </p>

            <p>
              Our distilled learning from active AI training engagements,
              the same standards we teach teams putting AI to work, now yours
              for free! Repeatable practices your team can start using today.
            </p>

            <div className="resources-buttons">
              <button className="resource-btn">
                Download the Guide
                <span>→</span>
              </button>

              <button className="resource-btn">
                See The Full Framework
                <span>→</span>
              </button>
            </div>

          </div>


          {/* RIGHT SIDE - GUIDE CARDS */}
          <div className="guide-stack">

            <div className="guide-card guide-card-1">
              <small>ROLEMODEL SOFTWARE</small>
              <h3>
                AI
                <br />
                World
              </h3>
              <div className="guide-bottom-line"></div>
            </div>

            <div className="guide-card guide-card-2">
              <small>ROLEMODEL SOFTWARE</small>
              <h3>
                AI
                <br />
                Skills
              </h3>
              <div className="guide-bottom-line"></div>
            </div>

            <div className="guide-card guide-card-3">
              <small>ROLEMODEL SOFTWARE</small>
              <h3>
                AI
                <br />
                Tools
              </h3>
              <div className="guide-bottom-line"></div>
            </div>

            <div className="guide-card guide-card-main">

              <small>ROLEMODEL SOFTWARE • A PRACTICAL GUIDE</small>

              <h3>
                Collaborating
                <br />
                with AI
              </h3>

              <div className="guide-green-line"></div>

              <p>
                For business teams that want to get real work
                out of AI, not just experiments.
              </p>

              <div className="guide-footer">
                <strong>
                  CRAFT the input. OWN the output.
                </strong>
              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM CONSULTATION BOX */}
        <div className="resources-consultation">

          <div>
            <h3>AI Enterprise Solutions</h3>

            <p>
              Curious about policies, training, and enterprise AI solutions?
              Schedule time to find your best AI enterprise strategy.
            </p>
          </div>

          <button>
            Schedule a Consultation
          </button>

        </div>

      </div>

    </section>
  );
}

export default ResourcesSection;