
import { GlobalConfig } from 'payload/types';

const LandingTitle: GlobalConfig = {
  slug: 'landingTitle',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Admin'
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