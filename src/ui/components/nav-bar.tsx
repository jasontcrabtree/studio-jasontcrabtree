'use client'

import Link, { LinkProps } from 'next/link'
import DarkModeControl from './dark-mode-control'
import { Dispatch, SetStateAction } from 'react'

interface NavLink extends LinkProps {
    label: string
    public?: boolean
    icon?: string
    order: number
}

const siteLinks: NavLink[] = [
    {
        label: 'Blog',
        href: '/blog',
        public: true,
        order: 1,
    },
    {
        label: 'Linkroll',
        href: '/linkroll',
        public: true,
        order: 1,
    },
    {
        label: 'Resume',
        href: '/resume',
        public: true,
        order: 0,
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
        <nav className="py-16 flex gap-4 items-start flex-col w-full max-w-[1280px] dark:text-zinc-300 text-zinc-700 mx-auto px-24 dark:bg-black dark:text-white bg-white text-gray-950">
            <Link href="/" className="dark:text-zinc-300 text-zinc-700">
                Jason Crabtree
                <span className="text-xs dark:text-zinc-700 text-zinc-300">
                    {' '}
                    est. 2018 - {new Date().getFullYear()}
                </span>
            </Link>
            <div className="flex gap-4 items-center text-sm">
                {links
                    .sort((a, b) => a.order - b.order)
                    .map((link, i) => {
                        return (
                            <Link href={link.href} key={i}>
                                {link.label}
                            </Link>
                        )
                    })}
                <DarkModeControl darkMode={theme} handler={themeHandler} />
            </div>
        </nav>
    )
}

export default NavBar
