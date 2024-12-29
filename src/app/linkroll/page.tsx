import Linkroll from '@/ui/components/linkroll'
import LinkrollInput from '@/ui/components/linkroll-input'

const Page = () => {
    return (
        <main
            className="mx-auto w-full max-w-[1280px] pb-16 pt-48 px-24 -mt-48 min-h-screen
         dark:bg-black dark:text-white bg-gray-50 text-gray-950 flex flex-col gap-4 vert-border"
        >
            <section className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl underline pb-4">Linkroll</h1>
                <p>
                    These are digital post-it notes I'm sending to myself in the
                    future. Just cool things I've found and want to have handy,
                    searchable (eventually) and easy to access. You're welcome,
                    future Jason.
                </p>
            </section>

            <LinkrollInput />

            <Linkroll />
        </main>
    )
}

export default Page
