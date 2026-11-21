"use client"

import React, { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react"

type Theme = "dark" | "light"

const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
})

// The inline script in layout.tsx sets data-theme before first paint (saved choice, else the system setting).
// The <html> attribute is the single source of truth; React just subscribes to it.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
  return () => observer.disconnect()
}
const getSnapshot = (): Theme => (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark")
const getServerSnapshot = (): Theme => "dark"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback(() => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem("theme", next)
    } catch {
      /* storage can be blocked; the choice just won't persist */
    }
  }, [])

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle])
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  return useContext(ThemeCtx)
}
