import { expect, test } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import DarkModeControl from "./../../src/ui/components/dark-mode-control"

test("Dark mode button exists"),
    () => {
        const element = render(<DarkModeControl darkMode={true} />)

        expect(element).toMatchSnapshot()
        const button = screen.getAllByRole("button")
        expect(button).toBeDefined()
    }
