import { expect, test, vi, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import Snippets from "../../src/ui/components/snippets"

const languages = {
    JS: "JavaScript",
    TS: "TypeScript",
    CSHARP: "C#",
    GO: "Golang",
    SWIFT: "Swift",
}

const mockData = [
    {
        id: "1",
        language: languages.JS,
        body: `\`\`\`
        console.log('hello')
        \`\`\``,
    },
]

test("it saves new snippets", async () => {
    render(<Snippets data={mockData} />)

    const listItems = await screen.findAllByRole("listitem")
    const title = screen.getByLabelText("title")

    fireEvent.change(body, { target: { value: "Body of the blog post" } })

    expect(listItems.length).toBe(mockData.length)
})

test("it displays the correct number of snippets", async () => {
    const mockRes = vi.fn().mockRejectedValue("Fail")
    const data = mockRes()

    render(<Snippets data={await mockRes().catch(() => null)} />)

    const listItems = await screen.findAllByRole("listitem")

    expect(listItems.length).toBe(data.length)
})
