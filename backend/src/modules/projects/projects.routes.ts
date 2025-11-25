import { Router } from "express";
import { getAllProjects } from "./projects.controller";

const router = Router();

router.get("/", getAllProjects);

export default router;
