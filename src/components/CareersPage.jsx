import {
    ArrowRight,
    Rocket,
    BookOpen,
    Users,
    Clock3,
    Star,
    Gift,
    Code2,
    Laptop,
    Megaphone,
    PenTool,
    Mail,
    MapPin,
    BriefcaseBusiness,
    CheckCircle2,
    TrendingUp,
    Heart,
    ShieldCheck,
} from "lucide-react";

import "./CareersPage.css";

function CareersPage() {

    const benefits = [
        {
            icon: Rocket,
            title: "Innovative Projects",
            text: "Work on cutting-edge technology projects that make a meaningful difference.",
        },
        {
            icon: BookOpen,
            title: "Learning Culture",
            text: "We invest in your growth with training and new opportunities.",
        },
        {
            icon: Users,
            title: "Collaborative Team",
            text: "Be part of a supportive team that values ideas and collaboration.",
        },
        {
            icon: Clock3,
            title: "Flexible Work",
            text: "Enjoy flexible hours and remote work opportunities.",
        },
        {
            icon: Star,
            title: "Career Growth",
            text: "Clear career paths and opportunities to grow with the company.",
        },
        {
            icon: Gift,
            title: "Perks & Benefits",
            text: "Competitive salary, bonuses, and great employee benefits.",
        },
    ];

    const jobs = [
        {
            icon: Code2,
            title: "Full Stack Developer",
            experience: "Experience: 2–5 years",
            location: "Remote / Hybrid",
            description:
                "Build scalable web applications using modern technologies and solve real business problems.",
            tag: "Full Time",
        },
        {
            icon: PenTool,
            title: "UI/UX Designer",
            experience: "Experience: 1–3 years",
            location: "Remote / Hybrid",
            description:
                "Design beautiful, user-friendly interfaces and create engaging user experiences.",
            tag: "Full Time",
        },
        {
            icon: Laptop,
            title: "Mobile App Developer",
            experience: "Experience: 2–4 years",
            location: "Remote / Hybrid",
            description:
                "Build high-performance mobile applications for Android and iOS platforms.",
            tag: "Full Time",
        },
        {
            icon: Megaphone,
            title: "Digital Marketing Executive",
            experience: "Experience: 1–3 years",
            location: "Remote / Hybrid",
            description:
                "Plan and execute digital marketing campaigns that generate leads and increase brand reach.",
            tag: "Full Time",
        },
    ];

    return (
        <main className="careers-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="careers-hero">

                {/* LEFT */}
                <div className="careers-hero-content">

                    <span className="careers-label">
                        CAREERS
                    </span>

                    <h1>
                        Build the future
                        <br />
                        with <span>Tcongs Infotech</span>
                    </h1>

                    <p className="careers-hero-description">
                        We're a team of problem solvers, innovators, and
                        creators. Join us and work on meaningful projects
                        that make a real impact.
                    </p>


                    {/* ===============================================
              THREE FEATURE CARDS
          =============================================== */}

                    <div className="careers-hero-features">

                        {/* CARD 1 */}
                        <div className="careers-hero-feature">

                            <div className="careers-feature-icon">
                                <Users
                                    size={15}
                                    strokeWidth={1.6}
                                />
                            </div>

                            <div className="careers-feature-text">

                                <strong>
                                    Great People
                                </strong>

                                <span>
                                    Collaborate with
                                    <br />
                                    talented minds
                                </span>

                            </div>

                        </div>


                        {/* CARD 2 */}
                        <div className="careers-hero-feature">

                            <div className="careers-feature-icon">
                                <TrendingUp
                                    size={15}
                                    strokeWidth={1.6}
                                />
                            </div>

                            <div className="careers-feature-text">

                                <strong>
                                    Growth & Learning
                                </strong>

                                <span>
                                    Continuous learning
                                    <br />
                                    and development
                                </span>

                            </div>

                        </div>


                        {/* CARD 3 */}
                        <div className="careers-hero-feature">

                            <div className="careers-feature-icon">
                                <Heart
                                    size={15}
                                    strokeWidth={1.6}
                                />
                            </div>

                            <div className="careers-feature-text">

                                <strong>
                                    Work-Life Balance
                                </strong>

                                <span>
                                    Flexible work and
                                    <br />
                                    healthy balance
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* BUTTON */}

                    <div className="careers-hero-actions">

                        <a
                            href="#open-positions"
                            className="careers-primary-button"
                        >

                            <span>
                                View Open Positions
                            </span>

                            <ArrowRight
                                size={15}
                                strokeWidth={1.8}
                            />

                        </a>

                    </div>

                </div>


                {/* RIGHT IMAGE */}

                <div className="careers-hero-image">

                    <img
                        src="/tcongs/careers-team.jpg"
                        alt="Tcongs Infotech team working together"
                    />

                </div>

            </section>


            {/* =====================================================
          WHY WORK WITH US
      ===================================================== */}

            <section
                className="careers-benefits"
                id="why-us"
            >

                <div className="careers-section-heading">

                    <span>
                        WHY JOIN US?
                    </span>

                    <h2>
                        Why work with us?
                    </h2>

                    <p>
                        We believe great technology starts with great people.
                        Build your career in an environment where your ideas matter.
                    </p>

                </div>


                <div className="benefits-grid">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;

                        return (
                            <article
                                className="benefit-card"
                                key={index}
                            >
                                <div className="benefit-icon">
                                    <Icon
                                        size={19}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3>
                                    {benefit.title}
                                </h3>

                                <p>
                                    {benefit.text}
                                </p>
                            </article>
                        );
                    })}
                </div>

            </section>


            {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

            <section
                className="careers-jobs"
                id="open-positions"
            >

                <div className="careers-section-heading">

                    <span>
                        CAREER OPPORTUNITIES
                    </span>

                    <h2>
                        Open Positions
                    </h2>

                    <p>
                        Explore exciting career opportunities and join our
                        growing team.
                    </p>

                </div>


                <div className="jobs-list">

                    {jobs.map((job, index) => {

                        const Icon = job.icon;

                        return (
                            <article
                                className="job-card"
                                key={index}
                            >

                                <div className="job-icon">
                                    <Icon
                                        size={20}
                                        strokeWidth={1.5}
                                    />
                                </div>


                                <div className="job-info">

                                    <h3>
                                        {job.title}
                                    </h3>

                                    <div className="job-meta">

                                        <span>
                                            {job.experience}
                                        </span>

                                        <span>

                                            <MapPin
                                                size={12}
                                            />

                                            {job.location}

                                        </span>

                                    </div>

                                </div>


                                <p className="job-description">
                                    {job.description}
                                </p>


                                <div className="job-right">

                                    <span className="job-type">
                                        {job.tag}
                                    </span>

                                    <a
                                        href={`mailto:careers@tcongs.com?subject=Application for ${job.title}`}
                                        className="apply-button"
                                    >

                                        Apply Now

                                        <ArrowRight
                                            size={14}
                                        />

                                    </a>

                                </div>

                            </article>
                        );

                    })}

                </div>


                <a
                    href="mailto:careers@tcongs.com"
                    className="view-all-jobs"
                >

                    View All Openings

                    <ArrowRight
                        size={15}
                    />

                </a>

            </section>


            {/* =====================================================
          CONTACT
      ===================================================== */}

            <section className="careers-contact">

                <div className="careers-contact-content">

                    <span>
                        JOIN OUR TEAM
                    </span>

                    <h2>
                        Don't see the right role?
                    </h2>

                    <p>
                        We're always looking for passionate people.
                        Send us your resume and tell us how you can contribute
                        to our team.
                    </p>

                    <a
                        href="mailto:careers@tcongs.com"
                        className="careers-contact-button"
                    >

                        Send Your Resume

                        <ArrowRight
                            size={16}
                        />

                    </a>

                </div>


                <div className="careers-contact-graphic">

                    <div className="contact-envelope">

                        <Mail
                            size={46}
                        />

                    </div>

                    <div className="contact-dot dot-one"></div>
                    <div className="contact-dot dot-two"></div>
                    <div className="contact-dot dot-three"></div>

                </div>

            </section>


            {/* =====================================================
          FOOTER
      ===================================================== */}

            <footer className="careers-footer">

                <div className="careers-footer-brand">

                    <img
                        src="/tcongs/tcongs-logo.png"
                        alt="Tcongs Infotech"
                    />

                    <p>
                        We build technology solutions that help businesses
                        grow, automate and succeed.
                    </p>

                </div>


                <div className="careers-footer-column">

                    <h4>
                        COMPANY
                    </h4>

                    <a href="/#about">
                        About Us
                    </a>

                    <a href="/#services">
                        Services
                    </a>

                    <a href="/#work">
                        Our Work
                    </a>

                    <a href="/tcongs/careers/">
                        Careers
                    </a>

                </div>


                <div className="careers-footer-column">

                    <h4>
                        SOLUTIONS
                    </h4>

                    <a href="/#services">
                        Web Development
                    </a>

                    <a href="/#services">
                        AI & Machine Learning
                    </a>

                    <a href="/#services">
                        UI/UX Design
                    </a>

                    <a href="/#services">
                        Software Development
                    </a>

                </div>


                <div className="careers-footer-column">

                    <h4>
                        CONTACT US
                    </h4>

                    <a href="mailto:careers@tcongs.com">

                        <Mail size={12} />

                        careers@tcongsinfotech.com

                    </a>

                    <a href="#">

                        <Clock3 size={12} />

                        Mon–Fri, 9AM–6PM

                    </a>

                </div>


                <div className="careers-footer-column">

                    <h4>
                        FOLLOW US
                    </h4>

                    <div className="careers-socials">

                        <a
                            href="https://www.linkedin.com/company/tcongs-infotech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon linkedin"
                            aria-label="LinkedIn"
                        >
                            in
                        </a>

                    </div>

                </div>

            </footer>


            {/* FOOTER BOTTOM */}

            <div className="careers-footer-bottom">

                <span>
                    © 2026 Tcongs Infotech. All rights reserved.
                </span>

                <div>

                    <a href="#">
                        Privacy Policy
                    </a>

                    <a href="#">
                        Terms & Conditions
                    </a>

                </div>

            </div>

        </main>
    );
}

export default CareersPage;