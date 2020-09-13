import { useTheme } from "@lib/theme"
import React from "react"

const Logo = () => {
  const { theme } = useTheme()
  return <div className={`marianne ${theme}`} />
}

export default Logo
