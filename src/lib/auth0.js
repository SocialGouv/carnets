import { initAuth0 } from "@auth0/nextjs-auth0"

export default initAuth0({
  scope: "openid profile",
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: { cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET }
})
