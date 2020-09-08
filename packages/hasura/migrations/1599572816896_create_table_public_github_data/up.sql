
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."github_data"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "admins_and_teams" jsonb NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));