import { Router } from "express";
import {cloneProject,countClonedProject,likeProject, getProjectById,getAllProjects } from "./projects.controller";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/like", likeProject);
router.get("/count-cloned-projects", countClonedProject);
router.post("/clone", cloneProject);

export default router;
