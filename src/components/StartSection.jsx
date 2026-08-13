import React from "react";
import { ArrowRight } from "lucide-react";
import "./StartSection.css";
import tcongsLogo from "../assets/tcongs-logo.png";

function StartSection() {
    return (
        <section className="start-section">

            {/* Main Heading */}
            <div className="start-heading">
                <h2>
                    Wherever you are in the
                    <br />
                    process, there's a place to start.
                </h2>
            </div>

            {/* Main Cards */}
            <div className="start-container">

                {/* CARD 01 */}
                <div className="start-card">

                    <div className="card-content">

                        <span className="card-label blue">
                            DISCOVER
                        </span>

                        <h3>
                            Let's Find Your Solution
                        </h3>

                        <p>
                            Every project starts with a conversation.
                            We want to understand your business,
                            your challenges, and what you want to achieve.
                        </p>

                        <button className="outline-button">
                            Let's Talk
                            <ArrowRight size={17} />
                        </button>

                    </div>

                    <span className="big-number">
                        01
                    </span>

                </div>


                {/* CARD 02 */}
                <div className="start-card">

                    <div className="card-content">

                        <span className="card-label green">
                            GET AN ESTIMATE
                        </span>

                        <h3>
                            Estimate Your Project
                        </h3>

                        <p>
                            Know what you want to build?
                            Tell us about your project and we'll
                            help turn your idea into a clear plan.
                        </p>

                        <button className="outline-button">
                            Get Started
                            <ArrowRight size={17} />
                        </button>

                    </div>

                    <span className="big-number">
                        02
                    </span>

                </div>


                {/* CONSULTATION SECTION */}
                <div className="consultation-section">

                    <div className="consultation-content">

                        <span className="card-label red">
                            CONSULT
                        </span>

                        <h3>
                            Let's Build Something
                            <br />
                            Great Together
                        </h3>

                        <p>
                            No complicated process. No unnecessary steps.
                            Just a simple conversation to understand your
                            requirements and find the right digital solution.
                        </p>

                    </div>


                    <div className="consultation-action">

                        <div className="consultation-box">

                            <div className="consultation-circle">
                                <img
                                    src={tcongsLogo.src}
                                    alt="Tcongs Infotech"
                                />
                            </div>

                            <div>
                                <strong>Tcongs Infotech</strong>
                                <span>Digital Solutions Team</span>
                            </div>

                        </div>

                        <button className="dark-button">
                            Schedule a Consultation
                            <ArrowRight size={17} />
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default StartSection;