import { Block } from 'payload/types';

const ProductCardBlock: Block = {
  slug: 'ProductCard', // required
  imageURL: 'https://cdn-icons-png.flaticon.com/64/9455/9455493.png',
  imageAltText: 'price tag icon',
  fields: [ // required
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
  ]
};

export default ProductCardBlock;