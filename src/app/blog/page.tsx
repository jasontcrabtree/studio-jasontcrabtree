import BlogPosts from "@/ui/components/blog-posts"

export default function Page() {
    return (
        <div className="mx-auto w-full max-w-[1280px] pt-32 pb-32 px-24 -mt-48 min-h-screen flex flex-col gap-8 dark:bg-black dark:text-white bg-gray-50 text-gray-950">
            <div className="p-12 w-fit mt-8 border border-gray-800 border-opacity-50 bg-gray-800 text-white rounded-xl">
                <h1 className="text-emerald-600">Personal blog</h1>
                <p className="max-w-prose">
                    Mostly blog posts about things I'm learning or doing as a
                    developer (and once designer). No guarantees though. I love
                    seeing other people's blogs that have been tended to over
                    years, decades, and hope to get there myself one day.
                </p>
            </div>
            <BlogPosts limit={100} className="w-full max-w-prose" />
        </div>
    )
}
