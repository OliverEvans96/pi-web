
import { GlobalConfig } from 'payload/types';

const LandingTitle: GlobalConfig = {
  slug: 'landingTitle',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
  ],
};

export default LandingTitle;