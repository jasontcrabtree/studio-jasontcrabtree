import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import DarkModeControl from "./../../src/ui/components/dark-mode-control"

const mockHandler = vitest.fn()

test("Click event triggers dark mode handler", () => {
    render(<DarkModeControl darkMode={true} handler={mockHandler} />)

    const button = screen.getByRole("button")

    fireEvent.click(button)

    expect(mockHandler).toHaveBeenCalledOnce()

    // let isDarkMode = true

    // const { rerender } = render(
    //     <DarkModeControl darkMode={isDarkMode} handler={mockHandler} />
    // )

    // const button = screen.getByRole("button")
    // expect(button.dataset.darkMode).toBe("dark-mode")

    // fireEvent.click(button)
    // expect(mockHandler).toHaveBeenCalled()

    // isDarkMode = false
    // rerender(<DarkModeControl darkMode={isDarkMode} handler={mockHandler} />)
    // expect(button.dataset.darkMode).toBe("light-mode")
})
