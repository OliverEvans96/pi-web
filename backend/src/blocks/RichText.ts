import { Block } from 'payload/types';

const RichTextBlock: Block = {
  slug: 'RichText', // required
  imageURL: 'https://cdn-icons-png.flaticon.com/64/1311/1311602.png',
  imageAltText: 'rich text icon',
  fields: [ // required
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ]
};

export default RichTextBlock;
