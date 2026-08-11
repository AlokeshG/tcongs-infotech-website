import "./ApproachSection.css";

function ApproachSection() {
  return (
    <section className="approach-section">
      <div className="approach-container">

        {/* ================= HEADER ================= */}

        <div className="approach-header">
          <h2>
            Our Approach:
            <br />
            Process First, Software Second
          </h2>

          <div className="approach-steps">

            {/* STEP 1 */}
            <div className="approach-step">
              <div className="step-number step-blue">1</div>

              <div>
                <h3>Explore</h3>
                <p>
                  We learn your business to drive
                  <br />
                  your solution to the highest points
                  <br />
                  of value.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="approach-step">
              <div className="step-number step-purple">2</div>

              <div>
                <h3>Craft</h3>
                <p>
                  Then we find the smallest thing
                  <br />
                  that will work to get you an early
                  <br />
                  ROI.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="approach-step">
              <div className="step-number step-green">3</div>

              <div>
                <h3>Ship</h3>
                <p>
                  Your software asset then grows
                  <br />
                  over the lifetime of our partnership.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* ================= DIAGRAM ================= */}

        <div className="approach-diagram">

          {/* TITLE */}
          <div className="diagram-title">
            Explore
          </div>


          {/* SHIP */}
          <div className="diagram-label ship-label">
            Ship
          </div>


          {/* CRAFT */}
          <div className="diagram-label craft-label">
            Craft
          </div>


          {/* =================================================
              GREEN:
              SHIP → EXPLORE
          ================================================= */}

          <svg
            className="diagram-arrow green-arrow"
            viewBox="0 0 500 200"
            preserveAspectRatio="none"
          >

            <path
              id="greenPath"
              d="
                M 70 165
                C 70 75,
                  125 35,
                  220 35
                L 430 35
              "
              fill="none"
              stroke="#5fc878"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* MOVING ARROW */}
            <polygon
              points="0,-7 14,0 0,7"
              fill="#5fc878"
            >
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#greenPath" />
              </animateMotion>
            </polygon>

          </svg>


          {/* =================================================
              BLUE:
              EXPLORE → CRAFT
          ================================================= */}

          <svg
            className="diagram-arrow blue-arrow"
            viewBox="0 0 500 200"
            preserveAspectRatio="none"
          >

            <path
              id="bluePath"
              d="
                M 70 35
                L 330 35
                C 420 35,
                  445 80,
                  445 165
              "
              fill="none"
              stroke="#75d7e8"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* MOVING ARROW */}
            <polygon
              points="0,-7 14,0 0,7"
              fill="#75d7e8"
            >
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#bluePath" />
              </animateMotion>
            </polygon>

          </svg>


          {/* =================================================
              PURPLE:
              CRAFT → SHIP
          ================================================= */}

          <svg
            className="diagram-arrow purple-arrow"
            viewBox="0 0 800 180"
            preserveAspectRatio="none"
          >

            <path
              id="purplePath"
              d="
                M 700 35
                C 680 100,
                  620 135,
                  520 135
                L 150 135
                C 90 135,
                  60 105,
                  45 65
              "
              fill="none"
              stroke="#a990d9"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* MOVING ARROW */}
            <polygon
              points="0,-7 14,0 0,7"
              fill="#a990d9"
            >
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#purplePath" />
              </animateMotion>
            </polygon>

          </svg>


          {/* ================= ICONS ================= */}

          <div className="diagram-icons">

            <div className="diagram-icon skateboard">
              🛹
            </div>

            <div className="diagram-icon bicycle">
              🚲
            </div>

            <div className="diagram-icon car">
              🚗
            </div>

          </div>

        </div>


        {/* ================= DESCRIPTION ================= */}

        <div className="approach-description">

          <h3>
            Iterative Value Is Depicted With A Skateboard To Car Diagram.
          </h3>

          <p>
            You want the car. But you need to be moving while we build it
            together. Our approach delivers value quickly then grows your
            system over time.
          </p>

          <button>
            More About Our Approach
          </button>

        </div>

      </div>
    </section>
  );
}

export default ApproachSection;