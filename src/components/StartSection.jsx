"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import "./StartSection.css";
import tcongsLogo from "../assets/tcongs-logo.png";

function StartSection() {
    const [showForm, setShowForm] = useState(false);
    const [formTitle, setFormTitle] = useState("Schedule a Consultation");

    /* =========================================
       OPEN POPUP
    ========================================= */

    const openForm = (title) => {
        setFormTitle(title);
        setShowForm(true);

        document.body.style.overflow = "hidden";
    };


    /* =========================================
       CLOSE POPUP
    ========================================= */

    const closeForm = () => {
        setShowForm(false);

        document.body.style.overflow = "auto";
    };


    /* =========================================
       FORM SUBMIT
    ========================================= */

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            "Thank you! Your request has been submitted successfully."
        );

        closeForm();
    };


    return (
        <>
            <section className="start-section">

                {/* =====================================
                    MAIN HEADING
                ====================================== */}

                <div className="start-heading">

                    <h2>
                        Wherever you are in the
                        <br />
                        process, there's a place to start.
                    </h2>

                </div>


                {/* =====================================
                    MAIN CARDS
                ====================================== */}

                <div className="start-container">


                    {/* =================================
                        CARD 01
                    ================================= */}

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


                            {/* LET'S TALK BUTTON */}

                            <button
                                type="button"
                                className="outline-button"
                                onClick={() =>
                                    openForm("Let's Find Your Solution")
                                }
                            >
                                Let's Talk

                                <ArrowRight size={17} />

                            </button>

                        </div>


                        <span className="big-number">
                            01
                        </span>

                    </div>



                    {/* =================================
                        CARD 02
                    ================================= */}

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


                            {/* GET STARTED BUTTON */}

                            <button
                                type="button"
                                className="outline-button"
                                onClick={() =>
                                    openForm("Estimate Your Project")
                                }
                            >
                                Get Started

                                <ArrowRight size={17} />

                            </button>

                        </div>


                        <span className="big-number">
                            02
                        </span>

                    </div>



                    {/* =================================
                        CONSULTATION SECTION
                    ================================= */}

                    <div className="consultation-section">


                        {/* LEFT */}

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


                        {/* RIGHT */}

                        <div className="consultation-action">


                            {/* COMPANY BOX */}

                            <div className="consultation-box">

                                <div className="consultation-circle">

                                    <img
                                        src={tcongsLogo.src}
                                        alt="Tcongs Infotech"
                                    />

                                </div>


                                <div>

                                    <strong>
                                        Tcongs Infotech
                                    </strong>

                                    <span>
                                        Digital Solutions Team
                                    </span>

                                </div>

                            </div>


                            {/* SCHEDULE BUTTON */}

                            <button
                                type="button"
                                className="dark-button"
                                onClick={() =>
                                    openForm("Schedule a Consultation")
                                }
                            >
                                Schedule a Consultation

                                <ArrowRight size={17} />

                            </button>

                        </div>

                    </div>

                </div>

            </section>



            {/* =====================================================
                POPUP FORM
            ===================================================== */}

            {showForm && (

                <div
                    className="consultation-overlay"
                    onClick={closeForm}
                >

                    <div
                        className="consultation-modal"
                        onClick={(e) => e.stopPropagation()}
                    >


                        {/* ==========================
                            CLOSE BUTTON
                        ========================== */}

                        <button
                            type="button"
                            className="consultation-close"
                            onClick={closeForm}
                            aria-label="Close form"
                        >
                            <X size={22} />
                        </button>



                        {/* ==========================
                            HEADER
                        ========================== */}

                        <div className="consultation-modal-header">

                            <span>
                                CONSULT
                            </span>

                            <h2>
                                {formTitle}
                            </h2>

                            <p>
                                Tell us a little about your project
                                and our team will get back to you.
                            </p>

                        </div>



                        {/* ==========================
                            FORM
                        ========================== */}

                        <form
                            className="consultation-form"
                            onSubmit={handleSubmit}
                        >


                            {/* NAME + EMAIL */}

                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="full-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="full-name"
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="email">
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                    />

                                </div>

                            </div>



                            {/* PHONE + COMPANY */}

                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="phone">
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="company">
                                        Company
                                    </label>

                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Company name"
                                    />

                                </div>

                            </div>



                            {/* SERVICE */}

                            <div className="form-group">

                                <label htmlFor="service">
                                    What can we help you with?
                                </label>

                                <select
                                    id="service"
                                    required
                                    defaultValue=""
                                >

                                    <option
                                        value=""
                                        disabled
                                    >
                                        Select a service
                                    </option>

                                    <option value="web-development">
                                        Web Development
                                    </option>

                                    <option value="app-development">
                                        App Development
                                    </option>

                                    <option value="ui-ux">
                                        UI/UX Design
                                    </option>

                                    <option value="software-development">
                                        Software Development
                                    </option>

                                    <option value="ai-ml">
                                        AI & Machine Learning
                                    </option>

                                    <option value="digital-solutions">
                                        Digital Solutions
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>

                                </select>

                            </div>



                            {/* PROJECT DESCRIPTION */}

                            <div className="form-group">

                                <label htmlFor="project">
                                    Tell us about your project
                                </label>

                                <textarea
                                    id="project"
                                    rows="5"
                                    placeholder="Briefly describe your requirements..."
                                    required
                                ></textarea>

                            </div>



                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="consultation-submit"
                            >

                                Submit Request

                                <ArrowRight size={18} />

                            </button>

                        </form>

                    </div>

                </div>

            )}

        </>
    );
}

export default StartSection;