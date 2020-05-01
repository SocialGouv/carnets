import Auth0 from "@lib/auth0"

export default async function callback(req, res) {
  const auth0 = Auth0()

  try {
    await auth0.handleCallback(req, res, { redirectTo: "/" })
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
