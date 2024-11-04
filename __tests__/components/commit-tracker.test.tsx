import { vi, afterEach, expect, test } from "vitest"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import CommitTracker from "../../src/ui/components/commit-tracker"
import { getCommits } from "@/lib/actions/github-graphql"

/* None of these tests work as async app router based components are currently unsupported. Revisit docs later 4/11/2024 */

afterEach(() => {
    cleanup()
    vi.clearAllMocks()
})

vi.mock("@/lib/actions/github-graphql", () => ({
    getCommits: vi.fn().mockResolvedValue({
        data: {
            viewer: {
                login: "testUser",
                contributionsCollection: {
                    contributionCalendar: { totalContributions: 120 },
                    contributionYears: [2023],
                },
                contributionsThisWeek: {
                    contributionCalendar: { totalContributions: 10 },
                },
                contributionsThisMonth: {
                    contributionCalendar: { totalContributions: 40 },
                },
                contributionsLastMonth: {
                    contributionCalendar: { totalContributions: 30 },
                },
                contributionsThisYear: {
                    weekContributions: { totalContributions: 120 },
                },
            },
        },
    }),
}))

vi.stubEnv("GH_PERSONAL_ACCESS_TOKEN_FINE_GRAINED", "mocked_api_key")

test("CommitTracker (async component)", () => {
    expect(1).toEqual(2) // failing test as a reminder
})

// test("Shows correct result on pass", async () => {
//     render(<CommitTracker goal={15} />)

//     // Wait for the data to load
//     await waitFor(() => expect(screen.queryByText("Loading")).toBeNull())

//     // Assert the component displays weekly, monthly, and yearly contributions
//     expect(screen.getByText("This Week 10/15 (67%)")).toBeTruthy()
//     expect(screen.getByText("Last Month 30")).toBeTruthy()
//     expect(screen.getByText("Full Year 120")).toBeTruthy()

//     // const link = await screen.findByRole("link")
//     // expect(link).not.toBeUndefined()
// })

// test("shows error message on API failure", async () => {
//     vi.mocked(getCommits).mockResolvedValueOnce({
//         message: "Error loading data",
//     })

//     render(<CommitTracker goal={15} />)

//     // Wait for the error message
//     await waitFor(() => {
//         expect(screen.getByText("Error loading data")).toBeDefined()
//     })
// })

// test("shows loading state before data loads", async () => {
//     render(<CommitTracker goal={15} />)

//     // Initially, we should see the loading text
//     expect(screen.getByText("Loading")).toBeTruthy()

//     // Wait for data to load, then verify loading text disappears
//     await waitFor(() => {
//         expect(screen.queryByText("Loading")).toBeNull()
//     })
// })
