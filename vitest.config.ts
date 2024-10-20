import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        onConsoleLog(log: string, type: "stdout" | "stderr"): false | void {
            console.log("log in test: ", log)
            if (
                log === "message from third party library" &&
                type === "stdout"
            ) {
                return false
            }
        },
    },
})
