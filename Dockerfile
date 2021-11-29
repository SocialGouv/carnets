FROM node:16-alpine

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile --prefer-offline && yarn cache clean
RUN yarn build

RUN rm -rf node_modules
RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean

USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start"]
