import auth0 from "../../src/lib/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res, {
      authParams: { state: req.query.id }
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
