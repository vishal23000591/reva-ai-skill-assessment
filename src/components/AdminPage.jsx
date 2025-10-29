import React, { useState, useEffect } from "react";
import { getRoles, addRole, addQuestion } from "../api/api";

export default function AdminPage() {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [questionData, setQuestionData] = useState({
    question: "",
    options: ["", "", "", ""],
    answerIndex: 0
  });

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const res = await getRoles();
    setRoles(res.data);
  };

  const handleAddRole = async () => {
    if (!roleName.trim()) return alert("Please enter a valid role name.");
    await addRole(roleName.trim());
    setRoleName("");
    fetchRoles();
  };

  const handleAddQuestion = async () => {
    if (!selectedRole) return alert("Please select a role.");
    if (!questionData.question.trim()) return alert("Please enter a question.");
    await addQuestion({ roleId: selectedRole, ...questionData });
    setQuestionData({ question: "", options: ["", "", "", ""], answerIndex: 0 });
    alert("✅ Question added successfully!");
  };

  return (
    <div className="container admin-section">
      <h2>Admin Panel</h2>

      {/* Add Role Section */}
      <div className="card">
        <h3>Add Role</h3>
        <input
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Role Name"
        />
        <button onClick={handleAddRole}>Add Role</button>
      </div>

      {/* Add Question Section */}
      <div className="card">
        <h3>Add Question</h3>

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Select Role</option>
          {roles.map((r) => (
            <option key={r._id} value={r._id}>
              {r.name}
            </option>
          ))}
        </select>

        {/* ✅ Multi-line question input */}
        <textarea
          rows={4}
          placeholder="Enter question (you can write paragraphs here)"
          value={questionData.question}
          onChange={(e) =>
            setQuestionData({ ...questionData, question: e.target.value })
          }
          style={{
            width: "100%",
            resize: "vertical",
            padding: "8px",
            marginTop: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            lineHeight: "1.5"
          }}
        />

        {/* Options */}
        {questionData.options.map((opt, idx) => (
          <input
            key={idx}
            placeholder={`Option ${idx + 1}`}
            value={opt}
            onChange={(e) => {
              const newOpts = [...questionData.options];
              newOpts[idx] = e.target.value;
              setQuestionData({ ...questionData, options: newOpts });
            }}
          />
        ))}

        <select
          value={questionData.answerIndex}
          onChange={(e) =>
            setQuestionData({ ...questionData, answerIndex: Number(e.target.value) })
          }
        >
          <option value={0}>Answer: Option 1</option>
          <option value={1}>Answer: Option 2</option>
          <option value={2}>Answer: Option 3</option>
          <option value={3}>Answer: Option 4</option>
        </select>

        <button onClick={handleAddQuestion}>Save Question</button>
      </div>
    </div>
  );
}
