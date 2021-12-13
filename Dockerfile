# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
# RUN apk --no-cache add g++ make python3
# RUN apk --no-cache add --virtual native-deps \
#   g++ gcc libgcc libstdc++ linux-headers make python && \
#   npm install --quiet node-gyp -g && \
#   npm install --quiet && \
#   apk del native-deps
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ARG HASURA_JWT_KEY
ARG NEXT_PUBLIC_HASURA_URL

ENV HASURA_JWT_KEY $HASURA_JWT_KEY
ENV NEXT_PUBLIC_HASURA_URL $NEXT_PUBLIC_HASURA_URL
ENV NODE_OPTIONS --openssl-legacy-provider

RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]



# FROM node:16-alpine

# WORKDIR /app

# COPY . .

# RUN yarn --frozen-lockfile --prefer-offline && yarn cache clean
# RUN yarn build

# RUN rm -rf node_modules
# RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean

# USER node

# ENV NODE_ENV=production
# ENV NEXT_TELEMETRY_DISABLED=1

# CMD ["yarn", "start"]
