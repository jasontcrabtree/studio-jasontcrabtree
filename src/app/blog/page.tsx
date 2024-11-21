import BlogPosts from "@/ui/components/blog-posts"

export default function Page() {
    return (
        <div className="mx-auto max-w-[800px] w-full flex flex-col gap-8">
            <h1>Blog</h1>
            <BlogPosts limit={100} />
        </div>
    )
}
