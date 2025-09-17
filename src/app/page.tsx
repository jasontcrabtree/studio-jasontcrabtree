import BlogPosts from '@/ui/components/blog-posts'

export default async function Page() {
    return (
        <div
            className="mx-auto w-full max-w-[1280px] pb-16 px-12 pt-48 -mt-48 min-h-screen
          bg-gray-50 text-gray-950 flex flex-col items-center gap-12 vert-border"
        >
            <div className="flex flex-col lg:flex-row gap-12 items-center w-full max-w-[800px]">
                <div className="flex-1 w-full flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">
                        <span className="text-tml-blue-400">
                            Jason Crabtree
                        </span>
                    </h1>
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

            <div className="w-fit flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-tml-blue-400">
                    Latest Blog Posts
                </h1>
                <BlogPosts limit={3} />
            </div>
        </div>
    )
}
