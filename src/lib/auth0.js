import { initAuth0 } from "@auth0/nextjs-auth0"

const Auth0 = () => {
  return initAuth0({
    scope: "openid profile",
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    postLogoutRedirectUri: process.env.APP_BASE_URL,
    redirectUri: `${process.env.APP_BASE_URL}/api/auth0/callback`,
    session: { cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET }
  })
}

export default Auth0
