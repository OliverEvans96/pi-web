
import { GlobalConfig } from 'payload/types';

const HomePage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'relationship',
      relationTo: 'images',
      required: true,
    },
    {
      name: 'heroLogo',
      type: 'relationship',
      relationTo: 'images',
      required: true,
    },
    {
      name: 'heroCaption',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export default HomePage;
