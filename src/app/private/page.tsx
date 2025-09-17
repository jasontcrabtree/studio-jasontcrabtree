'use client'

import { checkInSecurePin } from '@/lib/actions/insecure-auth-action'
import { usePrivateContext } from '@/ui/components/auth-provider'
import { Dispatch, SetStateAction, useState } from 'react'

const PublicSession = ({
    sessionHandler,
}: {
    session: boolean
    sessionHandler: Dispatch<SetStateAction<boolean>>
}) => {
    const [insecurePin, setInsecurePin] = useState('')

    return (
        <main
            className="mx-auto w-full max-w-[1280px] pb-16 pt-48 px-24 -mt-48 min-h-screen
          bg-gray-50 text-gray-950 flex flex-col gap-4"
        >
            <div className="flex flex-row gap-4 items-center justify-center w-full py-4">
                <p className="italic text-xs">
                    Ennyn Durin Aran Moria: pedo mellon a minno
                </p>
                <input
                    autoFocus
                    required
                    type="url"
                    name="link"
                    id="link"
                    className="px-2 py-1 w-full max-w-[40ch] border rounded-sm"
                    onChange={async (e) => {
                        setInsecurePin(e.target.value)
                    }}
                />

                <button
                    className="italic text-xs text-tml-red-400 border border-tml-red-400 px-8 rounded-sm py-2"
                    onClick={async () => {
                        sessionHandler(await checkInSecurePin(insecurePin))
                    }}
                >
                    Enter
                </button>
            </div>
        </main>
    )
}

const Page = () => {
    const { session, setSession } = usePrivateContext()

    if (!session) {
        return <PublicSession session={session} sessionHandler={setSession} />
    }

    return (
        <main className="mx-auto w-full max-w-[1280px] pb-16 pt-48 px-24 -mt-48 min-h-screen bg-gray-50 text-gray-950 flex flex-col gap-4">
            <h1>Hello Jason, welcome in.</h1>
        </main>
    )
}

export default Page
