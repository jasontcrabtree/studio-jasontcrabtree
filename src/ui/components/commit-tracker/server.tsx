"use server"

import ClientComponent from "./client"
import {
    ContributionDataType,
    fetchCommitsAction,
    GraphqlResponseType,
} from "@/lib/actions/github-graphql"

const fetchCommits = async (): Promise<
    GraphqlResponseType<ContributionDataType>
> => {
    const data = await fetchCommitsAction()

    return data
}

const CommitTracker = async () => {
    const { data } = await fetchCommits()

    if (!data) {
        return null
    }

    return <ClientComponent data={data} />
}

export default CommitTracker
