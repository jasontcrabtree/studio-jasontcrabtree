import BlogPosts from '@/ui/components/blog-posts'

export default function Page() {
    return (
        <div className="flex flex-col mx-auto w-full max-w-[1280px] vert-border pb-12 px-24 pt-48 -mt-48 min-h-screen dark:bg-black dark:text-white bg-gray-50 text-gray-950 items-center">
            <div className="flex flex-col gap-4">
                <section className="p-8 max-w-[800px] w-full bg-tml-blue-700 text-gray-100 rounded flex flex-col gap-2">
                    <h1 className="text-white">Personal blog</h1>
                    <p className="max-w-[800px]">
                        Welcome to my blog! I try to write about things I'm
                        learning about (programming, design, business) or things
                        I'm thinking about. Forever aspiring to write more
                        often. Maybe 2025 will be my year?
                    </p>
                    <p className="max-w-[800px]">
                        I love seeing people's blogs spread out over years and
                        decades and hope to get there myself one day. I hope you
                        come along for the ride!
                    </p>
                </section>
                <BlogPosts limit={100} className="w-full max-w-[800px]" />
            </div>
        </div>
    )
}
