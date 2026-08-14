import { useEffect, useState } from "react";
import {
  Trophy,
  ShieldCheck,
  Users,
  BadgeCheck,
  TrendingUp,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import "./CTASection.css";

function CTASection() {
  const [rating, setRating] = useState(0);
  const [showStars, setShowStars] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 0.1;

      if (start >= 4.9) {
        start = 4.9;
        clearInterval(interval);

        setTimeout(() => {
          setShowStars(true);
        }, 200);

        setTimeout(() => {
          setShowReviews(true);
        }, 700);
      }

      setRating(Number(start.toFixed(1)));
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cta-section">

      {/* Background */}
      <div className="cta-dots"></div>

      <div className="cta-wrapper">

        {/* ==============================
            LEFT CARD
        ============================== */}

        <div className="cta-content">

          <h2>
            Ready for <span>technology</span> that fits
            <br />
            your business?
          </h2>

          <p>
            Whether you work in construction, manufacturing,
            healthcare, or finance, investing in custom software can
            streamline your workflow, eliminate errors, and increase
            team productivity.
          </p>

          <button className="consultation-btn">
            <CalendarDays size={15} strokeWidth={1.8} />

            <span>Schedule a Consultation</span>

            <ArrowRight size={17} strokeWidth={1.8} />
          </button>

        </div>


        {/* ==============================
            RIGHT CLUTCH CARD
        ============================== */}

        <div className="clutch-card">

          <div className="clutch-main">

            {/* Trophy */}
            <div className="clutch-icon">
              <Trophy size={19} strokeWidth={1.6} />
            </div>

            {/* Title */}
            <div className="clutch-title">
              Clutch
            </div>

            {/* Rating */}
            <div className="clutch-rating">
              {rating.toFixed(1)}
            </div>

            {/* Stars */}
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

            {/* Verified */}
            <div
              className={`clutch-reviews ${
                showReviews ? "reviews-visible" : ""
              }`}
            >
              VERIFIED <span>•</span> 25 REVIEWS
            </div>

          </div>


          {/* ==============================
              STATISTICS
          ============================== */}

          <div className="clutch-stats">

            {/* STAT 1 */}
            <div className="clutch-stat">

              <ShieldCheck
                size={22}
                strokeWidth={1.5}
              />

              <div>
                <strong>Verified</strong>
                <span>Professionals</span>
              </div>

            </div>


            {/* STAT 2 */}
            <div className="clutch-stat">

              <Users
                size={22}
                strokeWidth={1.5}
              />

              <div>
                <strong>25+</strong>
                <span>Client Reviews</span>
              </div>

            </div>


            {/* STAT 3 */}
            <div className="clutch-stat">

              <BadgeCheck
                size={22}
                strokeWidth={1.5}
              />

              <div>
                <strong>4.9/5</strong>
                <span>Average Rating</span>
              </div>

            </div>


            {/* STAT 4 */}
            <div className="clutch-stat">

              <TrendingUp
                size={22}
                strokeWidth={1.5}
              />

              <div>
                <strong>Proven</strong>
                <span>Track Record</span>
              </div>

            </div>

          </div>


          {/* Bottom Slider */}
          <div className="clutch-slider">

            <span></span>
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