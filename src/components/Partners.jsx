function Partners() {
  const partners = [
    "TECHFLOW",
    "NEXORA",
    "CLOUDSYNC",
    "DIGITALX",
    "SOFTCORE",
    "INNOVATE",
    "WEBCRAFT",
    "DATAWISE",
  ];

  return (
    <section className="partners-section">

      {/* Fixed title */}
      <div className="partners-title">
        OUR PARTNERS
      </div>

      {/* Moving area */}
      <div className="partners-marquee">
        <div className="partners-track">

          {/* First set */}
          {partners.map((partner, index) => (
            <div className="partner-item" key={`first-${index}`}>
              {partner}
            </div>
          ))}

          {/* Duplicate set for seamless movement */}
          {partners.map((partner, index) => (
            <div className="partner-item" key={`second-${index}`}>
              {partner}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Partners;