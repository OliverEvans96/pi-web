import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import { handler as ssrHandler } from 'pi-ssr-frontend';

dotenv.config();
const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

app.use(express.static('node_modules/pi-ssr-frontend/dist/client'))
app.use(ssrHandler);

// Add your own express routes here

app.listen(4000);
