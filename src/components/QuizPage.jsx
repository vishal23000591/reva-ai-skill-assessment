import React, { useState } from "react";
import Result from "./Result";

export default function QuizPage({ questions }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx) => setSelectedOption(idx);

  const handleNext = () => {
    if (selectedOption === questions[current].answerIndex) setScore(score + 1);
    setSelectedOption(null);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowResult(true);
  };

  if (!questions.length) return <div>Loading...</div>;

  if (showResult) {
    const roleName = questions[0]?.role?.name || "Unknown Role";
    return <Result score={score} total={questions.length} roleName={roleName} />;
  }

  const currentQuestion = questions[current];

  return (
    <div className="container quiz-section">
      <div className="card">
        <h3>Question {current + 1}</h3>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            backgroundColor: "#f8f8f8",
            padding: "10px",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}
        >
          {currentQuestion.question}
        </pre>

        {currentQuestion.options.map((opt, idx) => (
          <div
            key={idx}
            className={`option ${selectedOption === idx ? "selected" : ""}`}
            onClick={() => handleSelect(idx)}
          >
            {opt}
          </div>
        ))}

        <button onClick={handleNext} disabled={selectedOption === null}>
          {current + 1 === questions.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
