import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.routes";
import deployRoutes from "./modules/deploy/deploy.routes";
import projectsRoutes from "./modules/projects/projects.routes";
import userRoutes from "./modules/user/user.routes";
import vyneRoutes from "./modules/vyne/vyne.routes";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));


app.use("/api/auth", authRoutes);
app.use("/api/deploy", deployRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/vyne", vyneRoutes);

export default app;
