FROM node:18.8-alpine as base

## Build Container ##
FROM base as builder

# Build backend
COPY ./backend /home/node/backend
WORKDIR /home/node/backend
RUN npm install
RUN npm run build

# Build frontend
COPY ./frontend /home/node/frontend
WORKDIR /home/node/frontend
RUN npm install
RUN npm run build

# Build express server
COPY ./express-server /home/node/express-server
WORKDIR /home/node/express-server
RUN npm install
RUN npm run build

# ## Runtime Container ##
# FROM base as runtime
# TODO: re-attempt multi-stage build.
# I think it requires pulling in the
# frontend and backend build,dist
# directories explicitly.

# Environment variables
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# WORKDIR /home/node/app
# COPY express-server/package*.json  ./

# # Install runtime dependencies
# RUN npm install --omit=dev

# # Import build products from previous phase
# COPY --from=builder /home/node/express-server/dist ./dist
# COPY --from=builder /home/node/express-server/build ./build

EXPOSE 4000

# ENTRYPOINT ["/bin/sh"]
CMD ["npm", "run", "start"]
