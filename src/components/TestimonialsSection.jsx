import "./TestimonialsSection.css";
import godrejLogo from "../assets/godrej-logo.png";
import asianpaintsppglogo from "../assets/asian-paints-ppg-logo.png";
import generalmillsinc from "../assets/General Mills Inc..png";
import ainaboodahconstructiongroup from "../assets/Al Naboodah Construction Group.png";

const companies = [
  {
    name: "Godrej",
    industry: "Consumer Goods",
    description:
      "Custom software solution for streamlined operations and enhanced business efficiency.",
    color: "green",
    logo: godrejLogo,
  },
  {
    name: "Asian Paints PPG",
    industry: "Manufacturing",
    description:
      "Digital transformation and systems integration to improve process efficiency and productivity.",
    color: "purple",
    logo: asianpaintsppglogo,
  },
  {
    name: "General Mills Inc.",
    industry: "Food & Beverages",
    description:
      "Enterprise solution for supply chain management and data-driven business insights.",
    color: "red",
    logo: generalmillsinc,
  },
  {
    name: "Al Naboodah Construction Group",
    industry: "Construction",
    description:
      "Integrated construction management system for better collaboration and project delivery.",
    color: "blue",
    logo: ainaboodahconstructiongroup,
  },
];

function CompanyCard({ company }) {
  return (
    <div className={`company-card company-${company.color}`}>

      {/* COMPANY LOGO */}
      <div className="company-logo-wrapper">
        <img
          src={company.logo.src}
          alt={`${company.name} logo`}
          className="company-logo"
        />
      </div>

      {/* DIVIDER */}
      <div className="company-divider"></div>

      {/* COMPANY NAME */}
      <h3 className="company-name">
        {company.name}
      </h3>

      {/* INDUSTRY */}
      <div className="company-industry">
        <span className="industry-icon">💼</span>
        <span>{company.industry}</span>
      </div>

      {/* DESCRIPTION */}
      <p className="company-description">
        {company.description}
      </p>

    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section">

      <div className="companies-container">

        {/* HEADER */}
        <div className="companies-header">
          <div className="companies-heading">

            <span className="companies-eyebrow">
              OUR WORK
            </span>

            <h2>
              Trusted by Leading Businesses
            </h2>

            <p>
              Delivering impactful solutions for global brands across industries.
            </p>

          </div>
        </div>

        {/* COMPANY CARDS */}
        <div className="companies-grid">

          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              company={company}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;