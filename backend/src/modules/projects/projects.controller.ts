import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { count } from "console";

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    let {
      page = "1",
      limit = "9",
      filter = "Likes",
      order = "desc",
      search = "",
    } = req.query;

    const pageNum = Number(page);
    const limitNum = Number(limit);

    const projects = await prisma.project.findMany({
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
      orderBy: {
        [filter as string]: order as "asc" | "desc",
      },
      where: {
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

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const project = await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.json(project);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Project fetch by id failed" });
  }
};

export const likeProject = async (req: Request, res: Response) => {
  try {
    const { projectId, userId } = req.body;
    console.log(projectId, userId);
    const existing = await prisma.projectLike.findUnique({
      where: {
        userId_projectId: { userId: Number(userId), projectId: Number(projectId) },
      },
    });

    if (existing) {
      // user already liked → unlike
      await prisma.projectLike.delete({
        where: {
          userId_projectId: { userId: Number(userId), projectId: Number(projectId) },
        },
      });

      await prisma.project.update({
        where: { id: Number(projectId) },
        data: { Likes: { decrement: 1 } },
      });

      return res.json({ liked: false });
    }

    // user has not liked → like
    await prisma.projectLike.create({
      data: { userId: Number(userId), projectId: Number(projectId) },
    });

    await prisma.project.update({
      where: { id: Number(projectId) },
      data: { Likes: { increment: 1 } },
    });

    return res.json({ liked: true });
  } catch (err) {
    console.error("Like toggle error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const cloneProject = async (req:Request, res:Response) => {
  const { userId, projectId } = req.body;

  try {
    await prisma.$transaction([
      prisma.projectClone.create({
        data: { userId: Number(userId), projectId: Number(projectId) },
      }),
      prisma.project.update({
        where: { id: Number(projectId) },
        data: { Clones: { increment: 1 } },
      }),
    ]);

    return res.json({ success: true });
  } catch (err) {
    if ((err as any).code === "P2002") {
      return res.json({ success: false, alreadyCloned: true });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};



export const countClonedProject = async (req: Request, res: Response) => {
  const { projectId } = req.body;
  try {
    const count = await prisma.projectClone.count({ where: { projectId } });
    return res.json({ count });
  } catch (error) {
    console.error("Count cloned project error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

