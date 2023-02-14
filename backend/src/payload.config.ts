import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import path from 'path';
import Posts from './collections/Posts';
import Users from './collections/Users';
import Images from './collections/Images';
import HomePage from './globals/HomePage';
import Products from './collections/Products';
import Pages from './collections/Pages';
import ContactInfo from './globals/ContactPage';
import Videos from './collections/Videos';
import Navbar from './globals/Navbar';

dotenv.config();

let serverURL = process.env.SITE_URL;

console.log(`Payload serverURL: ${serverURL}`);

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Posts,
    Users,
    Products,
    Pages,
    Images,
    Videos,
  ],
  csrf: [
    'https://preview.pureintentionsinc.com',
    'https://pureintentionsinc.com',
    'http://localhost:4000',
    'http://127.0.0.1:4000',
  ],
  globals: [
    HomePage,
    ContactInfo,
    Navbar,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
