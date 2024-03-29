import { GlobalConfig } from 'payload/types';

const ContactInfo: GlobalConfig = {
    slug: 'contact-info',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'hours',
            type: 'array',
            label: 'Hours of Operation',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'day',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'hours',
                            type: 'text',
                            required: true,
                        },

                    ]
                }
            ]
        },
        {
            name: 'contactInfo',
            type: 'array',
            fields: [{
                type: 'row', fields: [
                    {
                        name: 'type',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'value',
                        type: 'text',
                        required: true,
                    },
                ]
            }],
        },
    ],
};

export default ContactInfo;
