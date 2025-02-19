import BlogPosts from '@/ui/components/blog-posts'
import IntroVideo from '@/ui/components/intro-video'

export default async function Page() {
    return (
        <div
            className="mx-auto w-full max-w-[1280px] pb-16 px-12 pt-48 -mt-48 min-h-screen
         dark:bg-black dark:text-white bg-gray-50 text-gray-950 flex flex-col items-center gap-12 vert-border"
        >
            <div className="flex flex-col lg:flex-row gap-12 items-center w-full">
                <IntroVideo />
                <div className="flex-1 w-full flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">
                        <span className="text-tml-blue-400">
                            Jason Crabtree™;
                        </span>{' '}
                        Software Engineer from{' '}
                        <span className="text-emerald-500">New Zealand</span>{' '}
                        <br />
                        eager to take on the world
                    </h1>
                    <p>
                        Hello, I’m Jason. I'm a Full Stack Developer passionate
                        about JavaScript, TypeScript, React, NextJS, NodeJS,
                        GraphQL, and Design and bringing these together as part
                        of a team to make effective, scalable web applications.
                    </p>
                    <p>
                        My perfect workday starts with building a new component
                        from the design team. After finishing off the first
                        version and my second coffee of the day, I revist old
                        code to rewrite it for future use, improving it along
                        the way. An invaluable lesson from an old boss, "use it
                        3 times, turn it.
                    </p>
                </div>
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

            <div className="w-fit">
                <h1 className="text-2xl font-bold text-emerald-500">
                    Latest Blog Posts
                </h1>
                <BlogPosts limit={3} />
            </div>
        </div>
    )
}
