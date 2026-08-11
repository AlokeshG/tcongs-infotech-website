import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./CaseStudyPage.css";

function CaseStudyPage() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="case-not-found">
        <h1>Project Not Found</h1>

        <Link to="/">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="case-study-page">

      {/* HEADER */}

      <header className="case-study-header">

        <Link to="/" className="back-button">
          ← Back to Website
        </Link>

        <span>
          Tcongs Infotech
        </span>

      </header>


      {/* HERO */}

      <section className="case-study-hero">

        <div className="case-study-info">

          <span className="case-category">
            {project.category}
          </span>

          <h1>
            {project.title}
          </h1>

          <p>
            {project.description}
          </p>

          <div className="case-date">
            Project Date: {project.date}
          </div>

          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-button"
          >
            Visit Project →
          </a>

        </div>


        <div className="case-study-image">

          <img
            src={project.image}
            alt={project.title}
          />

        </div>

      </section>


      {/* PROJECT DETAILS */}

      <section className="case-study-details">

        <span className="case-category">
          CASE STUDY
        </span>

        <h2>
          About This Project
        </h2>

        <p>
          {project.description}
        </p>

        <div className="project-information">

          <div>
            <strong>Project</strong>
            <span>{project.title}</span>
          </div>

          <div>
            <strong>Category</strong>
            <span>{project.category}</span>
          </div>

          <div>
            <strong>Date</strong>
            <span>{project.date}</span>
          </div>

        </div>

      </section>


      {/* BACK */}

      <section className="case-study-footer">

        <Link to="/">
          ← Back to all projects
        </Link>

      </section>

    </div>
  );
}

export default CaseStudyPage;