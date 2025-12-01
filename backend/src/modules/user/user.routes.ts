import { Router } from "express";
import {clonedProjects,updateUser, getUser, getUserProjects, createProject, updateProject } from "./user.controller";

const router = Router();

router.get("/", getUser);
router.put("/", updateUser);
router.get("/projects", getUserProjects);
router.post("/projects", createProject);
router.put("/projects", updateProject);

router.get("/cloned-projects", clonedProjects);
export default router;
