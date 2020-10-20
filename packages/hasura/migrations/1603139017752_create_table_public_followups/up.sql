CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."followups"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "team_slug" text NOT NULL, PRIMARY KEY ("id") );
