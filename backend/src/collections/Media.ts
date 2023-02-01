import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  fields: null,
  access: {
    create: ({req: {user}}) => {
      console.log("user: ", user);
      return Boolean(user);
    },
    read: () => true,
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
};

export default Media;
