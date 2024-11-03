"use client"

import Link, { LinkProps } from "next/link"
import DarkModeControl from "./dark-mode-control"
import { Dispatch, SetStateAction } from "react"

interface NavLink extends LinkProps {
    label: String
    public?: boolean
    icon?: string
    order: number
}

const siteLinks: NavLink[] = [
    {
        label: "Home",
        href: "/",
        public: true,
        order: 0,
    },
    {
        label: "Blog",
        href: "/blog",
        public: true,
        order: 1,
    },
    {
        label: "About",
        href: "/about",
        public: true,
        order: 2,
    },
]

const NavBar = ({
    theme,
    themeHandler,
    links = siteLinks,
}: {
    theme: boolean
    themeHandler: Dispatch<SetStateAction<boolean>>
    links?: NavLink[]
}) => {
    return (
        <nav className="p-4 flex md:flex-row gap-2 justify-end w-full dark:text-zinc-50">
            {links.map((link, i) => {
                return (
                    <Link href={link.href} key={i}>
                        {link.label}
                    </Link>
                )
            })}
            <DarkModeControl darkMode={theme} handler={themeHandler} />
        </nav>
    )
}

export default NavBar
