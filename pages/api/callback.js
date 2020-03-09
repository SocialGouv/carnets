import auth0 from "../../src/lib/auth0";

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, {
      redirectTo: "/publish?id=" + req.query.state
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
