import "@styles/main.scss"
import "github-markdown-css"

import fetcher from "@lib/fetcher"
import { UserContext } from "@lib/user"
import * as Sentry from "@sentry/browser"
import React, { useEffect, useState } from "react"
import useSWR from "swr"

Sentry.init({ dsn: process.env.SENTRY_DSN })

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState()
  const { data, error } = useSWR("/api/auth0/me", fetcher)

  useEffect(() => !error && data && setUser(data), [data, error])

  try {
    return (
      <UserContext.Provider value={user}>
        <Component {...pageProps} />
      </UserContext.Provider>
    )
  } catch (error) {
    Sentry.captureException(error)
  }
}

export default App
