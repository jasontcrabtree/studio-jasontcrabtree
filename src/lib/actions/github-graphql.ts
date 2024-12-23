/*
Handles connecting to the GitHub graphql API in a server action and returns data via a simple interface based on different calls
*/

const queryString = `query ($weekStart: DateTime, $monthStart: DateTime, $prevMonthStart: DateTime, $prevMonthEnd: DateTime, $yearStart: DateTime, $endDate: DateTime) {
  viewer {
    login
    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
      contributionYears
    }
    contributionsThisWeek: contributionsCollection(from: $weekStart, to: $endDate) {
      contributionCalendar {
        totalContributions
      }
    }
    contributionsThisMonth: contributionsCollection(from: $monthStart, to: $endDate) {
      contributionCalendar {
        totalContributions
      }
    }
    contributionsLastMonth: contributionsCollection(
      from: $prevMonthStart
      to: $prevMonthEnd
    ) {
      contributionCalendar {
        totalContributions
      }
    }
    contributionsThisYear: contributionsCollection(from: $yearStart, to: $endDate) {
      weekContributions: contributionCalendar {
        totalContributions
      }
    }
  }
}`

const contributionDates = () => {
    const today = new Date()

    // Start of current week (Monday)
    const previousMonday = new Date(today)
    const findDaysSinceMonday = (today.getDay() + 6) % 7
    previousMonday.setDate(today.getDate() - findDaysSinceMonday)

    // Start of current month
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

    // Prev month start & end
    const prevMonthStart = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        1
    )
    const prevMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0)

    const yearStart = new Date(new Date().getFullYear(), 0, 1)

    return {
        weekStart: previousMonday.toISOString(),
        monthStart: monthStart.toISOString(),
        prevMonthStart: prevMonthStart.toISOString(),
        prevMonthEnd: prevMonthEnd.toISOString(),
        yearStart: yearStart.toISOString(),
        endpublished: today.toISOString(),
    }
}

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

    const res = await fetch(API_URL, {
        ...options,
        body: JSON.stringify({
            query: queryString,
            variables: contributionDates(),
        }),
    })

    // let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })

    if (!res.ok) {
        return {
            message: "Error fetching contributions data",
        }
    }

    const json = await res.json()

    return json
}

export const fetchCommitsAction = async (): Promise<
    GraphqlResponseType<ContributionDataType>
> => {
    const res = await fetchData()

    if (res.message) {
        return res
    }

    if (!res.data?.viewer) {
        throw new Error("Unexpected error with no message")
    }

    return res
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
export type GraphqlResponseType<T> = {
    data?: T
    message?: string
}

export type ContributionDataType = {
    viewer: {
        login: string
        contributionsCollection: {
            contributionCalendar: { totalContributions: number }
            contributionYears: number[]
        }
        contributionsThisWeek: {
            contributionCalendar: { totalContributions: number }
        }
        contributionsThisMonth: {
            contributionCalendar: { totalContributions: number }
        }
        contributionsLastMonth: {
            contributionCalendar: { totalContributions: number }
        }
        contributionsThisYear: {
            weekContributions: { totalContributions: number }
        }
    }
}
