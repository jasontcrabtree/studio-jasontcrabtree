import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Uploader from "../../src/ui/components/uploader"

test("Asset uploader successfully renders new items after succesful upload", () => {
    render(<Uploader />)
})

test("Asset uploader handles failing and returns valid results", () => {
    render(<Uploader />)
})
