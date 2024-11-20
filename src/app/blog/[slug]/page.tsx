import { getBlogPosts } from "@/lib/utils/blog"

export async function generateStaticParams() {
    const posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

type ParamsType = Promise<{ slug: string[] }>

// export default async function Challenge({ params }: { params: tParams }) {
//     const { slug } = await params
//     const productID = slug[1]
// }

async function Page({ params }: { params: ParamsType }) {
    const { slug } = await params

    const post = getBlogPosts().find((post) => {
        return post.slug === slug[1]
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
