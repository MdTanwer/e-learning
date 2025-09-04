import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
console.log(process.env.GOOGLE_CLIENT_ID, "red");
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
        "673da9aa66d1b845bf50f1ea7c2c551fe21f6fcd",
    }),
  ],
  secret: process.env.SECRET || "1234567890",
};

export default NextAuth(authOptions);
