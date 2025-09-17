import { Mailbox, MailIcon } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="mx-auto w-full max-w-[1280px] px-24 py-24 flex bg-gray-50 vert-border vert-border--reverse text-black shadow-lg border-opacity-50">
            <div className="w-full max-w-[800px] mx-auto flex flex-row items-start justify-between gap-12 display-none">
                <div className="flex flex-col gap-4 flex-2">
                    <h2 className="flex flex-row gap-2 items-center text-xl font-semibold max-w-[260px]">
                        Wanna be penpals? <Mailbox size={20} />
                    </h2>
                    <form className="flex flex-col gap-4 items-start">
                        <input type="hidden" name="honeypot" />
                        <label>
                            Your email
                            <input
                                type="email"
                                required
                                placeholder="hello@email.com"
                                className="w-[32ch] shadow-inner border border-gray-300 rounded h-8 p-4"
                            />
                        </label>
                        <label>
                            Message
                            <textarea
                                className="w-full shadow-inner border border-gray-300 rounded h-16 p-4"
                                name="message"
                                id=""
                                rows={3}
                                cols={60}
                                placeholder="Hello, great to meet you!"
                            ></textarea>
                        </label>
                        <button className="flex flex-row items-center gap-2 rounded-lg bg-tml-blue-600 px-12 py-2 text-white font-semibold">
                            Send <MailIcon size={16} />
                        </button>
                    </form>
                </div>
                <div className="flex flex-col gap-4 flex-1 items-center h-full justify-start">
                    <div className="">
                        <p>Thanks for visiting! Bye for now!</p>
                        <p className="text-xs">
                            © Copyright {new Date().getFullYear()} all rights
                            reserved
                        </p>
                    </div>
                    <Image
                        // src="https://res.cloudinary.com/jasontcrabtree/image/upload/v1734860469/jasontcrabtree-v4/yosemite-1.jpg"
                        src={
                            'https://res.cloudinary.com/jasontcrabtree/image/upload/v1735461721/jasontcrabtree-v4/jason-waving-2.gif'
                        }
                        alt="Photo of Jason waving goodbye"
                        width={240}
                        height={160}
                        className="aspect-auto rounded-xl"
                        unoptimized
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
