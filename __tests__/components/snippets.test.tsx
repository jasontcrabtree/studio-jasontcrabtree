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

    const newSnippet = "New snippet value"
    fireEvent.change(title, { target: { value: newSnippet } })

    expect(title.value).toEqual(newSnippet)

    const button = screen.getByRole("button", { name: /save/i })
    fireEvent.click(button)

    expect(listItems.length).toBe(mockData.length)
})

test("it displays the correct number of snippets", async () => {
    const mockRes = vi.fn().mockResolvedValue({
        status: 200,
        json: vi.fn().mockReturnValue(mockData),
    })
    const data = await mockRes()

    render(<Snippets data={await mockRes().catch(() => null)} />)

    const listItems = await screen.findAllByRole("listitem")

    expect(listItems.length).toBe(data.length)
})

test("different language syntax highlighting can be chosen", async () => {
    render(<Snippets />)

    const swiftRadio = screen.getByLabelText("Swift")
    const tsRadio = screen.getByLabelText("TS")

    fireEvent.click(firstRadio)
    expect(swiftRadio).toBeChecked()
    expect(tsRadio).not.toBeChecked()

    const snippetInput = screen.getByLabelText("Snippet")

    expect(snippetInput.value).toContain("Swift")
})
