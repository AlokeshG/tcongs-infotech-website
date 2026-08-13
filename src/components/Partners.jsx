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
    <section
      style={{
        width: "100%",
        height: "115px",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        background: "#062126",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* LEFT TITLE */}
      <div
        style={{
          width: "230px",
          minWidth: "230px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: "700",
          letterSpacing: "0.5px",
          flexShrink: 0,
          borderRight: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        OUR PARTNERS
      </div>

      {/* MOVING AREA */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          height: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="partners-moving-track"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "max-content",
            height: "100%",
          }}
        >
          {/* FIRST SET */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              style={{
                width: "190px",
                minWidth: "190px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.58)",
                fontSize: "23px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              {partner}
            </div>
          ))}

          {/* SECOND SET */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              style={{
                width: "190px",
                minWidth: "190px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.58)",
                fontSize: "23px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          .partners-moving-track {
            animation: partnersMove 25s linear infinite;
          }

          .partners-moving-track:hover {
            animation-play-state: paused;
          }

          @keyframes partnersMove {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .partners-moving-track > div {
              width: 145px !important;
              min-width: 145px !important;
              font-size: 17px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Partners;