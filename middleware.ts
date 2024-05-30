import NextAuth, { Session } from "next-auth";
import authConfig from "@/services/auth.config";
import { NextRequest, NextResponse } from "next/server";
const { auth } = NextAuth(authConfig);
export default auth(
  (req: NextRequest & { auth: Session | null }): Response | void => {}
);

export const middleware = async (
  req: NextRequest & { auth: Session | null }
) => {
  const session = await auth();

  if (req.nextUrl.pathname === "/login" && session) {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  if (req.nextUrl.pathname.split("/").includes("app") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};
export const config = {
  matcher: ["/login", "/app/:path*", "/onboard"],
};
