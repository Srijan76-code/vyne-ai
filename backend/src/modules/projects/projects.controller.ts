import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

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

    const {id} = req.params;

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

