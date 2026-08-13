import { useEffect, useState } from "react";
import "./CTASection.css";


function CTASection() {
  const [rating, setRating] = useState(0);
  const [showStars, setShowStars] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    // Animate rating from 0 to 4.9
    let start = 0;

    const interval = setInterval(() => {
      start += 0.1;

      if (start >= 4.9) {
        start = 4.9;
        clearInterval(interval);

        // Show stars after rating finishes
        setTimeout(() => {
          setShowStars(true);
        }, 200);

        // Show verified text after stars
        setTimeout(() => {
          setShowReviews(true);
        }, 900);
      }

      setRating(Number(start.toFixed(1)));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cta-section">

      {/* Background dots */}
      <div className="cta-dots"></div>

      <div className="cta-wrapper">

        {/* LEFT CONTENT */}
        <div className="cta-content">

          <h2>
            Ready for <span>technology</span> that fits
            <br />
            your business?
          </h2>

          <p>
            Whether you work in construction, manufacturing,
            <br />
            healthcare, or finance, investing in custom software can
            <br />
            streamline your workflow, eliminate errors, and increase
            <br />
            team productivity.
          </p>

          <button className="consultation-btn">
            Schedule a Consultation
          </button>

        </div>

        {/* RIGHT CLUTCH CARD */}
        <div className="clutch-card">

          <div className="clutch-content">

            <div className="clutch-title">
              Clutch
            </div>

            {/* RATING */}
            <div className="clutch-rating">
              {rating.toFixed(1)}
            </div>

            {/* STARS */}
            <div
              className={`clutch-stars ${
                showStars ? "stars-visible" : ""
              }`}
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* VERIFIED */}
            <div
              className={`clutch-reviews ${
                showReviews ? "reviews-visible" : ""
              }`}
            >
              VERIFIED • 25 REVIEWS
            </div>

          </div>

          {/* REVIEW BUTTON */}
          <button className="reviews-btn">
            See our reviews on Clutch
          </button>

          {/* BOTTOM SLIDER */}
          <div className="clutch-slider">
            <span></span>
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;