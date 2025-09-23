import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPosts } from '@/lib/utils/blog'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
    const posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const post = getBlogPosts().find((post) => {
        if (!post.metadata.published) {
            return null
        }

        return post.slug === slug
    })

    if (!post?.body) {
        return null
    }

    return (
        <article
            className="w-full max-w-[1280px] mx-auto leading-normal
          text-gray-950 vert-border flex flex-col vert-border md:pb-12 md:px-24 p-6 pt-40 -mt-40 min-h-screen  bg-gray-50"
        >
            <div className="max-w-[800px] w-full flex flex-col gap-6 mx-auto">
                <Link
                    href="/"
                    className="text-tml-blue-600 flex flex-row gap-1 items-center"
                >
                    <ArrowLeft size={16} /> Return to blog
                </Link>
                <section className="">
                    <h1 className="text-tml-blue-400 ">
                        {post?.metadata.title}
                    </h1>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-gray-500">
                            {post?.metadata.wordcount} min read
                        </p>
                        <span>|</span>
                        <p className=" text-gray-500">
                            Published{' '}
                            {post?.metadata.publishedDate &&
                                new Date(
                                    post.metadata.publishedDate
                                ).toLocaleDateString()}
                        </p>
                    </div>
                </section>

                <MDXRemote source={post.body} />
            </div>
        </article>
    )
}

export default Page
