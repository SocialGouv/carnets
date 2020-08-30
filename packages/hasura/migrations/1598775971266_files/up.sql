
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."files"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "team_slug" text NOT NULL, "blob_name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("blob_name"));
ALTER TABLE "public"."files" ADD COLUMN "name" text NOT NULL;
ALTER TABLE "public"."files" ADD COLUMN "size" integer NOT NULL;
ALTER TABLE "public"."files" ADD COLUMN "type" text NOT NULL;