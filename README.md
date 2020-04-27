# Carnets

Carnet de bord des produits de la fabrique numériques des Ministères sociaux

## Fonctionnement

Toutes les infos pour mettre à jour vos informations sont [sur le wiki](https://github.com/SocialGouv/www/wiki/Inscrire-son-%C3%A9quipe-au-standup)

## Development

This project is based on [Next.js](https://nextjs.org/).

Run Postgres and Hasura containers:

```bash
cd ./packages/hasura
docker-compose up
```

Launch Hasura console:
```bash
cd ./packages/hasura
hasura console
```

Edit and source environment variables:

```bash
cp ./.env.sample .env
# Edit .env file to set environment variables values
source .env
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test

Build the application:

```bash
yarn build
```

Run the test server:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
