
import { GlobalConfig } from 'payload/types';
import ImageBlock from '../blocks/Image';
import VideoBlock from '../blocks/Video';
import EmbedVideoBlock from '../blocks/EmbedVideo';

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
      type: 'blocks',
      maxRows: 1,
      blocks: [
        ImageBlock,
        EmbedVideoBlock,
      ],
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
