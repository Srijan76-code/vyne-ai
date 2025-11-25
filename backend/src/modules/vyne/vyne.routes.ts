import { Router } from "express";
import { generateProject } from "./vyne.controller";

const router = Router();

router.post("/", generateProject);

export default router;
