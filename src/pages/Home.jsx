import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleGoToMainSite = () => {
    window.location.href = "https://reva-ai-k7nm.onrender.com";
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        minHeight: "80vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          background: "linear-gradient(135deg, #0B3D2E 0%, #2E8B57 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px",
        }}
      >
        MCQ Assessment Platform
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#1a7f5c",
          maxWidth: "700px",
          marginBottom: "40px",
          lineHeight: "1.6",
        }}
      >
        Choose your role below.{" "}
        <strong>Admins</strong> can add roles and questions, while{" "}
        <strong>Customers</strong> can take assessments to test their skills.
      </p>

      <div
        className="home-buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <button
          onClick={() => navigate("/admin")}
          style={{
            minWidth: "180px",
            padding: "15px 30px",
            fontSize: "1.1rem",
            background:
              "linear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(135deg, #1C5D3D 0%, #0B3D2E 100%)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)")
          }
        >
          Admin
        </button>

        <button
          onClick={() => navigate("/customer")}
          style={{
            minWidth: "180px",
            padding: "15px 30px",
            fontSize: "1.1rem",
            background:
              "linear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(135deg, #1C5D3D 0%, #0B3D2E 100%)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)")
          }
        >
          Customer
        </button>
      </div>

      {/* Back to main website */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p
          style={{
            color: "#0B3D2E",
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          Want to go back to the main website?
        </p>
        <button
          onClick={handleGoToMainSite}
          style={{
            padding: "10px 25px",
            background:
              "inear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "0.95rem",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(135deg, #1C5D3D 0%, #0B3D2E 100%)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "inear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)")
          }
        >
          🔗 Back to Main Website
        </button>
      </div>
    </div>
  );
}
