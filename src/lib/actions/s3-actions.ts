import { S3Client } from "@aws-sdk/client-s3"
import { AwsCredentialIdentity } from "@aws-sdk/types"

// import { fromEnv } from "@aws-sdk/credential-providers"

// const client = new S3Client({ region: env.AWS_REGION, maxAttempts: 15 })

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

// const s3 = new S3Client({
//     region: process.env.AWS_REGION,
//     // credentials: fromEnv(),
// })
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    } as AwsCredentialIdentity,
})

// const s3 = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// })
