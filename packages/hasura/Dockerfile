FROM hasura/graphql-engine:v1.3.3.cli-migrations-v2
ENV HASURA_GRAPHQL_ENABLE_TELEMETRY false
COPY ./packages/hasura/migrations /hasura-migrations
COPY ./packages/hasura/metadata /hasura-metadata
