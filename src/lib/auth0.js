import { initAuth0 } from "@auth0/nextjs-auth0"

console.log("AUDIENCE", process.env.AUTH0_AUDIENCE)
console.log("AUTH0_DOMAIN", process.env.AUTH0_DOMAIN)
console.log("APP_BASE_URL", process.env.APP_BASE_URL)

const Auth0 = () => {
  return initAuth0({
    scope: "openid profile",
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    postLogoutRedirectUri: process.env.APP_BASE_URL,
    redirectUri: `${process.env.APP_BASE_URL}/api/auth0/callback`,
    session: {
      storeIdToken: true,
      storeAccessToken: true,
      storeRefreshToken: true,
      cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
    },
  })
}

export default Auth0
