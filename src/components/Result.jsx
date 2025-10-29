import React from "react";

export default function Result({ score, total, roleName }) {
  const percentage = ((score / total) * 100).toFixed(0);
  const currentRole = roleName || "Unknown Role";

  // 🎯 Courses grouped by difficulty
  const roleCourses = {
    "Web Developer": {
      beginner: [
        { name: "HTML & CSS Crash Course", link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
        { name: "JavaScript Basics for Beginners (YouTube)", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        { name: "The Odin Project – Foundations Path", link: "https://www.theodinproject.com/paths/foundations/courses/foundations" },
      ],
      intermediate: [
        { name: "The Complete Web Developer Bootcamp (Udemy)", link: "https://www.udemy.com/course/the-complete-web-developer-bootcamp/" },
        { name: "freeCodeCamp Full Stack Web Development", link: "https://www.freecodecamp.org/learn" },
        { name: "Frontend + Backend Integration with MERN", link: "https://www.udemy.com/course/mern-stack-react-node-ecommerce/" },
      ],
      advanced: [
        { name: "Advanced React & Next.js (Frontend Masters)", link: "https://frontendmasters.com/learn/react/" },
        { name: "Node.js Microservices Architecture", link: "https://www.udemy.com/course/nodejs-microservices/" },
        { name: "Web Performance Optimization (Google Devs)", link: "https://web.dev/learn-performance/" },
      ],
    },
    "Frontend Developer": {
      beginner: [
        { name: "HTML & CSS for Beginners (freeCodeCamp)", link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
        { name: "JavaScript Basics (W3Schools)", link: "https://www.w3schools.com/js/" },
      ],
      intermediate: [
        { name: "React - The Complete Guide (Udemy)", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
        { name: "Frontend Interview Prep", link: "https://frontendmasters.com/learn/" },
      ],
      advanced: [
        { name: "Advanced React Patterns", link: "https://epicreact.dev/" },
        { name: "Performance Optimization in React", link: "https://web.dev/react-performance/" },
      ],
    },
    "Backend Developer": {
      beginner: [
        { name: "Introduction to Databases (Khan Academy)", link: "https://www.khanacademy.org/computing/computer-programming/sql" },
        { name: "Node.js Basics (freeCodeCamp)", link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
      ],
      intermediate: [
        { name: "Node.js, Express & MongoDB Bootcamp", link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" },
        { name: "API Design & Architecture (Coursera)", link: "https://www.coursera.org/learn/api-design" },
      ],
      advanced: [
        { name: "System Design Primer (GitHub)", link: "https://github.com/donnemartin/system-design-primer" },
        { name: "Microservices with Node & Docker", link: "https://www.udemy.com/course/microservices-with-node-js-and-react/" },
      ],
    },
    "Data Analyst": {
      beginner: [
        { name: "Excel for Beginners", link: "https://www.coursera.org/learn/excel-basics-data-analysis" },
        { name: "Python Basics (freeCodeCamp)", link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
      ],
      intermediate: [
        { name: "Python for Data Analysis", link: "https://www.udemy.com/course/python-for-data-analysis/" },
        { name: "Google Data Analytics Certificate", link: "https://grow.google/dataanalytics/" },
      ],
      advanced: [
        { name: "Machine Learning with Python", link: "https://www.coursera.org/learn/machine-learning-with-python" },
        { name: "Data Visualization with Power BI", link: "https://www.udemy.com/course/power-bi-data-visualization/" },
      ],
    },
  };

  const getFeedback = () => {
    if (percentage >= 90) return { title: "🏆 Outstanding!", message: "You’ve mastered this topic!" };
    if (percentage >= 75) return { title: "💪 Great Job!", message: "Keep improving and explore advanced topics next." };
    if (percentage >= 50) return { title: "📘 Keep Improving!", message: "You’re getting there! Focus on intermediate areas." };
    return { title: "📚 Don’t Give Up!", message: "Start with the basics and build your confidence." };
  };

  const feedback = getFeedback();

  // 🎯 Select the correct difficulty level
  let difficulty = "beginner";
  if (percentage >= 80) difficulty = "advanced";
  else if (percentage >= 50) difficulty = "intermediate";

  const roleData = roleCourses[currentRole];
  const recommended = roleData ? roleData[difficulty] : [];

  return (
    <div style={{
      maxWidth: "650px",
      margin: "50px auto",
      padding: "35px",
      backgroundColor: "#f8fafc",
      borderRadius: "14px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
    }}>
      <h2>🎉 Quiz Completed!</h2>
      <p>Score: <strong>{score}/{total}</strong></p>
      <p>Percentage: <strong>{percentage}%</strong></p>
      <p>Role: <strong>{currentRole}</strong></p>

      <p style={{
        fontWeight: "600",
        color: percentage >= 80 ? "green" : percentage >= 50 ? "orange" : "red",
      }}>
        {percentage >= 80 ? "Excellent 🎯" : percentage >= 50 ? "Good Effort 👍" : "Needs Improvement 😕"}
      </p>

      <div style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        border: "1px solid #ddd",
        textAlign: "left",
      }}>
        <h4>{feedback.title}</h4>
        <p>{feedback.message}</p>
      </div>

      {recommended.length > 0 && (
        <div style={{
          marginTop: "25px",
          padding: "15px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "1px solid #ddd",
          textAlign: "left",
        }}>
          <h4>🎓 Recommended {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Courses for {currentRole}</h4>
          <ul>
            {recommended.map((c, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: "25px",
          padding: "10px 20px",
          borderRadius: "6px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        🔄 Try Again
      </button>
    </div>
  );
}
