import {
    GetObjectCommand,
    ListBucketsCommand,
    ListObjectsCommand,
    paginateListBuckets,
    S3Client,
    S3ServiceException,
} from "@aws-sdk/client-s3"
import { AwsCredentialIdentity } from "@aws-sdk/types"

// const params = {
//     /** input parameters */
// }
// const command = new ListBucketsCommand(params)

// // async/await.
// try {
//     const data = await client.send(command)
//     // process data.
// } catch (error) {
//     // error handling.
// } finally {
//     // finally.
// }

const s3Instance = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    } as AwsCredentialIdentity,
})

export const listFilesInBucket = async ({ bucketName }) => {
    const command = new ListObjectsCommand({ Bucket: bucketName })
    const { Contents } = await s3Instance.send(command)
    const contentsList = Contents.map((c) => ` • ${c.Key}`).join("\n")
    console.log("\nHere's a list of files in the bucket:")
    console.log(`${contentsList}\n`)
}

export const getObjectInfo = async () => {
    const response = await s3Instance.send(
        new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: "matthew-buchanan-ZTXr4ObIuOw-unsplash.jpg",
        })
    )
    console.log(response)
}
