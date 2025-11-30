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
  
  try {

    let {
      userId="",
      page = "1",
      limit = "9",
      filter = "Likes",
      order = "desc",
      search = "",
    } = req.query;

    if (!userId || isNaN(Number(userId))) {
  return res.status(400).json({ error: "Invalid or missing userId" });
}


    

    const pageNum = Number(page);
    const limitNum = Number(limit);

    const projects = await prisma.project.findMany({
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
      orderBy: {
        [filter as string]: order as "asc" | "desc",
      },
      where: {
        userId: Number(userId),
        ...(search
          ? {
              title: {
                contains: search as string,
                mode: "insensitive",
              },
            }
          : {}),
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        Likes: true,
        Clones: true,
        user: true,
      },
    });

    const total = await prisma.project.count({
      where: {
        userId: Number(userId),
        ...(search
          ? {
              title: {
                contains: search as string,
                mode: "insensitive",
              },
            }
          : {}),
      },
    });

   

    return res.json({
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
      projects,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Project fetch failed");
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
