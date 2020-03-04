const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  env: {
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
    AUTH0_SCOPE: "openid email profile",
    REDIRECT_URI: process.env.REDIRECT_URI,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI
  }
};
