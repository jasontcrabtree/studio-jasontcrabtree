import { getAllLinkrolls } from '@/lib/actions/linkroll-actions'
import Link from 'next/link'

// const user_logged_in = true

const Linkroll = async () => {
    const links = await getAllLinkrolls()

    if ('message' in links) {
        console.error(links.message)
        return <div>No results!</div>
    }

    return (
        <div className="flex flex-col gap-3">
            {links.map((link, i) => {
                return (
                    <div
                        key={i}
                        className="p-6 dark:bg-gray-900 bg-gray-100 w-full rounded-lg flex flex-col gap-2"
                    >
                        <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="dark:text-gray-100">
                                {link.url}
                            </span>
                        </Link>
                        {link.description && (
                            <p className="text-sm break-before-all dark:text-gray-300">
                                {link.description}
                            </p>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Linkroll
