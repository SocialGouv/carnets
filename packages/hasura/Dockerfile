FROM hasura/graphql-engine:v2.17.0.cli-migrations-v3
ENV HASURA_GRAPHQL_ENABLE_CONSOLE=false
ENV HASURA_GRAPHQL_ENABLE_TELEMETRY=false
COPY ./migrations /hasura-migrations
COPY ./metadata /hasura-metadata

ENV HASURA_GRAPHQL_SERVER_PORT=8080

USER 1001
