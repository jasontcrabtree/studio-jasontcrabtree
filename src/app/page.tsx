"use server"

import { listFilesInBucket } from "@/lib/actions/s3-actions"
// import {
//     TreeDeciduous,
//     TreePine,
//     Trees,
//     TreePalm,
//     TentTree,
//     Tent,
//     FlameKindling,
//     Caravan,
//     MountainSnow,
//     Binoculars,
//     DoorOpen,
//     CirclePower,
//     Wand,
//     SignpostBig,
//     BellRing,
//     Squirrel,
//     Sailboat,
// } from "lucide-react"

export default async function Page() {
    const buckets = await listFilesInBucket({ bucketName: "mark-1-personal" })
    console.log(buckets)

    return (
        <div className="grid md:grid-cols-4 md:grid-rows-4 w-full h-full"></div>
    )
}
