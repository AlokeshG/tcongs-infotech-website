import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          SMART DIGITAL
          <br />
          SOLUTIONS FOR MODERN
          <br />
          BUSINESSES
        </h1>

        <p>
          We build powerful web, mobile and digital solutions
          that help businesses grow.
        </p>

        <button className="hero-button">
          Let's Talk
        </button>

      </div>


      {/* Scroll Indicator */}

      {showScroll && (
        <div className="scroll-indicator">
          <div className="scroll-icon">
            <ArrowDown size={22} strokeWidth={1.5} />
          </div>

          <span>SCROLL</span>
        </div>
      )}

    </section>
  );
}

export default Hero;