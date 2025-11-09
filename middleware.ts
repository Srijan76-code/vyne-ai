// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/", "/auth/login", "/auth/signup", "/api/auth/login", "/api/auth/signup", "/favicon.ico"];

// defensive header block for known bypass attempts
const BYPASS_HEADERS = ["x-middleware-subrequest", "x-nextjs-middleware-subrequest"];

export async function middleware(req: NextRequest) {
  // block suspicious bypass headers
  for (const h of BYPASS_HEADERS) {
    if (req.headers.get(h)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  const { pathname } = req.nextUrl;

  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  // read cookie token
  const token = req.cookies.get("token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  try {
    // use jose jwtVerify in middleware (Edge-compatible)
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
    return NextResponse.next();
  } catch (e) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
}

// apply middleware to app pages except static/_next/api etc
export const config = {
  matcher: ["/((?!_next/|api/auth/login|api/auth/signup|favicon.ico).*)"],
};
