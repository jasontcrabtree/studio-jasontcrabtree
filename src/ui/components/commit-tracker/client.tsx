'use client'

import { ContributionDataType } from '@/lib/actions/github-graphql'

export type Include = {
    week: boolean
    month: boolean
    year: boolean
}

const inclusions = {
    week: true,
    month: false,
    year: false,
}

const goal = 15
const bg = false

const ClientComponent = ({ data }: { data: ContributionDataType }) => {
    const node = data?.viewer

    const weekNum =
        node.contributionsThisWeek.contributionCalendar.totalContributions
    const monthNum =
        node.contributionsLastMonth.contributionCalendar.totalContributions
    const yearNum =
        node.contributionsThisYear.weekContributions.totalContributions

    return (
        <div className={`${bg && 'bg-zinc-200'}  text-zinc-950 w-fit p-2`}>
            {inclusions.week && (
                <p className="">
                    {weekNum}
                    <span className="tabular-nums">/</span>
                    {goal}wk{' '}
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

export default ClientComponent
