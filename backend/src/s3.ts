import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

function createS3Client() {
    return new S3Client({
        endpoint: process.env['S3_ENDPOINT'],
        region: process.env['S3_REGION'],
    });
}

export async function uploadFile(filename: string, data: Buffer, mimetype: string,) {
    const client = createS3Client();
    const command = new PutObjectCommand({
        Bucket: process.env['S3_BUCKET_NAME'],
        Key: filename,
        Body: data,
        ContentType: mimetype,
    });

    await client.send(command);
}

export async function deleteObject(filename: string) {
    const client = createS3Client();

    const command = new DeleteObjectCommand({
        Bucket: process.env['S3_BUCKET_NAME'],
        Key: filename,
    });

    await client.send(command);
}