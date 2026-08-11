import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-content">

        {/* COMPANY */}
        <div className="footer-column">
          <h4>COMPANY</h4>

          <a href="#">› Tcongs Infotech</a>
          <a href="#">› About</a>
          <a href="#">› Our Work</a>
          <a href="#">› Careers</a>
          <a href="#">› Services</a>
          <a href="#">› Blog</a>
        </div>


        {/* SOLUTIONS */}
        <div className="footer-column">
          <h4>SOLUTIONS</h4>

          <a href="#">› Web Development</a>
          <a href="#">› App Development</a>
          <a href="#">› UI/UX Design</a>
          <a href="#">› Software Development</a>
          <a href="#">› AI & Machine Learning</a>
          <a href="#">› Digital Solutions</a>
        </div>


        {/* CONTACT */}
        <div className="footer-column contact-column">
          <h4>CONTACT INFORMATION</h4>

          <a href="#">› Schedule a Consultation</a>

          <p>
            <strong>Tcongs Infotech</strong>
            <br />
            Software & Technology Solutions
            <br />
            India
          </p>

          <a href="tel:+919999999999">
            +91  98330 11764
          </a>

          <a href="mailto:info@tcongsinfotech.com">
            info@tcongsinfotech.com
          </a>

          {/* REVIEW */}
          <div className="footer-review">
            <span>REVIEWED BY OUR CLIENTS</span>

            <div className="review-row">
              <strong>Tcongs</strong>
              <span className="stars">★★★★★</span>
            </div>

            <small>CLIENT REVIEWS</small>
          </div>
        </div>

      </div>


      {/* LARGE LOGO */}
      <div className="footer-big-logo">
        Tcongs Infotech
      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="copyright">
          © 2026 Tcongs Infotech. Inc.
          <a href="#">Privacy Policy</a>
        </div>

        <div className="social-section">
          <strong>Socials</strong>

          <a href="#" aria-label="X">𝕏</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;