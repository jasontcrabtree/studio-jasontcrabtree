// test ability to render content from different sources (md/postgres)
import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

test("Blog posts from MD source render", () => {
    render(<div></div>)
})

test("Blog posts from db source render", () => {
    render(<div></div>)
})

test("Combined blog posts from both sources render with correct ordering", () => {
    render(<div></div>)
})

test("Topic lists autogenerate based on provided data", () => {
    render(<div></div>)
})
