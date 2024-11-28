import { getAllLinkrolls } from "@/lib/actions/linkroll-actions"
import Link from "next/link"

const user_logged_in = true

const Linkroll = async () => {
    const links = await getAllLinkrolls()

    if ("message" in links) {
        console.error(links.message)
        return <div>No results!</div>
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {links.map((link, i) => {
                return (
                    <div key={i} className="p-2 bg-gray-100 w-full rounded-lg">
                        <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-xs align-super">
                                {link.url}
                            </span>
                            {link.description && <div>{link.description} </div>}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Linkroll
