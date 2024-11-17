export type BlogPostType = {
    title: string
    body: string
    publishTimestamp: Date
}

const BlogPost = ({ title, body, publishTimestamp }: BlogPostType) => {
    return (
        <div>
            {publishTimestamp && <p>{publishTimestamp.getDate()}</p>}
            {title && <h1>{title}</h1>}
            {body && <p>{body}</p>}
        </div>
    )
}

export default BlogPost
