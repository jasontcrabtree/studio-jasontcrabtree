"use client"

import { createContext } from "react"

export interface AuthProps {
    session: boolean
    user?: {
        username?: string
        password?: string
        email?: string
        image?: string
    }
}

export interface AuthProviderProps {
    children: React.ReactNode
    session: AuthProps["session"]
}

export const AuthContext = createContext<AuthProps>({ session: false })

const AuthProvider = ({ children, session }: AuthProviderProps) => {
    return (
        <AuthContext.Provider value={{ session }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
