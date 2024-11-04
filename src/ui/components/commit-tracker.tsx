import { getCommits } from "@/lib/actions/github-graphql"

export type Include = {
    week: boolean
    month: boolean
    year: boolean
}

const CommitTracker = async ({
    goal,
    inclusions,
    bg,
}: {
    goal: number
    inclusions: Include
    bg: boolean
}) => {
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
        // <div className={${dark: bg-zinc-900 bg-zinc-200} dark: text-zinc - 100 text - zinc - 950 w - fit p - 2`}>
        <div
            className={`${
                bg && "dark:bg-zinc-900 bg-zinc-200"
            } dark:text-zinc-100 text-zinc-950 w-fit p-2`}
        >
            {inclusions.week && (
                <p className="">
                    {weekNum}
                    <span className="tabular-nums">/</span>
                    {goal}wk{" "}
                    <span className="font-normal text-xs">
                        ({Math.round((weekNum / goal) * 100)}
                        %)
                    </span>
                </p>
            )}
            {inclusions.year && inclusions.year && (
                <div className="flex flex-row gap-2 items-center">
                    {inclusions.month && <p>{monthNum}m</p>}
                    {inclusions.year && <p>{yearNum}y</p>}
                </div>
            )}
        </div>
    )
}

export default CommitTracker
