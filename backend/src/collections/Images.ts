import { CollectionConfig, CollectionBeforeChangeHook, CollectionAfterReadHook, CollectionAfterDeleteHook } from 'payload/types';
import { deleteObject, uploadFile } from '../s3';

// If this env var is present, we'll try to use S3.
// Otherwise, use local storage.
const S3_ENABLED = Boolean(process.env.PAYLOAD_PUBLIC_S3_URL);

// A function that does nothing.
const noop = () => { };

// A function decorator that will use the function
// if S3 is enabled, or do nothing otherwise.
const ifS3Enabled = (func: (...args: any[]) => any) => S3_ENABLED && func || noop;

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
  originalDoc, // original document
}) => {
  // Extract mimetype
  let mimetype = req.files.file.mimetype;

  // Upload original image to S3
  let mainFilename = `images/${data.filename}`;
  let mainData = req.files.file.data;
  let mainUploadPromise = uploadFile(mainFilename, mainData, mimetype);

  // Upload scaled thumbnail image to S3
  let thumbFilename = `thumbnails/${data.filename}`;
  let thumbData = req.payloadUploadSizes.thumbnail;
  let thumbUploadPromise = uploadFile(thumbFilename, thumbData, mimetype);

  // Upload both files in parallel
  await Promise.all([
    mainUploadPromise,
    thumbUploadPromise
  ]);

  // Return data to either create or update a document with
  return data;
}

const afterReadHook: CollectionAfterReadHook = async ({
  doc, // full document data
  req, // full express request
  query, // JSON formatted query
  findMany, // boolean to denote if this hook is running against finding one, or finding many
}) => {
  // Add S3 urls to metadata document
  doc['url'] = `${process.env.PAYLOAD_PUBLIC_S3_URL}/images/${doc.filename}`;
  doc['thumbnailUrl'] = `${process.env.PAYLOAD_PUBLIC_S3_URL}/thumbnails/${doc.filename}`;

  return doc;
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({
  req, // full express request
  id, // id of document to delete
  doc, // deleted document
}) => {
  await deleteObject(`images/${doc.filename}`);
  await deleteObject(`thumbnails/${doc.filename}`);
}

const Images: CollectionConfig = {
  slug: 'images',
  fields: null,
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [ifS3Enabled(beforeChangeHook)],
    afterRead: [ifS3Enabled(afterReadHook)],
    afterDelete: [ifS3Enabled(afterDeleteHook)],
  },
  upload: {
    staticURL: '/images',
    staticDir: 'images',
    // Use cloud storage instead
    disableLocalStorage: S3_ENABLED,
    // A resized version of the image is also stored
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
    // Get the S3 thumbnail url if S3 is enabled.
    // Otherwise, use the local thumbnail file.
    adminThumbnail: S3_ENABLED && (({ doc }) => doc.thumbnailUrl as string) || 'thumbnail',
    mimeTypes: ['image/*'],
  },
};

export default Images;
