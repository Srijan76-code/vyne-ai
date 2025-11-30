import { Router } from "express";
import { getProjectById,getAllProjects } from "./projects.controller";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);


export default router;
