'use client'
import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

const Thumbnail = ({
    videoHandler,
}: {
    videoHandler: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <div className="w-full aspect-video grid items-center justify-center grid-cols-3 grid-rows-1">
            <p className="col-start-1 -col-end-1 row-start-1 z-20 h-fit w-fit mx-auto text-center bg-black bg-opacity-20 backdrop-blur justify-start mb-auto">
                #GoodToMeetYa
            </p>
            <p
                className="col-start-1 col-end-2 row-start-1 -row-end-1 z-20 h-fit w-fit rotate-180 text-center bg-black bg-opacity-20 backdrop-blur"
                style={{ writingMode: 'vertical-lr' }}
            >
                #CheesyElevatorPitchToStandOut
            </p>
            <p
                className="-col-end-1 ml-auto row-start-1 -row-end-1 z-20 h-fit w-fit text-center bg-black bg-opacity-20 backdrop-blur"
                style={{ writingMode: 'vertical-rl' }}
            >
                #CameraNatural
            </p>
            <p className="col-start-1 -col-end-1 row-start-1 z-20 h-fit w-fit mx-auto text-center bg-black bg-opacity-20 backdrop-blur justify-end mt-auto">
                #HaveALittleFun
            </p>
            <button
                className="col-start-1 -col-end-1 row-start-1 -row-end-1 z-20 mx-auto backdrop-blur-sm p-4 flex items-center justify-center bg-black bg-opacity-5 hover:bg-tml-blue-400 hover:bg-opacity-50 rounded-full"
                onClick={() => {
                    videoHandler(true)
                }}
            >
                <PlayCircle size={40} />
            </button>
            <Image
                src="https://res.cloudinary.com/jasontcrabtree/image/upload/v1735468624/jasontcrabtree-v4/waving-jason-image.png"
                alt="Jason waving thumbnail"
                width={560}
                height={320}
                className="w-full h-full aspect-video col-start-1 -col-end-1 row-start-1 -row-end-1 z-10"
            />
        </div>
    )
}

const IntroVideo = () => {
    const [isHoveringVideo, setIsHoveringVideo] = useState(false)

    return (
        <div className="w-full aspect-video bg-gray-600 rounded-xl flex-1 overflow-hidden">
            {isHoveringVideo ? (
                <iframe
                    className="w-full h-full rounded-xl overflow-hidden"
                    src="https://www.youtube.com/embed/KK9tztKXcL8;start=3?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1"
                    title="Jason elevator pitch"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            ) : (
                <div className="w-full">
                    <Thumbnail videoHandler={setIsHoveringVideo} />
                </div>
            )}
        </div>
    )
}

export default IntroVideo
