import { useContext } from "react"
import { ThemeContext } from "@/ui/components/theme-provider"

export default function Page() {
    const value = useContext(ThemeContext)

    console.log("value", value)

    return (
        <div className="">
            <h1>About</h1>
        </div>
    )
}
