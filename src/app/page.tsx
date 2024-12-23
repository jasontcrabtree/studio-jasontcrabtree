import BlogPosts from "@/ui/components/blog-posts"

export default async function Page() {
    return (
        <div
            className="mx-auto w-full max-w-[1280px] pb-16 pt-48 px-24 -mt-48 min-h-screen
         dark:bg-black dark:text-white bg-gray-50 text-gray-950 flex flex-col items-center gap-12 vert-border"
        >
            <div className="flex md:flex-row gap-12 items-center w-full">
                <div className="w-full h-80 bg-gray-600 rounded-sm flex-1"></div>
                <div className="flex-1 w-full flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">
                        Title Case Page Title
                    </h1>
                    <p>Intro paragraph one, about two sentences.</p>
                    <p>Second intro, about three sentences</p>
                </div>
            </div>

            <div className="w-fit">
                <h1 className="text-2xl font-bold text-emerald-600">
                    Personal Projects
                </h1>
                <BlogPosts limit={3} />
            </div>

            <div className="w-fit">
                <h1 className="text-2xl font-bold text-emerald-600">
                    Interests & Goals
                </h1>
                <BlogPosts limit={3} />
            </div>

            <div className="w-fit">
                <h1 className="text-2xl font-bold text-emerald-600">
                    Latest Blog Posts
                </h1>
                <BlogPosts limit={3} />
            </div>
        </div>
    )
}
