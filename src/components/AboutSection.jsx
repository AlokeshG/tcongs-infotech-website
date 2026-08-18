"use client";

import "./AboutSection.css";

import desktopTeam from "../assets/world-map-desktop.png";
import mobileTeam from "../assets/world-map-mobile.png";

import {
  UserRoundCheck,
  BriefcaseBusiness,
  Users,
  Handshake,
  Monitor,
  Smartphone,
  ShoppingCart,
  Cloud,
  BarChart3,
  Settings,
  Globe2,
} from "lucide-react";

function AboutSection() {
  return (
    <section className="about-section" id="about">

      {/* =========================================
          WORLD MAP
      ========================================= */}

      <div className="about-image">
        <picture>

          <source
            media="(max-width: 768px)"
            srcSet={mobileTeam.src}
          />

          <img
            src={desktopTeam.src}
            alt="Tcongs Infotech World Map"
          />

        </picture>
      </div>


      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className="about-overlay"></div>


      {/* =========================================
          MOBILE HEADING - OVER MAP
      ========================================= */}

      <div className="about-mobile-heading">

        <div className="about-label-line"></div>

        <h2>
          Serving Businesses
          <br />
          Across Borders
        </h2>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="about-container">

        <div className="about-content">

          {/* =====================================
              DESKTOP HEADING
          ===================================== */}

          <div className="about-desktop-heading">

            <div className="about-label-line"></div>

            <h2>
              Serving Businesses
              <br />
              Across Borders
            </h2>

            <div className="about-title-line"></div>

          </div>


          {/* =====================================
              SUBTITLE
          ===================================== */}

          <h3>
            Global Technology Partner for Growing Businesses
          </h3>


          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <p className="about-description">

            At <strong>Tcongs Infotech</strong>, we deliver reliable,
            scalable, and innovative digital solutions to businesses
            across the globe. From startups to growing enterprises,
            we help transform ideas into powerful websites, mobile apps,
            software, and digital platforms.

          </p>


          {/* =====================================
              TRUSTED CLIENTS
          ===================================== */}

          <div className="trusted-box">

            <div className="trusted-icon">

              <Globe2
                size={28}
                strokeWidth={1.8}
              />

            </div>

            <div className="trusted-text">

              <span>
                Trusted by clients across
              </span>

              <strong>
                India, UAE, USA, and Canada.
              </strong>

            </div>

          </div>


          {/* =====================================
              OUR SOLUTIONS
          ===================================== */}

          <div className="solutions-section">

            <div className="solutions-title">
              OUR SOLUTIONS
            </div>

            <div className="solutions-grid">

              <div className="solution-item">

                <Monitor
                  className="solution-icon"
                  size={25}
                  strokeWidth={1.8}
                />

                <span>
                  Web Development
                </span>

              </div>


              <div className="solution-item">

                <Smartphone
                  className="solution-icon"
                  size={25}
                  strokeWidth={1.8}
                />

                <span>
                  Mobile App
                  <br />
                  Development
                </span>

              </div>


              <div className="solution-item">

                <ShoppingCart
                  className="solution-icon"
                  size={25}
                  strokeWidth={1.8}
                />

                <span>
                  E-Commerce
                  <br />
                  Solutions
                </span>

              </div>


              <div className="solution-item">

                <Cloud
                  className="solution-icon"
                  size={25}
                  strokeWidth={1.8}
                />

                <span>
                  Cloud & DevOps
                  <br />
                  Solutions
                </span>

              </div>


              <div className="solution-item">

                <BarChart3
                  className="solution-icon"
                  size={25}
                  strokeWidth={1.8}
                />

                <span>
                  Digital Marketing
                  <br />
                  Solutions
                </span>

              </div>


              <div className="solution-item">

                <Settings
                  className="solution-icon"
                  size={25}
                  strokeWidth={1.8}
                />

                <span>
                  Custom Software
                  <br />
                  Development
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            STATISTICS
        ===================================== */}

        <div className="about-stats">

          <div className="stat-card stat-green">

            <div className="stat-icon">
              <UserRoundCheck
                size={35}
                strokeWidth={1.7}
              />
            </div>

            <strong>10+</strong>

            <span>
              Years of
              <br />
              Experience
            </span>

          </div>


          <div className="stat-card stat-blue">

            <div className="stat-icon">
              <BriefcaseBusiness
                size={35}
                strokeWidth={1.7}
              />
            </div>

            <strong>150+</strong>

            <span>
              Projects
              <br />
              Delivered
            </span>

          </div>


          <div className="stat-card stat-purple">

            <div className="stat-icon">
              <Users
                size={35}
                strokeWidth={1.7}
              />
            </div>

            <strong>25+</strong>

            <span>
              Team
              <br />
              Members
            </span>

          </div>


          <div className="stat-card stat-yellow">

            <div className="stat-icon">
              <Handshake
                size={35}
                strokeWidth={1.7}
              />
            </div>

            <strong>100%</strong>

            <span>
              Client-Focused
              <br />
              Solutions
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;