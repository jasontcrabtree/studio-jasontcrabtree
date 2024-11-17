import CommitTracker from "@/ui/components/commit-tracker/server"

export default function Page() {
    // const buckets = await listFilesInBucket({ bucketName: "mark-1-personal" })
    // console.log(buckets)

    return (
        <div className="grid md:grid-cols-4 md:grid-rows-4 w-full h-full">
            <h1>Home page</h1>
            <CommitTracker />
        </div>
    )
}
