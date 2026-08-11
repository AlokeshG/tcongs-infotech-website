import React from "react";
import { ArrowRight } from "lucide-react";
import "./ServicesSection.css";
import services from "../data/services";

function ServicesSection() {
  return (
    <section className="services-section" id="services">

      {/* Heading */}
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

      {/* Dynamic Services */}
      <div className="services-container">

        {services.map((service) => (

          <article
            className="service-card"
            key={service.id}
          >

            {/* Number */}
            <span className="service-number">
              {service.number}
            </span>

            {/* Card Content */}
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

              <button className="service-button">
                Explore Service
                <ArrowRight size={18} />
              </button>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default ServicesSection;