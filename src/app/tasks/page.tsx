import Link from "next/link"

export default function Page() {
    return (
        <div className="flex flex-col gap-4 max-w-80">
            <p>The fourth iteration of my personal website</p>
            <p>
                Previous versions were built using Gridsome, Gatsby, and the
                NextJS pages router. This time, NextJS app router. I have such a
                huge amount of respect when I see people running blogs for 10,
                15, 20 years. I think this is year 4 of mine? With no
                consistency. So that's the goal!
            </p>
            <p>
                A clean design that makes me happy, strong iA, and a code base I
                feel joy to work in.
            </p>
            <Link className="underline" href="/">
                Home
            </Link>
        </div>
    )
}
