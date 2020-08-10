#!/bin/sh
pg_dump -v \
--host=carnetsprodserver.postgres.database.azure.com \
--username=carnetsadmin@carnetsprodserver \
--dbname=carnets \
--data-only \
--column-inserts \
--table="posts" \
--table="posts_stats" \
--table="teams_status" \
--table="kpis" \
-f seeds-dev.sql
