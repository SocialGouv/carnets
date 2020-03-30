import { initAuth0 } from "@auth0/nextjs-auth0"

const Auth0 = () => {
  console.log("Auth0 - process.env.APP_BASE_URL:", process.env.APP_BASE_URL)
  console.log("Auth0 - process.env.AUTH0_DOMAIN:", process.env.AUTH0_DOMAIN)
  console.log(
    "Auth0 - process.env.AUTH0_CLIENT_ID:",
    process.env.AUTH0_CLIENT_ID
  )
  console.log(
    "Auth0 - process.env.AUTH0_CLIENT_SECRET:",
    process.env.AUTH0_CLIENT_SECRET
  )
  console.log(
    "Auth0 - process.env.AUTH0_SESSION_COOKIE_SECRET:",
    process.env.AUTH0_SESSION_COOKIE_SECRET
  )

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
