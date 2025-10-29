import React, { useEffect, useState } from "react";
import { getRoles, getQuestionsByRole } from "../api/api";
import QuizPage from "./QuizPage";

export default function CustomerPage() {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [questions, setQuestions] = useState([]);

  // Fetch all roles from backend
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

  // If role selected, show QuizPage
  if (selectedRole) {
    return <QuizPage questions={questions} />;
  }

  return (
    <div className="container customer-section">
      <h2>Select Role to Start Quiz</h2>
      <select
        onChange={(e) => handleRoleSelect(e.target.value)}
        defaultValue=""
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
    </div>
  );
}
