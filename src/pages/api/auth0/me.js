import Auth0 from "@lib/auth0"

export default async (req, res) => {
  const auth0 = Auth0()
  try {
    await auth0.handleProfile(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
