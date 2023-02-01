import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import LandingTitle from './globals/LandingTitle';

let serverURL = process.env.SITE_URL;

console.log(`Payload serverURL: ${serverURL}`);

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Users,
  ],
  csrf: [
    'https://preview.pureintentionsinc.com',
    'http://localhost:4000',
  ],
  globals: [LandingTitle],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
