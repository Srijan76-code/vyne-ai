import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    return res.json(projects);
  } catch (error) {
    return res.status(400).send("Project fetch failed");
  }
};
