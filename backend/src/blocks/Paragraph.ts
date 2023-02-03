import { Block } from 'payload/types';

const ParagraphBlock: Block = {
  slug: 'Paragraph', // required
  imageURL: 'https://cdn-icons-png.flaticon.com/64/2911/2911230.png',
  imageAltText: 'text document icon',
  fields: [ // required
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
  ]
};

export default ParagraphBlock;