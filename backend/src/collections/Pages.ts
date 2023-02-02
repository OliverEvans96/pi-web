import { CollectionConfig } from 'payload/types';
import ProductCardBlock from '../blocks/ProductCard';
import ParagraphBlock from '../blocks/Paragraph';
import HeaderBlock from '../blocks/Header';
import EventCardBlock from '../blocks/EventCard';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug', 'category', 'status'],
    useAsTitle: 'title',
  },
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
      name: 'slug',
      type: 'text',
      // TODO: validate
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories'
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'blocks', // required
      label: 'Content Blocks',
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ // required
        ProductCardBlock,
        ParagraphBlock,
        HeaderBlock,
        EventCardBlock
      ]
    }
  ],
}

export default Pages;
