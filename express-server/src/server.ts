import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import { handler as ssrHandler } from 'pi-ssr-frontend';

dotenv.config();
const app = express();

app.use(express.static('dist/client/'))
app.use(ssrHandler);

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(4000);
