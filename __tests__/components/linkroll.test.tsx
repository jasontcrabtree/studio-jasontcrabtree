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
    const utils = render(<Linkroll />)
    const input = screen.getByLabelText(/Link/i)

    return {
        input,
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

    // const text = "stuff"
    // await userEvent.type(input, text)
    fireEvent.change(input, { target: { value: newLink } })

    expect(input.value).toEqual(newLink)

    // expect(upperInput.value).toEqual(text.toUpperCase())
})

test("After submission, list of links changes to show new submissions", () => {
    render(<Linkroll />)
})

test("Depending on access flag, links render publicly/privately", () => {
    render(<Linkroll />)
})

test("Link visibility can be tweaked between public/private", () => {
    render(<Linkroll />)

    screen.getAllByRole("button")
})
