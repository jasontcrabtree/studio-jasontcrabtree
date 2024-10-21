import BlogPost, { BlogPostType } from "./blog-post"

const mockPosts = [
    {
        title: "Demo Post One",
        body: "## This is the first post \n",
        publishTimestamp: new Date(1729469485),
    },
    {
        title: "Demo Post Two",
        body: "This is the second post, which starts differently",
        publishTimestamp: new Date(1729467485),
    },
]

const BlogPosts = ({ posts = mockPosts }: { posts: BlogPostType[] }) => {
    return (
        <div>
            {posts.map((post: BlogPostType, i) => {
                return <BlogPost key={i} {...post} />
            })}
        </div>
    )
}

export default BlogPosts
