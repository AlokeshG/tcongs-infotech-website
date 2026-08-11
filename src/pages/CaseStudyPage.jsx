import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function CaseStudyPage() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>Project Not Found</h1>

        <Link to="/">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 8%",
        background: "#f5f4ef",
      }}
    >

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "40px",
          color: "#06252a",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        ← Back to Home
      </Link>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >

        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "45px" }}>

          <span
            style={{
              color: "#286ac5",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            {project.category}
          </span>

          <h1
            style={{
              fontSize: "48px",
              color: "#06252a",
              margin: "15px 0",
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              color: "#31565d",
              fontSize: "18px",
              lineHeight: "1.7",
              maxWidth: "750px",
            }}
          >
            {project.description}
          </p>

          <p
            style={{
              marginTop: "25px",
              color: "#666",
            }}
          >
            <strong>Project Date:</strong> {project.date}
          </p>

          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "14px 25px",
              borderRadius: "30px",
              background: "#06252a",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Visit Project →
          </a>

        </div>
      </div>
    </div>
  );
}

export default CaseStudyPage;