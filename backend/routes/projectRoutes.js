import express from "express";
import { getProjects, getSingleProject, createProject, editProject, removeProject } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getSingleProject);
router.post("/", createProject);
router.put("/:id", editProject);
router.delete("/:id", removeProject);

export default router;
