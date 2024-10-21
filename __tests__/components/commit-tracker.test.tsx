import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import CommitTracker from "../../src/ui/components/commit-tracker"

test("Behaves correctly on API call pass/fail", () => {
    render(<CommitTracker/>)
})

test("Loading indicator shows before data is available", () => {
    render(<CommitTracker/)
})

test("After data is loaded, correct value shows, including custom styling", () => {
    render(<CommitTracker/)
})

test("The value updates on rerender to display new commits as and when available", () => {
    render(<CommitTracker/)
})
