import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

test("List of links shows on page", () => {
    render(<div></div>)
})

test("Links can be submitted", () => {
    render(<div></div>)
})

test("After submission, list of links changes to show new submissions", () => {
    render(<div></div>)
})

test("Depending on access flag, links render publicly/privately", () => {
    render(<div></div>)
})

test("Link visibility can be tweaked between public/private", () => {
    render(<div></div>)

    screen.getAllByRole("button")
})
