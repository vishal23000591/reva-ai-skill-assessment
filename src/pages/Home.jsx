import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>MCQ Assessment Platform</h1>
      <p className="intro">
        Choose your role below. Admins can add roles and questions, while Customers can take assessments.
      </p>
      <div className="home-buttons">
        <button onClick={() => navigate("/admin")}>Admin</button>
        <button onClick={() => navigate("/customer")}>Customer</button>
      </div>
    </div>
  );
}
