function Partners() {
  const partners = [
    "MGT Networks",
    "VAT BOX Tax Agency",
    "Kreston GTA",
    "Cosmic Nutracos",
  ];

  return (
    <section
      className="partners-section"
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

      {/* =========================================
          OUR PARTNERS
      ========================================= */}

      <div
        className="partners-title"
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
          boxSizing: "border-box",
        }}
      >
        OUR PARTNERS
      </div>


      {/* =========================================
          MOVING PARTNERS AREA
      ========================================= */}

      <div
        className="partners-moving-area"
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
              className="partner-item"
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
              className="partner-item"
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


      {/* =========================================
          ANIMATION + RESPONSIVE
      ========================================= */}

      <style>
        {`

          /* ========================================
             DESKTOP
          ======================================== */

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


          /* ========================================
             TABLET
          ======================================== */

          @media (max-width: 900px) {

            .partners-title {
              width: 30% !important;
              min-width: 30% !important;
              font-size: 13px !important;
            }

            .partner-item {
              width: 190px !important;
              min-width: 190px !important;
              font-size: 16px !important;
            }

          }


          /* ========================================
             MOBILE
          ======================================== */

          @media (max-width: 600px) {

            .partners-section {
              height: 90px !important;
            }

            /*
              LEFT SIDE = 50%
            */

            .partners-title {
              width: 50% !important;
              min-width: 50% !important;

              font-size: 13px !important;
              letter-spacing: 0.3px !important;

              padding: 0 8px !important;
            }

            /*
              RIGHT SIDE = 50%
            */

            .partners-moving-area {
              width: 50% !important;
              min-width: 50% !important;
              flex: 0 0 50% !important;
            }

            .partner-item {
              width: 165px !important;
              min-width: 165px !important;

              font-size: 14px !important;

              padding: 0 10px !important;
            }

          }


          /* ========================================
             SMALL MOBILE
          ======================================== */

          @media (max-width: 400px) {

            .partners-section {
              height: 85px !important;
            }

            .partners-title {
              width: 50% !important;
              min-width: 50% !important;

              font-size: 12px !important;
            }

            .partner-item {
              width: 150px !important;
              min-width: 150px !important;

              font-size: 13px !important;
            }

          }

        `}
      </style>

    </section>
  );
}

export default Partners;