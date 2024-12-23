'use client'

import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from 'react'

export interface PrivateContextProps {
    session: boolean
    setSession: Dispatch<SetStateAction<boolean>>
}

export interface PrivateProviderProps {
    children: React.ReactNode
}

const PrivateContext = createContext<PrivateContextProps | undefined>(undefined)

export const usePrivateContext = () => {
    const context = useContext(PrivateContext)
    if (!context) {
        throw new Error(
            'usePrivateContext must be used within a PrivateProvider'
        )
    }
    return context
}

const PrivateProvider = ({ children }: PrivateProviderProps) => {
    const [session, setSession] = useState<boolean>(false)

    return (
        <PrivateContext.Provider value={{ session, setSession }}>
            {children}
        </PrivateContext.Provider>
    )
}

export default PrivateProvider
