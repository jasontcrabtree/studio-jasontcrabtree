export type BlogPostType = {
    title: string
    body: string
}

const BlogPost = ({ title, body }: BlogPostType) => {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {body && <p>{body}</p>}
        </div>
    )
}

export default BlogPost
