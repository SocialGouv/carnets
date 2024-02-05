import fetcher from "@/utils/graphql-fetcher";
import type { NextAuthOptions, User } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import { encode, decode, getJwt, COOKIE_NAME } from "@/utils/jwt";
import { getUserTeams as getUserTeamsQuery } from "@/queries/index";
import {
  ENV,
  NODE_ENV,
  GITHUB_ID,
  GITHUB_SECRET,
  NEXTAUTH_SECRET,
} from "@/utils/env";
import { OAuthUserConfig } from "next-auth/providers/oauth";

export interface GithubUser extends User {
  teams: string[];
}

const getUserTeams = async (login: string) => {
  const {
    organization: {
      teams: { nodes: teams },
    },
  } = (await fetcher({
    query: getUserTeamsQuery,
    token: getJwt(),
    parameters: { login },
  })) as {
    organization: {
      teams: { nodes: [] };
    };
  };

  return teams.map((team: GithubTeam) => team.slug);
};

const githubProviderConfig = {
  clientId: GITHUB_ID,
  clientSecret: GITHUB_SECRET,
  ...(ENV !== "prod" && {
    authorization: {
      url: "https://charon-carnets.ovh.fabrique.social.gouv.fr/github/login/oauth/authorize",
    },
    token:
      "https://charon-carnets.ovh.fabrique.social.gouv.fr/github/login/oauth/access_token",
  }),
  profile: (profile: Record<string, unknown>) => {
    const config = {
      login: profile.login,
      id: String(profile.id),
      image: profile.avatar_url,
      name: profile.name ?? profile.login,
    };

    return config;
  },
} as OAuthUserConfig<GithubProfile>;

const authOptions: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,
  providers: [GithubProvider(githubProviderConfig)],
  callbacks: {
    async signIn({ user }) {
      return !!user.id?.length;
    },
    async jwt({ token, user }) {
      if (!user) {
        return token;
      }

      const githubUser = user as GithubUser;
      const teams = await getUserTeams(user.login);

      githubUser.teams = teams;

      return { ...token, user: githubUser };
    },
    async session({ session, token }) {
      return { ...session, ...token };
    },
  },
  // custom function to insert Hasura role fields
  jwt: { encode, decode },
  cookies: {
    sessionToken: {
      // prevents NextAuth to use __Secure in prod so that Hasura always looks for this name
      name: COOKIE_NAME,
      options: {
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        // App and Hasura may not be on the same subdomain
        domain:
          NODE_ENV === "production" ? ".fabrique.social.gouv.fr" : "localhost",
      },
    },
  },
};

export default authOptions;
