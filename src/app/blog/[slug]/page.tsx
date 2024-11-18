import { getBlogPosts } from "@/lib/utils/blog"

export async function generateStaticParams() {
    const posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params

    const post = getBlogPosts().find((post) => {
        return post.slug === slug
    })

    return (
        <article>
            <h1>{post?.metadata.title}</h1>
            {post?.metadata.summary && post.metadata.summary}

            <main>{post?.body}</main>
        </article>
    )
}

export default Page
