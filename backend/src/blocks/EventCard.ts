import { Block } from 'payload/types';

const EventCardBlock: Block = {
  slug: 'EventCard', // required
  imageURL: 'https://cdn-icons-png.flaticon.com/64/839/839888.png',
  imageAltText: 'events calendar icon',
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
