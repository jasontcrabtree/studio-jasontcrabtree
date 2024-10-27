import { expect, test, vi, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Linkroll from "../../src/ui/components/linkroll"

const mockData = [
    {
        id: 1,
        label: "Learn go with tests quii",
        url: "https://quii.gitbook.io/learn-go-with-tests",
        public: false,
    },
    {
        id: 2,
        label: "Full send marathon",
        url: "https://quii.gitbook.io/learn-go-with-tests",
        public: true,
    },
    {
        id: 3,
        label: "Bla bla blah",
        url: "https://quii.gitbook.io/learn-go-with-tests",
        public: true,
    },
]

const setup = () => {
    const utils = render(<Linkroll session={true} />)
    const input = screen.getByLabelText(/Link/i)
    const button = screen.getByRole("button", { name: /save/i })
    const publicSwitch = screen.getByRole("switch", { name: /public/i })

    return {
        input,
        button,
        publicSwitch,
        ...utils,
    }
}

test("It shows the correct number of links", async () => {
    const mockRes = vi.fn().mockResolvedValue({
        status: 200,
        // json: vi.fn(() => mockData),
        json: vi.fn().mockReturnValue(mockData),
    })
    const data = await mockRes()

    render(<Linkroll data={data} session={true} />)

    const links = await screen.findAllByRole("link")
    const publicLinkIcons = await screen.findAllByAltText(/public/i)

    expect(links.length).toBe(mockData.length)

    const publicItems = mockData.filter((item: any) => {
        return item.public
    })
    expect(publicLinkIcons.length).toBe(publicItems.length)
})

test("Links can be submitted", async () => {
    const { input } = setup()

    const newLink = "https://blahblah"

    fireEvent.change(input, { target: { value: newLink } })

    expect(input.value).toEqual(newLink)

    const button = screen.getByRole("button", { name: /save/i })
    fireEvent.click(button)
})

test("After submission, list of links changes to show new submissions", async () => {
    const newLink = "https://new-link.co.nz"
    render(<Linkroll data={mockData} />)

    const links = await screen.findAllByRole("link")

    const input = screen.getByLabelText(/Link/i)
    const button = screen.getByRole("button", { name: /save/i })

    fireEvent.change(input, { target: { value: "newLink" } })

    fireEvent.click(button)

    const updatedLinks = await screen.findAllByRole("link")

    expect(updatedLinks.length).toBe(links.length + 1)
    expect(screen.getByText(newLink.replace("https://", ""))).toBeDefined()
})

test("Link visibility can be tweaked between public/private", async () => {
    const { input, button, publicSwitch } = setup()

    fireEvent.change(input, { target: { value: "New public link" } })
    fireEvent.click(button)

    const publicItems = expect(await screen.queryAllByAltText(/public/i))

    fireEvent.click(publicSwitch)
    fireEvent.change(input, { target: { value: "New private link link" } })

    const privateItems = expect(await screen.queryAllByAltText(/private/i))

    expect(publicItems.length && privateItems.length).toBe(1)
})
