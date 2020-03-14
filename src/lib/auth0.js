import { initAuth0 } from "@auth0/nextjs-auth0"

export default initAuth0({
  scope: "openid profile",
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
  session: { cookieSecret: process.env.SESSION_COOKIE_SECRET }
})
