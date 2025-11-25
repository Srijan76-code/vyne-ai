import { Router } from "express";
import multer from "multer";
import { deploy } from "./deploy.controller";

const router = Router();
const upload = multer();

router.post("/", upload.any(), deploy);

export default router;
