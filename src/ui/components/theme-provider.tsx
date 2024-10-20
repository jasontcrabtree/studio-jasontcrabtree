"use client"

import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react"

interface ThemeProps {
    theme: boolean
    themeHandler: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeProps>({
    theme: false,
    themeHandler: () => {},
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <ThemeContext.Provider
            value={{
                theme: darkMode,
                themeHandler: setDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
