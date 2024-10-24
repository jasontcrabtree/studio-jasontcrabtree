// ability to publish blog post - need to be careful not to OVER test the existing functionality for this
import { expect, test, vi, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Editor from "../../src/ui/components/editor"

const setup = () => {
    const utils = render(<Editor />)
    const title = screen.getByLabelText("title")
    const body = screen.getByLabelText("body")
    return {
        title,
        body,
        ...utils,
    }
}

test("It should handle input into title", () => {
    const { title, body } = setup()

    fireEvent.change(title, { target: { value: "New blog post title" } })
    fireEvent.change(body, { target: { value: "Body of the blog post" } })

    expect(title.value).toBe("New blog post title")
    expect(body.value).toBe("Body of the blog post")
})

test("Editor saves new records", async () => {
    const { title, body } = setup()

    fireEvent.change(title, { target: { value: "New blog post title" } })
    const button = screen.getByRole("button")

    fireEvent.click(button)

    expect(await screen.findByText("View Post")).toBeDefined()

    fireEvent.click
})

test("Different types of content can be saved (snippets, blog posts)", async () => {
    const { title, body } = setup()

    const typeDropdown = screen.getByText("Snippet")
    const button = screen.getByRole("button")

    fireEvent.click(typeDropdown)

    expect(title).not.toBeDefined()
    fireEvent.change(body, { target: { value: "Body of the blog post" } })

    fireEvent.click(button)

    expect(await screen.findByText("View Snippet")).toBeDefined()
})
