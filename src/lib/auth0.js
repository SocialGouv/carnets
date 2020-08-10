import { initAuth0 } from "@auth0/nextjs-auth0"

const Auth0 = () => {
  return initAuth0({
    audience: process.env.AUTH0_AUDIENCE,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
    postLogoutRedirectUri: process.env.APP_BASE_URL,
    redirectUri: `${process.env.APP_BASE_URL}/api/auth0/callback`,
    scope: "openid profile",
    session: {
      cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
      storeAccessToken: true,
      storeIdToken: true,
      storeRefreshToken: true,
    },
  })
}

export default Auth0
