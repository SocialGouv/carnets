DROP TRIGGER IF EXISTS "set_public_followups_updated_at" ON "public"."followups";
ALTER TABLE "public"."followups" DROP COLUMN "updated_at";
