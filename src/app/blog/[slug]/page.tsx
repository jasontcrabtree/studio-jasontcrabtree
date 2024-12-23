import { MDXRemote } from "next-mdx-remote/rsc"

import { getBlogPosts } from "@/lib/utils/blog"

export async function generateStaticParams() {
    const posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const post = getBlogPosts().find((post) => {
        return post.slug === slug
    })

    console.log(post)

    if (!post?.body) {
        return null
    }

    return (
        <article
            className="w-full max-w-[96ch] mx-auto leading-normal flex flex-col gap-4 dark:bg-black
         dark:text-white bg-gray-50 text-gray-950 p-12"
        >
            <h1>{post?.metadata.title}</h1>
            {post?.metadata.summary && post.metadata.summary}

            <MDXRemote source={post.body} />
        </article>
    )
}

export default Page
