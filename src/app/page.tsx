import BlogPosts from '@/ui/components/blog-posts'
import { ArrowBigRight } from 'lucide-react'

function removeEveryOther(arr: number[]) {
    //your code here
}

export default async function Page() {
    const res = removeEveryOther([1, 2, 3, 4, 5])

    console.log(res)

    return (
        <div
            className="mx-auto w-full max-w-[1280px] pb-16 px-12 pt-48 -mt-48 min-h-screen
          bg-gray-50 text-gray-950 flex flex-col items-center gap-12 vert-border"
        >
            <div className="flex flex-col gap-4 items-start w-full max-w-[800px]">
                <div className="flex-1 w-full flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold flex flex-col items-start gap-1 max-w-[32ch]">
                        <span className="text-tml-blue-400 flex flex-row items-center gap-1">
                            Jason Crabtree
                            <ArrowBigRight />
                        </span>
                        <span className="text-tml-red-500 text-5xl italic">
                            Frontend Developer in London, UK
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

            {/* <div className="w-fit">
                <h1 className="text-2xl font-bold text-emerald-500">
                    Personal Projects
                </h1>
                <BlogPosts limit={3} />
            </div>

            <div className="w-fit">
                <h1 className="text-2xl font-bold text-emerald-500">
                    Interests & Goals
                </h1>
                <BlogPosts limit={3} />
            </div> */}

            <div className="w-fit flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-tml-blue-400">
                    Latest Blog Posts
                </h1>
                <BlogPosts limit={3} />
            </div>
        </div>
    )
}
