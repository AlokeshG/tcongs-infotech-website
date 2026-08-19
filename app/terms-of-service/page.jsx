import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Tcongs Infotech",
  description:
    "Terms of Service for using the Tcongs Infotech website.",
};

export default function TermsOfServicePage() {
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
          TERMS
        </span>


        <h1>
          Terms of Service
        </h1>


        <p className="legal-updated">
          Last updated: August 2026
        </p>


        <section>
          <h2>
            Acceptance of Terms
          </h2>

          <p>
            By accessing and using the Tcongs Infotech website, you agree
            to use the website responsibly and in accordance with these
            Terms of Service.
          </p>
        </section>


        <section>
          <h2>
            Use of the Website
          </h2>

          <p>
            You agree not to use this website for unlawful purposes or
            in a manner that could damage, disable, overburden, or impair
            the website or interfere with other users.
          </p>
        </section>


        <section>
          <h2>
            Website Information
          </h2>

          <p>
            Information presented on this website is provided for general
            informational purposes. Specific project requirements,
            deliverables, timelines, pricing, and commercial terms may be
            agreed separately between Tcongs Infotech and its clients.
          </p>
        </section>


        <section>
          <h2>
            Intellectual Property
          </h2>

          <p>
            Website content, branding, graphics, text, and other materials
            belonging to Tcongs Infotech may not be reproduced, copied,
            modified, or distributed without appropriate authorization.
          </p>
        </section>


        <section>
          <h2>
            Contact
          </h2>

          <p>
            For questions regarding these Terms of Service, please
            contact Tcongs Infotech.
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