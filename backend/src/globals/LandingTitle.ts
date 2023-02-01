
import { GlobalConfig } from 'payload/types';

const LandingTitle: GlobalConfig = {
  slug: 'landingTitle',
  access: {
    read: () => true,
    update: ({ req: {user, headers} }) => {
      let allowed = Boolean(user);
      console.log("headers:", JSON.stringify(headers, null, 2));
      console.log("trying to edit landing title");
      console.log("user: ", JSON.stringify(user, null, 2));
      console.log("allowed: ", allowed);
      return allowed;
    },
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
