import { Router } from "express";
import {me, signup, login, logout } from "./auth.controller";

const router = Router();

router.get("/me", me);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
