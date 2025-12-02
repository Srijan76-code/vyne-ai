import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { verifyToken } from "../../lib/jwt";

export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.query;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json(user);
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.query;
  const { name, username, image, bio, website, contacts, prompts } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: Number(userId) },
      data: {
        name,
        username,
        image,
        bio,
        website,
        contacts,
        prompts,
      },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserProjects = async (req: Request, res: Response) => {
  try {
    let {
      userId = "",
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
        deploymentUrl: true,
        deploymentStatus: true,
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
  const { projectObject } = req.body;
  const {userId}=req.query;
  console.log("isnide backend", projectObject);

  try {
    const createdProject = await prisma.project.create({
      data: {
        userId: Number(userId),
        content: projectObject,
      },
    });
    return res.status(201).json({success: true});
  } catch (error) {
    console.log(error);
    return res.status(400).json({success: false});
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
        title: reqBody.title,
      },
    });
    return res.status(201).json({ success: true });
  } catch (error) {
    return res.status(400).send("Project creation failed");
  }
};
export const clonedProjects = async (req: Request, res: Response) => {
  let {
    userId = "",
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

  try {
    const clonedProjects = await prisma.projectClone.findMany({
      where: {
        userId: Number(userId),
        project: {
          ...(search
            ? {
                title: {
                  contains: search as string,
                  mode: "insensitive",
                },
              }
            : {}),
        },
      },
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
      orderBy: {
        project: {
          [filter as string]: order as "asc" | "desc", // FIXED
        },
      },
      include: {
        project: true,
      },
    });

    const total = await prisma.projectClone.count({
      where: {
        userId: Number(userId),
        project: {
          ...(search
            ? {
                title: {
                  contains: search as string,
                  mode: "insensitive",
                },
              }
            : {}),
        },
      },
    });

    return res.json({
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
      clonedProjects,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Cloned projects fetch failed");
  }
};
