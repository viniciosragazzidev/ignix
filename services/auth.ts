import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client";
import authConfig from "./auth.config";
import db from "./db";
import { cookies } from "next/headers";
import { TypeUser } from "@/shared/@types";

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
        session.user.CompanyUser = token.CompanyUser;
        session.user.units = token.units;
        session.user.cpf = token.cpf;
      }
      return session;
    },
    async jwt({ token, user }) {
      const userData: any = await db.user.findFirst({
        where: {
          email: token.email!,
        },
        include: {
          CompanyUser: true,
          units: true,
        },
      });
      if (!userData) {
        token.id = user!.id;
        return null;
      }
      const data = {
        userId: userData.id,
        name: userData.name,
        email: userData.email,
        picture: userData.image,
        role: userData.role,
        CompanyUser: userData.CompanyUser,
        units: userData.units,
        cpf: userData.cpf,
      };
      return data;
    },
    async signIn({ user }) {
      const dbUser = await db.user.findUnique({
        where: {
          email: user.email!,
        },
      });
      if (dbUser) {
        cookies().set("loggedUserId", dbUser.id, { path: "/" });
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
});
