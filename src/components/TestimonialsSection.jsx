import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Eric Freeman",
    role: "President, Cultivate Leadership Institute",
    text: "I didn't have to be too verbose in painting pictures for them because they knew where I was going.",
    color: "red",
    image: "/images/testimonials/eric.jpg",
  },
  {
    name: "Henry Foah",
    role: "President, Falcon Railings",
    text: "The quality of work was great, and we were very happy with them all around.",
    color: "blue",
    image: "/images/testimonials/henry.jpg",
  },
  {
    name: "David Krueger",
    role: "CEO, FieldX VRT",
    text: "RoleModel Software helped us grow",
    color: "yellow",
    image: "/images/testimonials/david.jpg",
  },
  {
    name: "Rodney Pudney",
    role: "Drafting Team Leader, Kattsafe",
    text: "We have been able to reduce our quoting time from about 4hrs to approx 30mins. This has provided a ROI of approx 80%",
    color: "blue",
    image: "/images/testimonials/rodney.jpg",
  },
  {
    name: "Joshua Martin",
    role: "Founder, LandOne Materials Estimating",
    text: "They care about the project—not just building what's asked of them.",
    color: "green",
    image: "/images/testimonials/joshua.jpg",
  },
  {
    name: "Nathan",
    role: "Program Manager",
    text: "RoleModel Software has supported our team with thoughtful solutions and great communication.",
    color: "purple",
    image: "/images/testimonials/nathan.jpg",
  },
  {
    name: "Partner",
    role: "Scientific Research",
    text: "They were able to take a complex scientific process and learn very quickly how to enable it to develop a solution that not only met our requirements but exceeded them.",
    color: "red",
    image: "/images/testimonials/science.jpg",
  },
  {
    name: "Partner",
    role: "Business Operations",
    text: "They have great members that are truly a joy to work with; they're high-quality people.",
    color: "teal",
    image: "/images/testimonials/office.jpg",
  },
  {
    name: "Partner",
    role: "Development Team",
    text: "They continue to be one of our most valued development partners.",
    color: "blue",
    image: "/images/testimonials/development.jpg",
  },
  {
    name: "Rodney Pudney",
    role: "Drafting Team Leader, Kattsafe",
    text: "We have been able to reduce our quoting time from about 4hrs to approx 30mins. This has provided a ROI of approx 80%",
    color: "blue",
    image: "/images/testimonials/rodney.jpg",
  },
];

function TestimonialCard({ item }) {
  return (
    <div
      className={`testimonial-card testimonial-${item.color}`}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <div className="testimonial-overlay"></div>

      <div className="testimonial-content">
        <div className="testimonial-quote">
          {item.text}
        </div>

        <div className="testimonial-person">
          <h3>{item.name}</h3>
          <p>{item.role}</p>
        </div>

        <button className="case-study-btn">
          Read Case Study
        </button>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  // Duplicate cards to create a seamless infinite loop
  const rowOne = [...testimonials, ...testimonials];
  const rowTwo = [
    ...testimonials.slice(5),
    ...testimonials.slice(0, 5),
    ...testimonials.slice(5),
    ...testimonials.slice(0, 5),
  ];

  return (
    <section className="testimonials-section">

      {/* HEADER */}
      <div className="testimonials-header">
        <h2>What our partners have to say</h2>

        <button className="our-work-btn">
          Our Work
          <span>→</span>
        </button>
      </div>

      {/* FIRST RUNNING ROW */}
      <div className="testimonial-marquee">
        <div className="testimonial-track track-left">
          {rowOne.map((item, index) => (
            <TestimonialCard
              key={`row1-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>

      {/* SECOND RUNNING ROW */}
      <div className="testimonial-marquee second-marquee">
        <div className="testimonial-track track-right">
          {rowTwo.map((item, index) => (
            <TestimonialCard
              key={`row2-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

export default TestimonialsSection;