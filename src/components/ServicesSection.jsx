"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import "./ServicesSection.css";
import services from "../data/services";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const openServicePopup = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeServicePopup = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thank you! Your request for ${selectedService?.title} has been submitted.`
    );

    closeServicePopup();
  };

  return (
    <>
      {/* =========================================
          SERVICES SECTION
      ========================================== */}

      <section className="services-section" id="services">

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

              {/* NUMBER */}
              <span className="service-number">
                {service.number}
              </span>


              {/* CARD CONTENT */}
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


                {/* EXPLORE BUTTON */}
                <button
                  type="button"
                  className="service-button"
                  onClick={() => openServicePopup(service)}
                >
                  Explore Service

                  <ArrowRight size={18} />
                </button>

                <a
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/\s+/g, "-")}`}
                  className="service-page-link"
                >
                  View Service
                  <ArrowRight size={18} />
                </a>
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================
          SERVICE POPUP
      ========================================== */}

      {selectedService && (

        <div
          className="service-modal-overlay"
          onClick={closeServicePopup}
        >

          <div
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="service-modal-close"
              onClick={closeServicePopup}
              aria-label="Close popup"
            >
              <X size={22} />
            </button>


            {/* POPUP HEADER */}
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
                Tell us about your requirements and our team will
                get in touch with you.
              </p>

            </div>


            {/* FORM */}
            <form
              className="service-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div className="form-group">

                <label htmlFor="service-name">
                  Full Name
                </label>

                <input
                  id="service-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>


              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="service-email">
                  Email Address
                </label>

                <input
                  id="service-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>


              {/* PHONE */}
              <div className="form-group">

                <label htmlFor="service-phone">
                  Phone Number
                </label>

                <input
                  id="service-phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />

              </div>


              {/* MESSAGE */}
              <div className="form-group">

                <label htmlFor="service-message">
                  Tell us about your project
                </label>

                <textarea
                  id="service-message"
                  rows="4"
                  placeholder="Tell us what you need..."
                  required
                ></textarea>

              </div>


              {/* SELECTED SERVICE */}
              <div className="selected-service">

                <span>
                  Selected Service
                </span>

                <strong>
                  {selectedService.title}
                </strong>

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="service-submit-button"
              >
                Send Request

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