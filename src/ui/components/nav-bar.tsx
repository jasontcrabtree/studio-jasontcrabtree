"use client"

import Link, { LinkProps } from "next/link"
import DarkModeControl from "./dark-mode-control"
import { Dispatch, SetStateAction } from "react"
import CommitTracker from "./commit-tracker"
import { Circle } from "lucide-react"

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
        <nav className="p-4 flex md:flex-row gap-2 items-center justify-between w-full dark:text-zinc-300 text-zinc-700">
            <Link href="/" className="dark:text-zinc-300 text-zinc-700">
                Jason Crabtree
                <span className="text-xs dark:text-zinc-700 text-zinc-300">
                    {" "}
                    est. 2018 - {new Date().getFullYear()}
                </span>
            </Link>
            <div className="flex gap-4 items-center">
                {links.map((link, i) => {
                    return (
                        <Link href={link.href} key={i}>
                            {link.label}
                        </Link>
                    )
                })}
                {/* <CommitTracker
                    goal={15}
                    inclusions={{
                        week: true,
                        month: false,
                        year: false,
                    }}
                    bg={false}
                /> */}
                <DarkModeControl darkMode={theme} handler={themeHandler} />
            </div>
        </nav>
    )
}

export default NavBar
