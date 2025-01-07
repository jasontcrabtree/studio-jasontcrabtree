import { MDXRemote } from 'next-mdx-remote/rsc'
import { calculateTimeToRead, getBlogPosts } from '@/lib/utils/blog'

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

    // <div className="flex flex-col mx-auto w-full max-w-[1280px] vert-border pb-12 px-24 pt-48 -mt-48 min-h-screen dark:bg-black dark:text-white bg-gray-50 text-gray-950 items-center">

    return (
        <article
            className="w-full max-w-[1280px] mx-auto leading-normal
         dark:text-white text-gray-950 vert-border flex flex-col vert-border pb-12 px-24 pt-48 -mt-48 min-h-screen dark:bg-black bg-gray-50"
        >
            <div className="max-w-[800px] w-full flex flex-col gap-6 mx-auto">
                <section className="">
                    <h1 className="text-tml-blue-400 dark:text-emerald-300">
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
