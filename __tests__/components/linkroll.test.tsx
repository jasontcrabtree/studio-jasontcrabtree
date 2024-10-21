import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Linkroll from "../../src/ui/components/linkroll"

test("List of links shows on page", () => {
    render(<Linkroll />)
})

test("Links can be submitted", () => {
    render(<Linkroll />)
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
