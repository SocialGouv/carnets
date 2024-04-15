ARG NODE_VERSION=lts-alpine3.18@sha256:acdf232a7bf5d32e2212134d50aee7deb9193908f1172e56fc865c51b0c6bfb0

FROM node:$NODE_VERSION as base
WORKDIR /app

# Rebuild the source code only when needed
FROM base AS builder

# install deps
COPY yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn fetch

# build
COPY . .

ENV NEXTAUTH_URL http://localhost:3000

ARG NEXT_PUBLIC_MATOMO_URL
ENV NEXT_PUBLIC_MATOMO_URL $NEXT_PUBLIC_MATOMO_URL
ARG NEXT_PUBLIC_MATOMO_SITE_ID
ENV NEXT_PUBLIC_MATOMO_SITE_ID $NEXT_PUBLIC_MATOMO_SITE_ID
ENV NEXT_TELEMETRY_DISABLED 1
ARG NEXT_PUBLIC_HASURA_URL
ENV NEXT_PUBLIC_HASURA_URL $NEXT_PUBLIC_HASURA_URL

RUN --mount=type=secret,id=sentry_auth_token export SENTRY_AUTH_TOKEN="$(cat /run/secrets/sentry_auth_token)"; yarn build
# RUN yarn build

RUN yarn workspaces focus --production

# Production image, copy all the files and run next
FROM base AS runner

# ENV ENV development
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

# RUN addgroup --system --gid 1001 nodejs && \
#   adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder --chown=node:node /app/next.config.js ./
COPY --from=builder --chown=node:node /app/public ./public

# Automatically leverage output traces to reduce image size
RUN mkdir ./.next && chown node:node ./.next
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Add sharp
# COPY --from=builder --chown=node:node /app/node_modules/sharp ./node_modules/sharp
# RUN mkdir ./.next/cache && chown nextjs:nodejs ./.next/cache

USER 1000
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
