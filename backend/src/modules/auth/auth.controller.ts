import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../config/prisma";
import { signToken } from "../../lib/jwt";








export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashed },
    });

    const token = await signToken({ id: user.id, email: user.email }, "7d");

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7 * 1000,
    });
    return res.json({ ok: true, id: user.id, email: user.email });
  } catch (error: any) {
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint failed")
    ) {
      return res.status(409).json({ error: "Email already exists" });
    } else {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};







export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = await signToken({ id: user.id, email: user.email }, "7d");

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7 * 1000,
  });

  return res.json({ ok: true });
};







export const logout = async (req: Request, res: Response) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res.json({ ok: true });
};
