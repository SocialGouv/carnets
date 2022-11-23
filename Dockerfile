# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build \
  && yarn --frozen-lockfile --production --ignore-scripts \
  && yarn cache clean

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ARG NEXT_PUBLIC_HASURA_URL

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_HASURA_URL $NEXT_PUBLIC_HASURA_URL
ENV NODE_OPTIONS --openssl-legacy-provider

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER 1001

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
