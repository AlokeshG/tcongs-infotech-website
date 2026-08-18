"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X, ChevronDown } from "lucide-react";
import "./ServicesSection.css";
import services from "../data/services";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const [countryCode, setCountryCode] = useState("+91");


  /* =========================================================
     OPEN POPUP
  ========================================================= */

  const openServicePopup = (service) => {
    setSelectedService(service);

    document.body.style.overflow = "hidden";
  };


  /* =========================================================
     CLOSE POPUP
  ========================================================= */

  const closeServicePopup = () => {
    setSelectedService(null);

    document.body.style.overflow = "";
  };


  /* =========================================================
     RESTORE BODY SCROLL
  ========================================================= */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);


  /* =========================================================
     NAME
     ONLY LETTERS, SPACE, HYPHEN, APOSTROPHE
  ========================================================= */

  const handleNameInput = (e) => {
    e.target.value = e.target.value.replace(
      /[^a-zA-ZÀ-ÿ\s'-]/g,
      ""
    );
  };


  /* =========================================================
     EMAIL
     REMOVE SPACES
  ========================================================= */

  const handleEmailInput = (e) => {
    e.target.value = e.target.value.replace(/\s/g, "");
  };


  /* =========================================================
     PHONE
     ONLY NUMBERS
  ========================================================= */

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 15);
  };


  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert(
      `Thank you! Your request for ${selectedService?.title} has been submitted.`
    );

    closeServicePopup();
  };


  return (
    <>
      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section
        className="services-section"
        id="services"
      >

        {/* HEADING */}

        <div className="services-heading">

          <span className="services-label">
            OUR SERVICES
          </span>

          <h2>
            Technology that works
            <br />
            <span>for your business.</span>
          </h2>

          <p>
            From websites to intelligent software solutions, we create
            technology that solves real business problems.
          </p>

        </div>


        {/* SERVICES */}

        <div className="services-container">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.id}
            >

              <span className="service-number">
                {service.number}
              </span>


              <div className="service-card-content">

                <span className="service-category">
                  {service.category}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                <button
                  type="button"
                  className="service-button"
                  onClick={() =>
                    openServicePopup(service)
                  }
                >

                  Explore Service

                  <ArrowRight size={18} />

                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          SERVICE POPUP
      ===================================================== */}

      {selectedService && (

        <div
          className="service-modal-overlay"
          onClick={closeServicePopup}
        >

          <div
            className="service-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              className="service-modal-close"
              onClick={closeServicePopup}
              aria-label="Close popup"
            >

              <X size={21} />

            </button>


            {/* =================================================
                HEADER
            ================================================= */}

            <div className="service-modal-header">

              <span>
                {selectedService.category}
              </span>

              <h2>

                Let's talk about

                <br />

                <strong>
                  {selectedService.title}
                </strong>

              </h2>

              <p>
                Tell us about your requirements and our team
                will get in touch with you.
              </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
              className="service-form"
              onSubmit={handleSubmit}
            >

              {/* =================================================
                  FULL NAME
              ================================================= */}

              <div className="form-group">

                <label htmlFor="service-name">
                  Full Name
                </label>

                <input
                  id="service-name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={60}
                  pattern="[A-Za-zÀ-ÿ\s'-]+"
                  onInput={handleNameInput}
                />

              </div>


              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="form-group">

                <label htmlFor="service-email">
                  Email Address
                </label>

                <input
                  id="service-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  maxLength={100}
                  onInput={handleEmailInput}
                />

              </div>


              {/* =================================================
                  PHONE NUMBER
              ================================================= */}

              <div className="form-group">

                <label htmlFor="service-phone">
                  Phone Number
                </label>


                <div className="phone-input-wrapper">

                  {/* COUNTRY CODE */}

                  <div className="country-code-wrapper">

                    <select
                      id="country-code"
                      name="countryCode"
                      value={countryCode}
                      onChange={(e) =>
                        setCountryCode(e.target.value)
                      }
                      aria-label="Country code"
                    >

                      <option value="+971">
                         UAE +971
                      </option>

                      <option value="+91">
                         India +91
                      </option>

                      <option value="+1">
                         USA +1
                      </option>

                    </select>

                    <ChevronDown
                      className="country-code-arrow"
                      size={16}
                    />

                  </div>


                  {/* PHONE NUMBER */}

                  <input
                    id="service-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="[0-9]{7,15}"
                    minLength={7}
                    maxLength={15}
                    required
                    onInput={handlePhoneInput}
                  />

                </div>

              </div>


              {/* =================================================
                  PROJECT
              ================================================= */}

              <div className="form-group">

                <label htmlFor="service-message">
                  Tell us about your project
                </label>

                <textarea
                  id="service-message"
                  name="message"
                  rows="3"
                  placeholder="Tell us what you need..."
                  maxLength={1000}
                  required
                />

              </div>


              {/* =================================================
                  SELECTED SERVICE
              ================================================= */}

              <div className="selected-service">

                <span>
                  Selected Service
                </span>

                <strong>
                  {selectedService.title}
                </strong>

              </div>


              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="service-submit-button"
              >

                <span>
                  Send Request
                </span>

                <ArrowRight size={18} />

              </button>

            </form>

          </div>

        </div>

      )}

    </>
  );
}

export default ServicesSection;