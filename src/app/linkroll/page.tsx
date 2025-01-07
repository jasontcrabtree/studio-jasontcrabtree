import LinkrollList from '@/ui/components/linkroll-list'
import LinkrollInput from '@/ui/components/linkroll-input'

const Page = () => {
    return (
        <main
            className="mx-auto w-full max-w-[1280px] pb-16 pt-48 px-24 -mt-48 min-h-screen
         dark:bg-black dark:text-white bg-gray-50 text-gray-950 flex flex-col gap-4 vert-border"
        >
            <div className="max-w-[800px] w-full mx-auto flex flex-col gap-4">
                <section className="p-8 max-w-[800px] w-full bg-tml-blue-700 text-gray-100 rounded flex flex-col gap-2">
                    <h1 className="text-white">Linkroll</h1>
                    <p className="max-w-[800px]">
                        These are digital post-it notes I'm sending to myself in
                        the future. Just cool things I've found and want to have
                        handy, searchable (eventually) and easy to access.
                        You're welcome, future Jason.
                    </p>
                </section>

                <LinkrollInput />
                <LinkrollList />
            </div>
        </main>
    )
}

export default Page
