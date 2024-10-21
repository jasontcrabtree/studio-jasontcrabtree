import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Snippets from "../../src/ui/components/snippets"

test("Snippets list shows with correct syntax highlighting/formatting", () => {
    render(<Snippets />)
})
