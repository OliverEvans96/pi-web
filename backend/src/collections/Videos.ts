import { CollectionConfig, CollectionBeforeChangeHook, CollectionAfterReadHook, CollectionAfterDeleteHook } from 'payload/types';
import { deleteObject, uploadFile } from '../s3';

const isProduction = (process.env.NODE_ENV === 'production');
console.log('isProduction = ', isProduction);

// A function that does nothing.
const noop = () => { };

// A function decorator that will use the function
// if S3 is enabled, or do nothing otherwise.
const ifProduction = (func: (...args: any[]) => any) => isProduction && func || noop;

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
  originalDoc, // original document
}) => {
  // Extract mimetype
  let mimetype = req.files.file.mimetype;

  // Upload original video to S3
  let mainFilename = `videos/${data.filename}`;
  let mainData = req.files.file.data;
  let mainUploadPromise = uploadFile(mainFilename, mainData, mimetype);

  // Upload both files in parallel
  await Promise.all([
    mainUploadPromise,
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
  doc['url'] = `${process.env.S3_PUBLIC_URL}/videos/${doc.filename}`;

  return doc;
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({
  req, // full express request
  id, // id of document to delete
  doc, // deleted document
}) => {
  await deleteObject(`videos/${doc.filename}`);
}

const Videos: CollectionConfig = {
  slug: 'videos',
  fields: null,
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [ifProduction(beforeChangeHook)],
    afterRead: [ifProduction(afterReadHook)],
    afterDelete: [ifProduction(afterDeleteHook)],
  },
  upload: {
    staticURL: '/videos',
    staticDir: 'videos',
    // Use cloud storage instead
    disableLocalStorage: isProduction,
    mimeTypes: ['video/*'],
  },
};

export default Videos;
