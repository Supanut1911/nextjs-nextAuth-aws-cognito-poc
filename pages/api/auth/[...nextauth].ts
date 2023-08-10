import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { NextAuthOptions } from "next-auth";
import { signIn } from "next-auth/react";
import { log } from "console";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
      checks: ["state", "pkce", "nonce"],
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      console.log("token =>", token);

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.refreshToken = account.refresh_token;
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
