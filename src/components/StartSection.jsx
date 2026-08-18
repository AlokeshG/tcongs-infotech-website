"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import "./StartSection.css";
import tcongsLogo from "../assets/tcongs-logo.png";

function StartSection() {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("Schedule a Consultation");

  // OPEN FORM
  const openForm = (title) => {
    setFormTitle(title);
    setShowForm(true);
  };

  // CLOSE FORM
  const closeForm = () => {
    setShowForm(false);
  };

  // Lock page scrolling while popup is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your request has been submitted successfully.");

    closeForm();
  };

  return (
    <>
      <section className="start-section" id="company-section">

        {/* =========================
            HEADING
        ========================== */}

        <div className="start-heading">
          <h2>
            Wherever you are in the
            <br />
            process, there's a place to start.
          </h2>
        </div>


        {/* =========================
            CARDS
        ========================== */}

        <div className="start-container">

          {/* =========================
              CARD 01
          ========================== */}

          <div className="start-card">

            <div className="card-content">

              <span className="card-label blue">
                DISCOVER
              </span>

              <h3>
                Let's Find Your Solution
              </h3>

              <p>
                Every project starts with a conversation.
                We want to understand your business,
                your challenges, and what you want to achieve.
              </p>

              <button
                type="button"
                className="outline-button"
                onClick={() => openForm("Let's Find Your Solution")}
              >
                Let's Talk
                <ArrowRight size={17} />
              </button>

            </div>

            <span className="big-number">
              01
            </span>

          </div>


          {/* =========================
              CARD 02
          ========================== */}

          <div className="start-card">

            <div className="card-content">

              <span className="card-label green">
                GET AN ESTIMATE
              </span>

              <h3>
                Estimate Your Project
              </h3>

              <p>
                Know what you want to build?
                Tell us about your project and we'll
                help turn your idea into a clear plan.
              </p>

              <button
                type="button"
                className="outline-button"
                onClick={() => openForm("Estimate Your Project")}
              >
                Get Started
                <ArrowRight size={17} />
              </button>

            </div>

            <span className="big-number">
              02
            </span>

          </div>


          {/* =========================
              CONSULTATION
          ========================== */}

          <div className="consultation-section">

            <div className="consultation-content">

              <span className="card-label red">
                CONSULT
              </span>

              <h3>
                Let's Build Something
                <br />
                Great Together
              </h3>

              <p>
                No complicated process. No unnecessary steps.
                Just a simple conversation to understand your
                requirements and find the right digital solution.
              </p>

            </div>


            <div className="consultation-action">

              <div className="consultation-box">

                <div className="consultation-circle">
                  <img
                    src={tcongsLogo.src}
                    alt="Tcongs Infotech"
                  />
                </div>

                <div>
                  <strong>
                    Tcongs Infotech
                  </strong>

                  <span>
                    Digital Solutions Team
                  </span>
                </div>

              </div>


              <button
                type="button"
                className="dark-button"
                onClick={() => openForm("Schedule a Consultation")}
              >
                Schedule a Consultation
                <ArrowRight size={17} />
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          POPUP FORM
      ================================================= */}

      {showForm && (
        <div
          className="consultation-overlay"
          onMouseDown={closeForm}
        >

          <div
            className="consultation-modal"
            onMouseDown={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              type="button"
              className="consultation-close"
              onClick={closeForm}
              aria-label="Close form"
            >
              <X size={22} />
            </button>


            {/* HEADER */}

            <div className="consultation-modal-header">

              <span>
                CONSULT
              </span>

              <h2>
                {formTitle}
              </h2>

              <p>
                Tell us a little about your project
                and our team will get back to you.
              </p>

            </div>


            {/* FORM */}

            <form
              className="consultation-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="full-name">
                    Full Name
                  </label>

                  <input
                    id="full-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>


              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                  />
                </div>

              </div>


              <div className="form-group">

                <label htmlFor="service">
                  What can we help you with?
                </label>

                <select
                  id="service"
                  required
                  defaultValue=""
                >

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="web-development">
                    Web Development
                  </option>

                  <option value="app-development">
                    App Development
                  </option>

                  <option value="ui-ux">
                    UI/UX Design
                  </option>

                  <option value="software-development">
                    Software Development
                  </option>

                  <option value="ai-ml">
                    AI & Machine Learning
                  </option>

                  <option value="digital-solutions">
                    Digital Solutions
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label htmlFor="project">
                  Tell us about your project
                </label>

                <textarea
                  id="project"
                  rows="5"
                  placeholder="Briefly describe your requirements..."
                  required
                />

              </div>


              <button
                type="submit"
                className="consultation-submit"
              >
                Submit Request
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>
      )}

    </>
  );
}

export default StartSection;