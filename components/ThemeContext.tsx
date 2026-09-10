"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const initial: Theme = saved === "light" ? "light" : "dark"

    setTheme(initial)
    document.documentElement.setAttribute("data-theme", initial)
  }, [])

  const toggle = () => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark"

      document.documentElement.setAttribute("data-theme", next)
      localStorage.setItem("theme", next)

      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
