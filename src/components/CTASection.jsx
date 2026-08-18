import {
  ShieldCheck,
  Users,
  BadgeCheck,
  CalendarDays,
  ArrowRight,
  Trophy,
  ThumbsUp,
  BarChart3,
} from "lucide-react";

import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">

      {/* Background */}
      <div className="cta-dots"></div>

      <div className="cta-wrapper">

        {/* =====================================================
            LEFT CTA CARD
        ===================================================== */}

        <div className="cta-content">

          <h2>
            Ready for <span>technology</span>
            <br />
            that fits your business?
          </h2>

          <p>
            Whether you work in construction, manufacturing,
            healthcare, or finance, investing in custom software can
            streamline your workflow, eliminate errors, and increase
            team productivity.
          </p>

          <button className="consultation-btn">

            <CalendarDays
              size={15}
              strokeWidth={1.8}
            />

            <span>
              Schedule a Consultation
            </span>

            <ArrowRight
              size={17}
              strokeWidth={1.8}
            />

          </button>

        </div>


        {/* =====================================================
            RIGHT REVIEWS PANEL
        ===================================================== */}

        <div className="reviews-panel">

          <div className="reviews-cards">

            {/* =================================================
                GOOGLE REVIEWS CARD
            ================================================= */}

            <div className="review-card google-card">

              <div className="review-card-header">

                {/* REAL GOOGLE LOGO */}
                <img
                  src="/image.png"
                  alt="Google"
                  className="google-logo"
                />

                <div className="review-platform">

                  <span>
                    Google Reviews
                  </span>

                  <div className="platform-line"></div>

                </div>

              </div>


              {/* Rating */}

              <div className="review-rating">
                4.9
              </div>


              {/* Stars */}

              <div className="review-stars">

                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

              </div>


              <div className="review-count">
                Based on 58 reviews
              </div>


              <div className="review-divider"></div>


              {/* Feature 1 */}

              <div className="review-feature">

                <div className="feature-icon">

                  <ShieldCheck
                    size={19}
                    strokeWidth={1.5}
                  />

                </div>

                <div className="feature-text">

                  <strong>
                    Verified Reviews
                  </strong>

                  <span>
                    Authentic feedback from our clients
                  </span>

                </div>

              </div>


              {/* Feature 2 */}

              <div className="review-feature">

                <div className="feature-icon">

                  <Users
                    size={19}
                    strokeWidth={1.5}
                  />

                </div>

                <div className="feature-text">

                  <strong>
                    5 Star Rating
                  </strong>

                  <span>
                    Consistent client satisfaction
                  </span>

                </div>

              </div>


              {/* Feature 3 */}

              <div className="review-feature">

                <div className="feature-icon">

                  <ThumbsUp
                    size={19}
                    strokeWidth={1.5}
                  />

                </div>

                <div className="feature-text">

                  <strong>
                    Highly Recommended
                  </strong>

                  <span>
                    By businesses across industries
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                CLUTCH REVIEWS CARD
            ================================================= */}

            <div className="review-card clutch-review-card">

              <div className="review-card-header">

                <div className="clutch-logo">
                  Clutch
                </div>

                <div className="review-platform">

                  <span>
                    Clutch Reviews
                  </span>

                  <div className="platform-line"></div>

                </div>

              </div>


              {/* Rating */}

              <div className="review-rating">
                4.9
              </div>


              {/* Stars */}

              <div className="review-stars">

                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

              </div>


              <div className="review-count">
                Based on 25 reviews
              </div>


              <div className="review-divider"></div>


              {/* Feature 1 */}

              <div className="review-feature">

                <div className="feature-icon">

                  <Trophy
                    size={19}
                    strokeWidth={1.5}
                  />

                </div>

                <div className="feature-text">

                  <strong>
                    Top Rated on Clutch
                  </strong>

                  <span>
                    Recognized for excellence
                  </span>

                </div>

              </div>


              {/* Feature 2 */}

              <div className="review-feature">

                <div className="feature-icon">

                  <BadgeCheck
                    size={19}
                    strokeWidth={1.5}
                  />

                </div>

                <div className="feature-text">

                  <strong>
                    Verified Company
                  </strong>

                  <span>
                    Clutch verified & trusted
                  </span>

                </div>

              </div>


              {/* Feature 3 */}

              <div className="review-feature">

                <div className="feature-icon">

                  <BarChart3
                    size={19}
                    strokeWidth={1.5}
                  />

                </div>

                <div className="feature-text">

                  <strong>
                    Proven Track Record
                  </strong>

                  <span>
                    Delivering results that matter
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;