import GoogleProvider from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
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
  },
} as NextAuthConfig;
