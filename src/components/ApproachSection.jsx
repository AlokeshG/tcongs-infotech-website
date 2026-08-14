import "./ApproachSection.css";

import {
  Compass,
  Pencil,
  Rocket,
  Code2,
  ArrowUpRight,
} from "lucide-react";

function ApproachSection() {
  return (
    <section className="approach-section">
      <div className="approach-container">

        {/* ================= HEADER ================= */}
        <div className="approach-header">

          <div className="approach-label">
            OUR APPROACH
          </div>

          <h2>
            Process First, Software Second
          </h2>

          <p className="approach-subtitle">
            We follow a proven process to deliver impactful software
            <br />
            that drives real business value.
          </p>

        </div>


        {/* ================= THREE STEPS ================= */}
        <div className="approach-steps">

          {/* STEP 1 */}
          <div className="approach-step step-one">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              <Compass size={20} />
            </div>

            <div className="step-content">
              <h3>Explore</h3>

              <p>
                We learn your business to
                <br />
                drive your solution to the
                <br />
                highest points of value.
              </p>
            </div>

          </div>


          {/* STEP 2 */}
          <div className="approach-step step-two">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              <Pencil size={20} />
            </div>

            <div className="step-content">
              <h3>Craft</h3>

              <p>
                Then we find the smallest
                <br />
                thing that will work to get
                <br />
                you an early ROI.
              </p>
            </div>

          </div>


          {/* STEP 3 */}
          <div className="approach-step step-three">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              <Rocket size={20} />
            </div>

            <div className="step-content">
              <h3>Ship</h3>

              <p>
                Your software asset then
                <br />
                grows over the lifetime of
                <br />
                our partnership.
              </p>
            </div>

          </div>

        </div>


        {/* ================= DIAGRAM ================= */}

        <div className="approach-diagram">

          {/* TOP EXPLORE */}
          <div className="cycle-top">
            <span className="cycle-number cycle-blue">
              01
            </span>

            <h3>Explore</h3>
          </div>


          {/* LEFT SHIP */}
          <div className="cycle-side cycle-left">

            <span className="cycle-number cycle-green">
              03
            </span>

            <div className="cycle-icon green-icon">
              <Rocket size={22} />
            </div>

            <h3>Ship</h3>

          </div>


          {/* RIGHT CRAFT */}
          <div className="cycle-side cycle-right">

            <span className="cycle-number cycle-purple">
              02
            </span>

            <div className="cycle-icon purple-icon">
              <Pencil size={22} />
            </div>

            <h3>Craft</h3>

          </div>


          {/* ================= ARROWS ================= */}

          <svg
            className="cycle-svg"
            viewBox="0 0 600 250"
            preserveAspectRatio="none"
          >

            {/* GREEN */}
            <path
              id="greenCycle"
              d="
                M 110 145
                C 110 75 155 45 220 45
                L 300 45
              "
              fill="none"
              stroke="#63d17b"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <polygon
              points="0,-5 10,0 0,5"
              fill="#63d17b"
            >
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#greenCycle" />
              </animateMotion>
            </polygon>


            {/* BLUE */}
            <path
              id="blueCycle"
              d="
                M 300 45
                L 380 45
                C 445 45 490 75 490 145
              "
              fill="none"
              stroke="#51d2e6"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <polygon
              points="0,-5 10,0 0,5"
              fill="#51d2e6"
            >
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#blueCycle" />
              </animateMotion>
            </polygon>


            {/* PURPLE */}
            <path
              id="purpleCycle"
              d="
                M 490 145
                C 490 205 435 215 370 215
                L 230 215
                C 165 215 110 205 110 145
              "
              fill="none"
              stroke="#a98add"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <polygon
              points="0,-5 10,0 0,5"
              fill="#a98add"
            >
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#purpleCycle" />
              </animateMotion>
            </polygon>

          </svg>


          {/* ================= CENTER ================= */}

          <div className="cycle-center">

            <div className="center-icon">
              <Compass size={22} />
            </div>

            <h3>
              A Continuous Cycle
            </h3>

            <p>
              We iterate, improve and deliver
              <br />
              solutions that scale with your business.
            </p>

          </div>

        </div>


        {/* ================= DESCRIPTION ================= */}

        <div className="approach-description">

          <div className="description-icon">
            <Code2 size={22} />
          </div>

          <div className="description-content">

            <h3>
              Built for Long-Term Value
            </h3>

            <p>
              Like a skateboard to a car, we start small, move fast,
              and evolve continuously — delivering software that grows
              with your business and stands the test of time.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ApproachSection;