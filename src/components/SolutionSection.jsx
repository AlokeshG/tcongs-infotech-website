"use client";

import { useEffect, useState } from "react";
import "./SolutionSection.css";

function SolutionSection() {
  const words = ["Software", "AI", "Technology"];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade current word out
      setIsVisible(false);

      // Change word after fade-out
      setTimeout(() => {
        setIndex((prevIndex) => {
          return (prevIndex + 1) % words.length;
        });

        // Fade new word in
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [words.length]);

  return (
    <section className="solution-section">

      {/* HERO CONTENT */}

      <div className="solution-content">

        <h1 className="solution-title">

          <span
            className={`changing-word ${
              isVisible ? "word-visible" : "word-hidden"
            }`}
          >
            {words[index]}
          </span>

          {" "}

          <span className="white-text">
            that fits
          </span>

        </h1>


        <p className="solution-subtitle">
          Don't fit your business into software. Build software that fits your
          business.
        </p>

      </div>

    </section>
  );
}

export default SolutionSection;