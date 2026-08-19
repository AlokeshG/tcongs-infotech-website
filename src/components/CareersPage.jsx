"use client";

import { useEffect, useState } from "react";

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
    TrendingUp,
    Heart,
    Phone,
    ChevronRight,
    ArrowUp,
} from "lucide-react";

import "./CareersPage.css";


function CareersPage() {

    const [showTop, setShowTop] = useState(false);


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    useEffect(() => {

        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };


    /* =====================================================
       BENEFITS
    ===================================================== */

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


    /* =====================================================
       JOBS
    ===================================================== */

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


                    <div className="careers-hero-features">

                        <div className="careers-hero-feature">

                            <div className="careers-feature-icon">
                                <Users
                                    size={18}
                                    strokeWidth={1.6}
                                />
                            </div>

                            <div className="careers-feature-text">

                                <strong>
                                    Great People
                                </strong>

                                <span>
                                    Collaborate with talented minds
                                </span>

                            </div>

                        </div>


                        <div className="careers-hero-feature">

                            <div className="careers-feature-icon">
                                <TrendingUp
                                    size={18}
                                    strokeWidth={1.6}
                                />
                            </div>

                            <div className="careers-feature-text">

                                <strong>
                                    Growth & Learning
                                </strong>

                                <span>
                                    Continuous learning and development
                                </span>

                            </div>

                        </div>


                        <div className="careers-hero-feature">

                            <div className="careers-feature-icon">
                                <Heart
                                    size={18}
                                    strokeWidth={1.6}
                                />
                            </div>

                            <div className="careers-feature-text">

                                <strong>
                                    Work-Life Balance
                                </strong>

                                <span>
                                    Flexible work and healthy balance
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className="careers-hero-actions">

                        <a
                            href="#open-positions"
                            className="careers-primary-button"
                        >
                            View Open Positions

                            <ArrowRight size={17} />

                        </a>

                    </div>

                </div>


                <div className="careers-hero-image">

                    <img
                        src="/careers-team.jpg"
                        alt="Tcongs Infotech team working together"
                        className="careers-team-image"
                    />

                </div>

            </section>



            {/* =====================================================
                WHY JOIN US
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
                                        size={22}
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
                                        size={22}
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

                                            <MapPin size={13} />

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
                                        href={`mailto:careers@tcongs.com?subject=Application for ${encodeURIComponent(
                                            job.title
                                        )}`}
                                        className="apply-button"
                                    >
                                        Apply Now

                                        <ArrowRight size={15} />

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

                    <ArrowRight size={16} />

                </a>

            </section>



            {/* =====================================================
                CONTACT CTA
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

                        <ArrowRight size={17} />

                    </a>

                </div>


                <div className="careers-contact-graphic">

                    <div className="contact-envelope">
                        <Mail size={46} />
                    </div>

                    <div className="contact-dot dot-one"></div>
                    <div className="contact-dot dot-two"></div>
                    <div className="contact-dot dot-three"></div>

                </div>

            </section>



            {/* =====================================================
                FOOTER
                SAME STRUCTURE AS MAIN WEBSITE FOOTER
            ===================================================== */}

            <footer className="careers-footer">

                {/* =================================================
                    FOOTER CONTENT
                ================================================= */}

                <div className="careers-footer-content">


                    {/* =================================================
                        COMPANY
                    ================================================= */}

                    <div className="careers-footer-column">

                        <h4>
                            COMPANY
                        </h4>

                        <div className="careers-footer-line"></div>


                        {/* MAIN WEBSITE */}


                        {/* ABOUT */}

                        <a href="/#about">
                            <ChevronRight size={11} />
                            <span>
                                About
                            </span>
                        </a>


                        {/* OUR WORK */}

                        <a href="/#work">
                            <ChevronRight size={11} />
                            <span>
                                Our Work
                            </span>
                        </a>


                        {/* SERVICES */}

                        <a href="/#services">
                            <ChevronRight size={11} />
                            <span>
                                Services
                            </span>
                        </a>

                    </div>



                    {/* =================================================
                        SOLUTIONS
                    ================================================= */}

                    <div className="careers-footer-column">

                        <h4>
                            SOLUTIONS
                        </h4>

                        <div className="careers-footer-line"></div>


                        <a href="/tcongs/services/web-development/">
                            <ChevronRight size={11} />
                            <span>
                                Web Development
                            </span>
                        </a>


                        <a href="/tcongs/services/app-development/">
                            <ChevronRight size={11} />
                            <span>
                                App Development
                            </span>
                        </a>


                        <a href="/tcongs/services/ui-ux-design/">
                            <ChevronRight size={11} />
                            <span>
                                UI/UX Design
                            </span>
                        </a>


                        <a href="/tcongs/services/custom-software/">
                            <ChevronRight size={11} />
                            <span>
                                Software Development
                            </span>
                        </a>


                        <a href="/tcongs/services/ai-and-machine-learning/">
                            <ChevronRight size={11} />
                            <span>
                                AI & Machine Learning
                            </span>
                        </a>


                        <a href="/tcongs/services/digital-solutions/">
                            <ChevronRight size={11} />
                            <span>
                                Digital Solutions
                            </span>
                        </a>

                    </div>



                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}

                    <div className="careers-footer-column careers-contact-column">

                        <h4>
                            CONTACT INFORMATION
                        </h4>

                        <div className="careers-footer-line"></div>


                        {/* SCHEDULE CONSULTATION */}

                        <a
                            href="/tcongs/#company-section"
                            className="careers-simple-footer-link"
                        >

                            <ChevronRight size={11} />

                            <span>
                                Schedule a Consultation
                            </span>

                        </a>


                        {/* ADDRESS */}

                        <div className="careers-contact-item">

                            <MapPin
                                className="careers-contact-icon"
                                size={14}
                            />

                            <div className="careers-contact-text">

                                <strong>
                                    Tcongs Infotech
                                </strong>

                                <span>
                                    Software & Technology Solutions
                                </span>

                                <span>
                                    India
                                </span>

                            </div>

                        </div>


                        {/* PHONE */}

                        <a
                            href="tel:+919833011764"
                            className="careers-contact-item careers-contact-link"
                        >

                            <Phone
                                className="careers-contact-icon"
                                size={14}
                            />

                            <span>
                                +91 98330 11764
                            </span>

                        </a>


                        {/* EMAIL */}

                        <a
                            href="mailto:info@tcongsinfotech.com"
                            className="careers-contact-item careers-contact-link"
                        >

                            <Mail
                                className="careers-contact-icon"
                                size={14}
                            />

                            <span>
                                info@tcongsinfotech.com
                            </span>

                        </a>


                        {/* CLIENT REVIEW */}

                        <div className="careers-footer-review careers-review-desktop">

                            <div className="careers-review-divider"></div>

                            <span className="careers-review-title">
                                REVIEWED BY OUR CLIENTS
                            </span>

                            <div className="careers-review-row">

                                <strong>
                                    Tcongs
                                </strong>

                                <span className="careers-stars">
                                    ★★★★★
                                </span>

                            </div>

                            <small>
                                CLIENT REVIEWS
                            </small>

                        </div>

                    </div>



                    {/* =================================================
                        FOLLOW US
                    ================================================= */}

                    <div className="careers-footer-column careers-follow-column">

                        <h4>
                            FOLLOW US
                        </h4>

                        <div className="careers-footer-line"></div>


                        <div className="careers-social-icons">

                            <a
                                href="https://www.linkedin.com/company/tcongs-infotech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="careers-social-icon"
                                aria-label="LinkedIn"
                            >
                                in
                            </a>

                        </div>


                        {/* MOBILE REVIEW */}

                        <div className="careers-footer-review careers-review-mobile">

                            <div className="careers-review-divider"></div>

                            <span className="careers-review-title">
                                REVIEWED BY OUR CLIENTS
                            </span>

                            <div className="careers-review-row">

                                <strong>
                                    Tcongs
                                </strong>

                                <span className="careers-stars">
                                    ★★★★★
                                </span>

                            </div>

                            <small>
                                CLIENT REVIEWS
                            </small>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    LARGE BACKGROUND LOGO

                    IMPORTANT:
                    This is OUTSIDE footer-content.
                ===================================================== */}

                <div className="careers-footer-big-logo">
                    Tcongs Infotech
                </div>



                {/* =====================================================
                    BOTTOM BAR
                ===================================================== */}

                <div className="careers-footer-bottom">

                    <div className="careers-copyright">

                        <span>
                            © 2026 Tcongs Infotech. All Rights Reserved.
                        </span>

                        <span className="careers-separator">
                            |
                        </span>

                        <a href="/privacy-policy/">
                            Privacy Policy
                        </a>

                        <span className="careers-separator">
                            |
                        </span>

                        <a href="/terms-of-service/">
                            Terms of Service
                        </a>

                        <span className="careers-separator">
                            |
                        </span>

                        <a href="/sitemap/">
                            Sitemap
                        </a>

                    </div>


                    {/* BACK TO TOP */}

                    <button
                        type="button"
                        className={`careers-back-to-top ${
                            showTop ? "show" : ""
                        }`}
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >

                        <ArrowUp size={15} />

                    </button>

                </div>

            </footer>

        </main>
    );
}


export default CareersPage;