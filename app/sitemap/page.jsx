import Link from "next/link";

export const metadata = {
  title: "Sitemap | Tcongs Infotech",
  description:
    "Sitemap of the Tcongs Infotech website.",
};

export default function SitemapPage() {
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
          SITEMAP
        </span>


        <h1>
          Sitemap
        </h1>


        <p className="legal-updated">
          Explore the main sections and services of Tcongs Infotech.
        </p>


        {/* =====================================
            MAIN WEBSITE
        ====================================== */}

        <section>

          <h2>
            Main Website
          </h2>

          <div className="sitemap-links">

            <Link href="/">
              Home
            </Link>

            <Link href="/#about">
              About
            </Link>

            <Link href="/#work">
              Our Work
            </Link>

            <Link href="/#services">
              Services
            </Link>

            <Link href="/careers/">
              Careers
            </Link>

          </div>

        </section>


        {/* =====================================
            SERVICES
        ====================================== */}

        <section>

          <h2>
            Services
          </h2>

          <div className="sitemap-links">

            <Link href="/services/web-development/">
              Web Development
            </Link>

            <Link href="/services/app-development/">
              App Development
            </Link>

            <Link href="/services/ui-ux-design/">
              UI/UX Design
            </Link>

            <Link href="/services/custom-software/">
              Software Development
            </Link>

            <Link href="/services/ai-and-machine-learning/">
              AI & Machine Learning
            </Link>

            <Link href="/services/digital-solutions/">
              Digital Solutions
            </Link>

          </div>

        </section>


        {/* =====================================
            LEGAL
        ====================================== */}

        <section>

          <h2>
            Legal
          </h2>

          <div className="sitemap-links">

            <Link href="/privacy-policy/">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service/">
              Terms of Service
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}