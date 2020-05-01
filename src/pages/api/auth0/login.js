import Auth0 from "@lib/auth0"

export default async function login(req, res) {
  const auth0 = Auth0()

  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
