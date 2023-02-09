
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
    },
    {
      name: 'heroImage',
      type: 'relationship',
      relationTo: 'images',
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
