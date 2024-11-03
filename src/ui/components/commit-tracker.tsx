// import { getContributionData } from "@/lib/actions/github-graphql"

import { getCommits } from "@/lib/actions/github-graphql"

const apiClient = {}

const CommitTracker = async () => {
    // const contributions = await getContributionData()

    const data = await getCommits()

    console.log(data)

    return <div>Commit tracker</div>
}

export default CommitTracker
