#### Developement
1. Clone the repository
2. Create a **Github OAuth App** to allow authentication via Github
3. Create a **Github PAT** to give Hasura access to the Github qraphql remote schema
4. Create the 2 env files: `.env.local` & `.env-hasura.local`
5. Start Postgres and Hasura via `docker compose up --build`
6. Start the application via `yarn dev`
7. 

#### Application Environment Variables (`.env.local`)
| Variable                   | Value                                                                                | Description                                                                  |
|----------------------------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| ENV                        | `development`                                                                        | When not equal to `prod` **Charon** is used to handle authentication process |
| NODE_ENV                   | `development`                                                                        | When not equal to `production` domain is set to `localhost`                  |
| NEXTAUTH_URL               | `http://localhost:3000/`                                                             | The **NextAuth** base URL                                                    |
| NEXTAUTH_SECRET            | `-----BEGIN RSA PRIVATE KEY-----\nMIIJJ ... rZItkw==\n-----END RSA PRIVATE KEY-----` | The **NextAuth** secret key                                                  |
| NEXT_PUBLIC_HASURA_URL     | `http://localhost:8080/v1/graphql`                                                   | URL of **Hasura** client side                                                |
| HASURA_URL                 | `http://localhost:8080/v1/graphql`                                                   | URL of **Hasura** server side                                                |
| GITHUB_ID                  | `c2f...85e`                                                                          | **Github** Auth App ID |
| GITHUB_SECRET              | `1bb...cde`                                                                          | **Github** Auth App secret |
| NEXT_PUBLIC_MATOMO_SITE_ID | `42`                                                                                 | The application site ID in **Matomo**                                        |
| NEXT_PUBLIC_MATOMO_URL     | `https://matomo.fabrique.social.gouv.fr/`                                            | **Matomo** URL                                                               |
| SENTRY_AUTH_TOKEN          | `d9e...0da`                                                                          | **Sentry** token used in the docker build                                    |

#### Hasura Environment Variables (`.env-hasura.local`)
| Variable                                        | Value                                                         | Description                                 |
|-------------------------------------------------|---------------------------------------------------------------|---------------------------------------------|
| HASURA_GRAPHQL_ADMIN_SECRET                     | `my_admin_password`                                           | The **Hasura** admin password               |
| HASURA_GRAPHQL_DATABASE_URL                     | `postgres://postgres:postgrespassword@postgres:5432/postgres` | **Postgres** connection string              |
| GITHUB_AUTHORIZATION_HEADER                     | `bearer ghp_RWJa...`                                          | **Github** PAT |
| HASURA_GRAPHQL_UNAUTHORIZED_ROLE                | `anonymous`                                                   | Default **Hasura** role                     |
| HASURA_GRAPHQL_ENABLED_LOG_TYPES                | `startup, http-log, webhook-log, websocket-log, query-log`    | **Hasura** log level                        |
| HASURA_GRAPHQL_ENABLE_REMOTE_SCHEMA_PERMISSIONS | false                                                         | Toggle **Hasura** remote schema permissions |
| HASURA_GRAPHQL_JWT_SECRET                       | `{"type": "RS512", "header": {"type": "Cookie", "name": "next-auth.session-token"}, "key": "-----BEGIN RSA PUBLIC KEY-----\nMIICC ... EAAQ==\n-----END RSA PUBLIC KEY-----"}` | **Hasura** config and secret key to create session JWT |
