"use client"

import { GeistSans } from "geist/font/sans"
import { useState } from "react"

import "@/ui/globals.css"
import NavBar from "@/ui/components/nav-bar"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <html lang="en" className={darkMode ? "dark" : ""}>
            <head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Having fun building new and interesting things"
                ></meta>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body
                className={`${GeistSans.className} antialiased bg-white dark:bg-black min-h-screen`}
            >
                <NavBar theme={darkMode} themeHandler={setDarkMode} />
                <div className="w-full text-slate-800">{children}</div>
            </body>
        </html>
    )
}
