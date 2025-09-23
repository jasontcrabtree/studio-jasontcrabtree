import BlogPosts from '@/ui/components/blog-posts'
import CaseStudies from '@/ui/components/case-studies'
import { ArrowBigRight } from 'lucide-react'

const commericalWork = [
    {
        link: 'https://commscouncil.nz/',
        title: 'Comms Council',
        technologies: 'JavaScript, CSS, HTML, GraphQL, HubSpot CMS',
        description:
            'Sucessful re-build of marketing website based on designs provided by client',
        imageSrc: 'comms-council.png',
    },
    {
        link: 'https://www.integrationglue.com/',
        title: 'Integration Glue',
        technologies: 'JavaScript, CSS, HTML, GraphQL, HubSpot CMS',
        description:
            'Brand new marketing website build, completed with clients designs',
        imageSrc: 'integration-glue.png',
    },
    {
        link: 'https://www.awa.asn.au/',
        title: 'Australian Water Association',
        technologies: 'JavaScript, CSS, HTML, HubSpot CMS, HubSpot APIs',
        description:
            'Re-build of existing marketing website from in-house designs',
        imageSrc: 'awa.png',
    },
]

const personalProjects = [
    {
        link: 'https://tomorrowland-artists.vercel.app/',
        title: 'Tomorrowland Artists',
        codeSrc: 'https://github.com/jasontcrabtree/tomorrowland-artists-2025',
        technologies: 'React, NextJS, TypeScript, TailwindCSS',
        description:
            'DJ artist randomiser with deep-links to open selected apps',
        imageSrc: 'tml-artists.png',
    },
    {
        link: 'https://visitagain.vercel.app/',
        title: 'Visit Again',
        codeSrc: 'https://github.com/jasontcrabtree/visit-again',
        technologies:
            'React, NextJS, TypeScript, Prisma, PostgresQL, NextAuth, Styled Components',
        description: 'Food review web app with Google SSO, DB storage',
        imageSrc: 'visit-again.png',
    },
    {
        link: 'https://sagemidwifecoaching.co.nz/',
        title: 'Sage Midwife Coaching',
        technologies: 'React, NextJS, Prismic CMS, Styled Components, Netlify',
        description: 'Small business marketing website built with Prismic CMS',
        imageSrc: 'smc.png',
    },
]

export default async function Page() {
    return (
        <div
            className="mx-auto w-full max-w-[1280px] pb-16 md:px-12 px-6 pt-48 -mt-48 min-h-screen
          bg-gray-50 text-gray-950 flex flex-col items-center gap-12 vert-border"
        >
            <div className="flex flex-col gap-4 items-start w-full max-w-[800px]">
                <div className="flex-1 w-full flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold flex flex-col items-start gap-4 max-w-[32ch]">
                        <span className="text-tml-blue-400 flex flex-row items-center gap-2">
                            Jason Crabtree
                            <ArrowBigRight />
                        </span>
                        <span className="text-tml-red-500 text-5xl italic">
                            Software Engineer and UI development Expert in
                            London, UK
                        </span>
                    </h1>
                </div>
                <p className="text-pretty">
                    Hey there, nice to meet you! I'm Jason, a Front End
                    Developer originally from Auckland, New Zealand. In
                    September 2025 I moved from Auckland to London. I made the
                    permanent move because I want to have better career
                    opportunities, both in terms of the type of work I can do
                    and contribute to, the side and scale of the team, and the
                    variety of work available.
                </p>
                <p className="text-pretty">
                    I'm deeply passionate about doing the best job I can,
                    working extremely well with others, and always learning,
                    growing and pushing myself. Some of my favourite interests
                    and technologies are NextJS, React, TypeScript, Tailwind,
                    and Figma. I'm actively looking for a job in Frontend or
                    Fullstack Development as of September, 2025.
                </p>
                <p className="text-pretty">
                    If any of that resonates, I'd love to hear from you! You can
                    reach me via email at jasontcrabtree@gmail.com
                </p>
            </div>

            <div className="w-fit flex flex-col gap-4 max-w-[800px]">
                <div className="flex flex-row gap-2 items-start">
                    <h1 className="text-2xl font-bold text-tml-blue-400 flex-1">
                        Commercial Case Studies
                    </h1>
                    <p className="flex-[1.5]">
                        A selection of live and publically announched projects I
                        worked on while working in software development agencies
                    </p>
                </div>
                <CaseStudies projects={commericalWork} />
            </div>

            <div className="w-fit flex flex-col gap-4 max-w-[800px]">
                <div className="flex flex-row gap-2 items-start">
                    <h1 className="text-2xl font-bold text-tml-red-400 flex-1">
                        Side Hustle Projects
                    </h1>
                    <p className="flex-[1.5]">
                        Side hustle, personal project & freelance projects to
                        build skills and keep up to date with the fast moving
                        web development field
                    </p>
                </div>
                <CaseStudies projects={personalProjects} />
            </div>

            <div className="w-fit flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-tml-blue-400">
                    Blog Posts
                </h1>
                <BlogPosts limit={3} />
            </div>
        </div>
    )
}
