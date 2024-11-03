import { MoonStar, SunMoon } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

/**
 * @description Control to switch between different colour themes (dark mode/light mode.
 */
const DarkModeControl = ({
    darkMode,
    handler,
}: {
    darkMode: boolean
    handler: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                handler(!darkMode)
            }}
            data-dark-mode={darkMode ? "dark-mode" : "light-mode"}
        >
            {darkMode ? (
                <SunMoon
                    size={20}
                    stroke="#fbbf24"
                    focusable
                    fill="#6d28d9"
                    fillOpacity={5}
                />
            ) : (
                <MoonStar
                    size={20}
                    stroke="#6d28d9"
                    // fill="#fbbf24"
                    // fillOpacity={5}
                />
            )}
        </button>
    )
}

export default DarkModeControl
