"use client"

import { useState } from "react"

import "@/ui/globals.css"
import NavBar from "@/ui/components/nav-bar"
import Footer from "@/ui/components/footer"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const userTime = new Date().getHours()

    // If it's after 18:00 set to dark mode
    const [darkMode, setDarkMode] = useState(userTime > 18)

    return (
        <html lang="en" className={darkMode ? "dark" : ""}>
            <head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Having fun building new and interesting things"
                ></meta>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link
                    href="https://use.typekit.net/hye8foj.css"
                    rel="stylesheet"
                ></link>
            </head>
            <body
                className={`antialiased bg-white dark:bg-black text-gray-800 dark:text-gray-100 min-h-screen text-pretty`}
            >
                <NavBar theme={darkMode} themeHandler={setDarkMode} />
                <div className="w-full text-gray-800">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
