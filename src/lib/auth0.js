import { initAuth0 } from "@auth0/nextjs-auth0"

const Auth0 = () => {
  console.log("Auth0 - process.env.AUTH0_DOMAIN:", process.env.AUTH0_DOMAIN)
  console.log(
    "Auth0 - process.env.AUTH0_CLIENT_ID:",
    process.env.AUTH0_CLIENT_ID
  )
  console.log(
    "Auth0 - process.env.AUTH0_REDIRECT_URI:",
    process.env.AUTH0_REDIRECT_URI
  )
  console.log(
    "Auth0 - process.env.AUTH0_CLIENT_SECRET:",
    process.env.AUTH0_CLIENT_SECRET
  )
  console.log(
    "Auth0 - process.env.AUTH0_POST_LOGOUT_REDIRECT_URI:",
    process.env.AUTH0_POST_LOGOUT_REDIRECT_URI
  )
  console.log(
    "Auth0 - process.env.AUTH0_SESSION_COOKIE_SECRET:",
    process.env.AUTH0_SESSION_COOKIE_SECRET
  )

  return initAuth0({
    scope: "openid profile",
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    redirectUri: process.env.AUTH0_REDIRECT_URI,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
    session: { cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET }
  })
}

export default Auth0
