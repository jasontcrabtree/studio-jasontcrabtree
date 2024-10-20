"use client"

import { GeistSans } from "geist/font/sans"
import "@/ui/globals.css"
import NavBar from "@/ui/components/nav-bar"
import { useState } from "react"
import ThemeProvider from "@/ui/components/theme-provider"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <ThemeProvider>
            <html lang="en" className={darkMode ? "dark" : ""}>
                <head>
                    <title>Home</title>
                    <meta
                        name="description"
                        content="Having fun building new and interesting things"
                    ></meta>
                </head>
                <body
                    className={`${GeistSans.className} antialiased h-dvh bg-white dark:bg-black`}
                >
                    <NavBar theme={darkMode} themeHandler={setDarkMode} />
                    <div className="w-full text-slate-800">{children}</div>
                </body>
            </html>
        </ThemeProvider>
    )
}
