import { Block } from 'payload/types';
import ImageBlock from './Image';
import ParagraphBlock from './Paragraph';
import RichTextBlock from './RichText';
import VideoBlock from './Video';

const TwoColumnBlock: Block = {
    slug: 'TwoColumn', // required
    imageURL: 'https://cdn-icons-png.flaticon.com/64/8590/8590336.png',
    imageAltText: 'two columns icon',
    fields: [ // required
        {
            type: 'row',
            fields: [
                {
                    name: 'left',
                    type: 'blocks',
                    blocks: [
                        ParagraphBlock,
                        RichTextBlock,
                        ImageBlock,
                        VideoBlock,
                    ]
                },
                {
                    name: 'right',
                    type: 'blocks',
                    blocks: [
                        ParagraphBlock,
                        RichTextBlock,
                        ImageBlock,
                        VideoBlock,
                    ]
                },
            ]
        },
    ]
};

export default TwoColumnBlock;