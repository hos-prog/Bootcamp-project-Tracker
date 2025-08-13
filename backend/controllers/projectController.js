import { getAllProjects, getProjectById, addProject, updateProject, deleteProject } from "../services/projectService.js";

export const getProjects = (req, res) => {
  res.json(getAllProjects());
};

export const getSingleProject = (req, res) => {
  const id = parseInt(req.params.id);
  const project = getProjectById(id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

export const createProject = (req, res) => {
  const { name, description, status } = req.body;
  const newProject = { id: Date.now(), name, description, status };
  addProject(newProject);
  res.status(201).json(newProject);
};

export const editProject = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = updateProject(id, req.body);
  if (!updated) return res.status(404).json({ message: "Project not found" });
  res.json(updated);
};

export const removeProject = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteProject(id);
  if (!deleted) return res.status(404).json({ message: "Project not found" });
  res.json({ message: "Project deleted" });
};
