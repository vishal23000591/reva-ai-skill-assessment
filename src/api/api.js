import axios from "axios";

const API = axios.create({
  baseURL: "https://reva-skill-backend.onrender.com/api"
});

// Roles
export const getRoles = () => API.get("/roles");
export const addRole = (name) => API.post("/roles", { name });

// Questions
export const addQuestion = (data) => API.post("/questions", data);
export const getQuestionsByRole = (roleId) => API.get(`/questions/${roleId}`);
