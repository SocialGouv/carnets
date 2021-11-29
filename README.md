# Carnets

Carnets est une application...

## Environment variables

### Application

| variable                       | usage | visibility | description                                                              |
|--------------------------------|-------|------------|--------------------------------------------------------------------------|
| NEXT_PUBLIC_HASURA_URL         | build | public     | Hasura API URL (eg: `http://localhost:8080/v1/graphql`)                  |
| NEXT_PUBLIC_APP_VERSION        | build | public     | Version of the application (eg: `1.4.2`)                                 |
| NEXT_PUBLIC_APP_VERSION_COMMIT | build | public     | Hash of the commit related to the application version                    |
| NEXT_PUBLIC_APP_REPOSITORY_URL | build | public     | Application repository URL (eg: `https://github.com/SocialGouv/carnets`) |
| HASURA_JWT_KEY                 | run   | private    | Hasura jwt signature private key                                         |
| GITHUB_ID                      | run   | private    | Github authentication ID                                                 |
| GITHUB_SECRET                  | run   | private    | Github authentication secret                                             |
| NEXTAUTH_URL                   | run   | private    | Next Auth base URL                                                       |

### Hasura

| variable                         | usage | visibility | description                                                                         |
|----------------------------------|-------|------------|-------------------------------------------------------------------------------------|
| HASURA_GRAPHQL_ADMIN_SECRET      | run   | private    | Hasura admin password                                                               |
| HASURA_GRAPHQL_UNAUTHORIZED_ROLE | run   | private    | Unauthenticated role allowed to access Hasura API (eg: `anonymous`)                 |
| HASURA_GRAPHQL_DATABASE_URL      | run   | private    | Postgres database URL (eg: `postgres://<user>:<password>@<host>:<port>/<database>`) |
| HASURA_GRAPHQL_ENABLED_LOG_TYPES | run   | private    | Hasura log types                                                                    |
| HASURA_GRAPHQL_JWT_SECRET        | run   | private    | Hasura jwt signature public key                                                     |
| GITHUB_AUTHORIZATION_HEADER      | run   | private    | Github API authentication header (eg: `bearer <github_key>`)                        |

## Install

### Hasura JWT public/private key pair

```bash
sh-keygen -t rsa -b 4096 -E SHA512 -m PEM -f jwtRS512.key
```
```bash
openssl rsa -in jwtRS512.key -pubout -outform PEM -out jwtRS512.key.pub
```

Provide the generated public/private key pair to Hasura (`HASURA_GRAPHQL_JWT_SECRET`) and the application (`HASURA_JWT_KEY`).
