function Partners() {
  const partners = [
    "MGT Networks",
    "VAT BOX Tax Agency",
    "Kreston GTA",
    "Cosmic Nutracos",
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
                width: "230px",
                minWidth: "230px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 15px",
                boxSizing: "border-box",
                color: "rgba(255,255,255,0.65)",
                fontSize: "18px",
                fontWeight: "700",
                textAlign: "center",
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
                width: "230px",
                minWidth: "230px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 15px",
                boxSizing: "border-box",
                color: "rgba(255,255,255,0.65)",
                fontSize: "18px",
                fontWeight: "700",
                textAlign: "center",
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
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Partners;