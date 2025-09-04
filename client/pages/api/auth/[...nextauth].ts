import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID ||
        "952911097209-6ksdn7cabtb7sd7sv1qeecpkgob501jp.apps.googleusercontent.com",
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        "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",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "45e0032e22edf4cf5a05",
      clientSecret:
        process.env.GITHUB_CLIENT_SECRET ||
        "8e1506b28c67c8ae07946ba7362e7cc9b4c57acb",
    }),
  ],
  secret: process.env.SECRET || "12345678",
};

export default NextAuth(authOptions);
