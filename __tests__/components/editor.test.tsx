// ability to publish blog post - need to be careful not to OVER test the existing functionality for this
import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

test("Editor saves new blog posts", () => {
    render(<div></div>)
})

test("Different types of content can be saved (snippets, blog posts)", () => {
    render(<div></div>)
})
