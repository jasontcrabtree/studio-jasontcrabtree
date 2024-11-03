/*
Handles connecting to the GitHub graphql API in a server action and returns data via a simple interface based on different calls
*/

export const fetchData = async (): Promise<
    GraphqlResponseType<ContributionDataType>
> => {
    const GH_API_KEY = process.env.GH_PERSONAL_ACCESS_TOKEN_FINE_GRAINED
    const API_URL = "https://api.github.com/graphql"

    if (!GH_API_KEY) {
        throw new Error("API key invalid")
    }

    const options = {
        method: "POST",
        url: "https://api.github.com/graphql",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GH_API_KEY}`,
        },
    }

    const query = JSON.stringify({
        query: `query {
            viewer {
                login
                contributionsCollection {
                contributionYears
                contributionCalendar {
                    totalContributions
                    weeks {
                    contributionDays {
                        contributionCount
                        contributionLevel
                        color
                        date
                        weekday
                    }
                    }
                    months {
                    firstDay
                    totalWeeks
                    }
                }
                }
            }
            }`,
        variables: {},
    })

    const res = await fetch(API_URL, {
        ...options,
        body: query,
    })

    if (!res.ok) {
        return {
            message: "Error fetching contributions data",
        }
    }

    const json = await res.json()

    return json
}

export const getCommits = async () => {
    const res = await fetchData()

    if (res.message) {
        return res.message
    }

    if (res.data) {
        const data = res.data?.viewer

        console.log("HERE", data.contributionsCollection.contributionCalendar)
    }
}

// TS Union type option (which requires type guard approach)
// type GraphqlResponseUnionType =
//     | {
//           message: string
//       }
//     | {
//           data: {
//               viewer: {
//                   login: string
//                   contributionsCollection: {
//                       contributionYears: number[]
//                       contributionCalendar: any
//                   }
//               }
//           }
//       }

// TS Generics option
type GraphqlResponseType<T> = {
    data?: T
    message?: string
}

type ContributionDataType = {
    viewer: {
        login: string
        contributionsCollection: {
            contributionYears: number[]
            contributionCalendar: any
        }
    }
}
