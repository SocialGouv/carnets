FROM node:20-alpine AS node
RUN chown -R 1000:1000 /home/node && \
  chmod -R 755 /home/node && \
  chown 1000:1000 /tmp && \
  chmod 1777 /tmp
USER 1000
WORKDIR /app

FROM node AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

COPY yarn.lock .yarnrc.yml ./
COPY --chown=1000:1000 .yarn .yarn
RUN yarn fetch --immutable

COPY --chown=1000:1000 . .

ARG NEXT_PUBLIC_HASURA_URL
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_HASURA_URL $NEXT_PUBLIC_HASURA_URL
ENV NODE_OPTIONS --openssl-legacy-provider

RUN yarn build \
  && yarn workspaces focus --production \
  && yarn cache clean

# Production image, copy all the files and run next
FROM node AS runner

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["node_modules/.bin/next", "start"]

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next