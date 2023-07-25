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

  // pages: {
  //   // signIn:
  //   //   "https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/login?client_id=24do2d0hn8rqmc5b9c41bn9g2a&scope=openid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=0UhPboKmLlPyQyPK0Z2UJYdyZvQiWsIU3ESEQI0CJ8A&code_challenge=fhDtxEz5zf4LDLtJ0ZU240d3fGKF2YCfRCRR1jBFvPE&code_challenge_method=S256",
  // signIn:
  //   "https://nok-test2.auth.ap-southeast-2.amazoncognito.com/login?client_id=13hci9hepjm5bg8l0b82s2486v&response_type=token&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback",
  //   signOut: "http://localhost:3000",
  // },
  callbacks: {
    async session({ session, token, user }: any) {
      console.log("sssssssionnnn", session);
      console.log("tokennnnnn", token);
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      console.log("useruseruser", user);
      console.log("accountaccount", account);
      console.log("profileprofileprofile", profile);
      console.log("isNewUserisNewUserisNewUser", isNewUser);

      if (user) {
        console.log("aaaaa user =>", user);

        token.id = user.id;
      }
      if (account) {
        console.log("hiii", account);

        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.refreshToken = account.refresh_token;
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
