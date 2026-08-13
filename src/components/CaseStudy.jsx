"use client";

import { useEffect, useState } from "react";
import "./CaseStudy.css";
import projects from "../data/projects";
import Link from "next/link";

function CaseStudy() {
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[projectIndex];

  return (
    <section className="fieldx-section">

      {/* ================= BACKGROUND ================= */}
      <div
        className="fieldx-background"
        style={{
          backgroundImage: `url(${currentProject.image})`,
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="fieldx-overlay"></div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="fieldx-content">

        <div className="fieldx-card">

          {/* ================= LEFT SIDE ================= */}
          <div className="fieldx-info">

            {/* Logo */}
            <div className="fieldx-logo">
              <span className="fieldx-logo-icon">×</span>
              <span>FieldX VRT</span>
            </div>

            {/* Category */}
            <span className="project-category">
              {currentProject.category}
            </span>

            {/* Title */}
            <h2>
              {currentProject.title}
            </h2>

            {/* Description */}
            <p>
              {currentProject.description}
            </p>

            {/* Date */}
            <p className="project-date">
              Project Date: {currentProject.date}
            </p>

            {/* View Case Study */}
            <Link
              href={`/case-study/${currentProject.id}`}
              className="fieldx-button"
            >
              View Case Study
              <span>→</span>
            </Link>

          </div>

          {/* ================= RIGHT SIDE ================= */}
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
                vrt.fieldx.com
              </div>

              <div className="browser-icons">
                <span>↻</span>
                <span>+</span>
              </div>

            </div>

            {/* Browser content */}
            <div className="browser-content">

              {/* Navigation */}
              <div className="app-navigation">

                <div className="breadcrumb">
                  Tcongs Infotech
                  <span>›</span>
                  Our Work
                </div>

                <div className="zoom-controls">
                  <span>⌕</span>
                  <button type="button">4x</button>
                  <span>⌕</span>
                </div>

              </div>

              {/* Project information bar */}
              <div className="editing-bar">

                <span>
                  {currentProject.title}
                </span>

                <span>
                  {currentProject.date}
                </span>

              </div>

              {/* Project image */}
              <div className="field-map">

                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                />

                <div className="map-dark-overlay"></div>

              </div>

              {/* Bottom browser bar */}
              <div className="browser-bottom">

                <span className="file-name">
                  {currentProject.title}
                </span>

                <span className="warning">
                  {currentProject.category}
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