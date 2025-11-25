import { Router } from "express";
import { getUser, getUserProjects, createProject, updateProject } from "./user.controller";

const router = Router();

router.get("/", getUser);
router.get("/projects", getUserProjects);
router.post("/projects", createProject);
router.put("/projects", updateProject);

export default router;
