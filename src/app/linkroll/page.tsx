import Linkroll from "@/ui/components/linkroll"
import LinkrollInput from "@/ui/components/linkroll-input"

const Page = () => {
    return (
        <main className="mx-auto w-full max-w-[800px] flex flex-col gap-8">
            <section className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl underline">Linkroll</h1>
                <p>
                    Passing links to myself in the future. Don't read into it!
                </p>
            </section>

            <LinkrollInput />
            <Linkroll />
        </main>
    )
}

export default Page
