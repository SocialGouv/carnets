import "../styles/main.scss"
import "github-markdown-css"

import useSWR from "swr"
import fetcher from "../lib/fetcher"
import { UserContext } from "../lib/user"
import React, { useState, useEffect } from "react"

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState()
  const { data, error } = useSWR("/api/auth0/me", fetcher)

  useEffect(() => !error && data && setUser(data), [data, error])

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default App
