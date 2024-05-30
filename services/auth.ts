import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";
import db from "./db";

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  ...authConfig,
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        (session.user.id = token.userId),
          (session.user.name = token.name),
          (session.user.email = token.email! as string),
          (session.user.image = token.picture),
          (session.user.role = token.role);
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email!,
        },
      });
      if (!dbUser) {
        token.id = user!.id;
        return null;
      }
      const data = {
        userId: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        role: dbUser.role,
      };
      return data;
    },
  },
  pages: {
    signIn: "/login",
  },
});
