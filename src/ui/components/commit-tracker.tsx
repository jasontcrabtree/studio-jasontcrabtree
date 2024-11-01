// import { getContributionData } from "@/lib/actions/github-graphql"

import { getCommits } from "@/lib/actions/github-graphql"

const apiClient = {}

const CommitTracker = async () => {
    // const contributions = await getContributionData()

    getCommits()

    return <div>Commit tracker</div>
}

export default CommitTracker
