DROP TRIGGER IF EXISTS "set_public_followups_data" ON "public"."followups";
ALTER TABLE "public"."followups" DROP COLUMN "data";
