
import { GlobalConfig } from 'payload/types';

const LandingTitle: GlobalConfig = {
  slug: 'landingTitle',
  access: {
    read: () => true,
    update: ({ req: {user} }) => user, 
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