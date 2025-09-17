'use client'

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
    return (
        <PrivateProvider>
            <html lang="en" className={''}>
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
                    className={`antialiased bg-white  text-gray-800  min-h-screen text-pretty ${sourceSerifPro.className} overflow-y-scroll`}
                >
                    <NavBar />
                    <div className="w-full text-gray-800">{children}</div>
                    <Footer />
                </body>
            </html>
        </PrivateProvider>
    )
}
