'use client'

import Link, { LinkProps } from 'next/link'

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
        public: false,
        order: 1,
    },
    {
        label: 'Resume',
        href: '/jason-crabtree-cv-2025.pdf',
        public: true,
        order: 0,
    },
]

const NavBar = ({
    // theme,
    // themeHandler,
    links = siteLinks,
}: {
    // theme: boolean
    // themeHandler: Dispatch<SetStateAction<boolean>>
    links?: NavLink[]
}) => {
    return (
        <nav className="py-16 flex flex-row gap-4 justify-between w-full max-w-[800px] mx-auto bg-white text-gray-950">
            <Link href="/" className="text-zinc-700">
                jasontcrabtree.com
                <span className="text-xs text-zinc-500">
                    {' '}
                    est. 2018 - {new Date().getFullYear()}
                </span>
            </Link>
            <div className="flex gap-4 items-center text-sm">
                {links
                    .sort((a, b) => a.order - b.order)
                    .filter((a) => a.public === true)
                    .map((link, i) => {
                        return (
                            <Link href={link.href} key={i}>
                                {link.label}
                            </Link>
                        )
                    })}
            </div>
        </nav>
    )
}

export default NavBar
