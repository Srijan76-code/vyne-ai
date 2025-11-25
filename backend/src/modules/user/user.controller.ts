import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { verifyToken } from "../../lib/jwt";

export const getUser = async (req: Request, res: Response) => {
  const token =
    req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ error: "Unauthorized" });

  try {
    const payload = await verifyToken(token);
    const userId = (payload as any).id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, createdAt: true },
    });
    if (!user)
      return res.status(404).json({ error: "User not found" });
    return res.json({ user });
  } catch (e) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

export const getUserProjects = async (req: Request, res: Response) => {
  const { userId } = req.query;

  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
      include: {
        projects: true,
      },
    });

    return res.json(userInfo);
  } catch (error) {
    return res.status(400).send("Project fetch failed");
  }
};

export const createProject = async (req: Request, res: Response) => {
  const { userId, title, content } = req.body;

  try {
    const createdProject = await prisma.project.create({
      data: {
        title: title || "Untitled Project",
        userId: Number(userId),
        content: content,
      },
    });
    return res.status(201).json(createdProject);
  } catch (error) {
    return res.status(400).send("Project creation failed");
  }
};

export const updateProject = async (req: Request, res: Response) => {
  const reqBody = req.body;

  try {
    const updatedProject = await prisma.project.update({
      where: {
        id: Number(reqBody.id),
      },
      data: {
        ...reqBody,
      },
    });
    return res.status(201).json(updatedProject);
  } catch (error) {
    return res.status(400).send("Project creation failed");
  }
};
