import "@styles/main.scss"
import "github-markdown-css"

import Footer from "@components/Footer"
import Nav from "@components/nav"
import { AdminsContext } from "@lib/admins"
import fetcher from "@lib/fetcher"
import { TeamsContext } from "@lib/teams"
import { UserProvider } from "@lib/user"
import * as Sentry from "@sentry/browser"
import App from "next/app"
import React, { useEffect, useState } from "react"
import useSWR from "swr"

Sentry.init({ dsn: process.env.SENTRY_DSN })

const Carnets = ({ Component, pageProps }) => {
  const { admins, teams } = pageProps
  const [user, setUser] = useState()
  const { data, error } = useSWR("/api/auth0/me", fetcher)

  useEffect(() => {
    !error && data && setUser(data)
  }, [data, error])

  try {
    return (
      <AdminsContext.Provider value={admins}>
        <TeamsContext.Provider value={teams}>
          <UserProvider value={user}>
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </UserProvider>
        </TeamsContext.Provider>
      </AdminsContext.Provider>
    )
  } catch (error) {
    Sentry.captureException(error)
  }
}

Carnets.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const {
    ctx: { req },
  } = appContext

  if (req) {
    const {
      socket: { localPort },
    } = req

    const baseUrl = `http://localhost:${localPort}`

    try {
      const { admins, teams } = await fetcher(`${baseUrl}/api/teams`)
      appProps.pageProps = { admins, teams }
    } catch (error) {
      console.log(error)
    }
  }

  return { ...appProps }
}

export default Carnets
