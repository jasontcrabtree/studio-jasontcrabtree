import { vi, afterEach, expect, test, vitest } from "vitest"
import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react"
import CommitTracker from "../../src/ui/components/commit-tracker"

afterEach(() => {
    cleanup()
    vi.clearAllMocks()
})

const mockCommitResponse = [{ id: 1, commits: 12 }]

test("Shows correct result on pass", async () => {
    const mockRes = vi.fn().mockResolvedValue({
        status: 200,
        json: vi.fn(() => mockCommitResponse),
    })
    const data = await mockRes()

    render(<CommitTracker data={data} />)

    const link = await screen.findByRole("link")

    expect(link).not.toBeUndefined()
    expect(screen.getByText(mockCommitResponse[0].commits)).toBeTruthy()
})

test("Shows correct result on fail", async () => {
    const mockRes = vi.fn().mockRejectedValue("Fail")
    const data = mockRes()

    render(<CommitTracker data={await mockRes().catch(() => null)} />)

    const link = await screen.findByRole("link")
    expect(link).toBeNull()

    expect(await screen.findByText("Error loading commits")).toBeDefined()
})

test("Loading state shows before data and hides after data", async () => {
    global.fetch = vi.fn().mockResolvedValue({
        status: 200,
        json: vi.fn(() => Promise.resolve(mockCommitResponse)),
    })

    render(<CommitTracker />)

    expect(screen.getByText("Loading")).toBeTruthy()

    await waitFor(() => {
        expect(screen.queryByText("Loading")).toBeNull()
    })
})
