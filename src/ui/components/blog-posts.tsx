import Link from 'next/link'

import { getBlogPosts } from '@/lib/utils/blog'
import { Clock1, PencilLine } from 'lucide-react'

export type BlogPostType = {
    metadata: BlogMetaType
    body: string
    slug: string
}

export type BlogMetaType = {
    title: string
    publishedDate: string
    published?: boolean
    wordcount: string
    summary?: string
    ogImage?: string
}

const BlogPost = ({ metadata, slug }: Partial<BlogPostType>) => {
    if (!metadata) {
        return null
    }

    return (
        <li className="list-none px-8 py-4 bg-white dark:bg-gray-800 flex flex-col gap-1">
            <Link
                className="dark:text-gray-100 text-gray-700 cursor-pointer dark:hover:text-green-500 text-semibold"
                href={`/blog/${slug}`}
            >
                {metadata.title}
            </Link>

            <div className="flex flex-row items-center gap-2 text-gray-500 dark:text-gray-400 ">
                {metadata.wordcount && (
                    <>
                        <p className="flex flex-row gap-1 items-center">
                            <Clock1 size={16} />
                            {metadata.wordcount} min read
                        </p>
                        <span>|</span>
                    </>
                )}

                <p className="flex flex-row gap-1 items-center">
                    <PencilLine size={16} />

                    {new Date(metadata.publishedDate).toLocaleDateString()}
                </p>
            </div>
        </li>
    )
}

const BlogPosts = ({
    limit,
    className,
}: {
    limit: number
    className?: string
}) => {
    const posts = getBlogPosts()

    const publishedPosts = posts.filter((post) => {
        return post.metadata.published
    })

    return (
        <ul className={`flex flex-col gap-4 p-0 ${className}`}>
            {publishedPosts.slice(0, limit).map((post: BlogPostType, i) => {
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
