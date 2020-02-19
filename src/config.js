if (typeof window === "undefined") {
  /**
   * Settings exposed to the server.
   */

  console.log("GITLAB_ENVIRONMENT_URL:", process.env.GITLAB_ENVIRONMENT_URL);
  console.log("DOMAIN:", process.env.DOMAIN);

  const gitlabEnvUrl = process.env.GITLAB_ENVIRONMENT_URL
    ? process.env.GITLAB_ENVIRONMENT_URL.replace(/^http:\/\//i, "https://")
    : process.env.DOMAIN;

  module.exports = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    // DOMAIN: process.env.GITLAB_ENVIRONMENT_URL || process.env.DOMAIN,
    DOMAIN: gitlabEnvUrl,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME
  };
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI
  };
}
