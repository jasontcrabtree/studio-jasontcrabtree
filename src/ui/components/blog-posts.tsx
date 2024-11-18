import Link from "next/link"

import { getBlogPosts } from "@/lib/utils/blog"

export type BlogPostType = {
    metadata: BlogMetaType
    body: string
    slug: string
}

export type BlogMetaType = {
    title: string
    publishTimestamp: string
    summary?: string
    ogImage?: string
}

const BlogPost = ({ metadata, slug }: Partial<BlogPostType>) => {
    if (!metadata) {
        return null
    }

    const published = Date.parse(metadata.publishTimestamp)

    console.log(published)

    return (
        <li>
            <Link
                className="dark:text-slate-100 text-slate-800 cursor-pointer dark:hover:text-green-500"
                href={`/blog/${slug}`}
            >
                {metadata.title}
            </Link>
        </li>
    )
}

const BlogPosts = () => {
    const posts = getBlogPosts()

    return (
        <ul className="flex flex-col gap-4">
            {posts.map((post: BlogPostType, i) => {
                return (
                    <BlogPost
                        key={i}
                        metadata={post.metadata}
                        slug={post.slug}
                    />
                )
            })}
        </ul>
    )
}

export default BlogPosts
