import projects from "../data/projects.js";

export const getAllProjects = () => projects;

export const getProjectById = (id) => projects.find(p => p.id === id);

export const addProject = (project) => {
  projects.push(project);
  return project;
};

export const updateProject = (id, updatedData) => {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updatedData };
  return projects[index];
};

export const deleteProject = (id) => {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return false;
  projects.splice(index, 1);
  return true;
};
