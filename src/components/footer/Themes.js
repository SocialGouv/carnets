import { useTheme } from "@lib/theme"
import React from "react"
import { Moon, Sun } from "react-feather"

const Themes = () => {
  const { theme, setTheme } = useTheme()
  console.log("theme", theme)

  return (
    <div className="themes">
      <button
        tabIndex={0}
        title="Theme light"
        onClick={() => setTheme("light")}
        onKeyPress={() => setTheme("light")}
        className={theme === "light" ? "disabled" : ""}
      >
        <Sun size={12} />
      </button>
      <button
        tabIndex={0}
        title="Theme dark"
        onClick={() => setTheme("dark")}
        onKeyPress={() => setTheme("dark")}
        className={theme === "dark" ? "disabled" : ""}
      >
        <Moon size={12} />
      </button>
    </div>
  )
}

export default Themes
