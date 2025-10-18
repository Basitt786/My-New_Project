
"use client"


import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({children,...props}) {
  return (
  <NextThemesProvider {...props} enableSystem defaultTheme="system" attribute="class">
    {children}
  </NextThemesProvider>
  )
}