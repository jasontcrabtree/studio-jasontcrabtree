import BlogPosts from "@/ui/components/blog-posts"
import CommitTracker from "@/ui/components/commit-tracker/server"

export default function Page() {
    // const buckets = await listFilesInBucket({ bucketName: "mark-1-personal" })
    // console.log(buckets)

    return (
        <div className="w-full flex flex-col p-4">
            <div className="w-[800px] mx-auto flex flex-col gap-8">
                <div>
                    <h1 className="font-semibold text-3xl pb-8">
                        Hello, I'm Jason!
                    </h1>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">Projects</h2>
                    <ul className="list-disc pl-4">
                        <li>jasontcrabtree.com</li>
                        <li>CRM Clone</li>
                        <li>Visit Again</li>
                        <li>Safe Midwife Coaching</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">Blog</h2>
                    <BlogPosts limit={4} />
                </div>

                <CommitTracker />
            </div>
        </div>
    )
}
