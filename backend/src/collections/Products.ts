import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    defaultColumns: ['name', 'price', 'description'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
    },
    {
      name: 'price',
      type: 'number',
      min: 0,
      label: "Price (USD)",
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}

export default Products;
