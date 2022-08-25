CREATE TABLE "public"."test_data" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "github" jsonb NOT NULL, "sentry" jsonb NOT NULL, "matomo" jsonb NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
