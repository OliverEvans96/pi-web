import express from 'express';
import payload from 'payload';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import dotenv from 'dotenv';

console.log("HELLO1");

dotenv.config();
const app = express();

// // Redirect root to Admin panel
// app.get('/', (_, res) => {
//   res.redirect('/admin');
// });

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET || '',
  mongoURL: process.env.MONGODB_URI || '',
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})

// Add your own express routes here
app.use(express.static('dist/client/'))
app.use(ssrHandler);

app.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`);

console.log("HELLO");

app.listen(4000);
