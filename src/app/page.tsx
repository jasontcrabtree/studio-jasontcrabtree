"use server"

import { getObjectInfo, listFilesInBucket } from "@/lib/actions/s3-actions"
import {
    TreeDeciduous,
    TreePine,
    Trees,
    TreePalm,
    TentTree,
    Tent,
    FlameKindling,
    Caravan,
    MountainSnow,
    Binoculars,
    DoorOpen,
    CirclePower,
    Wand,
    SignpostBig,
    BellRing,
    Squirrel,
    Sailboat,
} from "lucide-react"

export default async function Page() {
    // const data = await getObjectInfo()
    const buckets = await listFilesInBucket({ bucketName: "mark-1-personal" })
    console.log(buckets)

    return (
        <div className="grid md:grid-cols-4 md:grid-rows-4 w-full h-full">
            {/* <div className="text-white p-1 m-1 w-full col-start-1 col-end-8">
                <div className="p-1 m-1 flex gap-2">
                    <TreeDeciduous size={64} strokeWidth={0.75} width={64} />
                    <TreePine size={64} strokeWidth={0.75} width={64} />
                    <Trees size={64} strokeWidth={0.75} width={64} />
                    <TreePalm size={64} strokeWidth={0.75} width={64} />
                    <TentTree size={64} strokeWidth={0.75} width={64} />
                    <MountainSnow size={64} strokeWidth={0.75} width={64} />
                    <Squirrel size={64} strokeWidth={0.75} width={64} />
                </div>

                <div className="p-1 m-1 flex gap-2">
                    <Tent size={64} strokeWidth={0.75} width={64} />
                    <FlameKindling size={64} strokeWidth={0.75} width={64} />
                    <Caravan size={64} strokeWidth={0.75} width={64} />
                    <MountainSnow size={64} strokeWidth={0.75} width={64} />
                    <Sailboat size={64} strokeWidth={0.75} width={64} />
                </div>

                <div className="p-1 m-1 flex gap-2">
                    <SignpostBig size={64} strokeWidth={0.75} width={64} />
                    <Binoculars size={64} strokeWidth={0.75} width={64} />
                    <CirclePower size={64} strokeWidth={0.75} width={64} />
                    <Wand size={64} strokeWidth={0.75} width={64} />
                    <BellRing size={64} strokeWidth={0.75} width={64} />
                </div>
            </div> */}

            {/* <div className="bg-blue-500 opacity-45 justify-center col-start-1 col-end-3 row-start-1 row-end-3 border border-green-100 p-1 mb-[-200px]">
                block
            </div>
            <div className="bg-red-500 opacity-45 col-start-2 col-end-4 row-start-1 row-end-3 border border-green-500">
                2
            </div>
            <div className="bg-green-500 opacity-45 col-start-3 col-end-5 row-start-1 row-end-3 border border-green-500">
                3
            </div>
            <div className="bg-yellow-500 opacity-45 col-start-2 col-end-4 row-start-2 row-end-4 border border-green-500">
                4
            </div>
            <div className="bg-purple-500 opacity-45 col-start-1 col-end-3 row-start-3 row-end-5 border border-green-500">
                5
            </div>
            <div className="bg-orange-500 opacity-45 col-start-2 col-end-4 row-start-3 row-end-5 border border-green-500">
                6
            </div>
            <div className="bg-teal-500 opacity-45 col-start-3 col-end-5 row-start-3 row-end-5 border border-green-500">
                7
            </div> */}
        </div>
    )
}
