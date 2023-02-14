import { CollectionConfig } from 'payload/types';
import ProductCardBlock from '../blocks/ProductCard';
import ParagraphBlock from '../blocks/Paragraph';
import HeaderBlock from '../blocks/Header';
import EventCardBlock from '../blocks/EventCard';
import TwoColumnBlock from '../blocks/TwoColumn';
import RichTextBlock from '../blocks/RichText';
import ImageBlock from '../blocks/Image';
import VideoBlock from '../blocks/Video';
import slug from '../fields/slug';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug', 'status'],
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
    slug(),
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
        RichTextBlock,
        HeaderBlock,
        EventCardBlock,
        TwoColumnBlock,
        ImageBlock,
        VideoBlock,
      ]
    }
  ],
}

export default Pages;
