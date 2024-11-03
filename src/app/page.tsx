import CommitTracker from "@/ui/components/commit-tracker"

export default function Page() {
    return (
        <div className="grid md:grid-cols-4 md:grid-rows-4 w-full h-screen">
            <div className="bg-red-100 justify-center col-start-1 col-end-3 row-start-1 row-end-3">
                <h1>Home</h1>
                <CommitTracker goal={15} />1
            </div>
            <div className="bg-red-200 col-start-2 col-end-4 row-start-1 row-end-3">
                2
            </div>
            <div className="bg-red-300 col-start-3 col-end-5 row-start-1 row-end-3">
                3
            </div>
            <div className="bg-red-400 col-start-2 col-end-4 row-start-2 row-end-4">
                4
            </div>
            <div className="bg-red-500 col-start-1 col-end-3 row-start-3 row-end-5">
                5
            </div>
            <div className="bg-red-600 col-start-2 col-end-4 row-start-3 row-end-5">
                6
            </div>
            <div className="bg-red-700 col-start-3 col-end-5 row-start-3 row-end-5">
                7
            </div>
        </div>
    )
}
