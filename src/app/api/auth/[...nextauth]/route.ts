import { comparePassword } from "@/lib/utils";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "../../../../../lib/prisma";
import NextAuth from "next-auth/next";
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const user = await prisma.company.findFirst({
          where: {
            email: credentials?.email,
          },
        });
        if (!user) {
          return null;
        }

        const isMatch = await comparePassword(
          credentials?.password!!,
          user.password
        );

        if (isMatch) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    newUser: "/signinup",
  },
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.id;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
