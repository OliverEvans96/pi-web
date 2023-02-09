
import { Block } from 'payload/types';

const VideoBlock: Block = {
    slug: 'VideoBlock', // required
    imageURL: 'https://cdn-icons-png.flaticon.com/64/1179/1179120.png',
    imageAltText: 'video icon',
    fields: [ // required
        {
            name: 'video',
            type: 'relationship',
            relationTo: 'videos',
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

export default VideoBlock;