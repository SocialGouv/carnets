import { initAuth0 } from "@auth0/nextjs-auth0";
import config from "../config";

const redirectUri = `${
  config.DOMAIN.includes("carnets") ? "https" : "http"
}://${config.DOMAIN}/api/callback`;

export default initAuth0({
  clientId: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  scope: config.AUTH0_SCOPE,
  domain: config.AUTH0_DOMAIN,
  redirectUri: redirectUri,
  postLogoutRedirectUri: config.POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: config.SESSION_COOKIE_SECRET,
    cookieLifetime: config.SESSION_COOKIE_LIFETIME,
    storeIdToken: false,
    storeRefreshToken: false,
    storeAccessToken: false
  }
});
