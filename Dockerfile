FROM node:13.13-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY public/ ./public
COPY src/ ./src
COPY next.config.js ./
COPY .babelrc ./

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn build
RUN yarn --production

USER node

ENV NODE_ENV=production


CMD ["yarn", "start"]
