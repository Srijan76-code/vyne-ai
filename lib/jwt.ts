// lib/jwt.ts
import { SignJWT, jwtVerify, JWTPayload } from "jose";

const encoder = new TextEncoder();
const SECRET = encoder.encode(process.env.JWT_SECRET!); // must exist

export async function signToken(payload: Record<string, any>, expiresIn = "7d") {
  // payload: { id, email }
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresIn)
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, SECRET);
  return payload;
}



