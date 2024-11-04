import { getCommits } from "@/lib/actions/github-graphql"

const CommitTracker = async ({ goal = 15 }: { goal: number }) => {
    const { data, message } = await getCommits()

    if (message || !data) {
        return <div>{message}</div>
    }

    const node = data?.viewer

    const weekNum =
        node.contributionsThisWeek.contributionCalendar.totalContributions
    const monthNum =
        node.contributionsLastMonth.contributionCalendar.totalContributions
    const yearNum =
        node.contributionsThisYear.weekContributions.totalContributions

    return (
        <div className="dark:bg-indigo-900 bg-indigo-200 dark:text-indigo-100 text-indigo-950 shadow-xl rounded p-2 m-2 w-fit">
            <p className="font-bold">
                This Week {weekNum}/{goal}{" "}
                <span className="font-normal text-xs">
                    ({Math.round((weekNum / goal) * 100)}
                    %)
                </span>
            </p>
            <p>Last Month {monthNum}</p>
            <p>Full Year {yearNum}</p>
        </div>
    )
}

export default CommitTracker
