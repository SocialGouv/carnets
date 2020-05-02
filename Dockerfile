FROM node:13.14-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn --production

COPY .next/ /app/.next/
COPY public/ /app/public/

USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start"]
