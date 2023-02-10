
import { GlobalConfig } from 'payload/types';
import ImageBlock from '../blocks/Image';
import VideoBlock from '../blocks/Video';

const HomePage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'heroBackground',
      type: 'blocks',
      maxRows: 1,
      blocks: [
        ImageBlock,
        VideoBlock,
      ],
    },
    {
      name: 'heroLogo',
      type: 'relationship',
      relationTo: 'images',
    },
    {
      name: 'heroCaption',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export default HomePage;
