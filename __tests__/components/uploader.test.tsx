import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Uploader from "../../src/ui/components/uploader"

const setup = () => {
    const setupRender = render(<Uploader />)
    const fileSelector = screen.getByTestId("uploader")
    const button = screen.getByRole("button", { name: /save/i })
    const publicSwitch = screen.getByRole("switch", { name: /public/i })

    return {
        fileSelector,
        button,
        publicSwitch,
        ...setupRender,
    }
}

test("Asset uploader successfully renders new items after succesful upload", async () => {
    const { fileSelector, button } = setup()

    const file = new File(["content"], "example.png", { type: "image/png" })

    fireEvent.change(fileSelector, { target: { files: [file] } })

    fireEvent.click(button)

    await waitFor(() => {
        expect(screen.getByText(/example\.png/i)).toBe(1)
    })
})

test("Asset uploader handles failing and returns valid results", async () => {
    const { fileSelector, button } = setup()

    const file = new File(["content"], "invalid.txt", { type: "text/plain" })

    fireEvent.change(fileSelector, { target: { files: [file] } })

    fireEvent.click(button)

    await waitFor(() => {
        expect(screen.getByText(/upload failed/i)).toBe(1)
    })
})

test("Toggle public switch correctly changes upload visibility", async () => {
    const { publicSwitch, button, fileSelector } = setup()

    const file = new File(["content"], "example.png", { type: "image/png" })
    fireEvent.change(fileSelector, { target: { files: [file] } })

    fireEvent.click(publicSwitch)

    fireEvent.click(button)

    await waitFor(() => {
        expect(screen.getByText(/example\.png/i)).toBe(1)
        expect(screen.getByText(/private/i)).toBe(1)
    })
})
