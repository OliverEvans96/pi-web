import { Block } from 'payload/types';

const HeaderBlock: Block = {
  slug: 'Header', // required
  imageURL: 'https://cdn-icons-png.flaticon.com/128/9298/9298945.png',
  imageAltText: 'door sign icon',
  fields: [ // required
    {
      name: 'header',
      type: 'text',
      required: true,
    },
  ]
};

export default HeaderBlock;