import NextAuth, { Session } from "next-auth";
import authConfig from "@/services/auth.config";
import { NextRequest } from "next/server";
const { auth } = NextAuth(authConfig);
export default auth(
  (req: NextRequest & { auth: Session | null }): Response | void => {
    console.log(req.auth);
  }
);
