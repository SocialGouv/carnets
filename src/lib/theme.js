import React, { createContext, useContext } from "react"

export const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
