import { FileDown } from "lucide-react"
import Link from "next/link"

const ContactInfo = ({ className }: { className: string }) => {
    return (
        <section className={`${className} text-sm w-full dark:text-slate-100`}>
            <SectionHeading label="Contact Information" />
            <div className="grid md:grid-cols-3 gap-2">
                <span className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 rounded p-1 py-3 font-medium items-center justify-center">
                    Auckland, New Zealand
                </span>

                <a
                    href="mailto:jasontcrabtree@gmail.com"
                    className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 rounded p-1 py-3 font-medium items-center justify-center hover:cursor-pointer"
                >
                    jasontcrabtree@gmail.com
                </a>

                <button className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 rounded p-1 py-3 font-medium items-center justify-center">
                    Phone Number
                </button>
                <span className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 rounded p-1 py-3 font-medium items-center justify-center">
                    <Link href="https://github.com/jasontcrabtree">GitHub</Link>
                </span>
                <span className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 rounded p-1 py-3 font-medium items-center justify-center">
                    <Link href="https://jasontcrabtree.com">Website</Link>
                </span>
                <span className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-900 dark:text-slate-200 rounded p-1 py-3 font-medium items-center justify-center">
                    <Link href="https://www.linkedin.com/in/jasontcrabtree/">
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
        <div className="">
            <div className="max-w-[720px] mx-auto flex flex-col gap-8">
                <div className="flex flex-row gap-4 items-center w-full">
                    <h1 className="font-bold text-2xl mr-auto">Resume</h1>
                    <p className="text-slate-700">Updated: 19/11/2024</p>
                    <button className="text-sm font-bold p-2 bg-blue-600 rounded text-white flex flex-row gap-2 px-4 items-center">
                        PDF
                        <FileDown size={18} />
                    </button>
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
