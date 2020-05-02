FROM node:13.14-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --production

COPY .next .
COPY public .

USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start"]
