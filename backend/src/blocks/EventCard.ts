import { Block } from 'payload/types';

const EventCardBlock: Block = {
  slug: 'EventCard', // required
  imageURL: 'https://cdn-icons-png.flaticon.com/128/9455/9455493.png',
  imageAltText: 'price tag icon',
  fields: [ // required
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: "Price (USD)",
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    }
  ]
};

export default EventCardBlock;
