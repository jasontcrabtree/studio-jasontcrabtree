import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import Page from "../src/app/page"

// test("Page", () => {
//     render(<Page />)
//     expect(
//         screen.getByRole("heading", { level: 1, name: "Home" })
//     ).toBeDefined()
// })

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
