import "@styles/main.scss"
import "github-markdown-css"

import Footer from "@components/footer"
import Nav from "@components/nav"
import { AdminsContext } from "@lib/admins"
import fetcher from "@lib/fetcher"
import { TeamsContext } from "@lib/teams"
import { ThemeProvider, useTheme } from "@lib/theme"
import { UserProvider } from "@lib/user"
import * as Sentry from "@sentry/browser"
import App from "next/app"
import React, { useEffect, useState } from "react"
import useSWR from "swr"

Sentry.init({ dsn: process.env.SENTRY_DSN })

const Carnets = ({ Component, pageProps }) => {
  const { admins, teams } = pageProps
  const [user, setUser] = useState()
  const [theme, setTheme] = useState()
  const { data, error } = useSWR("/api/auth0/me", fetcher)

  useEffect(() => {
    const storedTheme = localStorage.getItem("carnets-theme") || "light"
    setTheme(storedTheme)
  }, [])

  useEffect(() => {
    !error && data && setUser(data)
  }, [data, error])

  useEffect(() => {
    localStorage.setItem("carnets-theme", theme)
  }, [theme])

  try {
    return (
      <ThemeProvider value={{ setTheme, theme }}>
        <AdminsContext.Provider value={admins}>
          <TeamsContext.Provider value={teams}>
            <UserProvider value={user}>
              <div className={`theme-${theme}`}>
                <div className="app">
                  <Nav />
                  <Component {...pageProps} />
                  <Footer />
                </div>
              </div>
            </UserProvider>
          </TeamsContext.Provider>
        </AdminsContext.Provider>
      </ThemeProvider>
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
