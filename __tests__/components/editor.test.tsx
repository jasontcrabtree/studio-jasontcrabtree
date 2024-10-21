// ability to publish blog post - need to be careful not to OVER test the existing functionality for this
import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Editor from "../../src/ui/components/editor"

test("Editor saves new blog posts", () => {
    render(<Editor />)
})

test("Different types of content can be saved (snippets, blog posts)", () => {
    render(<Editor />)
})
