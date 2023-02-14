import { Block, GlobalConfig } from 'payload/types';

const PageRefBlock: Block = {
    slug: 'PageRef',
    imageURL: 'https://cdn-icons-png.flaticon.com/64/1250/1250680.png',
    imageAltText: 'page icon',
    fields: [
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages',
        },
    ]
};

const PageGroupBlock: Block = {
    slug: 'PageGroup',
    imageURL: 'https://cdn-icons-png.flaticon.com/64/3650/3650317.png',
    imageAltText: 'multi-page icon',
    fields: [
        {
            name: 'label',
            type: 'text',
            required: true,
        },
        {
            name: 'pages',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'page',
                    type: 'relationship',
                    relationTo: 'pages',
                },
            ]
        },
    ]
};

const HomepageRefBlock: Block = {
    slug: 'HomepageRef',
    imageURL: 'https://cdn-icons-png.flaticon.com/64/25/25694.png',
    imageAltText: 'home icon',
    fields: [
        {
            name: 'label',
            type: 'text',
            required: true,
        }
    ]
};


const ContactPageRefBlock: Block = {
    slug: 'ContactPageRef',
    imageURL: 'https://cdn-icons-png.flaticon.com/64/3095/3095583.png',
    imageAltText: 'phone/email icon',
    fields: [
        {
            name: 'label',
            type: 'text',
            required: true,
        }
    ]
};

const Navbar: GlobalConfig = {
    slug: 'navbar',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'items',
            type: 'blocks',
            blocks: [
                PageRefBlock,
                PageGroupBlock,
                HomepageRefBlock,
                ContactPageRefBlock,
            ],
        },
    ],
};

export default Navbar;
