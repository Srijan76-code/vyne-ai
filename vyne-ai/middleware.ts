// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const PUBLIC_PATHS = ["/", "/auth/login", "/auth/signup", "/api/auth/login", "/api/auth/signup", "/favicon.ico"];

export async function middleware(req: NextRequest) {
  const cookieStore =await cookies();
  const { pathname } = req.nextUrl;

  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  // read cookie token
  const token = cookieStore.get("token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
  else{
    return NextResponse.next();

  }

  // try {

  //   await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
  // } catch (e) {
  //   const url = req.nextUrl.clone();
  //   url.pathname = "/auth/login";
  //   return NextResponse.redirect(url);
  // }
}

// apply middleware to app pages except static/_next/api etc
export const config = {
  matcher: ["/((?!_next/|api/auth/login|api/auth/signup|favicon.ico).*)"],
};


