# Carnets

Carnet de bord des produits de la fabrique numériques des Ministères sociaux

## Fonctionnement

Toutes les infos pour mettre à jour vos informations sont [sur le wiki](https://github.com/SocialGouv/www/wiki/Inscrire-son-%C3%A9quipe-au-standup)

## Environment variables

#### Application

| Variable                      | Usage                            |
| ----------------------------- | -------------------------------- |
| `APP_BASE_URL`                | Base application URL             |
| `HASURA_URL`                  | Hasura service URL               |
| `AUTH0_AUDIENCE`              | Auth0 audience name              |
| `AUTH0_CLIENT_ID`             | Auth0 client ID                  |
| `AUTH0_CLIENT_SECRET`         | Auth0 client secret              |
| `AUTH0_DOMAIN`                | Auth0 application domain         |
| `AUTH0_SESSION_COOKIE_SECRET` | Auth0 session cookie secret      |
| `GITHUB_ORGANIZATION`         | Github organisation name         |
| `GITHUB_TOKEN`                | Github user token                |
| `GITHUB_USER`                 | Github user login                |
| `SENTRY_DSN`                  | Sentry application dedicated URL |

#### Hasura service

| Variable                      | Usage                 |
| ----------------------------- | --------------------- |
| `HASURA_GRAPHQL_ADMIN_SECRET` | Hasura admin secret   |
| `HASURA_GRAPHQL_DATABASE_URL` | Postgres database URL |
| `HASURA_GRAPHQL_JWT_SECRET`   | Hasura JWT secret     |

## Development

This project is based on [Next.js](https://nextjs.org/).

Run Postgres and Hasura containers:

```bash
docker-compose up
```

Launch Hasura console:
```bash
cd ./packages/hasura
hasura console
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test

Run linter check:

```bash
yarn lint
```

Run tests:

```bash
yarn test
```

Build the application:

```bash
yarn build
```

Run the test server:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
