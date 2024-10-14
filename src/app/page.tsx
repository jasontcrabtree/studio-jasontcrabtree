import Link from "next/link"

export default function Page() {
    return (
        <div>
            <h1 className="text-4xl font-bold">Home</h1>
            <Link href="/about">About</Link>
        </div>
    )
}
