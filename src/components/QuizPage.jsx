import React, { useEffect, useState } from "react";
import { getRoles, getQuestionsByRole } from "../api/api";
import QuizPage from "./QuizPage";

export default function CustomerPage() {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [questions, setQuestions] = useState([]);

  // Fetch all roles
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await getRoles();
        setRoles(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRoles();
  }, []);

  // Fetch questions when a role is selected
  const handleRoleSelect = async (roleId) => {
    setSelectedRole(roleId);
    try {
      const res = await getQuestionsByRole(roleId);
      setQuestions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (selectedRole) {
    return <QuizPage questions={questions} />;
  }

  // Inline styles inspired by your CSS theme
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "50px 20px",
      minHeight: "80vh",
      textAlign: "center",
      background: "linear-gradient(135deg, #E6F4EA 0%, #d4f1e3 100%)",
      borderRadius: "16px",
    },
    header: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#0B3D2E",
      marginBottom: "25px",
    },
    card: {
      background: "#ffffff",
      padding: "30px",
      borderRadius: "16px",
      width: "90%",
      maxWidth: "700px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      position: "relative",
      overflow: "hidden",
      animation: "fadeIn 0.5s ease-out",
    },
    cardTopBar: {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "5px",
      background: "linear-gradient(90deg, #2E8B57, #0B3D2E)",
    },
    select: {
      padding: "12px 16px",
      borderRadius: "10px",
      border: "2px solid #e0e0e0",
      width: "100%",
      maxWidth: "400px",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "20px",
    },
    infoText: {
      color: "#1a7f5c",
      fontSize: "1.1rem",
      marginBottom: "20px",
      fontWeight: "500",
      lineHeight: "1.6",
    },
    btn: {
      marginTop: "30px",
      padding: "12px 30px",
      background:
        "linear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "1rem",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardTopBar}></div>
        <h2 style={styles.header}>Select Your Role</h2>
        <p style={styles.infoText}>
          Welcome to the <strong>Reva AI Skill Assessment</strong> platform.<br />
          Choose your desired role to begin the quiz and test your skills in real-world scenarios.
        </p>

        <select
          onChange={(e) => handleRoleSelect(e.target.value)}
          defaultValue=""
          style={styles.select}
        >
          <option value="" disabled>
            Select Role
          </option>
          {roles.map((r) => (
            <option key={r._id} value={r._id}>
              {r.name}
            </option>
          ))}
        </select>

        <button
          style={styles.btn}
          onClick={() => window.location.href = "https://reva-ai-skill-assessment.onrender.com"}
          onMouseOver={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #1C5D3D 0%, #0B3D2E 100%)";
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseOut={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #2E8B57 0%, #1a7f5c 100%)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          🔄 Back to Home
        </button>
      </div>
    </div>
  );
}
