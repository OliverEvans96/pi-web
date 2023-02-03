import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import path from 'path';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Users from './collections/Users';
import Images from './collections/Images';
import LandingTitle from './globals/LandingTitle';
import Products from './collections/Products';
import Pages from './collections/Pages';

dotenv.config();

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
    Users,
    Products,
    Pages,
    Images,
  ],
  csrf: [
    'https://preview.pureintentionsinc.com',
    'https://pureintentionsinc.com',
    'http://localhost:4000',
    'http://127.0.0.1:4000',
  ],
  globals: [LandingTitle],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
