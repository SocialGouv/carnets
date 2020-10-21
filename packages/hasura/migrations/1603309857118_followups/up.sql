
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."followups"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "team_slug" text NOT NULL, "data" jsonb NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("team_slug"));

ALTER TABLE "public"."followups" ADD COLUMN "updated_at" timestamptz NULL;
