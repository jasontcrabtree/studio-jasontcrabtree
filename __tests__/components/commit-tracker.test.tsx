import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

test("Behaves correctly on API call pass/fail", () => {
    render(<div></div>)
})

test("Loading indicator shows before data is available", () => {
    render(<div></div>)
})

test("After data is loaded, correct value shows, including custom styling", () => {
    render(<div></div>)
})

test("The value updates on rerender to display new commits as and when available", () => {
    render(<div></div>)
})
