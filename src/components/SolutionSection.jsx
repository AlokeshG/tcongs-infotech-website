import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import "./SolutionSection.css";

function SolutionSection() {
  const words = ["Software", "AI", "Technology"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Scroll to the next section
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="solution-section">

      {/* HERO CONTENT */}
      <div className="solution-content">

        <h1 className="solution-title">
          <span className="changing-word" key={words[index]}>
            {words[index]}
          </span>{" "}
          <span className="white-text">that fits</span>
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