import BlogPost, { BlogPostType } from "./blog-post"

const mockPosts = [
    {
        title: "Demo Post One",
        body: "## This is the first post \n",
    },
    {
        title: "Demo Post Two",
        body: "This is the second post, which starts differently",
    },
]

const BlogPosts = ({ posts = mockPosts }: { posts: BlogPostType[] }) => {
    return (
        <div>
            {posts.map((post: BlogPostType, i) => {
                console.log("post", post)
                return <BlogPost {...post} />
            })}
        </div>
    )
}

export default BlogPosts
