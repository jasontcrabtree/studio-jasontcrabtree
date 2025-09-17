'use client'

import {
    FileDown,
    Globe,
    Mailbox,
    MousePointerClick,
    Origami,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const ContactInfo = ({ className }: { className: string }) => {
    const [isEmailVisible, setIsEmailVisibile] = useState(false)

    return (
        <section className={`${className} text-sm w-full`}>
            <SectionHeading label="Contact Information" />
            <div className="grid md:grid-cols-6 gap-4">
                <span className="flex flex-row gap-3 bg-gray-200 rounded-sm py-5 font-medium items-center justify-center col-span-3">
                    <Globe size={24} />
                    Auckland, New Zealand
                </span>

                <div className="flex flex-row gap-3 bg-gray-200 rounded-sm font-medium items-center justify-center hover:cursor-pointer col-span-3">
                    {!isEmailVisible && (
                        <button
                            className="flex flex-row items-center justify-center gap-2 py-5 hover:bg-tml-blue-400 w-full"
                            onClick={() => {
                                setIsEmailVisibile(!isEmailVisible)
                            }}
                        >
                            <MousePointerClick size={24} />
                            Click for email
                        </button>
                    )}

                    {isEmailVisible && (
                        <a
                            href="mailto:jasontcrabtree@gmail.com"
                            className="flex flex-row gap-3 bg-gray-200 rounded-sm p-1 py-3 font-medium items-center justify-center hover:cursor-pointer"
                        >
                            <Mailbox size={24} />
                            jasontcrabtree@gmail.com
                        </a>
                    )}
                </div>
                <span className="flex flex-row gap-1 bg-gray-200 rounded-sm py-5 font-medium items-center justify-center col-span-2">
                    <Link
                        href="https://github.com/jasontcrabtree"
                        className="flex flex-row gap-2 items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                        </svg>
                        GitHub
                    </Link>
                </span>
                <span className="flex flex-row gap-3 bg-gray-200 rounded-sm py-5 font-medium items-center justify-center col-span-2">
                    <Link
                        href="https://jasontcrabtree.com"
                        className="flex flex-row gap-1 items-center"
                    >
                        <Origami size={24} />
                        Website
                    </Link>
                </span>
                <span className="flex flex-row gap-3 bg-gray-200 rounded-sm py-5 font-medium items-center justify-center col-span-2">
                    <Link
                        href="https://www.linkedin.com/in/jasontcrabtree/"
                        className="flex flex-row gap-3 items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        LinkedIn
                    </Link>
                </span>
            </div>
        </section>
    )
}

const transformStringtoURL = (string: string) => {
    const transformed = encodeURIComponent(string.toLowerCase())

    return transformed
}

const SectionHeading = ({ label }: { label: string }) => {
    const url = transformStringtoURL(label)

    return (
        <h2 id={`${url}`} className="font-semibold text-xl pb-4">
            <Link href={`/resume/#${label}`}>{label}</Link>
        </h2>
    )
}

const Page = () => {
    return (
        <div className="mx-auto w-full max-w-[1280px] pb-16 vert-border pt-48 px-24 -mt-48 min-h-screen-gray-50 text-gray-950">
            <div className="max-w-[800px] mx-auto flex flex-col gap-8">
                <div className="flex flex-row gap-4 items-center w-full">
                    <h1 className="font-bold text-2xl mr-auto">Resume</h1>
                    <p className="text-gray-700 text-sm">Updated: 29/12/2024</p>
                    <a
                        className="text-sm font-bold p-2 bg-blue-600 hover:text-white rounded-sm text-white flex flex-row gap-2 px-4 items-center"
                        href="/jason-crabtree-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        PDF
                        <FileDown size={18} />
                    </a>
                </div>

                <section>
                    <SectionHeading label="Professional Summary" />
                    <p>
                        Front-End Developer with 3 years professional experience
                        building front-end applications, APIs, and websites
                        seeking roles building full-stack web apps with React &
                        TypeScript
                    </p>
                </section>
                <section>
                    <SectionHeading label="Employment History" />
                    <ul className="list-disc pl-4 flex flex-col gap-y-1.5">
                        <li>
                            Software Engineer, Cortex. Auckland NZ May 2024 -
                            Present
                        </li>
                        <li>
                            Front End Developer, Hype & Dexter. Auckland NZ May
                            2021 - Jan 2024
                        </li>
                        <li>
                            Insurance Australia Group (IAG). Auckland NZ Oct
                            2014 - Jan 2019
                        </li>
                        <li>
                            Emergency Call Handler, St John Ambulance. Auckland
                            NZ Sep 2012 - Aug 2014
                        </li>
                    </ul>
                </section>
                <section>
                    <SectionHeading label="Skills & Capabilities" />
                </section>
                <section>
                    <SectionHeading label="Education" />
                </section>
                <section>
                    <SectionHeading label="Awards & Acknowledgments" />
                </section>
                <section>
                    <SectionHeading label="Projects" />
                </section>
                <ContactInfo className="mt-12" />
            </div>
        </div>
    )
}

export default Page
