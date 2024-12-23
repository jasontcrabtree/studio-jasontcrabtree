import type { Config } from "tailwindcss"
const colors = require("tailwindcss/colors")

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                transparent: "transparent",
                current: "currentColor",
                zinc: colors.grays,
                slate: colors.grays,
                stone: colors.grays,
                neutral: colors.grays,
                tml: {
                    "blue-200": "#4a7abd",
                    "blue-400": "#234ae8",
                    "blue-600": "#0022a2",
                    "blue-800": "#031235",
                    "gold-300": "#f4a82e",
                    "gold-400": "#f06d1b",
                    "red-300": "#d73260",
                    "red-400": "#ab1a25",
                    "red-500": "#8d0d30",
                },
                yosemite: {},
                beach: {},
            },
        },
    },
    plugins: [],
    darkMode: "selector",
}
export default config
