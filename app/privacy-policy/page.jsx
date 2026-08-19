import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Tcongs Infotech",
  description:
    "Privacy Policy for Tcongs Infotech and its website visitors.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">

      <div className="legal-container">

        <Link
          href="/"
          className="legal-back"
        >
          ← Back to Home
        </Link>


        <span className="legal-label">
          PRIVACY
        </span>


        <h1>
          Privacy Policy
        </h1>


        <p className="legal-updated">
          Last updated: August 2026
        </p>


        <section>
          <h2>
            Introduction
          </h2>

          <p>
            Tcongs Infotech respects your privacy and is committed to
            protecting the personal information you provide when using
            our website, contacting our team, or requesting our services.
          </p>
        </section>


        <section>
          <h2>
            Information We Collect
          </h2>

          <p>
            We may collect information that you voluntarily provide to us,
            including your name, email address, phone number, company
            information, and project or enquiry details when you contact
            Tcongs Infotech.
          </p>
        </section>


        <section>
          <h2>
            How We Use Your Information
          </h2>

          <p>
            We may use the information you provide to respond to enquiries,
            communicate with you, understand your requirements, provide
            requested services, and improve our website and services.
          </p>
        </section>


        <section>
          <h2>
            Cookies and Privacy
          </h2>

          <p>
            Our website may use technologies such as cookies or similar
            technologies where required to provide functionality, improve
            website performance, or understand website usage.
          </p>
        </section>


        <section>
          <h2>
            Data Protection
          </h2>

          <p>
            Tcongs Infotech takes reasonable steps to protect information
            submitted through the website from unauthorized access,
            alteration, disclosure, or misuse.
          </p>
        </section>


        <section>
          <h2>
            Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, please contact Tcongs Infotech.
          </p>

          <a
            href="mailto:info@tcongsinfotech.com"
            className="legal-email"
          >
            info@tcongsinfotech.com
          </a>

        </section>

      </div>

    </main>
  );
}