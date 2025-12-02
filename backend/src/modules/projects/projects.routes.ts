import { Router } from "express";
import {deleteCloneProject,deleteProject,cloneProject,countClonedProject,likeProject, getProjectById,getAllProjects } from "./projects.controller";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/like", likeProject);
router.delete("/", deleteProject);
router.get("/count-cloned-projects", countClonedProject);
router.post("/clone", cloneProject);
router.delete("/clone", deleteCloneProject);

export default router;
