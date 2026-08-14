import React, { useState } from "react";
import "./ResourcesSection.css";

function ResourcesSection() {
  const [activeBook, setActiveBook] = useState(0);

  const books = [
    {
      id: 0,
      title: (
        <>
          Collaborating
          <br />
          with AI
        </>
      ),
      description:
        "For business teams that want to get real work out of AI, not just experiments.",
      footer: "CRAFT the input. OWN the output.",
    },
    {
      id: 1,
      title: (
        <>
          AI
          <br />
          Tools
        </>
      ),
      description:
        "Discover practical AI tools that help teams work smarter and faster.",
      footer: "CHOOSE the right tool. CREATE better results.",
    },
    {
      id: 2,
      title: (
        <>
          AI
          <br />
          Skills
        </>
      ),
      description:
        "Build the essential AI skills your team needs to work effectively.",
      footer: "LEARN the skill. APPLY the knowledge.",
    },
    {
      id: 3,
      title: (
        <>
          AI
          <br />
          World
        </>
      ),
      description:
        "Understand how AI is changing modern business and workplace productivity.",
      footer: "UNDERSTAND AI. USE IT BETTER.",
    },
  ];

  /*
   * Calculate where each book should appear.
   *
   * position 0 = FRONT
   * position 1 = first book behind
   * position 2 = second book behind
   * position 3 = third book behind
   */
  const getPosition = (index) => {
    return (index - activeBook + books.length) % books.length;
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


          {/* =====================================
              BOOK STACK
          ====================================== */}

          <div className="guide-stack">

            {books.map((book, index) => {

              const position = getPosition(index);

              return (
                <div
                  key={book.id}
                  className={`guide-card position-${position}`}
                  onClick={() => setActiveBook(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveBook(index);
                    }
                  }}
                >

                  {/* BOOK HEADER */}

                  <small>
                    ROLEMODEL SOFTWARE
                    {position === 0 && " • A PRACTICAL GUIDE"}
                  </small>


                  {/* BOOK TITLE */}

                  <h3>
                    {book.title}
                  </h3>


                  {/* MAIN BOOK CONTENT */}

                  {position === 0 && (
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


                  {/* BACK BOOK LINE */}

                  {position !== 0 && (
                    <div className="guide-bottom-line"></div>
                  )}

                </div>
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

          <button>
            Schedule a Consultation
          </button>

        </div>

      </div>

    </section>
  );
}

export default ResourcesSection;