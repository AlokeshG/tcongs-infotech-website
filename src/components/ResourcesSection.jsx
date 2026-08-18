"use client";

import React, { useEffect, useState } from "react";
import "./ResourcesSection.css";

function ResourcesSection() {
  const [activeBook, setActiveBook] = useState(0);
  const [popup, setPopup] = useState(null);

  const books = [
    {
      id: 0,
      title: (
        <>
          Web
          <br />
          Development
        </>
      ),
      plainTitle: "Web Development",
      description:
        "We create modern, responsive and high-performance websites that fit your business and help you grow.",
      footer: "CRAFT the input. OWN the output.",
    },

    {
      id: 1,
      title: (
        <>
          AI &
          <br />
          Machine Learning
        </>
      ),
      plainTitle: "AI & Machine Learning",
      description:
        "We build intelligent AI solutions that automate processes, improve decisions and create better customer experiences.",
      footer: "CHOOSE the right tool. CREATE better results.",
    },

    {
      id: 2,
      title: (
        <>
          Custom
          <br />
          Software
        </>
      ),
      plainTitle: "Custom Software",
      description:
        "We develop scalable software solutions designed around your unique business requirements and workflow.",
      footer: "LEARN the skill. APPLY the knowledge.",
    },

    {
      id: 3,
      title: (
        <>
          Cloud
          <br />
          Solutions
        </>
      ),
      plainTitle: "Cloud Solutions",
      description:
        "We help businesses use modern cloud technologies to build secure, scalable and reliable applications..",
      footer: "UNDERSTAND AI. USE IT BETTER.",
    },
  ];

  /* =========================================
     BOOK POSITION
  ========================================= */

  const getPosition = (index) => {
    return (index - activeBook + books.length) % books.length;
  };


  /* =========================================
     BOOK CLICK
  ========================================= */

  const handleBookClick = (index) => {
    setActiveBook(index);
  };


  /* =========================================
     KEYBOARD SUPPORT
  ========================================= */

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveBook(index);
    }
  };


  /* =========================================
     OPEN POPUP
  ========================================= */

  const openPopup = (type) => {
    setPopup(type);
  };


  /* =========================================
     CLOSE POPUP
  ========================================= */

  const closePopup = () => {
    setPopup(null);
  };


  /* =========================================
     ESC KEY
  ========================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);


  /* =========================================
     DOWNLOAD GUIDE
  ========================================= */

  const downloadGuide = () => {
    const book = books[activeBook];

    const guideContent = `
TCONGS INFOTECH

${book.plainTitle}

${"=".repeat(book.plainTitle.length)}

${book.description}

${book.footer}

--------------------------------------------

AI Productivity Guide

This guide is provided by Tcongs Infotech.

Technology that fits your business.
    `;

    const blob = new Blob(
      [guideContent],
      {
        type: "text/plain;charset=utf-8",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${book.plainTitle
      .replace(/\s+/g, "-")
      .toLowerCase()}-guide.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };


  /* =========================================
     FRAMEWORK FORM SUBMIT
  ========================================= */

  const handleFrameworkSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thank you! Your framework request has been submitted."
    );

    closePopup();
  };


  /* =========================================
     CONSULTATION FORM SUBMIT
  ========================================= */

  const handleConsultationSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thank you! Your consultation request has been submitted."
    );

    closePopup();
  };


  return (
    <section className="resources-section">

      <div className="resources-container">

        {/* =====================================
            MAIN CONTENT
        ====================================== */}

        <div className="resources-main">


          {/* =====================================
              LEFT CONTENT
          ====================================== */}

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


            {/* =================================
                RESOURCE BUTTONS
            ================================== */}

            <div className="resources-buttons">

              <button
                type="button"
                className="resource-btn"
                onClick={downloadGuide}
              >
                Download the Guide

                <span>
                  →
                </span>
              </button>


              <button
                type="button"
                className="resource-btn"
                onClick={() => openPopup("framework")}
              >
                See The Full Framework

                <span>
                  →
                </span>
              </button>

            </div>

          </div>


          {/* =====================================
              BOOK STACK
          ====================================== */}

          <div className="guide-stack">

            {books.map((book, index) => {

              const position = getPosition(index);

              const isFront = position === 0;

              return (
                <article
                  key={book.id}
                  className={`guide-card position-${position}`}
                  onClick={() => handleBookClick(index)}
                  onKeyDown={(event) =>
                    handleKeyDown(event, index)
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${book.plainTitle}`}
                >

                  <small>
                    TCONGS INFOTECH
                    {isFront &&
                      " • A PRACTICAL GUIDE"}
                  </small>


                  <h3>
                    {book.title}
                  </h3>


                  {/* FRONT CONTENT */}

                  {isFront && (
                    <>
                      <div className="guide-green-line"></div>

                      <p className="guide-description">
                        {book.description}
                      </p>

                      <div className="guide-footer">
                        <strong>
                          {book.footer}
                        </strong>
                      </div>
                    </>
                  )}


                  {/* BACK CONTENT */}

                  {!isFront && (
                    <div className="guide-back-content">

                      <span>
                        TCONGS
                      </span>

                      <strong>
                        INFOTECH
                      </strong>

                    </div>
                  )}

                </article>
              );
            })}

          </div>

        </div>


        {/* =====================================
            CONSULTATION BOX
        ====================================== */}

        <div className="resources-consultation">

          <div>

            <h3>
              AI Enterprise Solutions
            </h3>

            <p>
              Curious about policies, training, and enterprise AI solutions?
              Schedule time to find your best AI enterprise strategy.
            </p>

          </div>


          <button
            type="button"
            onClick={() =>
              openPopup("consultation")
            }
          >
            Schedule a Consultation
          </button>

        </div>

      </div>


      {/* =========================================
          FRAMEWORK POPUP
      ========================================= */}

      {popup === "framework" && (

        <div
          className="resource-modal-overlay"
          onClick={closePopup}
        >

          <div
            className="resource-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="resource-modal-close"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ×
            </button>


            <span className="modal-label">
              FULL FRAMEWORK
            </span>


            <h2>
              Get The Full AI Framework
            </h2>


            <p className="modal-description">
              Tell us a little about yourself and we'll
              help you access the complete AI productivity
              framework.
            </p>


            <form
              className="resource-form"
              onSubmit={handleFrameworkSubmit}
            >

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                />

              </div>


              <button
                type="submit"
                className="modal-submit-button"
              >
                Get The Framework
                <span>
                  →
                </span>
              </button>

            </form>

          </div>

        </div>

      )}


      {/* =========================================
          CONSULTATION POPUP
      ========================================= */}

      {popup === "consultation" && (

        <div
          className="resource-modal-overlay"
          onClick={closePopup}
        >

          <div
            className="resource-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="resource-modal-close"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ×
            </button>


            <span className="modal-label">
              CONSULT
            </span>


            <h2>
              Schedule a Consultation
            </h2>


            <p className="modal-description">
              Tell us about your requirements and our
              team will get in touch with you.
            </p>


            <form
              className="resource-form"
              onSubmit={handleConsultationSubmit}
            >

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Tell us about your project
                </label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your requirements..."
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="modal-submit-button"
              >
                Submit Request
                <span>
                  →
                </span>
              </button>

            </form>

          </div>

        </div>

      )}

    </section>
  );
}

export default ResourcesSection;