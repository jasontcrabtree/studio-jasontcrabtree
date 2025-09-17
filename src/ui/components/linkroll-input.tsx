'use client'

import { LinkrollType, saveLinkroll } from '@/lib/actions/linkroll-actions'
import { SaveIcon } from 'lucide-react'
import { useState } from 'react'
import { usePrivateContext } from './auth-provider'

const LinkrollInput = () => {
    const { session } = usePrivateContext()

    const [isPublicCheckbox, setIsPublicCheckbox] = useState(true)
    const [linkroll, setLinkroll] = useState<LinkrollType>({
        isPublic: false,
        url: '',
        description: '',
    })

    if (!session) {
        return null
    }

    console.log('session', session)

    return (
        <div className="flex flex-col w-full gap-4 p-2 text-sm rounded-sm shadow-sm">
            <label
                htmlFor="link"
                className="flex flex-col items-start gap-1 w-full"
            >
                <span className="font-semibold">URL</span>
                <input
                    autoFocus
                    required
                    type="url"
                    name="link"
                    id="link"
                    className="py-4 px-4 w-full shadow-inner border border-gray-600 rounded-sm"
                    onChange={(e) =>
                        setLinkroll({
                            ...linkroll,
                            url: e.target.value,
                        })
                    }
                />
            </label>
            <label
                htmlFor="description"
                className="flex flex-col gap-1 items-start"
            >
                <span className="font-semibold">Description</span>
                <textarea
                    name="logbookEntry"
                    className="rounded-sm w-full p-4 border border-gray-600 shadow-inner"
                    rows={3}
                    placeholder="Remind me ..."
                    onChange={(e) =>
                        setLinkroll({
                            ...linkroll,
                            description: e.target.value,
                        })
                    }
                />
            </label>
            <div className="flex flex-row gap-4 w-full items-center">
                <label
                    htmlFor="isPublicLinkroll"
                    className="flex flex-row gap-2 w-fit items-center"
                >
                    <span className="font-semibold">Public</span>
                    <input
                        className="hidden"
                        type="checkbox"
                        name="isPublicLinkroll"
                        id="isPublicLinkroll"
                        checked={isPublicCheckbox}
                        onChange={() => {
                            setIsPublicCheckbox(!isPublicCheckbox)
                            setLinkroll((prev) => ({
                                ...prev,
                                isPublic: !isPublicCheckbox,
                            }))
                        }}
                    />
                    <button
                        type="button"
                        aria-pressed={isPublicCheckbox}
                        className={` w-16 h-8 p-2 px-1 rounded-full flex items-center shadow-inner
                        ${isPublicCheckbox ? 'bg-blue-500' : 'bg-gray-500'}
                        ${isPublicCheckbox ? 'justify-end' : 'justify-start'}`}
                        onClick={() => {
                            setIsPublicCheckbox(!isPublicCheckbox)
                            setLinkroll((prev) => ({
                                ...prev,
                                isPublic: !isPublicCheckbox,
                            }))
                        }}
                    >
                        <span className="bg-white h-6 w-6 rounded-full shadow-inner"></span>
                    </button>
                </label>
                <button
                    disabled={linkroll.url === ''}
                    className="bg-grey-700 hover:bg-gray-500 text-white rounded-sm max-h-[40px] py-2 ml-auto font-semibold px-8 w-fit flex flex-row gap-4 items-center disabled:cursor-not-allowed bg-tml-blue-400"
                    onClick={async () => {
                        await saveLinkroll(linkroll)
                    }}
                >
                    Save
                    <SaveIcon />
                </button>
            </div>
        </div>
    )
}

export default LinkrollInput
