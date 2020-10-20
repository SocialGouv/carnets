ALTER TABLE "public"."followups" ADD COLUMN "data" jsonb NOT NULL;

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_data"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."data" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_followups_data"
BEFORE UPDATE ON "public"."followups"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_data"();
COMMENT ON TRIGGER "set_public_followups_data" ON "public"."followups" 
IS 'trigger to set value of column "data" to current timestamp on row update';
