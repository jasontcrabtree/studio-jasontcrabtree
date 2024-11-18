import BlogPosts from "@/ui/components/blog-posts"
import CommitTracker from "@/ui/components/commit-tracker/server"

export default function Page() {
    // const buckets = await listFilesInBucket({ bucketName: "mark-1-personal" })
    // console.log(buckets)

    return (
        <div className="w-full flex flex-col p-4">
            <CommitTracker />

            <div>
                <h2>Resume</h2>
                <ul className="list-disc pl-4">
                    <li>Cortex</li>
                    <li>Hype & Dexter</li>
                    <li>Insurance Australia Group (IAG)</li>
                    <li>St John Ambulance Service</li>
                </ul>
            </div>

            <div>
                <h2>Projects</h2>
                <ul className="list-disc pl-4">
                    <li>jasontcrabtree.com</li>
                    <li>CRM Clone</li>
                    <li>Visit Again</li>
                    <li>Safe Midwife Coaching</li>
                </ul>
            </div>

            <div>
                <h2>Blog</h2>
                <BlogPosts />
            </div>
        </div>
    )
}
