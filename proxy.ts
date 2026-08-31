import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { getServerSession } from "./features/auth/auth-server";

export async function proxy(request: NextRequest) {
  /*const cookies = getSessionCookie(request);
  if (!cookies) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();*/

  const session = await getServerSession();

  if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
