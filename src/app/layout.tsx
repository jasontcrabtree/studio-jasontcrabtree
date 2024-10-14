import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason T Crabtree",
  description: "A personal blog for learning, sharing and creative expression",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased bg-yellow-50`}
      >
        <nav>

        </nav>
        <div className="w-full max-w-[720px] mx-auto my-12 ">
          {children}
        </div>
      </body>
    </html>
  );
}
