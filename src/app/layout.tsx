import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
    title: "Home",
    description:
        "A personal blog for learning, sharing and creative expression",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${GeistSans.className} antialiased bg-gradient-to-b from-yellow-50 to-yellow-300 h-dvh`}
            >
                <nav></nav>
                <div className="w-full text-slate-800">{children}</div>
            </body>
        </html>
    )
}
