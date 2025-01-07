'use client'

import { useState } from 'react'

import '@/ui/globals.css'
import NavBar from '@/ui/components/nav-bar'
import Footer from '@/ui/components/footer'
import PrivateProvider from '@/ui/components/auth-provider'

import { Source_Serif_4 } from 'next/font/google'
const sourceSerifPro = Source_Serif_4({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const userTime = new Date().getHours()
    const [darkMode, setDarkMode] = useState(userTime > 18) // Dark mode in spooky time (after 6pm)

    return (
        <PrivateProvider>
            <html lang="en" className={darkMode ? 'dark' : ''}>
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
                    className={`antialiased bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen text-pretty ${sourceSerifPro.className} overflow-y-scroll`}
                >
                    <NavBar theme={darkMode} themeHandler={setDarkMode} />
                    <div className="w-full text-gray-800">{children}</div>
                    <Footer />
                </body>
            </html>
        </PrivateProvider>
    )
}
