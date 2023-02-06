
import { Block } from 'payload/types';

const ImageBlock: Block = {
    slug: 'ImageBlock', // required
    imageURL: 'https://cdn-icons-png.flaticon.com/64/3342/3342137.png',
    imageAltText: 'image icon',
    fields: [ // required
        {
            name: 'image',
            type: 'relationship',
            relationTo: 'images',
            required: true,
        },
        {
            type: 'row', fields: [
                {
                    name: 'width',
                    type: 'number',
                    min: 0,
                    max: 2000,
                },
                {
                    name: 'height',
                    type: 'number',
                    min: 0,
                    max: 2000,
                },]
        },
    ]
};

export default ImageBlock;