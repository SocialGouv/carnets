--
-- PostgreSQL database dump
--

-- Dumped from database version 10.11
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: event_log; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: event_invocation_logs; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_table; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('information_schema', 'tables', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('information_schema', 'schemata', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('information_schema', 'views', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('information_schema', 'columns', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_table', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_primary_key', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_foreign_key_constraint', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_relationship', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_permission_agg', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_computed_field', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_check_constraint', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_unique_constraint', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_remote_relationship', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'event_triggers', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'event_log', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'event_invocation_logs', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_function', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_function_agg', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'remote_schemas', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_version', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_query_collection', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_allowlist', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_custom_types', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_action_permission', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_action', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_action_log', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_role', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_cron_triggers', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_cron_events', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_cron_event_invocation_logs', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_scheduled_events', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('hdb_catalog', 'hdb_scheduled_event_invocation_logs', '{"custom_root_fields": {}, "custom_column_names": {}}', true, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('public', 'files', '{"custom_root_fields": {}, "custom_column_names": {}}', false, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('public', 'github_data', '{"custom_root_fields": {}, "custom_column_names": {}}', false, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('public', 'kpis', '{"custom_root_fields": {}, "custom_column_names": {}}', false, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('public', 'posts', '{"custom_root_fields": {}, "custom_column_names": {}}', false, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('public', 'posts_stat', '{"custom_root_fields": {}, "custom_column_names": {}}', false, false);
INSERT INTO hdb_catalog.hdb_table (table_schema, table_name, configuration, is_system_defined, is_enum) VALUES ('public', 'teams_status', '{"custom_root_fields": {}, "custom_column_names": {}}', false, false);


--
-- Data for Name: event_triggers; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_action; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_action_log; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_action_permission; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_query_collection; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_allowlist; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_computed_field; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_cron_triggers; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_cron_events; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_cron_event_invocation_logs; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_custom_types; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.hdb_custom_types (custom_types) VALUES ('{"enums": null, "objects": null, "scalars": null, "input_objects": null}');


--
-- Data for Name: hdb_function; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_permission; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'files', 'user', 'insert', '{"check": {}, "columns": ["blob_name", "name", "size", "team_slug", "type"]}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'files', 'anonymous', 'select', '{"filter": {}, "columns": ["blob_name", "created_at", "id", "name", "size", "team_slug", "type"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'files', 'user', 'select', '{"filter": {}, "columns": ["size", "blob_name", "name", "team_slug", "type", "created_at", "id"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'files', 'user', 'delete', '{"filter": {}}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'github_data', 'user', 'insert', '{"check": {}, "columns": ["admins_and_teams"]}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'github_data', 'webhook', 'insert', '{"check": {}, "columns": ["admins_and_teams"]}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'github_data', 'anonymous', 'select', '{"filter": {}, "columns": ["id", "admins_and_teams", "created_at"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'github_data', 'user', 'select', '{"filter": {}, "columns": ["admins_and_teams", "created_at", "id"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'github_data', 'webhook', 'select', '{"filter": {}, "columns": ["admins_and_teams", "created_at", "id"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'github_data', 'user', 'delete', '{"filter": {}}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'github_data', 'webhook', 'delete', '{"filter": {}}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'kpis', 'user', 'insert', '{"check": {}, "columns": ["name", "post_id", "value"]}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'kpis', 'anonymous', 'select', '{"limit": 300, "filter": {}, "columns": ["id", "created_at", "name", "value", "post_id"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'kpis', 'user', 'select', '{"limit": 300, "filter": {}, "columns": ["name", "value", "created_at", "id", "post_id"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'kpis', 'user', 'update', '{"filter": {}, "columns": ["name", "value"]}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'kpis', 'user', 'delete', '{"filter": {}}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'posts', 'user', 'insert', '{"check": {}, "columns": ["author", "mood", "needs", "priorities", "team_slug", "term"]}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'posts', 'anonymous', 'select', '{"limit": 50, "filter": {}, "columns": ["team_slug", "created_at", "id", "mood", "priorities", "term", "needs", "author"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'posts', 'user', 'select', '{"limit": 50, "filter": {}, "columns": ["author", "mood", "needs", "priorities", "team_slug", "term", "created_at", "id"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'posts', 'user', 'update', '{"filter": {}, "columns": ["mood", "needs", "priorities", "term"]}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'posts', 'user', 'delete', '{"filter": {}}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'posts_stat', 'anonymous', 'select', '{"limit": 300, "filter": {}, "columns": ["year", "week", "count"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'posts_stat', 'user', 'select', '{"limit": 300, "filter": {}, "columns": ["week", "year", "count"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'teams_status', 'anonymous', 'select', '{"limit": 300, "filter": {}, "columns": ["team_slug", "last_post", "kpis_count", "mood"], "computed_fields": [], "allow_aggregations": false}', NULL, false);
INSERT INTO hdb_catalog.hdb_permission (table_schema, table_name, role_name, perm_type, perm_def, comment, is_system_defined) VALUES ('public', 'teams_status', 'user', 'select', '{"limit": 300, "filter": {}, "columns": ["kpis_count", "mood", "team_slug", "last_post"], "computed_fields": [], "allow_aggregations": false}', NULL, false);


--
-- Data for Name: hdb_relationship; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'detail', 'object', '{"manual_configuration": {"remote_table": {"name": "tables", "schema": "information_schema"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'primary_key', 'object', '{"manual_configuration": {"remote_table": {"name": "hdb_primary_key", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'columns', 'array', '{"manual_configuration": {"remote_table": {"name": "columns", "schema": "information_schema"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'foreign_key_constraints', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_foreign_key_constraint", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'relationships', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_relationship", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'permissions', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_permission_agg", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'computed_fields', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_computed_field", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'check_constraints', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_check_constraint", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_table', 'unique_constraints', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_unique_constraint", "schema": "hdb_catalog"}, "column_mapping": {"table_name": "table_name", "table_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'event_triggers', 'events', 'array', '{"manual_configuration": {"remote_table": {"name": "event_log", "schema": "hdb_catalog"}, "column_mapping": {"name": "trigger_name"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'event_log', 'trigger', 'object', '{"manual_configuration": {"remote_table": {"name": "event_triggers", "schema": "hdb_catalog"}, "column_mapping": {"trigger_name": "name"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'event_log', 'logs', 'array', '{"foreign_key_constraint_on": {"table": {"name": "event_invocation_logs", "schema": "hdb_catalog"}, "column": "event_id"}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'event_invocation_logs', 'event', 'object', '{"foreign_key_constraint_on": "event_id"}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_function_agg', 'return_table_info', 'object', '{"manual_configuration": {"remote_table": {"name": "hdb_table", "schema": "hdb_catalog"}, "column_mapping": {"return_type_name": "table_name", "return_type_schema": "table_schema"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_action', 'permissions', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_action_permission", "schema": "hdb_catalog"}, "column_mapping": {"action_name": "action_name"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_role', 'action_permissions', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_action_permission", "schema": "hdb_catalog"}, "column_mapping": {"role_name": "role_name"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_role', 'permissions', 'array', '{"manual_configuration": {"remote_table": {"name": "hdb_permission_agg", "schema": "hdb_catalog"}, "column_mapping": {"role_name": "role_name"}}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_cron_triggers', 'cron_events', 'array', '{"foreign_key_constraint_on": {"table": {"name": "hdb_cron_events", "schema": "hdb_catalog"}, "column": "trigger_name"}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_cron_events', 'cron_trigger', 'object', '{"foreign_key_constraint_on": "trigger_name"}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_cron_events', 'cron_event_logs', 'array', '{"foreign_key_constraint_on": {"table": {"name": "hdb_cron_event_invocation_logs", "schema": "hdb_catalog"}, "column": "event_id"}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_cron_event_invocation_logs', 'cron_event', 'object', '{"foreign_key_constraint_on": "event_id"}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_scheduled_events', 'scheduled_event_logs', 'array', '{"foreign_key_constraint_on": {"table": {"name": "hdb_scheduled_event_invocation_logs", "schema": "hdb_catalog"}, "column": "event_id"}}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('hdb_catalog', 'hdb_scheduled_event_invocation_logs', 'scheduled_event', 'object', '{"foreign_key_constraint_on": "event_id"}', NULL, true);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('public', 'kpis', 'post', 'object', '{"foreign_key_constraint_on": "post_id"}', NULL, false);
INSERT INTO hdb_catalog.hdb_relationship (table_schema, table_name, rel_name, rel_type, rel_def, comment, is_system_defined) VALUES ('public', 'posts', 'kpis', 'array', '{"foreign_key_constraint_on": {"table": {"name": "kpis", "schema": "public"}, "column": "post_id"}}', NULL, false);


--
-- Data for Name: hdb_remote_relationship; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_scheduled_events; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_scheduled_event_invocation_logs; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--



--
-- Data for Name: hdb_schema_update_event; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.hdb_schema_update_event (instance_id, occurred_at, invalidations) VALUES ('e0fdc88d-3b71-4d15-a2d1-9e3507140575', '2020-09-16 20:42:24.375228+00', '{"metadata":false,"remote_schemas":[]}');


--
-- Data for Name: hdb_version; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.hdb_version (hasura_uuid, version, upgraded_on, cli_state, console_state) VALUES ('ca21e786-2f3b-4642-8919-88a0d182d68f', '37', '2020-09-13 06:05:51.167305+00', '{}', '{"telemetryNotificationShown": true}');


--
-- Data for Name: migration_settings; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.migration_settings (setting, value) VALUES ('migration_mode', 'true');


--
-- Data for Name: remote_schemas; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.remote_schemas (id, name, definition, comment) VALUES (105, 'Github', '{"timeout_seconds":60,"url":"https://api.github.com/graphql","headers":[{"name":"Authorization","value_from_env":"GITHUB_AUTHORIZATION_HEADER"}],"forward_client_headers":false}', NULL);


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: hdb_catalog; Owner: carnetsuser
--

INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1583318406549, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1583669392093, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1583699218252, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1583760185518, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1585061340042, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1585061367802, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588187763027, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588188349301, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588190897691, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588190915700, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588190939891, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588190962382, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588191028342, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588191039799, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588191061004, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588191066564, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588258877441, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588258889092, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588258986830, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588258996682, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1588785851029, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1589206102632, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1593186143303, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1593186265781, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1598775971266, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1599659985077, false);
INSERT INTO hdb_catalog.schema_migrations (version, dirty) VALUES (1600013821514, false);


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: carnetsuser
--

INSERT INTO public.files (id, team_slug, blob_name, created_at, name, size, type) VALUES ('d59c112b-e85d-4354-9116-7bb5a60b6b69', 'ops', '28973643-4c3f-4abc-be68-806f45f29da7', '2020-09-11 14:03:40.440345+00', '08-26 - revue sprint.pptx', 393080, 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
INSERT INTO public.files (id, team_slug, blob_name, created_at, name, size, type) VALUES ('fa1c85e3-575b-4463-9fda-a837b058a755', 'ops', 'a37da3a9-9933-4609-8084-c565b1c74fe3', '2020-09-11 14:03:47.659053+00', '09-09 - revue sprint.pptx', 391298, 'application/vnd.openxmlformats-officedocument.presentationml.presentation');


--
-- Data for Name: github_data; Type: TABLE DATA; Schema: public; Owner: carnetsuser
--

INSERT INTO public.github_data (id, admins_and_teams, created_at) VALUES ('7fcdbed8-b5dd-43a0-ba13-2a8b8dd10e56', '{"teams": [{"name": "Archifiltre", "slug": "archifiltre", "members": {"nodes": [{"url": "https://github.com/Alezco", "name": "Benjamin Morali", "login": "Alezco", "avatarUrl": "https://avatars0.githubusercontent.com/u/6598652?u=3aff5f699da85ebe09ed6f4300a8bd4b6e6b0ef6&v=4"}, {"url": "https://github.com/cberthou", "name": "Clément Berthou", "login": "cberthou", "avatarUrl": "https://avatars2.githubusercontent.com/u/6661925?u=8e8a3fdd67b54609f04c6d9061132a6035894fec&v=4"}, {"url": "https://github.com/saniyaas", "name": "saniya", "login": "saniyaas", "avatarUrl": "https://avatars2.githubusercontent.com/u/12534982?u=e399e918d04285ada5292514d57ca32933fdd1fa&v=4"}, {"url": "https://github.com/archifiltre", "name": null, "login": "archifiltre", "avatarUrl": "https://avatars2.githubusercontent.com/u/39261153?u=c6ba8ef698988cef54d7c8994e04fb2c46e56f88&v=4"}, {"url": "https://github.com/ChrisMP75", "name": "Christophe Mamfoumbi", "login": "ChrisMP75", "avatarUrl": "https://avatars0.githubusercontent.com/u/52200182?u=8c43757713b8307b29f6b8eb04318f0fc673af0e&v=4"}, {"url": "https://github.com/ChloeMoser", "name": null, "login": "ChloeMoser", "avatarUrl": "https://avatars1.githubusercontent.com/u/62606616?u=1f0d0438d50e79318ba34d4cd67d176840757f9c&v=4"}]}, "avatarUrl": "https://avatars1.githubusercontent.com/t/3215170?s=400&v=4", "description": "Aider les archivistes et les producteurs de documents bureautiques à     appréhender des arborescences complètes de fichiers pour les traiter."}, {"name": "Code du travail", "slug": "code-du-travail", "members": {"nodes": [{"url": "https://github.com/jeremiecook", "name": "Jérémie Cook", "login": "jeremiecook", "avatarUrl": "https://avatars2.githubusercontent.com/u/88306?u=91a913aa13f900641a1bd4766f606ff8fb374be5&v=4"}, {"url": "https://github.com/revolunet", "name": "Julien Bouquillon", "login": "revolunet", "avatarUrl": "https://avatars0.githubusercontent.com/u/124937?u=14a136192a3900c9aa0a4e79a8a285d30af57284&v=4"}, {"url": "https://github.com/lionelB", "name": "Lionel", "login": "lionelB", "avatarUrl": "https://avatars3.githubusercontent.com/u/160320?u=af614f4fc061834d8cfd7263499a400995715d53&v=4"}, {"url": "https://github.com/UnbearableBear", "name": "Manu", "login": "UnbearableBear", "avatarUrl": "https://avatars2.githubusercontent.com/u/705453?v=4"}, {"url": "https://github.com/rmelisson", "name": "Remi Mélisson", "login": "rmelisson", "avatarUrl": "https://avatars0.githubusercontent.com/u/752778?u=1cc961b1626adedddd8c6d98d6690fe3c307885a&v=4"}, {"url": "https://github.com/ClementChapalain", "name": "Clément Chapalain", "login": "ClementChapalain", "avatarUrl": "https://avatars0.githubusercontent.com/u/5337489?u=501d69e6f92ba6259fe2cffc2a7a87f0a469f58c&v=4"}, {"url": "https://github.com/ivangabriele", "name": "Ivan Gabriele", "login": "ivangabriele", "avatarUrl": "https://avatars2.githubusercontent.com/u/5957876?u=644a523f81a04eae05bb386f1f4cba314f4e7ffd&v=4"}, {"url": "https://github.com/ArmandGiraud", "name": null, "login": "ArmandGiraud", "avatarUrl": "https://avatars1.githubusercontent.com/u/22575341?u=f824b9510aef80ea651a19ee83fe220eee547a69&v=4"}, {"url": "https://github.com/jrduscher", "name": null, "login": "jrduscher", "avatarUrl": "https://avatars0.githubusercontent.com/u/37538697?u=0ad19ffcb6cd1f2e0abe9af6fd0864f442536a1a&v=4"}, {"url": "https://github.com/virginielastisneres", "name": null, "login": "virginielastisneres", "avatarUrl": "https://avatars0.githubusercontent.com/u/48682104?v=4"}, {"url": "https://github.com/June-law", "name": null, "login": "June-law", "avatarUrl": "https://avatars2.githubusercontent.com/u/52570886?v=4"}, {"url": "https://github.com/CaptainConan", "name": null, "login": "CaptainConan", "avatarUrl": "https://avatars2.githubusercontent.com/u/53531631?v=4"}]}, "avatarUrl": "https://avatars3.githubusercontent.com/t/2741090?s=400&v=4", "description": "Faciliter l''accès au droit du travail pour les employeurs et les salariés."}, {"name": "Covid-19", "slug": "covid-19", "members": {"nodes": [{"url": "https://github.com/revolunet", "name": "Julien Bouquillon", "login": "revolunet", "avatarUrl": "https://avatars0.githubusercontent.com/u/124937?u=14a136192a3900c9aa0a4e79a8a285d30af57284&v=4"}, {"url": "https://github.com/tglatt", "name": "Thomas Glatt", "login": "tglatt", "avatarUrl": "https://avatars1.githubusercontent.com/u/47273014?u=7ca2edd62d19d827266a56c0091e29f4612baa5f&v=4"}, {"url": "https://github.com/plenain", "name": "Paul Lenain", "login": "plenain", "avatarUrl": "https://avatars2.githubusercontent.com/u/50962217?u=10b805afa812be2cc0d41205bb616e8f1d003bc6&v=4"}, {"url": "https://github.com/Carolinedekerhor", "name": "Caroline de Kerhor", "login": "Carolinedekerhor", "avatarUrl": "https://avatars3.githubusercontent.com/u/51801828?v=4"}, {"url": "https://github.com/gary-van-woerkens", "name": "Gary van Woerkens", "login": "gary-van-woerkens", "avatarUrl": "https://avatars1.githubusercontent.com/u/59922165?u=395954bfafda361198d7dc00f38e9ac11b56ef95&v=4"}, {"url": "https://github.com/Laura-Amiri", "name": null, "login": "Laura-Amiri", "avatarUrl": "https://avatars3.githubusercontent.com/u/63098734?v=4"}, {"url": "https://github.com/JulienBarnu", "name": null, "login": "JulienBarnu", "avatarUrl": "https://avatars3.githubusercontent.com/u/63100195?v=4"}]}, "avatarUrl": "https://avatars2.githubusercontent.com/t/3740222?s=400&v=4", "description": ""}, {"name": "Data DGT", "slug": "data-dgt", "members": {"nodes": [{"url": "https://github.com/vicmartinezp", "name": null, "login": "vicmartinezp", "avatarUrl": "https://avatars3.githubusercontent.com/u/51990737?u=d71795b531555a298326239999ff2021f02ff91c&v=4"}, {"url": "https://github.com/nicolasbutez", "name": "Nicolas Butez (Invenis)", "login": "nicolasbutez", "avatarUrl": "https://avatars1.githubusercontent.com/u/55284673?u=e1fd01ebbb6bf148195f460ec32dbf0e84c01a3d&v=4"}, {"url": "https://github.com/Eric-Hei", "name": "Eric H", "login": "Eric-Hei", "avatarUrl": "https://avatars1.githubusercontent.com/u/58169990?u=026c47ab8c06fd0d6bd778a24c53e1ac8d467144&v=4"}, {"url": "https://github.com/vercau", "name": "Pierre Vercauteren", "login": "vercau", "avatarUrl": "https://avatars3.githubusercontent.com/u/61183464?v=4"}, {"url": "https://github.com/edouardnahama", "name": null, "login": "edouardnahama", "avatarUrl": "https://avatars2.githubusercontent.com/u/62931768?v=4"}]}, "avatarUrl": "https://avatars0.githubusercontent.com/t/4012673?s=400&v=4", "description": "Aider la DGT à détecter et analyser les comportements anormaux des Entreprises sur les AT et l''égalité professionnelle"}, {"name": "DIDOC", "slug": "didoc", "members": {"nodes": [{"url": "https://github.com/ClementChapalain", "name": "Clément Chapalain", "login": "ClementChapalain", "avatarUrl": "https://avatars0.githubusercontent.com/u/5337489?u=501d69e6f92ba6259fe2cffc2a7a87f0a469f58c&v=4"}, {"url": "https://github.com/saniyaas", "name": "saniya", "login": "saniyaas", "avatarUrl": "https://avatars2.githubusercontent.com/u/12534982?u=e399e918d04285ada5292514d57ca32933fdd1fa&v=4"}]}, "avatarUrl": "https://avatars1.githubusercontent.com/t/3653887?s=400&v=4", "description": "Dématérialisation des Invitations au Dépistage Organisé des Cancers"}, {"name": "DomiFa", "slug": "domifa", "members": {"nodes": [{"url": "https://github.com/pYassine", "name": "Yassine R.", "login": "pYassine", "avatarUrl": "https://avatars2.githubusercontent.com/u/11486845?u=3fcb0b83ec80355356d6e6133fc658374cfe1700&v=4"}, {"url": "https://github.com/saniyaas", "name": "saniya", "login": "saniyaas", "avatarUrl": "https://avatars2.githubusercontent.com/u/12534982?u=e399e918d04285ada5292514d57ca32933fdd1fa&v=4"}, {"url": "https://github.com/ledugong", "name": null, "login": "ledugong", "avatarUrl": "https://avatars1.githubusercontent.com/u/59437305?u=254264d2fe4bf6fba0b41ad75d974d292603a2ae&v=4"}]}, "avatarUrl": "https://avatars1.githubusercontent.com/t/3169896?s=400&v=4", "description": "Faciliter l''accès aux droits pour les personnes sans domicile stable, en simplifiant la gestion de la domiciliation."}, {"name": "EgaPro", "slug": "egapro", "members": {"nodes": [{"url": "https://github.com/vinyll", "name": "Vincent Agnano", "login": "vinyll", "avatarUrl": "https://avatars0.githubusercontent.com/u/145172?u=4529de7a1c778a27c8f89a2352684bdb571fd59a&v=4"}, {"url": "https://github.com/yohanboniface", "name": "Yohan Boniface", "login": "yohanboniface", "avatarUrl": "https://avatars1.githubusercontent.com/u/146023?v=4"}, {"url": "https://github.com/magopian", "name": "Mathieu Agopian", "login": "magopian", "avatarUrl": "https://avatars1.githubusercontent.com/u/167767?v=4"}, {"url": "https://github.com/tglatt", "name": "Thomas Glatt", "login": "tglatt", "avatarUrl": "https://avatars1.githubusercontent.com/u/47273014?u=7ca2edd62d19d827266a56c0091e29f4612baa5f&v=4"}, {"url": "https://github.com/vicmartinezp", "name": null, "login": "vicmartinezp", "avatarUrl": "https://avatars3.githubusercontent.com/u/51990737?u=d71795b531555a298326239999ff2021f02ff91c&v=4"}, {"url": "https://github.com/ledugong", "name": null, "login": "ledugong", "avatarUrl": "https://avatars1.githubusercontent.com/u/59437305?u=254264d2fe4bf6fba0b41ad75d974d292603a2ae&v=4"}]}, "avatarUrl": "https://avatars2.githubusercontent.com/t/3198250?s=400&v=4", "description": "Calculer et transmettre l''index égalité professionnelle femmes - hommes d''une entreprise."}, {"name": "eMJPM", "slug": "emjpm", "members": {"nodes": [{"url": "https://github.com/jeremiecook", "name": "Jérémie Cook", "login": "jeremiecook", "avatarUrl": "https://avatars2.githubusercontent.com/u/88306?u=91a913aa13f900641a1bd4766f606ff8fb374be5&v=4"}, {"url": "https://github.com/revolunet", "name": "Julien Bouquillon", "login": "revolunet", "avatarUrl": "https://avatars0.githubusercontent.com/u/124937?u=14a136192a3900c9aa0a4e79a8a285d30af57284&v=4"}, {"url": "https://github.com/Toub", "name": "Nicolas Toublanc", "login": "Toub", "avatarUrl": "https://avatars0.githubusercontent.com/u/367762?u=e91b7c572fc547da8cc54267199d2f364e3f736e&v=4"}, {"url": "https://github.com/douglasduteil", "name": "Douglas Duteil", "login": "douglasduteil", "avatarUrl": "https://avatars3.githubusercontent.com/u/730511?u=a7099465e1de51b100fe85c6d17d2a9e5488c405&v=4"}, {"url": "https://github.com/remiroyc", "name": "Rémi Roycourt", "login": "remiroyc", "avatarUrl": "https://avatars1.githubusercontent.com/u/11146088?u=4f72fecc2a1f567e053066bd694c779416f461db&v=4"}, {"url": "https://github.com/saniyaas", "name": "saniya", "login": "saniyaas", "avatarUrl": "https://avatars2.githubusercontent.com/u/12534982?u=e399e918d04285ada5292514d57ca32933fdd1fa&v=4"}, {"url": "https://github.com/palimpZest", "name": "Polo Vaca Jácome", "login": "palimpZest", "avatarUrl": "https://avatars0.githubusercontent.com/u/19314291?u=f86bcf9367301f0797ca698615db4a07bb38e6d0&v=4"}, {"url": "https://github.com/tglatt", "name": "Thomas Glatt", "login": "tglatt", "avatarUrl": "https://avatars1.githubusercontent.com/u/47273014?u=7ca2edd62d19d827266a56c0091e29f4612baa5f&v=4"}, {"url": "https://github.com/Jasminemeurin", "name": null, "login": "Jasminemeurin", "avatarUrl": "https://avatars2.githubusercontent.com/u/51956075?v=4"}, {"url": "https://github.com/ChrisMP75", "name": "Christophe Mamfoumbi", "login": "ChrisMP75", "avatarUrl": "https://avatars0.githubusercontent.com/u/52200182?u=8c43757713b8307b29f6b8eb04318f0fc673af0e&v=4"}, {"url": "https://github.com/Lucie-0", "name": null, "login": "Lucie-0", "avatarUrl": "https://avatars0.githubusercontent.com/u/52695726?v=4"}, {"url": "https://github.com/SandrineHa", "name": null, "login": "SandrineHa", "avatarUrl": "https://avatars1.githubusercontent.com/u/52788747?v=4"}, {"url": "https://github.com/tiphaineraffray", "name": null, "login": "tiphaineraffray", "avatarUrl": "https://avatars0.githubusercontent.com/u/64261359?v=4"}]}, "avatarUrl": "https://avatars2.githubusercontent.com/t/2670245?s=400&v=4", "description": "Trouver rapidement le bon professionnel pour les majeurs à protéger."}, {"name": "FCE", "slug": "fce", "members": {"nodes": [{"url": "https://github.com/ozee31", "name": "Flavien Beninca", "login": "ozee31", "avatarUrl": "https://avatars1.githubusercontent.com/u/5025797?v=4"}, {"url": "https://github.com/valentinEutrope", "name": "Eutrope Valentin", "login": "valentinEutrope", "avatarUrl": "https://avatars1.githubusercontent.com/u/32456205?u=64e8d06a5278152687ff7337a9e51530b0c520a3&v=4"}, {"url": "https://github.com/vercau", "name": "Pierre Vercauteren", "login": "vercau", "avatarUrl": "https://avatars3.githubusercontent.com/u/61183464?v=4"}]}, "avatarUrl": "https://avatars0.githubusercontent.com/t/3173395?s=400&v=4", "description": "Un portail pour faciliter l’accès aux informations disponibles sur les entreprises et les échanges entre services."}, {"name": "Medlé", "slug": "medle", "members": {"nodes": [{"url": "https://github.com/pom421", "name": null, "login": "pom421", "avatarUrl": "https://avatars3.githubusercontent.com/u/3749428?u=910a43a722707c1f2860f8abb0d27a510974763b&v=4"}, {"url": "https://github.com/saniyaas", "name": "saniya", "login": "saniyaas", "avatarUrl": "https://avatars2.githubusercontent.com/u/12534982?u=e399e918d04285ada5292514d57ca32933fdd1fa&v=4"}]}, "avatarUrl": "https://avatars2.githubusercontent.com/t/3458651?s=400&v=4", "description": "La plateforme de suivi de l''activité nationale de médecine légale"}, {"name": "ONVS", "slug": "onvs", "members": {"nodes": [{"url": "https://github.com/pom421", "name": null, "login": "pom421", "avatarUrl": "https://avatars3.githubusercontent.com/u/3749428?u=910a43a722707c1f2860f8abb0d27a510974763b&v=4"}, {"url": "https://github.com/saniyaas", "name": "saniya", "login": "saniyaas", "avatarUrl": "https://avatars2.githubusercontent.com/u/12534982?u=e399e918d04285ada5292514d57ca32933fdd1fa&v=4"}]}, "avatarUrl": "https://avatars2.githubusercontent.com/t/3799752?s=400&v=4", "description": "Observatoire National de la Violence en Santé"}, {"name": "OPS", "slug": "ops", "members": {"nodes": [{"url": "https://github.com/ylascombe", "name": "Yohan Lascombe", "login": "ylascombe", "avatarUrl": "https://avatars0.githubusercontent.com/u/9507323?u=6c29ab3a8e6d2fe3d3d0c2e1c11fc116b7be2240&v=4"}, {"url": "https://github.com/MCyprien", "name": "Marc", "login": "MCyprien", "avatarUrl": "https://avatars2.githubusercontent.com/u/11160859?u=f9b1cfe1ee64aa94a4d542e3e6cc65e5f92b060b&v=4"}, {"url": "https://github.com/igorrenquin", "name": null, "login": "igorrenquin", "avatarUrl": "https://avatars1.githubusercontent.com/u/35840889?u=80f2a28b6248ff42985d5fd4a8621641b3c3b1c3&v=4"}, {"url": "https://github.com/jualito", "name": null, "login": "jualito", "avatarUrl": "https://avatars3.githubusercontent.com/u/62375849?v=4"}]}, "avatarUrl": "https://avatars2.githubusercontent.com/t/3642248?s=400&v=4", "description": "Modeler les plateformes d''hébergement et de déploiement"}, {"name": "Oz ensemble", "slug": "oz-ensemble", "members": {"nodes": [{"url": "https://github.com/goffle", "name": "goffle", "login": "goffle", "avatarUrl": "https://avatars2.githubusercontent.com/u/28667787?u=bb0c1302102e8f0265f349a2d9261ed2afe7ef94&v=4"}, {"url": "https://github.com/Carolinedekerhor", "name": "Caroline de Kerhor", "login": "Carolinedekerhor", "avatarUrl": "https://avatars3.githubusercontent.com/u/51801828?v=4"}]}, "avatarUrl": "https://avatars3.githubusercontent.com/t/3734677?s=400&v=4", "description": "Redonner aux usagers la maîtrise de leur consommation. Autoévaluation, suivi et accompagnement pour les consommateurs d’alcool."}, {"name": "PassPreservatif", "slug": "passpreservatif", "members": {"nodes": [{"url": "https://github.com/Wonsy", "name": "R.P.", "login": "Wonsy", "avatarUrl": "https://avatars0.githubusercontent.com/u/10187097?v=4"}, {"url": "https://github.com/ViMotte", "name": null, "login": "ViMotte", "avatarUrl": "https://avatars2.githubusercontent.com/u/15727466?u=78c1ee9bfadeb3bcdb8c7186d7cbe8117cd8fff5&v=4"}, {"url": "https://github.com/ThomasMenant", "name": null, "login": "ThomasMenant", "avatarUrl": "https://avatars0.githubusercontent.com/u/16664528?u=90d21d72094445a1b3767517652e8a04b79d7d59&v=4"}, {"url": "https://github.com/yowamuzadi", "name": null, "login": "yowamuzadi", "avatarUrl": "https://avatars3.githubusercontent.com/u/57663987?u=994813ba39d803c23ba61a1cf15efd703ffd33ee&v=4"}, {"url": "https://github.com/PerrineG", "name": null, "login": "PerrineG", "avatarUrl": "https://avatars3.githubusercontent.com/u/59702865?v=4"}]}, "avatarUrl": "https://avatars3.githubusercontent.com/t/3443898?s=400&v=4", "description": "L''app de la santé et de l''éducation sexuelle pour les moins de 25 ans."}, {"name": "SRE", "slug": "sre", "members": {"nodes": [{"url": "https://github.com/revolunet", "name": "Julien Bouquillon", "login": "revolunet", "avatarUrl": "https://avatars0.githubusercontent.com/u/124937?u=14a136192a3900c9aa0a4e79a8a285d30af57284&v=4"}, {"url": "https://github.com/douglasduteil", "name": "Douglas Duteil", "login": "douglasduteil", "avatarUrl": "https://avatars3.githubusercontent.com/u/730511?u=a7099465e1de51b100fe85c6d17d2a9e5488c405&v=4"}, {"url": "https://github.com/gary-van-woerkens", "name": "Gary van Woerkens", "login": "gary-van-woerkens", "avatarUrl": "https://avatars1.githubusercontent.com/u/59922165?u=395954bfafda361198d7dc00f38e9ac11b56ef95&v=4"}]}, "avatarUrl": "https://avatars1.githubusercontent.com/t/3729659?s=400&v=4", "description": "Site Reliability Engineering"}, {"name": "WorkInFrance", "slug": "workinfrance", "members": {"nodes": [{"url": "https://github.com/ViMotte", "name": null, "login": "ViMotte", "avatarUrl": "https://avatars2.githubusercontent.com/u/15727466?u=78c1ee9bfadeb3bcdb8c7186d7cbe8117cd8fff5&v=4"}, {"url": "https://github.com/DanielBMY", "name": null, "login": "DanielBMY", "avatarUrl": "https://avatars0.githubusercontent.com/u/35037792?u=c4e7bc835d8f70e50839dda42b939278b01a4656&v=4"}, {"url": "https://github.com/tglatt", "name": "Thomas Glatt", "login": "tglatt", "avatarUrl": "https://avatars1.githubusercontent.com/u/47273014?u=7ca2edd62d19d827266a56c0091e29f4612baa5f&v=4"}, {"url": "https://github.com/anaandreolla", "name": null, "login": "anaandreolla", "avatarUrl": "https://avatars0.githubusercontent.com/u/51408054?v=4"}, {"url": "https://github.com/abdellahbh", "name": "Abdellah Ben Hallou", "login": "abdellahbh", "avatarUrl": "https://avatars3.githubusercontent.com/u/60177831?v=4"}]}, "avatarUrl": "https://avatars0.githubusercontent.com/t/2612368?s=400&v=4", "description": "La plateforme de demande d''autorisation provisoire de travail pour les étudiants étrangers."}], "admins": ["revolunet", "douglasduteil", "ThomasMenant", "yfmadaule", "igorrenquin", "SocialGroovyBot", "vicmartinezp", "Eric-Hei", "gary-van-woerkens"]}', '2020-09-16 22:28:22.072071+00');


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: carnetsuser
--

INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-09-14 11:29:18.084964+00', '9ea958b5-eb9f-49ea-9ec8-bc21026dc3e4', 'good', '- Déploiement d''une nouvelle plateforme de monitoring unique pour les clusters Kubernetes', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ramses', '2020-02-07 11:08:51.046+00', '2804e87f-581c-4967-9259-8f66f5f67003', 'good', 'Validation des résultats avec les équipes métiers', '', '', 'nicolas.butez@invenis.com');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-02-04 10:34:51.705+00', '25c3caf6-9906-480d-8984-59649319c3e4', 'good', 'Design tableau de bord
Backup base de données', 'Fin mars, 7 structures supplémentaires', '', 'mauguet.po');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-09-14 15:48:50.862657+00', 'd49f5bd8-1b13-44db-aa63-3a821ce84c16', 'good', 'Point FCE lundi 14/09 pour leur envoyer les index des entreprises : URL de test à venir.

Simplification de la transformation de la donnée (entre ce que je rentre dans le formulaire et ce qui entre en base).', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-02-10 13:27:15.872+00', '7147eeec-2dfd-44d3-8f3d-a8ed734113ba', 'good', 'Déclaration désormais disponible', 'Déclaration désormais disponible', 'Un 2ème développeur', 'victoria.martinez');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-02-25 10:12:57.023+00', '4508f932-61b1-4752-b144-883023516859', 'good', 'Dev : cryptage des données, nouveau design des filtres
Déploiement : stratégie OK, flyers OK, guide utilisateur à finir', 'Lancement du déploiement en mars', '', 'annelaure.pilloy');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-03-24 09:56:38.1+00', 'cc7800ec-9c78-47f2-9c06-c5af973b0d97', 'good', 'Continuation des tâches techniques pour automatiser un maximum les process, régler les bugs restants...
', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-09-14 15:51:05.096252+00', '2a823d15-e120-4e6b-b159-d020128701d5', 'good', 'Déploiement

- board 18 septembre
- finalisation candidature FAST
- rencontre de la nouvelle référente DGCS
- prise de contact avec la DIHAL
- publication d''une présentation DomiFa sur la page "betagouv pour l''insertion"', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-04-27 17:11:50.533+00', 'b8d3dd1c-4275-4d40-bbb2-112689c114a0', 'average', 'test', '', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-09-15 08:56:55.113437+00', '745f1f60-f0b8-401e-a6ea-41bc8c93d06c', 'average', 'Intégration données qualité de l''eau Obépine', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-03-04 22:37:40.569+00', '77a0d344-cc1b-4c21-a5b9-cdb30578b480', 'good', 'V0 cryptage des données
Finalisation guide utilisateur
Mise en place stratégie de déploiement (flyers, mails type...)', '18/02 après-midi : visite du CCAS de la ville de Paris', '', 'gary-van-woerkens');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('code-du-travail', '2020-09-15 08:58:35.284679+00', 'b548b55c-20fe-4c30-808b-bace5ca19b72', 'average', ' - Bonne hausse du traffic : a continuer
 - RDV cab travail avec nouvelles perspectives
 - Démo ministre Vendredi 18 ?', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-05-26 07:40:48.135183+00', '7b84bd3b-7577-4cec-a850-25ba2dd0929b', 'good', 'Suivi campagne 

•    76 structures inscrites en formation 

•    35 structures formées 

•    31 structures intéressées inscrites sur DomiFa 

Actions en cours

•   Envoi des relances Auvergne Rhône Alpes et Ile-de-France

•   Envoi des nouvelles campagnes Nouvelle Aquitaine, Pays de la Loire, Grand-Est

•   Création d’un fichier de suivi des campagnes et REX des deux premières campagnes réalisées

•   Reprise des formations jusqu''à mi-Juin 

•   Reprise de contact progressive avec les structures en cours d’inscription avant le confinement

•   Traitement des questions support', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-09-15 09:44:52.65911+00', 'b73b2037-5280-44b6-87a4-67796bd185eb', 'good', 'Réunion mardi dernier:  avec la direction des services judiciaires de la Chancellerie (finance),  DGOS, service de Tours (bêta testeur)

Réunion jeudi dernier : réunion avec la Direction des affaires criminelles et des Grâces, inspecteurs IGAS qui ont participé aux missions de 2013 & 2015, DGPN, DGGN, président de la SFML.

=> présentation du produit, recueil de besoin (fonctionnalités, statistiques, etc..). Besoin remonté pour la phase 1 (fin 2020) de Médlé: temps moyen des actes + en 2021, inclure réseau de proximité et IRCGN, IML de Paris.', 'Au 1er octobre, ouverture de Médlé à 13 nouveaux établissements (soit 41/47).

Sujet sur la fin du financement de Médlé à fin octobre (abordé lors des 2 réunions) ? ', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-09-15 09:49:23.391927+00', '4462deae-3a39-4bb4-8f08-6c1774884791', 'average', 'Persistance en base de données de la déclaration pour une mise en production réelle prévue pour fin septembre.

Mise au point du contenu métier.
', 'Fin septembre, mise en production et recueil des déclarations par les libéraux pour valider l''utilité du produit.

Validation de l''expérimentation avec les ordres (infirmiers, sages femmes, masseurs kiné, pédicure podologue).', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-06-16 09:31:23.898977+00', '78fb9f6c-af4a-4f3c-b787-a70b9bf72f39', 'good', 'Réduction du cout unitaire des Box
Ajouts du contenu audio en Bushinenge (Guyane)', 'Demande de financement FAST envoyée
Fin de stock de la Box 3
', 'Recommande de matériel', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('oz-ensemble', '2020-07-06 09:46:15.957389+00', 'c4a71457-1a5c-42e0-af33-eb8cc5a0a08e', 'good', '- Trouver le financement pour les 12 prochains mois
- Faire grandir l''équipe avec un buisdev
- Continuer à faire évoluer le produit : mesure plus fine, scan...
', '- Comité de fin de 6 mois fin août', '- Un nom au ministère ou autre à qui vendre le projet ;) / des idées de financement
- Un busidev intéressé :)
', 'Carolinedekerhor');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-06-23 08:40:07.712382+00', 'a5ce4952-30e3-4995-9b9d-68ca2b4c1ac2', 'good', '- Sortie de la prochaine version avec nouvelle maquette, moteur de recherche et déplacement

- Préparation d''un questionnaire pour les utilisateurs pour l''été', '- Webinaire le 25 juin: 200 inscrits!

- Comité d''investissement : officialisation du soutien financier du service interministériel des archives de France', '- Travailler sur la refonte du site Internet', 'ChloeMoser');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-06-23 09:53:23.832478+00', '35a9b279-901f-4e3b-b90a-7d269abe8acd', 'good', 'Journée d''équipe (cohésion + retroplanning)', 'Rupture Box 3
Optimisation coût des box', '', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-06-16 09:53:38.063476+00', 'cb61b4a8-a558-4ae0-add0-485136fb9002', 'average', 'développement : statistiques plus détaillées. Correction bug sur les moyennes des actes
', '', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-06-23 09:18:21.179397+00', '54c9c475-10fd-41ac-a866-8a95a891a910', 'average', '- développement : formulaire en cours de finalisation
', 'board :p', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-02-25 11:06:05.547+00', '5a046540-ed5a-4f8e-9cb8-9b145a6be30a', 'good', 'Finaliser les derniers développements et les tests utilisateurs
Réflexion sur la communication à mettre en place', 'Petit dej ce matin à la Fabrique
COPIL cet après-midi 
Design sprint avec l''ARS Guyane', 'Vos retours sur nos contenus (voir Mattermost /incub -> retour tumpelay v1)', 'mottevincent');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-03-03 11:02:18.649+00', '6a6bff61-9148-49e9-9ab6-29d1672e92b7', 'good', 'Remontée d''indicateurs', 'Lancement officiel DEMAIN !
Visite CRIPS IDF
Manchester debut de semaine prochaine', 'Vos retours sur l''appli', 'mottevincent');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-02-04 09:52:25.465+00', '1daaf49a-9c86-4429-851d-e56ba362ddc1', 'good', 'Déclaration après simulation', '07/02 -> mise en prod de la déclaration', '', 'victoria.martinez');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-03-10 10:59:19.676+00', 'd6b6091b-6f2e-4994-af51-b22da1434107', 'good', 'Déploiement :
- Retour de l’UNCCAS qui va publier sur DomiFa (partie actualités du site internet et mailing au 4000 structures adhérentes)
- Retour de l''ACTAS à venir (prochain rdv le 13.03)
- Partage de la procédure d''inscription auprès de 10 structures intéressées
- Reprise de contact avec les structures ayant participé aux groupes de travail ou manifesté un intérêt lors de la phase de développement (mailing d''information envoyé auprès d''une 40aine de structures)
- Prise de contact avec les référents des régions Grand Est, Pays de la Loire et Occitanie pour planification de réunions de présentation', '31 mars : Première réunion de présentation en région Auvergne Rhône-Alpes

Dev : configuration des stats pour le rapport d''activité des structures', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-03-10 09:44:12.939+00', '988febc0-e12c-475a-9875-1359fc41d858', 'good', 'Se poser sur la stratégie à venir : suppression de l''outil SOLEN', '', 'Reprendre son souffle', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-05-05 08:29:26.74505+00', 'c39cfd29-1b34-4384-af47-817ff7c8715f', 'good', '- Finalisation de la page de consultation et MEP! 
- Retour suite à la consultation de la commission européenne
- Recette sur la migration de données vers Index Egapro
- Finalisation de la roadmap
- Onboarding Yohan (dév)', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('code-du-travail', '2020-02-04 09:56:02.993+00', '493275bc-cd33-4707-8079-1cf2028d78aa', 'good', 'Travail sur la veille et l''administration des contenus. 
Arrivée d''un chargé de déploiement :)', '', '', 'annelaure.pilloy');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('sre', '2020-03-31 07:46:41.663+00', '45e0a714-7d53-4914-b77e-5a8334e45a8e', 'good', '- [SRE] Organisation et outillage
- [WIF] Accompagnement de la mise en prod d''un fix ', '- Création de la team SRE', '- Temps ;)', 'douglasduteil');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-03-31 08:27:44.198+00', 'a79a238c-ab2d-4350-b0c3-ed89a02893ae', 'good', 'Déploiement :
Région Auvergne Rhône Alpes campagne de mailing envoyée à 469 structures 
A J+1 : 21% d’ouvertures, 4 personnes inscrites, des sessions de formations via whereby prévues semaines du 6 et 13 avril 

Développement : 
Suite aux stats, sprint de correction de bugs avant d''attaquer un nouveau sujet', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-03-17 09:52:54.296+00', 'c7486295-e2ae-41d3-bc0a-6e76e818c8d8', 'good', 'Campagne de déploiement affectée, en quête de solutions pour continuer avec le confinement --> mailing, webinaires.

Développement : génération des stats pour les rapports d''activité des structures', 'Réunion de déploiement Auvergne Rhône Alpes du 31/03 annulée.
En cours : mailing des Directions Régionales ou Directions Départementales.', 'Du papier toilette', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-03-24 09:46:33.131+00', '31d52cd0-3053-4e9f-a592-c874c4b75891', 'good', 'Développement : finalisation de la recette des stats.
Ecriture du document d''architecture.', 'Échange de suivi avec les structures récemment inscrites / reprise de contact avec les structures intéressées mais pas encore inscrites.

Prise de contact avec les référents régionaux et départementaux pour début avril. 

Focus sur Auvergne Rhône Alpes : campagne d’emailing cette semaine (environ 450 structures ciblées). ', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-03-31 08:40:58.362+00', '28692650-a1ae-40fc-8f46-2bb185852bed', 'good', 'Ticket d''automatisation du process de récupération de l''export + changement de l''URL de déclaration en fonction de l''outil utilisé (Egapro ou SOLEN)

Consultation de l''index : plus de doublons, accents acceptés, titre onglet...
', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-04-07 08:47:45.262+00', '735422fb-6b00-4831-8e70-d344e807de28', 'good', 'Déploiement
Campagne ARA envoyée le 30 mars à 469 structures 
24% d’ouvertures 
18 répondants à j+7
Formations commencent aujourd’hui 
Communication sur la campagne à travers les réseaux sociaux betagouv (Twitter LinkedIn newsletter interne et externe) envoyée semaine dernière
Communication sur le MAS à venir

Développement
Statistiques en production, design à venir la semaine prochaine
Fonctionnalité de notifications par SMS --> envoi d''un questionnaire de recueil de besoin aux structures

Point sécurité avec Thomas H. la semaine dernière', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-03-31 09:56:31.678+00', '7b2e8660-7fa2-4d8f-9863-9297103fc97a', 'good', '- Ouverture aux 3 nouveaux utilisateurs demain (1er avril)
- MEL page FAQ
- Début BO administration (WIP)
', '- COPIL 21 avril - à recaler plus tôt ', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-04-07 09:07:27.72+00', 'b03738fe-0256-456e-8755-2f82933a4389', 'good', 'Retour de Victoria woop woop

Réponse aux mails support envoyés sur le site de consultation de l''index.
Retro sur les dernières semaines.
Point Roadmap pour le prochain gros point : la suppression de l''outil SOLEN pour permettre une déclaration Egapro sans simulation préalable.', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-03-31 10:38:35.919+00', 'f1abf97b-f5ba-48b8-8d68-af8d37f95735', 'good', '- Travail de développement sur le **déplacement des éléments**
- Préparation de la 1ère version du **moteur de recherche** et du **filtre**!
- Finalisation de la **nouvelle maquette**
- Gros travail de documentation sur le wiki', '- Congrès et séminaires annulés
- Prochain openlab: à déterminer
- Proposition d''accompagnement individuel pour les archivistes en télétravail
- Entretiens utilisateurs cette semaine pour la refonte de la maquette
', '- Trouver une bonne solution pour des webinaires
- Afficher notre roadmap sur github
- Officialiser le soutien financier des archives de France à l''outil', 'archifiltre');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-04-07 09:33:52.676+00', '87120af1-0b65-4828-a1ab-d54686c0ae85', 'good', '- Finalisation de la nouvelle maquette
- Interviews utilisateurs pour tester la maquette
- Finalisation du moteur de recherche', '- Poursuite des accompagnements personnalisés au téléphone', '- Toujours besoin d''organiser des webinaires
- Travail sur le financement', 'archifiltre');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-04-21 09:29:43.664+00', '94cd3ab2-dbe0-49b6-8def-538565c21076', 'good', '•    Campagne IDF envoyée Taux d’ouverture à 24% à J+4 

•    Au total (campagnes Auvergne Rhône Alpes + Ile De France) – 39 structures inscrites en formations – 10 structures formées au 20/04 – 8 inscrites sur DomiFa

•    Prolongation des sessions de formation les mardis et mercredi jusqu’à la fin du confinement

Autres informations de la semaine :
•    Création d’un fichier de suivi des questions support

•    Identification des questions récurrentes pour mise à jour de la FAQ

•    Mise à jour du guide utilisateur et préparation d’un mail automatique pour transmission du guide à l’inscription d’une nouvelle structure', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-04-14 08:50:22.71+00', '820e3404-d035-4956-b444-de1b772b7c40', 'good', '- Finalisation de la page de consultation
- Migration de données vers Index Egapro
- Définition de la Roadmap sur Index Egapro
', '- Rétro (07/04)
- Outillage (10/04)
- Roadmap (21/04)', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-04-21 09:31:09.463+00', '77802767-61b1-4144-a4e9-212768ecf00b', 'good', 'Rédaction Appel d''Offre
Adaptation aux problématiques de la Guyane', 'Conception d''un module de recherche
Cadrage des spécificités Guyane Accessibilité - (audio), Visuels adaptés, Partenaires locaux
Intégration en préprod des nouvelles fonctionnalités du BO
', 'Nouvelles url pour l''appli Guyane', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-04-14 09:32:21.545+00', '1a32a095-17b9-408b-81b4-3caf5c9e0170', 'good', '- Finalisation de la **nouvelle maquette**
- Finalisation du moteur de recherche
- Tests sur le déplacement d''éléments', '- Poursuite des **accompagnements personnalisés** au téléphone: 17 réalisées en tout', '- Toujours besoin d''organiser des webinaires
- Travail sur le financement', 'archifiltre');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-04-21 09:39:23.666+00', '750d0ed8-3fa3-4e3c-8552-4af159990315', 'good', '- Nouveau dev dans l''équipe :) 

- Finalisation de la page de consultation

- Migration de données vers Index Egapro

- Définition de la Roadmap sur Index Egapro', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-06-02 09:16:06.64922+00', 'cf616b56-cfe4-48cd-b0cb-332869f78c82', 'good', 'Déploiement

Contact régions PACA, Bourgogne Franche-comté et Outre-Mer

Développement

Export V3 + Mail d''import + FAQ', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-04-14 10:02:11.647+00', '7abc3950-4a9a-41e3-8410-500201dd650d', 'good', 'REX sur les formations via whereby

•    Suivi Campagne ARA J+15 24% d’ouvertures 

•    Relance envoyée à ceux qui ont ouvert le typeform mais qui ne se sont pas inscrits en formation

•    17 structures inscrites sur le typeform (dont 3 hors Auvergne Rhône Alpes)

•    6 structures formées la semaine dernière (dont 4 inscrites sur DomiFa)', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-04-27 09:22:09.925+00', '0bf918dd-002e-4a06-abad-a14d3eea4c44', 'good', '- Onboarding Yohan (dév)
- Finalisation de la page de consultation
- Migration de données vers Index Egapro
- Définition de la Roadmap sur Index Egapro
- Modifications sur la démarche simplifiée d''accompagnement', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('fce', '2020-04-27 16:02:36.914+00', 'b1f45736-21ce-4d9b-9172-65858b683371', 'good', '- Déploiement national à partir du 27/4
- FAST3 : Roadmap à formaliser', 'Déploiement officiel du produit à l''ensemble des DIRECCTE via la DICOM', '', 'vercau');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-04-28 09:56:25.301+00', '181c276a-6f2c-4c38-83c8-b5ff0a5ca896', 'good', 'Formalisation de notre outil de recherche
Chantier de communication réseaux sociaux / partenaires relais
Finalisation de l''appel d''offre ', '', 'Plein d''idées pour une communication sur les réseaux sociaux réussie ;)', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-04-21 09:23:03.128+00', '28b78a8f-33f3-42fa-9252-bb8e0488682c', 'good', '- back-office, avec la gestion des demandeurs
- continuer déploiement pour avoir un maximum d''utilisateurs au 30/06 malgré situation actuelle', '- semaine passée : mise en ligne interface admin (gestion des utilisateurs et des ETS)', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-08-04 09:42:09.382464+00', '6456fec1-03d5-4110-8eda-01f37e2c2c65', 'good', '- finalisation questionnaire aux utilisateurs en vue d''un envoi mi-août
- mise à jour de toutes les librairies (Next 9.5)
- amélioration du format du fichier excel des statistiques
', '', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-05-05 09:21:40.122409+00', 'e3875610-13fa-4ee7-a720-dfed6c2d94f4', 'good', 'Cadrage de notre communication sur les réseaux sociaux
Début de l''AB Testing (parcours utilisateurs différenciés)
Intégration de nos Test Unitaitres (Swagger dispo !)', 'Allocution Covid -> Reprise du service de livraison des boites ?', '', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-05-12 09:04:20.35578+00', '4744824a-3861-4371-a5d1-c490a348fdf3', 'good', 'Suivi campagne 

52 structures inscrites en formation

35 structures formées 

31 structures intéressées inscrites sur DomiFa 

Actions en cours 

Mise à jour du guide utilisateurs suite aux évolutions de la plateforme (modules statistiques et export)
 
Création d’une page de statiques focus déploiement qui permettra de suivre les acquisitions et les utilisateurs (afin de repérer les inscrits mais non actifs)

Préparation des prochaines campagnes et des sessions de formations post confinement

Rétro équipe', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-05-05 09:30:30.020585+00', '477b12dc-eed8-4caf-aedf-bddb9c7f56d9', 'good', 'Développement :
- liste des actes : filtres
- stats : export de données
- personnel : ETP de référence', 'Semaine dernière :
- 4 nouveaux utilisateurs depuis vendredi dernier

', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-04-28 09:18:41.467+00', '20a3b160-2646-425d-8238-81b78ee74d12', 'good', '- Back-office : mise en ligne gestion des demandeurs
- Préparation nouvelle vague d''utilisateurs pour le 1er juin', '- +600 actes depuis mardi dernier
-  3 nouveaux utilisateurs au 1er mai (dans 3j)', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-05-12 09:11:18.271799+00', '27131bf4-b196-42f4-adb7-8aca498820b7', 'good', 'Finalisation de la roadmap
 
Recette avec DGT migration des données

Onboarding Yohan', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-05-12 09:52:32.033602+00', 'b12226ad-68d7-4508-bea6-db5aaa94b1ed', 'good', '- développement : filtres recherche, finalisation export des données
- déploiement : prise en main avec les  9 nouveaux établissements qui commencent au 1er juin', '- semaine passée : réunion avec 3 ETS bêta-testeurs-concepteurs (muy bien)', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-05-12 09:56:32.52991+00', 'b9c3a2f2-497a-4d90-9647-2d37a01b6de5', 'good', '- Amélioration de la documentation: wiki, vidéos et site Internet

- Développements de la nouvelle maquette

', '- Convention pour le financement par le SIAF à réaliser avant l''été

- Webinaire de présentation avec Libriciel le 25 juin', '', 'archifiltre');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-05-18 13:18:21.520267+00', '588f4eb6-ec3b-4258-b232-22c4e27bcb2f', 'good', '- Recette migration de données
- Partage de la priorisation des chantiers avec la DGT
- Réflexions autour des chantiers "arrêt solen" et "API"', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-05-11 09:21:45.095884+00', 'e21ee2a9-7b61-49a6-adb0-fac10eed04c5', 'good', '
 - 20 tests disponibles affichés en Public

 - intégration données DREES

 - sécu', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('sre', '2020-05-11 15:17:49.200472+00', 'a0750871-1491-4c5c-be22-a91b09786190', 'good', '
 - performance des runners

 - sample-app

 - améliorations AutoDevOps

 - mise à jour des pipelines existants', 'Mise en ligne documentation : https://socialgouv.github.io/support', 'Feedback sur la documentation', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-05-19 07:39:18.389111+00', 'fb10cd03-1b92-4c97-90e4-5940fb841f74', 'good', 'Suivi campagne

•    53 structures inscrites en formation (15 ARA, 37 IDF, 1 NA)

•    34 structures formées

•    30 structures intéressées inscrites sur DomiFa 

Actions en cours

Pause dans les formations pour permettre aux structures de s’organiser suite au déconfinement / à DomiFa de finaliser le module de statistiques et d’export de données

Planification des prochaines sessions à compter de la semaine prochaine (fin mai et juin les mardis et mercredis)

Préparation des bases de données contacts pour envoi des prochaines campagnes régionales

Référencement de Domifa sur le site de l’ADULLAC (L''Association des développeurs et utilisateurs de logiciels libres pour les administrations et les collectivités territoriales)

Traitement des questions support en lien avec la sécu (conformité RGPD, déclaration à la CNIL, plan de continuité en cas de panne…)

Développement

Export en cours d''itération', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-05-19 08:56:17.119923+00', '8283e0c9-3c73-491b-97c5-fdda2922f705', 'good', '- Dév : amélioration stats, périmètre plusieurs ETS
- Déploiement : finaliser ARS Bretagne, Bordeaux, Pau, Strasbourg, Brest, Pontoise, Gonesse
- Intervention auprès des ARS quand SI des ETS obsolètes', 'Semaine dernière : démos Brest, Pontoise, Gonesse', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-05-19 09:20:06.863652+00', 'b2e07d4d-24c4-4e4a-b0a2-65cae42334f8', 'good', 'Organisation d''un BOARD début Juin
Validation des premiers contenus Guyane', 'Relancement officiel du service de livraison des box (à domicile)
Questionnaires de satisfaction envoyés à nos premiers utilisateurs (10 réponses)', '', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-05-25 08:18:08.352883+00', 'eb47d068-3270-4e5f-ac32-f2cf1af72e40', 'good', 'Annonce officielle de la publication des tests

Intégration DREES', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-05-25 09:00:15.28566+00', '8eabae7d-61ed-4d3f-85b0-0ca5f4b55741', 'good', '- Recette migration de données
- Consultation entreprises
- Réflexions autour des chantiers "arrêt solen" et "API"', '- Premiers avis sur le site de consultation', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-08-11 09:21:27.30709+00', '93fe58a5-c376-44c7-9fec-d4f35dbd7d3a', 'good', 'Travail avec la DGT sur l''export consolidé depuis la nouvelle architecture', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-08-11 09:20:27.464111+00', 'e4cf85a5-ba05-4dd6-b21c-62f63c1f572a', 'good', '- Préparation du nouveau site
- Communication sur la sortie de la nouvelle version', '- Prochain openlab début octobre', '- Atelier Storymap 2ème semestre planifié la semaine prochaine', 'ChloeMoser');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-05-26 08:59:13.581529+00', '3edba515-c37f-4110-be02-70e0e30bd6eb', 'good', '- les 10 000 actes ont été dépassés cette semaine 🎉
- correction bug sur la pagination
- dev : amélioration visuelle sur statistiques
- le déploiement continue selon notre planning', 'Ouverture le 1er juin à une dizaine de nouveaux établissements', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-06-02 08:59:00.601971+00', '2b5b1741-123a-4890-ae8a-c988257f440d', 'good', '- Recette migration de données
- Consultation entreprises / éditeurs de logiciels
- Travaux autour des chantiers "arrêt solen" et "API"
- Point avec UX sur le nouveau parcours utilisateur', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-06-02 09:52:10.664351+00', '66bd8478-2642-4a9b-880c-7ce6db8a4ea0', 'good', '- développement : intégration retours UMJ/IML (ajout items, ...), ajout fonctionnalité filtre stats
- déploiement : prépa ETS qui commencent au 01/07 (11 établissements)', '- depuis hier, 8 nouveaux utilisateurs depuis hier : Strasbourg, Pontoise/Gonesse, Rennes, Marseille, Bordeaux, Montpellier, Amiens, Brest', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-06-09 08:09:35.408973+00', '3ca61e6e-f132-4de6-9a5f-3957192c256f', 'good', 'Suivi campagne

•    139 structures inscrites en formation

•    59 structures formées

•    39 structures intéressées inscrites sur DomiFa

Actions en cours

•   Suite des campagnes en cours, animation des sessions de formation et suivi des inscriptions sur DomiFa

•   Envoi des nouvelles campagnes Bourgogne France Comté, Provence Alpes Côte d’Azur, Outre-Mer

•   Poursuite des formations jusqu''à mi-Juillet

•   Reprise de contact progressive avec les structures en cours d’inscription avant le confinement

•   Traitement des questions support et mise à jour de la FAQ

Développement

•   Export V4 + statut facteur', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-06-09 09:12:11.680378+00', 'd3ee6673-c2cd-478e-ad7a-8bfc999afd05', 'good', 'Revoir le contenu de nos box en vue d''une prochaine recommande de matériel', 'Lancement des publicités ciblées sur réseaux sociaux qui explique notre progression de visites
', 'Retravailler notre campagne pour convertir nos visites en commandes ', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-05-19 09:13:39.245297+00', '4a647e88-877e-442a-9aa1-9a12549c90bd', 'good', '- Développement de la nouvelle maquette
- Sortie d''une v.2.1.1 avec la traduction en allemand la semaine dernière
- Article wikipédia', '- Signer la convention pour délégation de gestion avec le service interministériel des ar hivers de France avant l''été
- Webinaire de présentation avec Libriciel le 25 juin
Test', '- Revoir le contenu du site Internet', 'archifiltre');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-06-09 08:30:14.962794+00', 'a1da3633-4972-4d97-ac31-a703db1e67ac', 'good', '- déploiement : démos aux 11 nouveaux ETS prévus au 1er juillet
- développement : statistiques plus détaillées, avec détails par profil vivant', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-06-09 09:19:15.354693+00', 'e34c5f81-5800-4980-a62b-fa118c0cec81', 'good', '- Publication de l''article Wikipédia : https://fr.wikipedia.org/wiki/Archifiltre

- Développement de la nouvelle version avec la nouvelle maquette', '- Webinaire de présentation le 25/06: 116 participants inscrits', '- Formalisation du financement par le service interministériel des archives de France', 'Alezco');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-06-15 09:11:15.158257+00', 'f939503b-381e-41e6-8ac8-06178227082a', 'good', '- intégration dashboards Kibana
- améliorations gestion des users
- améliorations données DREES
- exports excels divers', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-06-23 08:52:55.451515+00', '97bc550f-70d3-4174-8605-d7d2f05c2700', 'good', 'Suivi campagne 

•    162 structures inscrites en formation
 
•    111 structures formées 

•    56 structures intéressées inscrites sur DomiFa post formation

Actions en cours

•   Suivi des campagnes en cours, animation des sessions de formation et suivi des inscriptions

•   Traitement des questions support

•    Préparation du board (prévu le 25/06) bilan des travaux réalisés et perspectives à 6 mois', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-06-23 09:16:55.85077+00', '95cde2e4-340d-41af-a196-eb147b4426c6', 'good', '- dév : ajout message d''accueil, améliorations continues
- déploiement : prépa 10 nouveaux ETS au 1er juillet ', '- 10 nouveaux ETS la semaine prochaine
- invitations pour la grande présentation à la rentrée Santé/Justice/Intérieur', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ramses', '2020-03-10 10:34:49.658+00', '6da7bf40-9a7e-407c-afea-85e5f70c5eab', 'good', '-Enrichissement du MVP (Masse salariale et ETP) avec:
- de nouveaux axes 
- de nouveaux indicateurs 

Cette semaine: 
- sécuriser le périmètre DSN avec les données FINESS 
- maj des données DSN et intégration du champ CSP



', '', '', 'nicolasbutez');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-06-29 14:43:24.995406+00', 'd58beaa9-b1e8-4119-a180-0df7f6295768', 'good', '- Travaux simplification / API 
- Réorganisation de l''équipe / recrutement d''un dév en appui', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-06-29 15:20:14.774514+00', '4bc92987-20ba-4155-a13e-8e2fa50c8131', 'good', '- dév : finalisation formulaire
- design :  structure partie authentifiée 
- ciblage premiers utilisateurs
- point RGPD', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-06-29 15:26:18.151833+00', '220183a2-478a-4d65-b7d8-222d5ada95a0', 'good', '- gestion des 10 nouveaux ETS qui se connectent à partir de demain (1er juillet)
- dév : limitation des examens pour certains ETS (autopsies autorisées ou non), tests E2E', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-07-06 12:25:29.719883+00', 'c37588cf-ca9f-4c85-afa4-6335fe09dfa3', 'good', '- Développement du nouvel formulaire déclaration
- Travaux simplification sur le back-office / API
- Automatisation envoi des données Egapro -> DigDash', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-06-30 09:29:30.558167+00', '6233037b-fccb-4a44-875a-248f59a48783', 'good', 'BOARD le 09/09/2020', 'Board le 09/09/2020

Réunion UCD / Commission Européenne le 14/09 ou le 18/09

Présentation du projet au Conseil National du SIDA le 17/09

Réouverture prochaine de la commande de box (réapprovisionnement de 500 box à venir)

Verre de départ Yowa le 15/09

', '', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-07-07 08:58:20.684518+00', 'b7a4e425-3aa3-4e66-b2d2-2373f86d1bdb', 'good', '- organisation grosse réunion de rentrée avec Justice, Intérieur (Police, Gendarmerie), Santé, bêta-testeurs
- SAV pour les 10 ETS qui viennent d''intégrer Medlé au 1er juillet', 'TOUTE LA TEAM EN VACS LA SEMAINE PROCHAINE <3 (Mom d''astreinte)', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ramses', '2020-07-07 09:03:00.608274+00', '7adaf469-bae2-43be-8252-12490fddb5be', 'good', '-Enrichissement du MVP (Masse salariale et ETP) avec:
- de nouveaux axes 
- de nouveaux indicateurs 

Cette semaine: 
- sécuriser le périmètre DSN avec les données FINESS 
- maj des données DSN et intégration du champ CSP



', '', '', 'edouardnahama');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-07-07 09:59:44.550679+00', 'eca0ced5-ac2f-493c-bc3f-d652a9002db3', 'good', '- Module des tests terminé
- Traitement des besoins de la drees sur le module "ressources esentielles"
- Intégration des dashboards kibana (projets innovants et veille)', '', '', 'gary-van-woerkens');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-07-20 15:54:53.946151+00', 'a0d46af8-819a-4c14-889d-8b0cae3cae95', 'good', ' - Améliorations diverses en cours (tracking usage)
 - Arrivée de SARA DUFOUR en PO
', '', 'Coordination DGS-DREES-MDA-Fabrique', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ramses', '2020-07-20 16:17:51.537278+00', '21d6b502-b496-4761-8723-86550e76dd68', 'good', 'Cette semaine:
-Finalisation de l''enrichissement des données:
         -Intégration de l''axe CSP
         -Intégration des données DSN de jusqu''à fin juin

-Construction du tableau de bord RAMSES dans DigDash



', 'Finalisation du produit RAMSES début septembre', '', 'edouardnahama');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-07-28 08:57:00.388584+00', 'bde66a0e-e118-4daa-a269-19fd31b9aec7', 'good', '- envoi questionnaire aux utilisateurs
- mise en prod stats thanato
', '- semaine passée : stats thanato', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ramses', '2020-07-28 09:17:25.981505+00', '61ab13eb-708a-41c7-bd2e-84e09fe38c54', 'good', '-Enrichissement du tableau de bord DigDash

-Recette du produit (des indicateurs) avec l''équipe métier', 'Finalisation du produit RAMSES début septembre', '', 'edouardnahama');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-07-28 09:29:32.283898+00', '8c73a6a4-786e-46fd-9377-a36143197bd9', 'good', '- Analyse résultats sondage
- Développement du nouvel formulaire déclaration
- Travaux simplification sur le back-office / API
- Automatisation envoi des données Egapro -> DigDash', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-08-03 15:05:51.568337+00', '9ad6f6fc-0eda-48a2-a5c6-0986d40659af', 'good', '- Analyse résultats sondage
- Développement du nouvel formulaire déclaration
- Automatisation envoi des données Egapro -> DigDash', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-08-04 08:59:33.979348+00', '1f3addaa-3cd7-4c04-b4bc-1191bfd4ea89', 'good', '- Communication sur la nouvelle version à réaliser
- Mise à jour du site Internet
', '- Prochain openlab à planifier', '', 'ChloeMoser');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-08-18 08:34:46.295714+00', '66e21ffa-66f5-4ac5-983b-0be360c67dac', 'good', 'Mise en production de la nouvelle API Déclaration', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-06-09 09:34:36.391063+00', '327b820d-c861-4d90-8b8f-543d539997b4', 'average', '- développement : formulaire
- tests : ordre pharmaciens ', '- tests semaine dernière : ordres chirurgiens-dentistes + infirmiers', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-08-18 08:44:27.178553+00', '208e8f90-c3cc-4910-af07-b1fcdf559ea9', 'good', '- Finalisation du nouveau site
- Communication sur la nouvelle version à la rentrée', '- Prochain openlab début octobre
- Présentation acceptée pour le congrès international des archives à Abu-Dhabi en 2021!', '- Définition + précise de la storymap: atelier prévu mercredi', 'ChloeMoser');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-09-08 09:30:39.988594+00', 'dfbe50ac-9585-4920-9319-06687045a837', 'good', '- Préparation de l''openlab
- Travail sur la sécurité de l''outil (normes de la Fabrique et demande des services du premier ministre entre autres)
- Refonte de la page d''accueil/dépôt des fichiers
- Changement de la licence en Apache 2', '- Openlab le 15/10
- Présentations à Paris et Montpellier en octobre et novembre
- Conférence en Allemagne en mars 2021
- Présentation à Abu-Dhabi en octobre 2021', '- Reprendre la comm de la sortie de la V3
- Communiquer sur le nouveau site
- Un lieu sympa pour le séminaire d''équipe fin octobre (et pas cher! ;-) )', 'ChloeMoser');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-08-25 08:57:25.773411+00', '1805bcee-6cee-493d-8322-2cb1f7b080fd', 'good', '- Finalisation du nouveau site
- Définition des prochaines grandes fonctionnalités à développer: amélioration de la sécurité, nouvelles features de visualisation, sur les tags, les exports et les listes', '- Openlab début octobre à fixer
- Séminaire d''équipe en octobre
- Présentation au séminaire des archives de France en novembre à Monptellier', '- Formaliser la roadmap d''Archifiltre sur github
- Un outil heatmap pour analyser les fonctionnalités les + appréciées/connues par nos utilisateurs', 'ChloeMoser');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-08-25 09:05:41.1612+00', '298fc1f5-7094-4bc1-b849-c2bb06d80828', 'good', 'Préparation du BOARD le 9 septembre
Création d''un kit d''attentes ARS/DGS pour faciliter les échanges
Budget 2020 + premier prévisionnel 2021
Reprise du service début septembre (nouvelle commande, nouvelles boites)
Intégration des ACL (comptes utilisateurs différenciés)', 'BOARD ARS/DGS/Fabrique le 9 septembre', 'Toujours à la recherche de nos titres de perception ¯\_(ツ)_/¯', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-08-25 09:21:19.406188+00', '03e87c7e-8d9b-40c8-9e45-2ed7b8de55ee', 'good', 'Réintégration de SOLEN dans la nouvelle architecture', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-08-25 09:49:26.037855+00', '1cc4bf17-46b4-4a6d-ae64-ce423ea9a38d', 'good', '- Début de préparation de la présentation des 8/10 septembre avec autres ministères
- Analyse des retours questionnaire utilisateurs (26 réponses à date)', 'RAS', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-09-01 09:39:57.275173+00', '58a68421-86f6-47e0-aba4-bfba0e82ba70', 'good', '- Préparation grandes réunions inter-ministérielles de la semaine prochaine
- Calage démos pour les 10 prochains ETS', 'Semaine passée : 29 réponses au questionnaire, ajout des ETP (dév)', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-09-01 09:53:13.067639+00', '66d56ccc-e888-41e5-a606-3bcd017d8058', 'good', '- Nouveau site terminé!
- Roadmap formalisée sur github', '- Prochain openlab le 15 octobre', '- Refaire la comm sur la v3
- Faire la comm sur le site et l''openlab', 'ChloeMoser');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-09-08 08:36:46.367162+00', '839f6457-41f4-4ef4-a333-95e7db6b7ed4', 'good', '- Formulaire déclaration directe + décommissionnement du formulaire Solen
- Traitement des commentaires / questions des résultats du sondage
', '- 14/09 : Point avec la startup FCE pour étudier l''échange de données entre produits', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('siao-data', '2020-02-07 10:51:56.079+00', '39b86a7d-a7f7-400a-9d80-fb54a850ad6a', 'average', 'RGPD : mise en conformité', '', '', 'nicolas.butez@invenis.co');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-02-10 13:30:07.221+00', '711dda31-d7eb-477e-92b2-834c8ee4052d', 'average', 'Terminer le POC sur les bases de données managés | Terminer la nouvelle version de la stack d''hébergement Kubernetes | Changement de taille de VM (plus de ressources par noeuds) | Activation des régles de filtrage dans kubernetes | Volumes de données extensible', '', '', 'igor-renquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-02-25 09:50:13.679+00', '841f8e58-e7b2-445a-9697-24f20da4dea7', 'average', '- Préparation des migrations de :
  - Work in France sur Azure
  - Pastek sur Azure
- Externalisation de la Base de données Matomo', '- Egapro migré sur la plateforme Azure', '', 'igor-renquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-03-03 10:06:30.067+00', '3bd37d23-f87d-4939-b63f-e5b7e2e5cf97', 'average', 'réparation des migrations :
  - Work in France sur Azure
  - Pastek sur Azure
  - Début du développement de la Stack CaaS V2 (Pod XXL, Autoscaling, vmscaleset, volumes data extensibles, network policies)', '- emjpm DEV + PROD utilise les bases de données managés (PG)
- Matomo externalisation de la base sur des bases de données managés (MariaDB)
- Atelier besoin de collecte de logs mardi 10-03
- Stack CaaS v2 livraison prévue pour le 11-03
', '', 'igor-renquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-03-03 10:35:21.418+00', 'cc9e4cc5-b75d-48ee-956c-507752daf2ad', 'average', 'Difficultés sur la définition de la stratégie de déploiement (qui contacter, dans quelle région...)', 'Mercredi 04/03
RDV avec l''Union Nationale des CCAS
RDV avec l''ACTAS (réseau de cadres territoriaux de l''action sociale', '', 'annelaure.pilloy');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-02-04 10:26:02.956+00', '0eff4274-468f-4276-9359-e323e7510299', 'average', 'OpenLab : 2 mars', 'Présentation à la Réunion', 'Trouver une solution de documentation et d''accompagnement des utilisateurs', 'alezco');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-03-24 10:57:54.641+00', '8fdf777b-5c6b-4b72-b615-21c39ceb2d18', 'average', 'Composants statistiques / export des données', 'Malgré le Covid 19 et la charge sur le personnel soignants,  ouverture de la Guadeloupe, la Martinique et Rennes le 1er avril.

', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('siao-data', '2020-03-10 10:28:45.401+00', '7de5ae5a-1e97-4b65-b2df-bb8e036b715e', 'average', 'DB : Recette Indicateurs par la DGCS suite à une nouvelle règle de calcul
RGPD : mise en conformité', '', '', 'nicolasbutez');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-03-10 10:21:01.253+00', '484ceaaa-5b11-4c29-bdaa-5b9621777e3c', 'average', 'Préparation des migrations :

- Work in France sur Azure
- Pastek sur Azure
- Finalisation  du développement de la Stack CaaS V2 (Pod XXL, Autoscaling, vmscaleset, volumes data extensibles, network policies)', '- Mise à jour de Gitlab de v2.4 en v2.8 suite à un bug gitlab Let''s Encrypt

- Atelier de collecte des logs mardi 10-03 14h (salle de réunion fabrique)', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('workinfrance', '2020-03-10 10:22:58.776+00', 'c8bd46f9-92bf-43b1-af01-6416bafd3b33', 'average', 'Test du formulaire d''introduction de salariés étrangers avec des utilisateurs', 'Changement de statut d''étudiant à salarié et introduction de salariés étrangers déployé en juin pour quelques services MOE', '', 'Eric-Hei');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-05-05 08:55:15.660074+00', '26d82be4-07dc-442a-a9d6-b5c26b419bce', 'average', '- Migration des produits transverses (Sentry, Pastek, Matomo)
- Planification du prochain sprint
- Support 
', ' - Revue de sprint demain 06-05
- Début de la migration vers les nouveaux environnements
  - Sentry
  - Pastek
  - Mattermost
  - Tumeplay
  - Textstyle
  - Fce
  - Medle', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-05-05 09:09:33.116717+00', 'ff5ae949-9826-4c91-aea6-e1368285ea21', 'average', 'Suivi campagne déploiement

•    52 structures inscrites en formation 

•    26 structures formées 

•    22 structures intéressées inscrites sur DomiFa 

Développement

Import / export / template de sms
Traitement des retours suite aux formations', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-03-17 10:12:16.946+00', '534f64a5-9438-41a7-b87a-25403188c61f', 'average', 'Continuation du travail sur l''import SOLEN et l''export des données SOLEN + Egapro --> bug de cases vides, renommage de colonnes etc.

Fichier allégé pour DigDash (outil de data viz)', '', 'Du papier toilette', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-03-17 10:52:10.198+00', '6a324bda-204b-4734-8d79-74ab580d3e13', 'average', '- Début du développement de la migration de l''app GW vers Nginx', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-03-24 09:54:39.366+00', '599ccfcd-d131-4e8e-9e54-6dc4fd0b27b6', 'average', 'Pour utiliser l''ingress NGINX:
- Début du déploiement d''un outil de collecte de logs de l''ingress NGINX
- Documentation sur l''utilisation de l''ingress NGINX

Pour corriger le problème de corruption des sauvegardes:
- Mise à jour des comptes de stockage v1 -> v2 pour les sauvegardes

Actions de supports:
- Runners gitlab
- Cluster de développement (post mortem en cours de rédaction)', '- Finalisation du développement de l''ingress NGINX
', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-03-31 08:53:34.45+00', '7ca6ef16-bd82-4481-8e1a-b237e1061b59', 'average', '- Activation du mod security sur Ingress NGNIX
- Mise en place de collecte de logs techniques
  - Travail sur le parsing des logs du mod security pour en améliorer la qualité et faciliter leurs lecture ', '- Mise à jour de Pastek aujourd''hui à 13h
- Passage du cluster de DEV en mod Economie d''énergie', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-03-31 09:59:52.467+00', '01a53e75-2924-4ebe-864a-c53d60ea9d56', 'average', '
', 'BOARD annulé pour cause du COVID (DGS très occupée)
Ateliers vision réalisés
Redéfini notre organisation par Sprint bi-mensuels', '', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('workinfrance', '2020-03-31 10:19:50.942+00', '883e8125-5031-43e5-9913-d11135b03c04', 'average', '*', '', '', 'douglasduteil');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('emjpm', '2020-04-21 09:39:03.324+00', '270de76b-4784-411e-b68b-f37d78a2d5d4', 'average', '- Monter une équipe
- Accompagner les éditeurs pour l''utilisation des API
- Déployer la liste blanche et les enquêtes
- Adapter eMJPM pour les préposés
', '- Départ de Tiphaine
- Départ de Remi', '- prendre du recul et refaire un point sur les besoins utilisateurs
- Faire un atelier pour comprendre comment travaille les mandataires préposés à un établissement
', 'tglatt');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-04-07 10:00:52.639+00', '3e04b711-51d6-478e-8d19-3324441b1770', 'average', '- Finalisation back-office
- Trouver 5 établissements de plus pour le 1er juin (malgré Covid)
', '- Semaine passée : résolution pb fuseaux horaires + finalisation FAQ 
- Prochains utilisateurs au 1er mai : Fontainebleau, Sud Francilien, La Réunion, Montpellier', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-04-07 09:55:20.631+00', '275a6a2e-eaa2-4e40-ad19-989e1137ee33', 'average', '- Réaliser un script de purge automatique des images dans la registry gitlab
- Migration des storage acount V1 vers V2  des produits
- Collecte et parsing des logs Nginx, mode security
- gestion des fournisseurs pour les différents renouvellements
- pages d''erreurs custom pour ingress Nginx', '- Supression d''images dans la registry d''image gitlab
- Mise à jour de Pastek (montée de version des composants de pastek)
- Nettoyage de la zone DNS fabrique.social.gouv.fr

Préparation du prochain sprint  mercredi 08 -10h00 sur https://meet.jit.si/standOPS', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-04-14 07:49:59.086+00', '4a8183d7-e224-4b07-9af0-f4f4f1cbde1f', 'average', '- Terminer le déploiement de la stack v2
- Envoi des logs de la plateforme v2 vers Elastic search', '- Application Gateway est réparée
- Déploiement de la stack v2 en cours
- Ajout de variables dans les secrets pour les bdd managés
- Page d''erreurs pour l''hébergement sur les clusters v2
- Aide équipe produit COVID', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-04-14 09:52:42.858+00', '83cd528b-13ea-4409-b7ef-f8792af72789', 'average', 'Valider budget ARS
', 'Refonte du système de points
Refonte du Back-Office

Début de l''adaptation du projet aux problématiques de la Guyane', '', 'ViMotte');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('didoc', '2020-04-14 09:58:57.515+00', '34736ac0-4ae3-4454-bdbd-2cbae3e226a0', 'average', 'Récupération des mails des personnes à dépister', '- Standby lié au covid-19
- Réunion CNAM le 30 avril', '', 'Eric-Hei');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-04-21 07:17:52.206+00', '7f59e585-29e8-4df5-b974-ebfba9ba88ac', 'average', '- Envoi des logs dans elastic search
- Parser les logs de l''ingress Nginx et du WAF ''mod security''', '- La stack v2 est déployée
- Déploiement d''une stack v2 pour l''équipe SRE
- Préparation de la revue de sprint de mercredi 22 avril
', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-04-28 09:21:51.781+00', '94612606-4042-4fb1-a295-8f8ec755ffdb', 'average', 'Suivi campagne 

•    50 structures inscrites en formation

•    19 structures formées

•    16 structures intéressées inscrites sur DomiFa

Actions en cours 

•    Traitement des retours et interrogations des structures (bugs, points sécu, suggestion d’amélioration)

•    Définition des indicateurs de suivi nécessaires au déploiement pour mise en place de statistiques  ', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-04-28 07:44:42.719+00', '552e9d94-d64b-4977-ad5a-3dc16255a36f', 'average', 'Mise en production modules

Sécurité info

Intégration donnnées DREES', 'Cartographie des ressources essentielles

Listes des projets innovants', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-04-28 09:29:05.186+00', 'eea488cd-3589-40c9-858d-2f2d8c3c47c1', 'average', '- tests utilisateurs : FHP, Ordre National des Infirmiers, Ordre des Pharmaciens
- développement : infrastructure
', 'Passé : 
- design : UR finalisée, maquettes en cours de finalisation
- étude récupération avec éditeurs de logiciels de remontées d''incidents', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-04-28 09:27:08.845+00', '6b388559-dbed-4747-bbc2-22f744840ab1', 'average', '- Migration des produits transveres sur la plateforme v2 (Sentry, Matomo, Pastek, rp-rules)
- Redirection du site fabrique
- Ateliers:
  - centralisation de sauvegardes sur les PG managés de PROD
  - stockage des secrets
  - stratégie de migration des produits

', 'Départ de Nicolas et Jean-Baptiste', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-05-05 08:37:02.378717+00', '4596a21c-26dc-4a0d-8e69-d63140541129', 'average', '- design : validation finale écrans
- dév : analyse schéma relationnel de données, développement du formulaire', '', 'nom de domaine', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-04-14 09:58:32.518+00', 'afbec99a-7c98-44c6-a016-45da16d1c41e', 'average', '- Back-office
- Gestion des demandeurs
- Gestion des établissements', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-08-04 09:45:42.004747+00', '8fa8215f-89c2-4798-bc6f-508ec87b97d9', 'average', '- mise à jour de toutes les librairies (Next 9.5)
- corrections ESLint
- premières améliorations du formulaire', 'Finalisation du formulaire : plusieurs auteurs et victimes...', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-05-05 09:25:58.852699+00', '281997f5-5392-4b0f-8898-1a8bd85559f2', 'average', '- Amélioration de la **documentation**: wiki + des vidéos https://www.youtube.com/channel/UClDwrT-Y1NY9WnEiXLMHp6w

- Début des développements de la **nouvelle maquette**

- Tests pour améliorer la version beta du **déplacement d''éléments**', '- Réunion sur le financement d''Archifiltre jeudi 7 mai

- Webinaire de présentation avec Libriciel le 25 juin', '- Revoir le site Internet https://archifiltre.fabrique.social.gouv.fr/
', 'archifiltre');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-05-12 10:17:35.793386+00', 'cde3c08b-acdd-4d69-bec7-2d8d806ab4cb', 'average', 'Réouverture des livraisons de box
Mock-ups Guyane finalisés', '', '', 'yowamuzadi');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-05-11 12:55:28.149305+00', '5f94057c-345d-4396-9459-a441a48f8f6d', 'average', '- design : validation finale écrans
- dév : schéma relationnel de données, développement du formulaire
- API : rdv avec ANS pour BDD Adeli/RPPS', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-05-12 08:19:27.581506+00', 'ebfe615f-9581-4801-93c7-5cfd5a197ad2', 'average', '- Fin de migration des produits transverses (Matomo et des RP-rules)
- Déploiement d''un outil de stockage des secrets
- Backup stanardisé des backups postgreSQL
- Support', 'Atelier de migration des produits sur les nouveaux clusters cette semaine.
Proposition de 3 dates:
- jeudi 14 mai 14h00
- vendredi 15 mai 10h00
- vendredi 15 mai 14h00', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-05-19 09:04:22.846435+00', '4fb7f0cc-5f5f-4e43-8408-413543492159', 'average', '- Développement : formulaires ETS + libéraux
- Derniers tests avec les ordres (infirmiers, chirurgiens-dentistes, sages-femmes) + fédération établissements de santé mentale
- Suite discussions avec partenaires éditeurs de logiciels', 'Semaine dernière : 
- élaboration schéma de données
- prise de contact avec éditeurs pour schéma de données
- tests auprès de la FHP, de l''ONP
- redesign formulaires', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-05-26 08:28:36.982316+00', '99d55814-2bfb-4b85-b6db-2372f0a9875d', 'average', '- Déploiement d''un outil de stockage des secrets (sealed secret)

- Mise à jour du code de generation des PostgreSQL
  - code ansible -> Terraform
  - intégration de la sauvegarde standardisée

- Migration produits sur stack v2
  - site web de la fabrique
  - sample Next App

- Fiabilisation de la collecte des logs vers ELK

- Fiabilisation de NGINX

- Monitoring alerting des applications

- Généralisation Sentry-kubernetes

- Matomo
  - sortie de matomo du repo infra
  - Ajout base IP de façon reproductible', '- Planification d''un atelier sur la disponibilité de gitlab [liens vers l''invitation](https://mattermost.num.social.gouv.fr/default/pl/fe17sxrmn3nixnqeiwrrp3ia3r)', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-05-26 09:06:13.855769+00', 'a0adc517-cfdd-4a10-aecc-50b1355cb2cb', 'average', '- Développement de la landing page
- Recherche de développement pour créer un formulaire en plusieurs étapes
- Validation des maquettes auprès des ordres et fédérations
- Contacts établis avec 2 nouveaux éditeurs de logiciels de santé (Ennov et SignalWeb de YES)
', '- Développement: composants de base en Tailwind CSS
', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-06-02 08:31:51.673568+00', '92d18fa7-9328-41b6-8995-02988dba3942', 'average', '- Migration produits sur stack v2
  - sample Next App
- Fiabilisation de la collecte des logs vers ELK
- Monitoring alerting des applications
- Généralisation Sentry-kubernetes', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-06-02 08:38:55.494481+00', '3b280b7d-4684-4062-8f14-7c687ca5d155', 'average', '- développement : formulaire
- tests : ordre pharmaciens, ordre chirurgiens-dentistes', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('passpreservatif', '2020-06-02 09:03:07.17688+00', '7516ab19-6eb1-4631-9d9a-62bba2076380', 'average', 'Communication sponsorisée
Intégration des mises à jour parcours moins de 25 ans', 'Rétro mercredi 3/06', '', 'yowamuzadi');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-06-09 08:20:49.787752+00', '22356cbd-4e19-4cd0-b582-e2ba1757847a', 'average', 'Recette migration de données

Finalisation formulaires consultation entreprises / éditeurs de logiciels

Maquette UX v1 à développer', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-06-09 08:37:25.652825+00', 'ceabfaa2-d0a0-4657-b838-1b0c5612e06d', 'average', '- Amélioration de la consommation des resosurces pour les noeuds des clusters Kubernetes
  - Augmentation de la capacité d''hébergement du nombre de POD par noeud
- Collecte des logs des Ingress NGINX
  - POC sur le composant de collecte des logs pour valider la stabilité de la collecte
- Gitlab 
  - Purge de la registry d''image qui saturé le File System
  - Debug du script de purge automatique de la registry
- Point marché public cloud cercle III
- Dedug sur la suppression du composant de blocage d''url longue     ', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-06-16 09:17:37.581367+00', '7eb43eb3-9dc3-4d47-9877-b8d2b5c7c6c5', 'average', '- Travaux sur l''API et le parcours déclaration
- Recette migration
- Finalisation du TdB DigDash', '', '', 'vicmartinezp');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-06-16 09:19:10.675767+00', '085b6150-58c5-400d-b792-60b982b7aa5c', 'average', 'Suivi campagne 

•    152 structures inscrites en formation 

•    94 structures formées 

•    53 structures intéressées inscrites sur DomiFa post formation', 'Actions en cours

•   Suivi des campagnes en cours, animation des sessions de formation et suivi des inscriptions

•   Réunion de présentation au réseau Croix rouge sur le territoire national (24 participants)

•   Reprise de contact progressive avec les structures en cours d’inscription avant le confinement

•   Traitement des questions support et mise à jour de la FAQ

•   Export v4 + Statut Facteur

•   Préparation du board', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-06-16 09:45:33.498221+00', 'c335be0e-34db-443c-b05c-f9e6bbdc00b3', 'average', '- Dossier d''architecture de mandoline
- Finalisation du monitoring de la disponiblité des produits et de l''alerting en cas de défaillance', '- Retour positif sur le POC collecte des logs techniques des connexions aux produits
- Mise à jour de Gitlab en version 13
- Ajout d''une base d''IP dans matomo pour améliorer la détermination de la  provenance des utilisateurs
- Revue de sprint mercredi 17 à 10h00', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-06-16 09:59:07.30007+00', 'be184b75-9b00-4d9d-bf77-56fb061d9024', 'average', '- Développement: onglet 2/5 sur les faits et les types d''atteinte aux biens ou aux personnes
- VM pour la prod et la recette sur Azure', '', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-06-23 08:27:51.442226+00', '13f2c0e6-d91f-4b25-8be9-d44e632eaaf9', 'average', '- Identifier les solutions d''Image registry
-  Etat des lieux IAM', '- Déploiement du monitoring et l''alerting des urls des produits
- Patchs de sécurité de la vm gitlab
- Mise à jour des RP-rules', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-06-23 09:12:00.599349+00', 'd1873a11-1d28-4c8f-b415-8d64f6f2ad66', 'average', 'Travaux sur l''API et le parcours déclaration

Recette migration

Finalisation du TdB DigDash', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-06-30 09:27:09.947973+00', 'd28070ad-2699-4c8b-ade6-5a0993be1422', 'average', '- Etude sur l''amélioration de la Disponibilité sur la registry
- Etude sur la migration de Mattermost sur le CaaS', '- accompagnement consultant optimisation des performances du WAF (modsecurity)
- Choix méthode d''implémentation pour Mattermost
- configuration gitlab autodevops
- dashboard pour les logs sur le reverse proxy
- augmentation à 7jours de la durée de rétention du monitoring
- applications de quelques règles de reverse proxy', '', 'ylascombe');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-07-07 07:44:15.970165+00', '0eaf2d36-d50a-4aae-bd90-4cf75ec2d3b3', 'average', '- Consolidation des données suite à l''atelier
- Préparation de l''atelier sur l''hébergement des runners
- Préparer un sprint de diminution de la dette', '- Mattermost  **migration jeudi 9 juillet entre 12h-14h**
  - Montée de version
  - Nouvelle url en mattermost.fabrique.social;gouv.fr (l''ancienne reste utilisable )
  - Hébergement sur kubernetes + base de données managé

- Incident sur les Runners gitlab: cause possible forte contention sur le cluster DEV sur lesquels ils étaient hébergés
    - Augmentation des ressources sur la VM
    - Déplacement des runners sur la stack 2 

- Point story map OPS avec l''équipe SRE
  - Préparation d''un vote pour identifier les sujets prioritaires', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-07-07 09:00:05.325905+00', '84dac8bf-4fde-4f35-9a9e-28fd83ce0f2b', 'average', '- design : structure partie authentifiée, prise de contact avec dentistes et pharmaciens pour formulaire personnalisé
', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-07-28 08:26:36.58461+00', 'cd057068-7a57-4a7d-8ee4-6813de249df2', 'average', 'Double sprint de refacto du code de l''infrastructure
  - Cluster AKS pour l''hébergement des composants de managements
    - Argocd pour le déploiements des composants d''infrastructure
      - Argocd, Rancher, Atlantis, sealed secret, MinIO
      - cert-manager, kubed, Ngnix ingress, kubopsview, 
    - Rancher unique', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-07-28 08:55:13.015538+00', '5baac1a1-f3c6-4b0b-ab6e-9dcc6837c4fa', 'average', '- dév : formulaires
- design : structure site
- étude doc RGPD', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('covid-19', '2020-08-04 08:07:42.584142+00', '24262af8-7e85-4956-80db-4defe9c73274', 'average', 'Renouvellement homologation RGS', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('sre', '2020-08-04 08:08:59.17695+00', '90c53238-0d97-4035-b994-82b76ffa4454', 'average', 'Priorité migration nouveau clusters', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-08-04 08:19:51.074871+00', '0f47532e-9337-4be5-8ade-882def4c620e', 'average', 'Double sprint de refacto du code de l''infrastructure

- Cluster AKS pour l''hébergement des composants de managements
- Argocd pour le déploiements des composants d''infrastructure
  - Argocd, Rancher, Atlantis, sealed secret, MinIO
  - cert-manager, kubed, Ngnix ingress, kubopsview,
- Rancher unique', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-08-04 08:58:52.182928+00', '58ae522b-2132-445e-8dae-ee0ded7a4cca', 'average', '•   85 structures en cours', 'Actions en cours

•   Envoi d''une relance sur l''enquête de satisfaction menée auprès des utilisateurs DomiFa (15% de retour)

•   Envoi d''une campagne de communication auprès des Mairies sur le territoire national

•   Recherche de contacts pour nouveaux partenariats (DIHAL, ANCT...)

•   Planification atelier mesure d''impact avec l''équipe de co-animation BetaGouv le 18/08

•   Nouvelle page Mon Compte', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('code-du-travail', '2020-08-04 10:06:30.080434+00', '775038d6-8512-4bbc-9011-676acaabbc03', 'average', 'Mise en place plan de communication

Audit SEO', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-08-11 09:14:34.749879+00', '769d8b19-d15e-488c-b050-febde16f071d', 'average', '- envoi questionnaire de satisfaction
', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-08-11 09:15:19.765029+00', '0fd84879-a4dc-4065-8bcc-af8b6df7f6ab', 'average', 'Export des statistiques + filtres temporels

Vidéos de formation pour les structures', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-08-11 09:24:10.836009+00', '347624fe-c566-4c26-8916-92a1a30b962c', 'average', '*Semaine passée* :
- développement : création de tests, ajout d''une page dans le formulaire libéraux

*Semaine à venir* :
- développement : gestion des auteurs/victimes multiples, infobulles
- design : reste du site (vue authentifié) ', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-08-18 07:47:00.834388+00', '88d6ed97-562d-4ad3-9384-906b1a9127e5', 'average', 'Réduction de la dette du code de l''infrastructure

- Migration de composants techniques sur argocd
- Debug en cours sur un problème d''accès aux API kubernetes sur un cluster ', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-08-18 08:49:46.252313+00', '265f369d-835b-4149-a1d2-f8edbd0002af', 'average', 'Semaine passée :

- développement : intégration Yup pour validation des formulaires

Semaine en cours :

- développement : gestion des auteurs/victimes multiples pour la page 4, infobulles
', '', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('medle', '2020-08-18 08:57:07.418286+00', 'b22ebc09-6886-4021-bce9-11b61381f9ba', 'average', 'Semaines à venir
- analyse du retour du questionnaire de satisfaction
- développement: dans le backoffice, permettre à un admin de modifier la base de référence des ETP par établissements', '', '', 'pom421');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-08-18 09:12:38.280751+00', '49445c96-abf3-46b8-9d0c-47e57a1a1788', 'average', 'Développement
- export et filtres des statistiques
- bug sur la suppression des courriers enregistrés

Retravail KPI
- atelier mesures d''impact 

', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-08-25 07:32:43.318642+00', '958c15a3-90b3-443c-a1fb-eb8233b752c2', 'average', 'Réduction de la dette du code de l''infrastructure

- Migration de composants techniques sur argocd', 'Revue de sprint OPS mercredi 26 Aout', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-08-25 09:13:40.01818+00', '59ac32f0-4a7b-426b-8561-586213bb6bb0', 'average', 'Développement

- Travail sur la partie agenda et prise de rendez-vous

Déploiement

- Atelier d''impact betagouv
- Présentation de DomiFa à la Ministre de la Transformation et de la Fonction Publiques
- Présence de DomiFa dans le "Kit élu territoire" de l''ANCT à destination des élus
- Candidature au FAST', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('data-dgt', '2020-08-18 13:38:40.082489+00', '9ca3953c-a6dc-4ef4-9967-d1c01ecd1f90', 'average', 'AT
- Cas d''usage : Analyse des AT Graves et Mortels
- Accès aux données
- Recueil utilisateurs : DIRECCTE / IT

Egalité professionnelle
- Réunion de lancement', 'AT
Jalon : finaliser un ou plusieurs cas d''usages pour une réunion bimestriel avec les chefs de pôle T.', '', 'nicolasbutez');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-08-25 09:53:48.426962+00', '6c945701-883b-4461-8fc7-c788c7f48531', 'average', '- Design : structure du site (toutes les pages autres que formulaire : liste, fiche, statistiques, ressources), reformulation infobulles, prise de contact avec ordres/fédérations et ETS pour nouvelle vague de tests à la rentrée', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-09-01 08:59:32.477366+00', '62ebf3fc-d9ca-450a-af5c-00dd0481b40d', 'average', 'Développement

- Mise en production 01/09 : visualisation des rdv sur l''interface usager + stats v2

Déploiement

- Présentation de DomiFa à la Ministre de la Transformation et de la Fonction Publiques
- Travail sur les KPIs en vue du board intermédiaire de mi-septembre', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('onvs', '2020-09-01 09:55:13.926199+00', 'c9b970a4-e4f4-4e80-91c1-a3373c95f123', 'average', '- Prépa établissements et ordres pour test grandeur nature
- Calage roadmap fin 2020', '', '', 'saniyaas');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('ops', '2020-09-08 08:17:53.123494+00', '702b8c95-a097-49bc-b6c8-bb089b9caa02', 'average', '- Terminer la migration de composants techniques en Terrafrom
- Atelier Monitoring
- Début d''implémentation de la plateforme de monitoring
- Atelier sur l''usage de Rancher', '', '', 'igorrenquin');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-09-08 09:28:40.098711+00', '717e10fa-6b4d-427f-884c-cea24029aaaf', 'average', 'Développement
- tutoriels vidéo pour rendre les structures autonomes
- séparation du module de création d''une domiciliation

Déploiement
- board 18 septembre
- candidature FAST', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('sre', '2020-09-08 09:59:19.729155+00', '5e668ca8-dca6-4569-b37e-f3828e3ea59d', 'average', 'FINALISER MIGRATION CLUSTER v2

Apps restantes : 

 - CDTN
 - EgaPro 1
 - EMJPM
 - CARNETS
 - STANDUP

## SOON !', '', '', 'revolunet');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-02-17 16:01:26.976+00', '000e49a0-238f-4fba-b0e2-1463927d8973', 'bad', 'Mix des bases de données + Export propre
Mail accusé de réception', '40 000 entreprises doivent déclarer avant le 1er mars', 'Du courage!', 'victoria.martinez');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-02-25 09:14:29.477+00', '8a421400-d226-43a7-aef7-6141af811e36', 'bad', 'Export des données Solen + Index Egapro', '40 000 entreprises doivent déclarer l''index avant le 1er mars à minuit', 'Du temps... ', 'victoria.martinez');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('egapro', '2020-03-03 10:57:08.991+00', '525dcf4b-b7b6-45e7-adfb-ff5fb82034aa', 'bad', 'Page de l''interrogation de l''index en cours de recette', 'Départ de Victoria fin de semaine', '', 'annelaure.pilloy');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('textstyle', '2020-03-10 11:39:48.213+00', 'a749a311-b336-4990-b6d5-955d2044c6f1', 'bad', '0', '31/04 : produit mis en sommeil, faute de portage et de financement', '', 'ThomasMenant');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('archifiltre', '2020-03-31 10:06:42.044+00', '1d395505-393f-43ad-8f49-527b0953e5b0', 'bad', '- Travail de développement sur le **déplacement des éléments**
- Préparation de la 1ère version du **moteur de recherche** et du **filtre**!
- Refonte UX/UI lancée
- Gros travail de documentation sur le wiki', '- Congrès et séminaires annulés
- Proposition d''accompagnement individuel pour les archivistes en télétravail
- Prochain openlab: le 21/04', '- Trouver une bonne solution pour des webinaires
- Afficher notre roadmap
- Officialiser le soutien financier des archives de France par une réunion avec la DNUM', 'archifiltre');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('textstyle', '2020-04-21 09:25:14.348+00', 'aa9e27f1-ec04-4e22-b252-196ee5b827b0', 'bad', 'Produit mis en sommeil', 'Startup mise en standby', '', 'Taloud');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('sre', '2020-05-11 09:12:19.150258+00', 'ebddf66d-50fe-44dd-9f82-862e62dfb8b4', 'bad', '- Stabilisation des runners
- Supprimer les warnings dans l''ingress dev', '- +1 Nouvelle image : **trivy**
- SocialGouv/docker v1.15.0 :shipit:
- SocialGouv/gitlab-ci-yml v15.4.0 :shipit:', '- Tester le nouveau cluster v2 avec notre pipeline autodevops
- Tester le déploiement d''un cluster de runner
- Retravail du workflow dev avec k8s [EPIC]  ', 'douglasduteil');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-07-07 08:25:46.110109+00', 'ac0aab62-e14d-4b96-a708-05e22aed59d2', 'bad', 'Suivi campagne 

•    166 structures inscrites en formation 

•    123 structures formées 

•    71 structures intéressées inscrites sur DomiFa post formation', 'Actions en cours

•    Envoi d’une enquête de satisfaction sur l’utilisation de DomiFa (ouverte durant tout l’été)

•    Point d’étape avec le CCAS de Paris (conversion qui nécessiterait de multiples évolutions côté dev)

•    Relance des structures « en cours » pour point de situation

•    Relance des structures « inscrites » inactives 

•    Suivi des campagnes en cours, animation des sessions de formation et suivi des inscriptions

•    Traitement des questions support

•    Travail sur l''optimisation de l''import', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-06-30 09:21:55.586469+00', '020693f5-ab1f-436c-acc2-984ec935b077', 'bad', 'Stats globales 

•   95 structures en cours

Suivi campagne 

•    165 structures inscrites en formation 

•    122 structures formées 

•    66 structures intéressées inscrites sur DomiFa post formation

Actions en cours

•    Board du 25/06 – point d’étape prévu courant septembre 

•    Réactivation des contacts nationaux (Assemblée des départements de France, UNCCAS, réseaux nationaux Secours catholique...)

•    Relance des 95 structures « en cours » pour point de situation

•    Suivi de nouveaux indicateurs (nombre total de domiciliés et de comptes utilisateurs) = relance des structures inactives

•    Suivi des campagnes en cours, animation des sessions de formation et suivi des inscriptions

•    Traitement des questions support', '', '', 'ledugong');
INSERT INTO public.posts (team_slug, created_at, id, mood, priorities, term, needs, author) VALUES ('domifa', '2020-07-21 08:00:15.656878+00', 'fb5db02e-88a8-4cbc-9d5f-d63faed8cdb6', 'bad', 'Stats globales 

•   83 structures en cours

Suivi campagne 

•    168 structures inscrites en formation 

•    129 structures formées 

•    80 structures intéressées inscrites sur DomiFa post formation', 'Actions en cours

•    Envoi d''une note à la DGCS

•    Relance des structures « en cours » pour point de situation et relance des structures « inscrites » inactives 

•    Suivi des campagnes en cours, animation des sessions de formation et suivi des inscriptions

•    Traitement des questions support', '', 'ledugong');


--
-- Data for Name: kpis; Type: TABLE DATA; Schema: public; Owner: carnetsuser
--

INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2170f700-eb8a-4a2e-8d29-fca8f4ed9827', '2020-03-04 21:28:42.533078+00', 'Utilisateurs cartographie (moy. hebdo)', '150', '39b86a7d-a7f7-400a-9d80-fb54a850ad6a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1c76f4b6-36a3-408d-ad15-42fd9107ac00', '2020-03-04 21:28:42.533078+00', 'Actions cartographie (moy.)', '6', '39b86a7d-a7f7-400a-9d80-fb54a850ad6a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e65dd791-d87a-47d3-8254-464c68efddb0', '2020-03-04 21:28:42.533078+00', 'Connexions Dashboard (moy.)', '16', '39b86a7d-a7f7-400a-9d80-fb54a850ad6a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9315b3f4-a1c6-4020-911b-5756d70a5545', '2020-03-04 21:34:49.311105+00', 'Taux de calcul des KPI utiles pour le MVP', '100%', '2804e87f-581c-4967-9259-8f66f5f67003');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e3316af5-3cf0-4b9e-9ee6-0295dd0cb046', '2020-03-04 21:34:49.311105+00', 'Cas d''usages traités', '1', '2804e87f-581c-4967-9259-8f66f5f67003');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('43c95203-b41d-49e9-9a6d-9cfd8fdaebf1', '2020-05-11 09:21:45.095884+00', 'Utilisateurs', '80', 'e21ee2a9-7b61-49a6-adb0-fac10eed04c5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1258b862-5a8a-49e9-b67b-2d8a695c990c', '2020-05-11 20:04:55.455338+00', 'Réponse à tout', '42', 'a0750871-1491-4c5c-be22-a91b09786190');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f13e9393-fc61-449f-9604-6c3e11416c7d', '2020-03-04 21:41:57.963611+00', 'Folowers insta', '291', '5a046540-ed5a-4f8e-9cb8-9b145a6be30a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9f51c461-10c2-45ee-8308-5a6ef982086e', '2020-03-04 21:44:28.727334+00', 'Folowers insta', '328', '6a6bff61-9148-49e9-9ab6-29d1672e92b7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7d500a23-a969-4a61-8082-b99f740c39ec', '2020-03-04 21:44:28.727334+00', 'Nombre de questions', '160', '6a6bff61-9148-49e9-9ab6-29d1672e92b7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('024dd566-ec63-44d2-a514-8cf0d3c896da', '2020-03-04 21:49:16.442613+00', 'Startups hébergées sur VM  (Azure / MCAS)', '6 / 4', '711dda31-d7eb-477e-92b2-834c8ee4052d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('44de8a5f-4d48-4211-bbf7-57e1e75050db', '2020-03-04 21:49:16.442613+00', 'Startups hébergées sur Kubernetes (Azure / MCAS)', '6 / 1', '711dda31-d7eb-477e-92b2-834c8ee4052d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('cee5eb48-3bf6-457c-a049-60c3029a0406', '2020-03-04 21:52:08.550384+00', 'Conso moyenne crédit Azure cette semaine', '75 %', '841f8e58-e7b2-445a-9697-24f20da4dea7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4639e625-a406-48bf-8614-d0c4d07f10da', '2020-03-04 21:52:08.550384+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '841f8e58-e7b2-445a-9697-24f20da4dea7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('47db36fb-255f-4b57-acb8-55cc09c52f20', '2020-03-04 21:52:08.550384+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '841f8e58-e7b2-445a-9697-24f20da4dea7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5f6a4d42-40d6-4ddd-b1b9-e1c7ffd2713f', '2020-03-04 21:59:21.202819+00', 'Conso moyenne crédit Azure cette semaine', '80%', '3bd37d23-f87d-4939-b63f-e5b7e2e5cf97');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9e2dd9e1-dd18-4f68-a3da-23729ad13198', '2020-03-04 21:59:21.202819+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '3bd37d23-f87d-4939-b63f-e5b7e2e5cf97');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9376638d-f5c9-4e03-8550-c8dd1f0b5bb3', '2020-03-04 21:59:21.202819+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '3bd37d23-f87d-4939-b63f-e5b7e2e5cf97');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4667793b-dc1c-4299-910c-1ff6e457313e', '2020-03-04 22:03:10.496789+00', 'actes rentrés sur la semaine', '596', '25c3caf6-9906-480d-8984-59649319c3e4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8e001ed8-d5de-4fa7-961f-39536d453ccd', '2020-03-04 22:06:57.462814+00', 'Taux de satisfaction', '81%', '1daaf49a-9c86-4429-851d-e56ba362ddc1');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('17f107f0-e022-42c1-8f26-5a31a71d8f83', '2020-03-04 22:10:25.882976+00', 'Taux de satisfaction (158 avis)', '80%', '7147eeec-2dfd-44d3-8f3d-a8ed734113ba');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e6e0fa3d-1034-4395-9bd0-523ee46d17ae', '2020-03-04 22:10:25.882976+00', 'Moyenne visites/jour', '884', '7147eeec-2dfd-44d3-8f3d-a8ed734113ba');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('75cafff6-e784-44cb-a3b2-37088af960df', '2020-03-04 22:10:25.882976+00', 'Index moyen', '82/100', '7147eeec-2dfd-44d3-8f3d-a8ed734113ba');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('67ebbb76-a028-4d99-8db1-55f1733b2fd2', '2020-03-04 22:13:25.38159+00', 'déclarations sur Index Egapro', '+1150', '000e49a0-238f-4fba-b0e2-1463927d8973');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1e7b4314-1612-4971-b209-593d7ad80500', '2020-03-04 22:13:25.38159+00', 'entreprises ayant déclaré', '11%', '000e49a0-238f-4fba-b0e2-1463927d8973');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d066a00d-7238-4062-9950-1ece7c6d9973', '2020-03-04 22:13:25.38159+00', 'taux de satisfaction (185 avis)', '79%', '000e49a0-238f-4fba-b0e2-1463927d8973');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4bdbc261-e924-4c1f-807b-e785358d41bb', '2020-03-04 22:15:46.114554+00', 'déclarations sur Index Egapro', '+2500', '8a421400-d226-43a7-aef7-6141af811e36');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4dff1a23-11d1-4288-9c21-0eaea551f275', '2020-03-04 22:15:46.114554+00', 'visites/jour', '1200', '8a421400-d226-43a7-aef7-6141af811e36');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8300ec94-a2ed-4c7b-8960-806e1e690e18', '2020-03-04 22:15:46.114554+00', 'taux de satisfaction usager', '78%', '8a421400-d226-43a7-aef7-6141af811e36');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('57497525-009c-41b8-a9d8-b0da5c0a2369', '2020-03-04 22:18:18.784555+00', 'Déclarations sur Index Egapro', '+ 5 500', '525dcf4b-b7b6-45e7-adfb-ff5fb82034aa');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('21e5e9d8-78e9-41d8-aeed-a3dc64bcda0e', '2020-03-04 22:18:18.784555+00', 'Visites/jour', '1600', '525dcf4b-b7b6-45e7-adfb-ff5fb82034aa');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('731126cd-269d-42cc-b62e-0f6d0a8ffd2d', '2020-03-04 22:18:18.784555+00', 'Taux de satisfaction usager', '77%', '525dcf4b-b7b6-45e7-adfb-ff5fb82034aa');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e50156bc-ae7d-4c5a-92d3-e4b384d79181', '2020-04-07 09:55:20.850618+00', 'Conso moyenne crédit Azure cette semaine', '58 %', '275a6a2e-eaa2-4e40-ad19-989e1137ee33');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('90c45749-975b-4ccd-8915-0e985da8315e', '2020-03-04 22:21:26.188453+00', 'Structures inscrites', '27', '4508f932-61b1-4752-b144-883023516859');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b0ef07fc-7433-4f2b-9ecc-cef23da9da94', '2020-03-04 22:27:19.669169+00', 'Structures', '29', 'cc9e4cc5-b75d-48ee-956c-507752daf2ad');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e3ba485e-34d0-4504-9027-8330cf161bf6', '2020-03-04 22:32:21.463522+00', 'téléchargements de la v2', '452', '0eff4274-468f-4276-9359-e323e7510299');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8e3a841a-5ebd-42f1-81cd-158f34bcbbc7', '2020-04-07 09:55:20.850618+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '275a6a2e-eaa2-4e40-ad19-989e1137ee33');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('6f19ab61-39a1-4d55-952b-c1de0a3a0017', '2020-03-04 22:37:40.818949+00', 'Structures en production', '26', '77a0d344-cc1b-4c21-a5b9-cdb30578b480');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('181e87cb-db49-43e3-98a5-03b5eb6e3a1f', '2020-05-12 09:52:32.033602+00', 'établissements', '9', 'b12226ad-68d7-4508-bea6-db5aaa94b1ed');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('db4cfc1a-9671-48be-b79c-431d8bb9ddd9', '2020-03-10 09:44:13.400411+00', 'Déclarations sur Index Egapro', '+ 5 800', '988febc0-e12c-475a-9875-1359fc41d858');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('187d354f-921b-495f-b684-39f4565a47fb', '2020-03-10 09:44:13.400411+00', 'Visites samedi 06/03', '+ 4 800', '988febc0-e12c-475a-9875-1359fc41d858');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a9e8a256-a563-4392-a254-5a81271392a7', '2020-03-10 09:44:13.400411+00', 'Taux de satisfaction usager', '76%', '988febc0-e12c-475a-9875-1359fc41d858');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e4085696-7e5f-4147-8f41-fe83ae6ab3da', '2020-05-12 09:52:32.033602+00', 'actes', '9000', 'b12226ad-68d7-4508-bea6-db5aaa94b1ed');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('03f15790-5a78-483a-a6cf-6592d56d616d', '2020-05-12 10:17:35.793386+00', '485', 'abonné·es Instagram', 'cde3c08b-acdd-4d69-bec7-2d8d806ab4cb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('578a6038-da98-4b80-b294-e4301cbc399a', '2020-03-10 10:21:01.580972+00', 'onso moyenne crédit Azure cette semaine', '71 %', '484ceaaa-5b11-4c29-bdaa-5b9621777e3c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('aa2427e8-3c0f-4963-b3e2-d3a0248e97b9', '2020-03-10 10:21:01.580972+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '484ceaaa-5b11-4c29-bdaa-5b9621777e3c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('658aaef4-6aa9-49f9-a07c-fb7cf58f4d9e', '2020-03-10 10:21:01.580972+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '484ceaaa-5b11-4c29-bdaa-5b9621777e3c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7d5dc64e-4372-44c0-a430-81d0deddc19e', '2020-03-10 10:23:00.220609+00', 'Dossiers APT déposés', '15000', 'c8bd46f9-92bf-43b1-af01-6416bafd3b33');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('313ab943-3279-424c-8c33-cbedc229ff54', '2020-03-10 10:28:46.37343+00', 'Utilisateurs cartographie (moy. hebdo)', '300', '7de5ae5a-1e97-4b65-b2df-bb8e036b715e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ada7cc2e-ee0e-4f97-a90d-f0d922bf93f8', '2020-03-10 10:28:46.37343+00', 'Actions cartographie (moy.)', '6', '7de5ae5a-1e97-4b65-b2df-bb8e036b715e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8171d9be-8534-49a2-a25d-d128c0597a3f', '2020-03-10 10:28:46.37343+00', 'Connexions Dashboard (moy.)', '10', '7de5ae5a-1e97-4b65-b2df-bb8e036b715e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('bcd91766-a5dc-49cb-b91a-9d4d55be8332', '2020-03-10 10:59:19.931563+00', 'Structures', '29', 'd6b6091b-6f2e-4994-af51-b22da1434107');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e5d9fa1a-5cb5-4b33-b84c-dca8a29c93d6', '2020-04-14 09:52:43.163196+00', 'Followers Insta', '415 (+7)', '83cd528b-13ea-4409-b7ef-f8792af72789');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('cb86e2ba-8885-4e23-8094-9dba6efe6ce6', '2020-03-17 09:52:54.971548+00', 'Structures en production', '30', 'c7486295-e2ae-41d3-bc0a-6e76e818c8d8');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('3572708a-dc65-48b6-bff3-f2a45ffeed70', '2020-03-17 09:52:54.971548+00', 'Structures en cours d''intégration', '19', 'c7486295-e2ae-41d3-bc0a-6e76e818c8d8');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('fac8912f-8052-4017-86e9-57d3fb3a9e2d', '2020-03-17 10:12:17.318246+00', 'Déclarations sur Index Egapro', '+ 6 000', '534f64a5-9438-41a7-b87a-25403188c61f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('bcff4c8b-3cbf-44ca-b897-2c77c96ba3da', '2020-03-17 10:12:17.318246+00', 'Visites sur le site', '- 1 000 / jour', '534f64a5-9438-41a7-b87a-25403188c61f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('3defb356-2b81-44a5-a705-ed339b268fab', '2020-03-17 10:12:17.318246+00', 'Taux de satisfaction usager', '76 %', '534f64a5-9438-41a7-b87a-25403188c61f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('81a595ee-95a4-4e4f-bf40-919374138a68', '2020-03-17 10:52:10.621504+00', 'Conso moyenne crédit Azure cette semaine', '85 %', '6a324bda-204b-4734-8d79-74ab580d3e13');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c1b59614-8a24-4527-8154-5f6df5bdbeef', '2020-03-17 10:52:10.621504+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '6a324bda-204b-4734-8d79-74ab580d3e13');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d33ea537-79a7-4604-8273-bf4d41748dba', '2020-03-17 10:52:10.621504+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '6a324bda-204b-4734-8d79-74ab580d3e13');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2b2bcc90-17ac-46f0-aabf-a72025a9cae2', '2020-03-24 09:46:22.959656+00', 'Structures en production', '30', '31d52cd0-3053-4e9f-a592-c874c4b75891');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1d17b73b-68cb-4b10-9cb3-8981ad5b3805', '2020-03-24 09:46:22.959656+00', 'Structures en cours d''intégration', '19', '31d52cd0-3053-4e9f-a592-c874c4b75891');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c171985f-5f73-4c4a-bfdf-bcf190d2a233', '2020-03-24 09:54:39.595037+00', 'Conso moyenne crédit Azure cette semaine', '70 %', '599ccfcd-d131-4e8e-9e54-6dc4fd0b27b6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('89710da6-7a24-4335-b847-b322e3e14cab', '2020-03-24 09:54:39.595037+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '599ccfcd-d131-4e8e-9e54-6dc4fd0b27b6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2118c93d-5b3c-4af5-960c-035dedfdd9f4', '2020-03-24 09:54:39.595037+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '599ccfcd-d131-4e8e-9e54-6dc4fd0b27b6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f1ad9119-0120-4158-9727-cad3647f9779', '2020-03-24 09:56:27.875409+00', 'Déclarations sur Index Egapro', '6 055', 'cc7800ec-9c78-47f2-9c06-c5af973b0d97');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2c48f217-541f-4d36-acce-7d3dda188e3e', '2020-03-24 09:56:27.875409+00', 'Visites sur le site', 'environ 200 / jour', 'cc7800ec-9c78-47f2-9c06-c5af973b0d97');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b9a006dd-2dc4-439a-a729-20c5bd56f8d7', '2020-03-24 09:56:27.875409+00', 'Taux de satisfaction usager', '77 %', 'cc7800ec-9c78-47f2-9c06-c5af973b0d97');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8f7399fa-2e37-45a6-87a1-d1efdfa26e26', '2020-04-07 09:55:20.850618+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '275a6a2e-eaa2-4e40-ad19-989e1137ee33');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c7b03e71-8aab-4902-8c02-e5dba459090b', '2020-03-24 10:57:54.961615+00', 'Nombre d''actes', '5463', '8fdf777b-5c6b-4b72-b615-21c39ceb2d18');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2ea8a624-1d34-48bf-946e-163d820f51ae', '2020-03-24 10:57:54.961615+00', 'Nombre d''établissements', '3', '8fdf777b-5c6b-4b72-b615-21c39ceb2d18');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('186bb297-874f-4fd5-9b7e-302035f01ea8', '2020-04-14 07:49:59.31935+00', 'Conso moyenne crédit Azure cette semaine', '75 %', '4a8183d7-e224-4b07-9af0-f4f4f1cbde1f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('fb8a1da2-d8a4-4150-be1b-1865d575e7bd', '2020-04-14 07:49:59.31935+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '4a8183d7-e224-4b07-9af0-f4f4f1cbde1f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('65e2f84d-3ffb-4f21-98e9-c61ce657a77d', '2020-04-14 07:49:59.31935+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '4a8183d7-e224-4b07-9af0-f4f4f1cbde1f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('719b29cb-ca95-4e2c-af08-967131433710', '2020-03-31 07:46:41.936097+00', 'Issues Support', '0', '45e0a714-7d53-4914-b77e-5a8334e45a8e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a03297ea-121b-4165-a4b2-7b260a4c9717', '2020-07-07 08:36:57.567638+00', 'Conso moyenne crédit Azure cette semaine', '102 %', '0eaf2d36-d50a-4aae-bd90-4cf75ec2d3b3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4101c2e1-b6a0-454d-829a-82e7d0d9f94b', '2020-07-07 08:36:57.567638+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '0eaf2d36-d50a-4aae-bd90-4cf75ec2d3b3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('13bccc17-2f81-4e56-abab-294281e20f32', '2020-03-31 08:27:19.041268+00', 'Structures en production', '32', 'a79a238c-ab2d-4350-b0c3-ed89a02893ae');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5d71580c-cf8b-45e7-9dcf-89bda85b29b1', '2020-03-31 08:27:19.041268+00', 'Structures en cours d''intégration', '17', 'a79a238c-ab2d-4350-b0c3-ed89a02893ae');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e9fa6089-85df-4cc1-a755-df70386a4943', '2020-03-31 08:40:33.169943+00', 'Déclarations sur Index Egapro', '6 088', '28692650-a1ae-40fc-8f46-2bb185852bed');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2551f5b1-5f95-471a-8f04-a888e8f78fbe', '2020-03-31 08:40:33.169943+00', 'Visites sur le site', 'Environ 200 / jour', '28692650-a1ae-40fc-8f46-2bb185852bed');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d600ecb1-9cae-47e7-a532-298b17378ec2', '2020-03-31 08:40:33.169943+00', 'Taux de satisfaction usager', '76 %', '28692650-a1ae-40fc-8f46-2bb185852bed');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('137702d4-e74c-4d7b-b5d8-755aa912c864', '2020-03-31 08:53:34.798691+00', 'Conso moyenne crédit Azure cette semaine', '58 %', '7ca6ef16-bd82-4481-8e1a-b237e1061b59');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0975436c-2298-4c32-9545-8bdd848bd8a0', '2020-03-31 08:53:34.798691+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '7ca6ef16-bd82-4481-8e1a-b237e1061b59');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('efc33a99-a4b5-45c9-8e2c-5d540d44c901', '2020-03-31 08:53:34.798691+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '7ca6ef16-bd82-4481-8e1a-b237e1061b59');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8a78667c-36ce-4cf5-ad6f-03ba48532b3f', '2020-07-07 08:36:57.567638+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '0eaf2d36-d50a-4aae-bd90-4cf75ec2d3b3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a01da16d-2461-4f9c-b16c-13ac66c617d1', '2020-04-14 08:50:23.171283+00', 'déclarations sur Index Egapro', '6125', '820e3404-d035-4956-b444-de1b772b7c40');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('621f1dd8-595e-478f-8a34-e22aacf5f44b', '2020-04-14 08:50:23.171283+00', 'visites/jour', '~190', '820e3404-d035-4956-b444-de1b772b7c40');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('fefd7334-03b0-4508-b46d-0f6a4cbb24dd', '2020-04-14 08:50:23.171283+00', 'taux de satisfaction', '76%', '820e3404-d035-4956-b444-de1b772b7c40');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('807f8289-61d2-4ff4-a0c7-c4955259622a', '2020-05-11 12:55:28.149305+00', 'n/a', 'n/a', '5f94057c-345d-4396-9459-a441a48f8f6d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c08a0745-6e7f-4fa1-b84b-32318ecc4d9e', '2020-05-12 09:04:52.245846+00', 'Structures en production', '68', '4744824a-3861-4371-a5d1-c490a348fdf3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('abf066e1-1bd1-4e6a-bb1f-2a80344a8501', '2020-05-12 09:04:52.245846+00', 'Structures en cours d''intégration', '34', '4744824a-3861-4371-a5d1-c490a348fdf3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9767b69b-1a76-4305-a231-f63307447e5f', '2020-05-12 09:11:53.052373+00', 'déclarations Index Egapro', '6190', '27131bf4-b196-42f4-adb7-8aca498820b7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('25fdc48b-8bed-44c9-a948-e603301d9b22', '2020-03-31 09:56:32.212147+00', 'actes', '5744', '7b2e8660-7fa2-4d8f-9863-9297103fc97a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b020ffa9-017f-4208-a611-1a75cd2a1135', '2020-03-31 09:56:32.212147+00', 'établissements', '3', '7b2e8660-7fa2-4d8f-9863-9297103fc97a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f4dbfde3-c228-4872-9432-1c2676a7dfed', '2020-03-31 09:59:52.848948+00', 'Followers Instagram', 'Barre des 400 difficile à atteindre (confinement ?)', '01a53e75-2924-4ebe-864a-c53d60ea9d56');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8c81aa5e-df1d-4f10-88c0-968d3ede0d66', '2020-03-31 09:59:52.848948+00', 'Nombre de commandes', 'Bloquées à cause du confinement', '01a53e75-2924-4ebe-864a-c53d60ea9d56');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('387afc32-0d11-4288-9353-4354d12ceede', '2020-03-31 09:59:52.848948+00', 'Nombre de box distribuées', '100 en 10 jours', '01a53e75-2924-4ebe-864a-c53d60ea9d56');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9a208d8b-1cc0-402d-b041-e08a59ad435c', '2020-03-31 09:59:52.848948+00', 'Nombre de visiteurs ', '800', '01a53e75-2924-4ebe-864a-c53d60ea9d56');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9bd89a94-d48c-4052-a41b-78ed0fb30067', '2020-03-31 10:06:42.280754+00', 'Téléchargements de la v2.0 (depuis le 24/12/2019)', '867', '1d395505-393f-43ad-8f49-527b0953e5b0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('68382041-fa24-4883-9b4a-469f2776d69d', '2020-03-31 10:06:42.280754+00', 'Téléchargements de la v2.1 (depuis le 02/03/2020)', '261', '1d395505-393f-43ad-8f49-527b0953e5b0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b7b65812-ead7-4980-a717-2561b140ea48', '2020-03-31 10:06:42.280754+00', 'Nombre de téléchargements depuis le confinement', '', '1d395505-393f-43ad-8f49-527b0953e5b0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f62ce34a-93fe-486a-9159-cfa846357149', '2020-04-14 09:32:22.056115+00', 'Téléchargements en 1 semaine', '+ 138', '1a32a095-17b9-408b-81b4-3caf5c9e0170');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c676c578-470b-45d2-a7e5-2bcf4a406166', '2020-04-14 09:32:22.056115+00', 'Analyses (depuis le confinement)', '1299', '1a32a095-17b9-408b-81b4-3caf5c9e0170');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b57fdb4b-fb9c-4927-822a-b98ab5ec6934', '2020-03-31 10:38:36.236371+00', 'Téléchargements de la v2.1 depuis le confinement', '287', 'f1abf97b-f5ba-48b8-8d68-af8d37f95735');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('35ef2c52-022f-44fb-8477-fe36d5f1aab6', '2020-03-31 10:38:36.236371+00', 'Téléchargements de la v2.1 depuis le lancement le 2/03', '587', 'f1abf97b-f5ba-48b8-8d68-af8d37f95735');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c9ccbfef-94d0-40c7-88e0-8a125ce2a58a', '2020-04-07 08:47:03.722068+00', 'Structures en production', '36', '735422fb-6b00-4831-8e70-d344e807de28');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1b933f35-19ae-40b0-a801-657ef4ea7c18', '2020-04-07 08:47:03.722068+00', 'Structures en cours d''intégration', '22', '735422fb-6b00-4831-8e70-d344e807de28');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('259b80d4-b900-451f-b0c3-41555a04b82b', '2020-04-07 09:06:45.845573+00', 'Déclarations sur Index Egapro', '6 105', 'b03738fe-0256-456e-8755-2f82933a4389');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a1b38189-667f-41d2-a618-6bb0702bea2b', '2020-04-07 09:06:45.845573+00', 'Visites sur le site', '~ 200/jour', 'b03738fe-0256-456e-8755-2f82933a4389');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('6013aee3-cc85-48f7-8fb8-7feedee760f1', '2020-04-07 09:06:45.845573+00', 'Taux de satisfaction ', '76%', 'b03738fe-0256-456e-8755-2f82933a4389');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('74d3eb3d-fca4-4b1a-844b-a96fde55a091', '2020-04-14 09:58:57.937943+00', ' ', ' ', '34736ac0-4ae3-4454-bdbd-2cbae3e226a0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('11050087-f5f6-4b7c-8bb5-c4c8c260ed7e', '2020-04-07 09:33:54.431068+00', 'Téléchargements en 1 semaine', '+ 165', '87120af1-0b65-4828-a1ab-d54686c0ae85');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('81cb3bcb-5919-45b3-bd81-93a557d4a788', '2020-04-07 09:33:54.431068+00', 'Analyses (depuis le confinement)', '965 ', '87120af1-0b65-4828-a1ab-d54686c0ae85');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d0a96038-89a9-4fe5-b47a-6793161b0150', '2020-04-14 10:01:15.233011+00', 'Structures en production', '41', '7abc3950-4a9a-41e3-8410-500201dd650d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b671b262-941a-42cc-9ce0-a49d2b5a02d8', '2020-04-14 10:01:15.233011+00', 'Structures en cours d''intégration', '18', '7abc3950-4a9a-41e3-8410-500201dd650d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2d89984b-02f3-40f7-a399-a1269c54e5d4', '2020-04-14 10:01:15.233011+00', 'Domiciliés', '10 307', '7abc3950-4a9a-41e3-8410-500201dd650d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2d7f94c6-4242-4ce9-af60-91d81f6095f4', '2020-04-21 07:17:52.426687+00', 'Conso moyenne crédit Azure cette semaine', '82 %', '7f59e585-29e8-4df5-b974-ebfba9ba88ac');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7f4f4dda-bb65-415c-b09d-a2f85378178f', '2020-04-21 07:17:52.426687+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '7f59e585-29e8-4df5-b974-ebfba9ba88ac');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('727bce1d-76d1-4461-9f3e-e2531661677c', '2020-04-21 07:17:52.426687+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '7f59e585-29e8-4df5-b974-ebfba9ba88ac');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('50d066ab-ce0b-41b9-b9a1-ee7d22df07b7', '2020-04-21 09:29:44.654178+00', 'Structures en production', '45', '94cd3ab2-dbe0-49b6-8def-538565c21076');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d4ee8273-26d3-4f6f-924e-d01ae89459ec', '2020-04-21 09:29:44.654178+00', 'Structures en cours d''intégration', '45', '94cd3ab2-dbe0-49b6-8def-538565c21076');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b817e7bd-3920-4ac5-b65b-4a68632a3c6c', '2020-04-21 09:31:09.9498+00', 'Followers Instagram', '428 (+13)', '77802767-61b1-4144-a4e9-212768ecf00b');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c28c1eb1-536c-4b43-a747-808b964658b4', '2020-04-21 09:31:09.9498+00', 'Contenus / Questions', '169 (+13)', '77802767-61b1-4144-a4e9-212768ecf00b');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a725b927-ad99-4cd4-94f1-d03d8f945476', '2020-04-21 09:39:24.708954+00', 'déclarations sur Index Egapro', '6 147', '750d0ed8-3fa3-4e3c-8552-4af159990315');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d82aa52b-2a8a-475e-b6c7-324cdc383014', '2020-04-21 09:39:24.708954+00', 'visites/jour', '~180', '750d0ed8-3fa3-4e3c-8552-4af159990315');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f087b568-5334-4fa1-a800-a444b303f1b3', '2020-04-21 09:39:24.708954+00', 'taux de satisfaction', '76%', '750d0ed8-3fa3-4e3c-8552-4af159990315');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ee0a557f-7b7d-47b4-9f9d-31dfacd7ed32', '2020-04-27 09:22:10.761665+00', 'déclarations sur Index Egapro', '6168', '0bf918dd-002e-4a06-abad-a14d3eea4c44');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('42927345-7e97-45e4-aa51-5e745ccd8ce1', '2020-04-27 09:22:10.761665+00', 'visites/jour', '~175', '0bf918dd-002e-4a06-abad-a14d3eea4c44');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1273b6ea-3c9e-4ea3-b09e-e4d4142f956c', '2020-04-27 09:22:10.761665+00', 'taux de satisfaction', '76%', '0bf918dd-002e-4a06-abad-a14d3eea4c44');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('15edb0bd-ab8e-4d06-8302-15f9b63c7a1f', '2020-04-27 16:02:37.207649+00', 'DIRECCTE déployées', '13 + 5', 'b1f45736-21ce-4d9b-9172-65858b683371');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('bd399e55-e079-45fd-9cc7-220fe23d0f03', '2020-04-27 17:11:50.755583+00', 'Nombre', '10', 'b8d3dd1c-4275-4d40-bbb2-112689c114a0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2b9c9821-9187-49b5-a87a-c860f545f862', '2020-04-28 07:44:42.986685+00', 'Utilisateurs', '31', '552e9d94-d64b-4977-ad5a-3dc16255a36f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7f7e48ac-93d3-4d02-a258-2b6255d379ac', '2020-04-28 09:21:51.996893+00', 'Structures en production', '52', '94612606-4042-4fb1-a295-8f8ec755ffdb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('09ccd6f8-b110-4395-8642-bb7db8f5a381', '2020-04-28 09:21:51.996893+00', 'Structures en cours d''intégration ', '47', '94612606-4042-4fb1-a295-8f8ec755ffdb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('291c3814-fa78-4e84-9a8f-8858cd2b5649', '2020-04-28 09:27:09.101142+00', 'Conso moyenne crédit Azure cette semaine', '90 %', '6b388559-dbed-4747-bbc2-22f744840ab1');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('35e00113-cd90-45ca-8f1c-57b4a841b93e', '2020-04-28 09:27:09.101142+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '6b388559-dbed-4747-bbc2-22f744840ab1');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('eaea345b-28e9-4ea6-97ec-1f910155330a', '2020-04-28 09:27:09.101142+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '11 / 2', '6b388559-dbed-4747-bbc2-22f744840ab1');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2d3a6cdb-3612-42c0-abc0-aab495689679', '2020-04-28 09:29:05.583674+00', 'n/a', 'n/a', 'eea488cd-3589-40c9-858d-2f2d8c3c47c1');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('fa649e5b-2a2a-459e-80b0-135659e2e62c', '2020-04-28 09:56:25.732547+00', 'Followers Insta', '452 (objectif 500 semaine pro !)', '181c276a-6f2c-4c38-83c8-b5ff0a5ca896');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e6599d4b-7034-4dab-9d6c-9ea0db6cd56c', '2020-04-28 09:56:25.732547+00', 'Visiteurs uniques', '~10aine/jour', '181c276a-6f2c-4c38-83c8-b5ff0a5ca896');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b5e35335-47f9-49cc-acbc-331c28aa5fca', '2020-05-05 08:31:28.306013+00', 'déclarations Index Egapro', '6181', 'c39cfd29-1b34-4384-af47-817ff7c8715f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('20a28023-7f4b-461c-afed-8eb82271e8dc', '2020-05-05 08:31:28.306013+00', 'visites/jour', '~175', 'c39cfd29-1b34-4384-af47-817ff7c8715f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4dd90d8c-a79f-4e9a-bdfb-328fe61da638', '2020-05-05 08:31:28.306013+00', 'taux de satisfaction', '76%', 'c39cfd29-1b34-4384-af47-817ff7c8715f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('79ed935b-7fc9-4130-b18a-f19fbf43c9b9', '2020-05-05 08:37:02.378717+00', 'n/a', 'n/a', '4596a21c-26dc-4a0d-8e69-d63140541129');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ec6a2db0-321d-47e8-92d3-8b76ea8af912', '2020-05-05 08:55:15.660074+00', 'Conso moyenne crédit Azure cette semaine', '106 %', '26d82be4-07dc-442a-a9d6-b5c26b419bce');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('657d03e9-47f6-4082-a440-77d3035547a3', '2020-05-05 08:55:15.660074+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '26d82be4-07dc-442a-a9d6-b5c26b419bce');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b7577a54-8e01-471c-887f-12063708d1a8', '2020-05-05 08:55:15.660074+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '26d82be4-07dc-442a-a9d6-b5c26b419bce');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5d33bbcb-9415-4d20-abbb-84979a0ebafb', '2020-05-05 09:09:33.116717+00', 'Structures en production', '61', 'ff5ae949-9826-4c91-aea6-e1368285ea21');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('745a43af-fe64-4eab-a2bb-e4b02b1f3ef4', '2020-05-05 09:09:33.116717+00', 'Structures en cours d''intégration', '39', 'ff5ae949-9826-4c91-aea6-e1368285ea21');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e237ef77-0e30-454b-a22f-f299efad2d1a', '2020-05-05 09:21:40.122409+00', 'Follows Insta', '480', 'e3875610-13fa-4ee7-a720-dfed6c2d94f4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0054f7c3-3113-4a5f-bf7c-7d04d7fb4a73', '2020-05-11 09:13:31.5712+00', 'Issues bug', '0', 'ebddf66d-50fe-44dd-9f82-862e62dfb8b4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('06c31645-9006-40d0-8497-fb323caf1177', '2020-05-05 09:26:23.445978+00', 'Téléchargements en 2 semaines', '+150', '281997f5-5392-4b0f-8898-1a8bd85559f2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('456c918e-e22c-40dc-98ff-c132fb92cd74', '2020-05-05 09:26:23.445978+00', 'Analyses depuis le confinement', '2532', '281997f5-5392-4b0f-8898-1a8bd85559f2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7902fbea-d474-4101-85a8-bb2c668d95a7', '2020-05-11 09:13:31.5712+00', 'Issues documentation', '3', 'ebddf66d-50fe-44dd-9f82-862e62dfb8b4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4ddebe98-4289-4411-8767-13909c00ac45', '2020-05-12 08:19:27.581506+00', 'Conso moyenne crédit Azure cette semaine', '105 %', 'ebfe615f-9581-4801-93c7-5cfd5a197ad2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e71e7925-d6ac-4adb-9963-6d569210e4e6', '2020-05-12 08:19:27.581506+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', 'ebfe615f-9581-4801-93c7-5cfd5a197ad2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('986e2777-c7c0-4b74-8e10-ffa06b46de91', '2020-05-12 08:19:27.581506+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', 'ebfe615f-9581-4801-93c7-5cfd5a197ad2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('deb9625c-a375-479a-959b-feb7667b5fd4', '2020-05-12 09:11:53.052373+00', 'visites/jour', '~140', '27131bf4-b196-42f4-adb7-8aca498820b7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('6ee4e3a5-3b1a-4cb3-8631-086b727babf9', '2020-05-05 13:06:06.992296+00', 'actes', '8300', '477b12dc-eed8-4caf-aedf-bddb9c7f56d9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('3c150ff1-9d18-4794-b22e-afa13647ced0', '2020-05-05 13:06:06.992296+00', 'établissements', '10', '477b12dc-eed8-4caf-aedf-bddb9c7f56d9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('74496809-02cd-4cab-b33d-986d7356f814', '2020-05-05 13:06:17.351469+00', 'actes', '7718', '20a3b160-2646-425d-8238-81b78ee74d12');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c0509f74-88c4-40c3-9d26-e48d5d3a7291', '2020-05-05 13:06:17.351469+00', 'établissements', '6', '20a3b160-2646-425d-8238-81b78ee74d12');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('87e93976-b066-4722-bd76-cfabe93f52a7', '2020-05-05 13:06:27.554414+00', 'actes', '7102', '28b78a8f-33f3-42fa-9252-bb8e0488682c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f0b28840-6ee0-4fc7-834e-e4650c0223d8', '2020-05-05 13:06:27.554414+00', 'établissements', '6', '28b78a8f-33f3-42fa-9252-bb8e0488682c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4819cbc2-b802-43bb-ba43-1a26130c7311', '2020-05-05 13:06:35.538594+00', 'Actes', '6620', 'afbec99a-7c98-44c6-a016-45da16d1c41e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2445ff3f-195c-4630-920a-12c4bcbd7e58', '2020-05-05 13:06:35.538594+00', 'établissements', '6', 'afbec99a-7c98-44c6-a016-45da16d1c41e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('04cc20c1-bbb0-4dd1-b558-8b0e0edb7687', '2020-05-05 13:07:07.131791+00', 'Actes', '6161', '3e04b711-51d6-478e-8d19-3324441b1770');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('891ad185-2663-4911-8d12-1fcc0baedd49', '2020-05-05 13:07:07.131791+00', 'établissements', '6', '3e04b711-51d6-478e-8d19-3324441b1770');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b93af662-b69c-43ac-9e02-e930cdd1a41e', '2020-05-12 09:11:53.052373+00', 'taux de satisfaction', '76%', '27131bf4-b196-42f4-adb7-8aca498820b7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9b7b56f4-6e88-4b9f-8014-f6f86a87eadd', '2020-07-07 08:58:52.247274+00', 'établissements', '27/ 47', 'b7a4e425-3aa3-4e66-b2d2-2373f86d1bdb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0000ec2f-273d-4837-8cff-3109d964e71e', '2020-07-07 08:58:52.247274+00', 'actes', '22K', 'b7a4e425-3aa3-4e66-b2d2-2373f86d1bdb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('6dc3417e-b7d5-488d-ba7c-b215ce5eeafc', '2020-05-12 09:56:32.52991+00', 'Téléchargements en 1 semaine', '+ 570!!!', 'b9c3a2f2-497a-4d90-9647-2d37a01b6de5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('61652eb6-3b4a-407a-afab-665b238719d0', '2020-05-12 09:56:32.52991+00', 'Analyses depuis le confinement', '3035', 'b9c3a2f2-497a-4d90-9647-2d37a01b6de5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b2e277c9-5338-48eb-aa0a-212163161354', '2020-05-18 13:18:21.520267+00', 'déclarations sur Index Egapro', '6215', '588f4eb6-ec3b-4258-b232-22c4e27bcb2f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0a024c2d-b7a3-4f2d-9a13-146d68a381b8', '2020-05-18 13:18:21.520267+00', 'visites/jour', '~130', '588f4eb6-ec3b-4258-b232-22c4e27bcb2f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('6a3485fc-49d6-490d-947c-8598c03f0ba7', '2020-05-18 13:18:21.520267+00', 'taux de satisfaction', '77%', '588f4eb6-ec3b-4258-b232-22c4e27bcb2f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b3336772-9b88-4cb1-9c8f-3a2b2aeef45b', '2020-05-19 07:39:54.326135+00', 'Structures en production', '68', 'fb10cd03-1b92-4c97-90e4-5940fb841f74');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1f90dbcd-54d7-4ca9-8521-a060427182a2', '2020-05-19 07:39:54.326135+00', 'Structures en cours d''intégration', '34', 'fb10cd03-1b92-4c97-90e4-5940fb841f74');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('dff7928d-680c-489e-a367-413d235a9d40', '2020-05-19 08:56:17.119923+00', 'établissements', '9', '8283e0c9-3c73-491b-97c5-fdda2922f705');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7d456c68-7568-44ea-a8de-1545da8c7c3e', '2020-05-19 08:56:17.119923+00', 'actes', '9840', '8283e0c9-3c73-491b-97c5-fdda2922f705');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('bc4baef6-e955-4cda-87a9-6ade5bf1abb8', '2020-05-19 09:04:22.846435+00', 'n/a', 'n/a', '4fb7f0cc-5f5f-4e43-8408-413543492159');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c26a33b7-ad69-4673-ad7c-7af16d67d835', '2020-07-07 09:03:00.608274+00', 'Taux de calcul des KPI utiles pour le MVP', '100%', '7adaf469-bae2-43be-8252-12490fddb5be');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('eadfc581-c198-4492-bfb4-c619f8b33b50', '2020-07-07 09:03:00.608274+00', 'Cas d''usages traités (MVP)', '1', '7adaf469-bae2-43be-8252-12490fddb5be');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('98290b7b-2533-4d08-9a50-9e66d24ad5f6', '2020-07-07 09:03:00.608274+00', 'Taux de calculs des nouveaux axes / indicateurs calculés (depuis le MVP)', '45%', '7adaf469-bae2-43be-8252-12490fddb5be');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('243d7cb9-cc01-4d07-b9b0-5dca757b4d00', '2020-07-20 15:55:53.461051+00', 'Visites', '140.000', 'a0d46af8-819a-4c14-889d-8b0cae3cae95');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e0e0c060-edb7-4ae7-b9e3-6e848fb71fce', '2020-05-19 09:20:06.863652+00', 'Followers Insta', '490', 'b2e07d4d-24c4-4e4a-b0a2-65cae42334f8');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('60fce359-93a0-4928-ba18-282fae3398de', '2020-05-25 08:18:08.352883+00', 'Visites', '40.000', 'eb47d068-3270-4e5f-ac32-f2cf1af72e40');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('6a1b1bdf-d297-40a0-90a2-ba65de81a42e', '2020-05-25 09:00:15.28566+00', 'déclarations sur Index Egapro', '6231', '8eabae7d-61ed-4d3f-85b0-0ca5f4b55741');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f3895bcd-ded0-4b51-9bc6-6866549d7217', '2020-05-25 09:00:15.28566+00', 'visites/jour', '~186', '8eabae7d-61ed-4d3f-85b0-0ca5f4b55741');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('10e64bea-2e6c-4446-927d-f254e6f1d39a', '2020-05-25 09:00:15.28566+00', 'taux de satisfaction', '77%', '8eabae7d-61ed-4d3f-85b0-0ca5f4b55741');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('62e14386-bb03-4550-9641-d94b103bca2f', '2020-05-26 07:40:48.135183+00', 'Structures en production', '68', '7b84bd3b-7577-4cec-a850-25ba2dd0929b');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c9b1fc6b-e9c6-41ad-9675-231bf860ad99', '2020-05-26 07:40:48.135183+00', 'Structures en cours d''intégration', '56', '7b84bd3b-7577-4cec-a850-25ba2dd0929b');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('336abacc-211d-4ab3-960d-7d31c198f9dd', '2020-05-26 08:28:36.982316+00', 'Conso moyenne crédit Azure cette semaine', '108 %', '99d55814-2bfb-4b85-b6db-2372f0a9875d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('58a3a310-7d1d-4a9b-b06b-9bf1c2c7764f', '2020-05-26 08:28:36.982316+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '99d55814-2bfb-4b85-b6db-2372f0a9875d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('28ca93d8-4577-4313-b6db-1314da846363', '2020-05-26 08:28:36.982316+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '99d55814-2bfb-4b85-b6db-2372f0a9875d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('dc6bdcdf-48ee-4e73-aed4-8b06fd7e6202', '2020-05-26 09:00:42.439671+00', 'établissements', '9', '3edba515-c37f-4110-be02-70e0e30bd6eb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('99a1383b-5196-4fc4-b7c7-6756f38c21b6', '2020-05-26 09:00:42.439671+00', 'actes', '10 950', '3edba515-c37f-4110-be02-70e0e30bd6eb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9fa045f4-a2fb-4df4-af21-69caadac67ef', '2020-05-26 09:06:13.855769+00', 'n/a', 'n/a', 'a0adc517-cfdd-4a10-aecc-50b1355cb2cb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('043186e1-fbeb-484b-8f6d-dd65e1bd56f1', '2020-06-02 08:31:51.673568+00', 'Conso moyenne crédit Azure cette semaine', '117 %', '92d18fa7-9328-41b6-8995-02988dba3942');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ca21a88e-ae4c-42bd-82a2-6f4b42f63926', '2020-06-02 08:31:51.673568+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '92d18fa7-9328-41b6-8995-02988dba3942');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e4f7169e-1f5a-41cd-81f8-9708446f6693', '2020-06-02 08:31:51.673568+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '92d18fa7-9328-41b6-8995-02988dba3942');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('73a21436-d9f6-4ff3-930e-5f920c3a5319', '2020-06-02 08:38:55.494481+00', 'n/a', 'n/a', '3b280b7d-4684-4062-8f14-7c687ca5d155');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('bdfb26d1-9210-4f1a-a9c6-ed3f00549c7a', '2020-06-02 08:59:00.601971+00', 'déclarations sur Index Egapro', '6240', '2b5b1741-123a-4890-ae8a-c988257f440d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c9f0f29c-fc08-430a-9ba3-a1abb795cc0d', '2020-06-02 08:59:00.601971+00', 'visites/jour', '~150', '2b5b1741-123a-4890-ae8a-c988257f440d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2a4bb734-76ec-48a5-95dd-e7dcc40121ff', '2020-06-02 08:59:00.601971+00', 'taux de satisfaction', '77%', '2b5b1741-123a-4890-ae8a-c988257f440d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('67f57267-4fd6-40ff-a8be-da589537e0fb', '2020-06-02 09:03:07.17688+00', '511', 'abonné·e·s Instagram', '7516ab19-6eb1-4631-9d9a-62bba2076380');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('47a1db85-fd67-4ea8-9923-be37c8fc9050', '2020-06-02 09:03:07.17688+00', '131', 'commandes', '7516ab19-6eb1-4631-9d9a-62bba2076380');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a8f9c3da-b033-4695-a4f2-37c77d7630be', '2020-06-02 09:16:06.64922+00', 'Structures en production', '68', 'cf616b56-cfe4-48cd-b0cb-332869f78c82');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('688bf34c-0de5-4b1d-8fca-50a6f4f93a9d', '2020-06-02 09:16:06.64922+00', 'Structures en cours d''intégration ', '56', 'cf616b56-cfe4-48cd-b0cb-332869f78c82');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2f2e54bd-a214-42db-8774-172e06b309a9', '2020-07-07 08:13:37.105781+00', 'Taux de calcul des KPI utiles pour le MVP', '100%', '6da7bf40-9a7e-407c-afea-85e5f70c5eab');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0418041e-a77a-4cad-a78a-c408483b7146', '2020-07-07 08:13:37.105781+00', 'Cas d''usages traités (MVP)', '1', '6da7bf40-9a7e-407c-afea-85e5f70c5eab');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('96d87d19-90f4-4679-bb54-db2eb3f97875', '2020-07-07 08:13:37.105781+00', 'Taux de calculs des nouveaux axes / indicateurs calculés (depuis le MVP)', '45%', '6da7bf40-9a7e-407c-afea-85e5f70c5eab');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('02133498-0134-4476-8850-f17e4c2a0e7b', '2020-06-02 09:53:13.94468+00', 'établissements', '17', '66bd8478-2642-4a9b-880c-7ce6db8a4ea0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('489a51b4-fe1d-4a7f-80c0-54aa5a451d28', '2020-06-02 09:53:13.94468+00', 'actes', '12k', '66bd8478-2642-4a9b-880c-7ce6db8a4ea0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d69dc762-1309-43a3-8477-f8523fd73985', '2020-06-02 09:53:13.94468+00', 'nouveaux ETS (01/06)', '8', '66bd8478-2642-4a9b-880c-7ce6db8a4ea0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8b7df98b-9b57-46d2-bc24-82b817e6142a', '2020-06-09 08:09:35.408973+00', 'Structures en production', '76', '3ca61e6e-f132-4de6-9a5f-3957192c256f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9ce3fee3-f4e6-45b0-add8-4e55d08a961a', '2020-06-09 08:09:35.408973+00', 'Structures en cours d''intégration', '110', '3ca61e6e-f132-4de6-9a5f-3957192c256f');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('cf7a8fd6-5735-4c8c-9664-ecaafce16a50', '2020-06-09 08:20:49.787752+00', 'déclarations sur Index Egapro', '6250', '22356cbd-4e19-4cd0-b582-e2ba1757847a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5b92d17f-e868-4c53-985a-06ea424dbb58', '2020-06-09 08:20:49.787752+00', 'visites/jour', '~170', '22356cbd-4e19-4cd0-b582-e2ba1757847a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2b74bd46-ba18-4607-bfcd-4bdb0bbf9b32', '2020-06-09 08:20:49.787752+00', 'taux de satisfaction', '77%', '22356cbd-4e19-4cd0-b582-e2ba1757847a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('90e8e2f3-203b-40e7-bec5-c6c4f5a3b0f2', '2020-07-07 08:25:46.110109+00', 'Structures en production', '122', 'ac0aab62-e14d-4b96-a708-05e22aed59d2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8dd7776a-af46-4ba0-ab02-bfcf0921d2cd', '2020-07-07 08:25:46.110109+00', 'Domiciliés enregistrés', '19 180', 'ac0aab62-e14d-4b96-a708-05e22aed59d2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('19380027-0b56-4191-9a1d-3da89075b3c3', '2020-06-09 08:37:25.652825+00', 'Conso moyenne crédit Azure cette semaine', '106 %', 'ceabfaa2-d0a0-4657-b838-1b0c5612e06d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('db3aa4b0-7764-4ebc-ba59-fee7d2aa3424', '2020-06-09 08:37:25.652825+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', 'ceabfaa2-d0a0-4657-b838-1b0c5612e06d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8921e7df-9933-4186-aff4-da98586d13e4', '2020-06-09 08:37:25.652825+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', 'ceabfaa2-d0a0-4657-b838-1b0c5612e06d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c4cb3bf5-78b3-4b04-b5ef-95426d017f48', '2020-06-09 09:12:11.680378+00', 'Follows Insta', '575 (+64)', 'd3ee6673-c2cd-478e-ad7a-8bfc999afd05');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('99426e4a-68fb-46a1-a19f-442641ea3dff', '2020-06-09 09:12:11.680378+00', 'Visiteurs par semaine', '770', 'd3ee6673-c2cd-478e-ad7a-8bfc999afd05');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d030b11b-7438-46f4-9e1b-cbc3cbc28285', '2020-06-09 09:12:11.680378+00', 'Commandes passées cette semaine', '19', 'd3ee6673-c2cd-478e-ad7a-8bfc999afd05');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e472ef2a-c968-4a73-8a7c-a4ae96a7b76a', '2020-06-09 09:12:11.680378+00', 'Budget Com', '5 euros', 'd3ee6673-c2cd-478e-ad7a-8bfc999afd05');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('cdc14f0a-8807-4dc7-bda6-ecab017fb72d', '2020-06-09 09:14:05.259146+00', 'Téléchargements en 1 semaine', '276', '4a647e88-877e-442a-9aa1-9a12549c90bd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a89691c9-9e57-4a15-b44e-56413773d990', '2020-06-09 09:14:05.259146+00', 'Nouvelle version', '61', '4a647e88-877e-442a-9aa1-9a12549c90bd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e2ee3218-34d5-4e19-97d5-6a4f6c0142ae', '2020-06-09 09:14:05.259146+00', 'Analyses depuis le confinement', '3368', '4a647e88-877e-442a-9aa1-9a12549c90bd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('71cf322c-f98a-4d09-abc6-8293e914c750', '2020-07-07 08:25:46.110109+00', 'Comptes utilisateurs', '366', 'ac0aab62-e14d-4b96-a708-05e22aed59d2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4d5557c0-ad5a-4049-ab5b-7221d95438d2', '2020-06-09 09:32:00.780799+00', 'établissements', '17', 'a1da3633-4972-4d97-ac31-a703db1e67ac');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c27633b0-a19f-467d-973e-bb41286522dc', '2020-06-09 09:32:00.780799+00', 'actes', '13,8K', 'a1da3633-4972-4d97-ac31-a703db1e67ac');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('66c2751d-9d27-43cc-ba03-2db7451fec55', '2020-06-09 09:34:07.328365+00', 'Téléchargements en 1 mois', '1021', 'e34c5f81-5800-4980-a62b-fa118c0cec81');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('69275ad1-e914-46b7-b37d-b1b36315b183', '2020-06-09 09:34:07.328365+00', 'Analyses depuis le 16/03', '4130', 'e34c5f81-5800-4980-a62b-fa118c0cec81');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a01e3ed4-80c6-438e-95a8-7f327d29e273', '2020-06-09 09:34:36.391063+00', 'n/a', 'n/a', '327b820d-c861-4d90-8b8f-543d539997b4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('bab7fd2a-7340-4fb7-bf40-92651824618d', '2020-06-15 22:46:58.187963+00', 'Visites', '90.000', 'f939503b-381e-41e6-8ac8-06178227082a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('98d5a1a8-cd3f-43d6-a21a-86f6ea394a15', '2020-06-15 22:46:58.187963+00', 'Tests publics', '133', 'f939503b-381e-41e6-8ac8-06178227082a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('45158792-40f5-448c-8fb7-814844a4b671', '2020-06-16 09:17:37.581367+00', 'téléchargements fichier index', '4 204', '7eb43eb3-9dc3-4d47-9877-b8d2b5c7c6c5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a2ad916e-a0dc-439e-927f-d9730349e8d6', '2020-06-16 09:17:37.581367+00', 'taux de satisfaction', '77%', '7eb43eb3-9dc3-4d47-9877-b8d2b5c7c6c5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('13116b86-cc3d-46a7-ba81-25c88f8feee2', '2020-06-16 09:19:36.76962+00', 'Structures en production', '88', '085b6150-58c5-400d-b792-60b982b7aa5c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8b007e22-0a20-4f00-a344-3d5d4de7e888', '2020-06-16 09:19:36.76962+00', 'Structures en cours d''intégration', '110', '085b6150-58c5-400d-b792-60b982b7aa5c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1415c760-2064-4763-94ff-a7a43926a4d6', '2020-06-16 09:31:23.898977+00', 'Followers', '663 (+84)', '78fb9f6c-af4a-4f3c-b787-a70b9bf72f39');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d83a17fa-d215-434b-b713-6cde1c7774d6', '2020-06-16 09:31:23.898977+00', 'Followers (13-17 ans)', '3% -> 8%', '78fb9f6c-af4a-4f3c-b787-a70b9bf72f39');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f455f5d1-2512-421c-a8af-552e3e1ca3f3', '2020-06-16 09:31:23.898977+00', 'Visites (unique)', '890 (735)', '78fb9f6c-af4a-4f3c-b787-a70b9bf72f39');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('100117b1-ec9e-40a4-859b-deacc5b0ed11', '2020-06-16 09:31:23.898977+00', 'Commandes cette semaine', '86', '78fb9f6c-af4a-4f3c-b787-a70b9bf72f39');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7de551bc-a607-4a4b-9d06-59e8c5eb0d2d', '2020-06-16 09:45:33.498221+00', 'Conso moyenne crédit Azure cette semaine', '108 %', 'c335be0e-34db-443c-b05c-f9e6bbdc00b3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('66a471bf-3266-4efd-810c-af4e3877aa24', '2020-06-16 09:45:33.498221+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', 'c335be0e-34db-443c-b05c-f9e6bbdc00b3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8ac05d5a-f029-4ffb-ad32-306727b414f4', '2020-06-16 09:45:33.498221+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', 'c335be0e-34db-443c-b05c-f9e6bbdc00b3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5642d8d1-5ca0-45b0-a132-98cb5996f969', '2020-06-16 09:53:38.063476+00', 'Établissements', '17', 'cb61b4a8-a558-4ae0-add0-485136fb9002');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4a75410d-9844-4997-886c-28fab1798413', '2020-06-16 09:53:38.063476+00', 'Actes', '15,8 K', 'cb61b4a8-a558-4ae0-add0-485136fb9002');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5b5adcaa-3803-450e-a0f4-c29023340ab9', '2020-06-16 10:02:04.535225+00', 'n/a', 'n/a', 'be184b75-9b00-4d9d-bf77-56fb061d9024');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('31f63b36-33e5-4c8b-a554-1a06c6ede8ab', '2020-06-23 08:27:51.442226+00', 'Conso moyenne crédit Azure cette semaine', '104 %', '13f2c0e6-d91f-4b25-8be9-d44e632eaaf9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b59df2bf-2aff-4c58-ae7b-58734dc97564', '2020-06-23 08:27:51.442226+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '13f2c0e6-d91f-4b25-8be9-d44e632eaaf9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9dcc393e-756d-4398-9013-9ac83f97ebcd', '2020-06-23 08:27:51.442226+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '13f2c0e6-d91f-4b25-8be9-d44e632eaaf9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7ff60928-4606-421e-b6c2-76b463fcdd84', '2020-06-23 08:40:07.712382+00', 'Téléchargements en 2 semaines', '202', 'a5ce4952-30e3-4995-9b9d-68ca2b4c1ac2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e3fcf82c-fcef-4200-8061-94462aac6157', '2020-06-23 08:40:07.712382+00', 'Analyses depuis le confinement', '4652', 'a5ce4952-30e3-4995-9b9d-68ca2b4c1ac2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('fa074b5f-ff3b-4df1-be54-a0e79e2ca455', '2020-06-23 08:52:55.451515+00', 'Structures en production', '97', '97bc550f-70d3-4174-8605-d7d2f05c2700');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1fe80b74-9a77-4298-b8b3-f355b0047e13', '2020-06-23 08:52:55.451515+00', 'Structures en cours d''intégration', '113', '97bc550f-70d3-4174-8605-d7d2f05c2700');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d8d8b1ce-9b8d-4a49-a9c3-2ecea10c41ea', '2020-06-23 09:16:55.85077+00', 'établissements', '17', '95cde2e4-340d-41af-a196-eb147b4426c6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('165aa4a7-4d14-4501-a110-05ba72d4c20b', '2020-06-23 09:16:55.85077+00', 'actes', '17K', '95cde2e4-340d-41af-a196-eb147b4426c6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9905e883-f39e-4396-a8ae-c8625ee7b8bd', '2020-06-23 09:18:21.179397+00', 'n/a', 'n/a', '54c9c475-10fd-41ac-a866-8a95a891a910');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9039d2a3-2d66-44a3-8381-824f2eb34dbe', '2020-06-23 09:35:20.41988+00', 'téléchargements fichier index', '4 317', 'd1873a11-1d28-4c8f-b415-8d64f6f2ad66');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a067bf32-c41e-4f47-9aa4-8ae9d4cdd50b', '2020-06-23 09:35:20.41988+00', 'taux de satisfaction', '77%', 'd1873a11-1d28-4c8f-b415-8d64f6f2ad66');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('674df6ee-b149-4413-82a0-a4d711f1816c', '2020-06-23 09:53:23.832478+00', 'Follows insta', '730', '35a9b279-901f-4e3b-b90a-7d269abe8acd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('467a19a3-a29e-4e9d-8e28-5bdf643360c0', '2020-06-23 09:53:23.832478+00', 'Commandes cette semaine', '45', '35a9b279-901f-4e3b-b90a-7d269abe8acd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2e58a481-8c05-4964-824f-b4ba3708d07b', '2020-06-23 09:53:23.832478+00', 'Visites/semaine', '800', '35a9b279-901f-4e3b-b90a-7d269abe8acd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f2053cab-cffb-434c-9ce1-fd9023269f3b', '2020-06-29 14:43:24.995406+00', 'vues/semaine Index Egapro', '430', 'd58beaa9-b1e8-4119-a180-0df7f6295768');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('3c06ef62-e957-42a2-b1b1-aef4a6537d2e', '2020-06-29 14:43:24.995406+00', 'vues/semaine Consultation Index Egapro', '300', 'd58beaa9-b1e8-4119-a180-0df7f6295768');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('34a992b7-dff7-4aa3-aa63-43ed70747dee', '2020-06-29 14:43:24.995406+00', 'taux de satisfaction', '77%', 'd58beaa9-b1e8-4119-a180-0df7f6295768');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9f57490a-8168-4e72-ac16-9e6178a94c6a', '2020-06-29 15:20:50.274687+00', 'n/a', 'n/a', '4bc92987-20ba-4155-a13e-8e2fa50c8131');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d349ce62-f1f1-44b9-bc09-54c710d15cc2', '2020-06-30 09:39:01.077471+00', 'Conso moyenne crédit Azure cette semaine', '99%', 'd28070ad-2699-4c8b-ade6-5a0993be1422');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0b4090fa-88b3-4d05-ae80-e87d6f6912d9', '2020-06-30 09:39:01.077471+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', 'd28070ad-2699-4c8b-ade6-5a0993be1422');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f07a0904-1cac-4553-a4e3-e1f5ad3183ed', '2020-06-30 09:39:01.077471+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', 'd28070ad-2699-4c8b-ade6-5a0993be1422');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('aa175db1-215d-4bb5-888b-e4115924130c', '2020-07-01 15:25:21.576081+00', 'établissements déployés', '17 / 47', '220183a2-478a-4d65-b7d8-222d5ada95a0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c068bdc9-e592-4e48-a2c5-546feb5c37f8', '2020-07-01 15:25:21.576081+00', 'actes déclarés', '19K', '220183a2-478a-4d65-b7d8-222d5ada95a0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7a2dd216-79c5-482e-8183-e041606fdb33', '2020-07-06 12:19:29.733069+00', '0', '0', 'a749a311-b336-4990-b6d5-955d2044c6f1');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9525a875-2bc3-472d-a0a1-9e832991e486', '2020-07-06 12:19:29.733069+00', '0', '0', 'a749a311-b336-4990-b6d5-955d2044c6f1');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7a642d2b-16ad-41ab-9109-96483a2f8f20', '2020-07-06 12:19:55.483258+00', 'Utilisateurs', '0', 'aa9e27f1-ec04-4e22-b252-196ee5b827b0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5f6d6c29-1790-4989-a573-d9b9e6884c45', '2020-07-07 08:26:00.344572+00', 'Structures en production', '116', '020693f5-ab1f-436c-acc2-984ec935b077');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('341abfe2-67de-4604-82bb-c8d22e27d7de', '2020-07-07 08:26:00.344572+00', 'Domiciliés enregistrés', '18 833', '020693f5-ab1f-436c-acc2-984ec935b077');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('71fa2e04-0d5c-4bed-8aba-1cf650f3db62', '2020-07-06 12:26:28.532772+00', 'vues/jour Index Egapro', '~500', 'c37588cf-ca9f-4c85-afa4-6335fe09dfa3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a86a06c8-34c4-4c5a-9b40-0807cb0bcfa8', '2020-07-06 12:26:28.532772+00', 'téléchargements/semaine', '120', 'c37588cf-ca9f-4c85-afa4-6335fe09dfa3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f7af86d3-97d4-4756-a44c-fc8f73e62890', '2020-07-06 12:26:28.532772+00', 'taux de satisfaction', '77%', 'c37588cf-ca9f-4c85-afa4-6335fe09dfa3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('467a8c96-e76e-434f-a0d5-38633d5676dd', '2020-07-07 08:26:00.344572+00', 'Comptes utilisateurs', '340', '020693f5-ab1f-436c-acc2-984ec935b077');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d68d4954-ac1f-4233-8551-19387866053b', '2020-07-07 09:00:05.325905+00', 'n/a', 'n/a', '84dac8bf-4fde-4f35-9a9e-28fd83ce0f2b');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('219c72a9-3281-4df2-bac1-f56926491459', '2020-07-06 15:21:57.956125+00', '# usagers ayant contacté ', '324 (obj : 200)', 'c4a71457-1a5c-42e0-af33-eb8cc5a0a08e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5362a684-b20c-4520-9772-5c00ec82db09', '2020-07-06 15:21:57.956125+00', '# d''utilisateurs uniques', '4091', 'c4a71457-1a5c-42e0-af33-eb8cc5a0a08e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('3d417659-7d77-4276-97c3-353fcba1b204', '2020-07-07 09:59:44.550679+00', 'Visites', '100.000', 'eca0ced5-ac2f-493c-bc3f-d652a9002db3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('cd583a43-97a8-4152-9914-46709c78f946', '2020-07-07 09:59:44.550679+00', 'Tests Publics', '150', 'eca0ced5-ac2f-493c-bc3f-d652a9002db3');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('72442249-99b8-41a5-be9e-45d2603390cc', '2020-07-20 15:55:53.461051+00', 'Downloads DREES', '1.300', 'a0d46af8-819a-4c14-889d-8b0cae3cae95');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c0167097-5f78-4709-95fa-4ed5ef8b9007', '2020-07-20 15:55:53.461051+00', 'Détails test', '70.000', 'a0d46af8-819a-4c14-889d-8b0cae3cae95');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7d1e09c6-cc86-4196-bb0b-ea4ed839830f', '2020-07-20 16:05:25.312363+00', 'visites la semaine dernière', '37 055', '493275bc-cd33-4707-8079-1cf2028d78aa');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('a7d227ac-278c-475a-9f94-e2fbcb761fc3', '2020-07-20 16:05:25.312363+00', 'évolution des visites', '-19,7%', '493275bc-cd33-4707-8079-1cf2028d78aa');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5a1472f2-9874-4a92-aec9-beaf67506bf5', '2020-07-20 16:17:51.537278+00', 'Taux de calcul des KPI utiles pour le MVP', '100%', '21d6b502-b496-4761-8723-86550e76dd68');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0090f18e-aee1-44ed-8450-8cf5d789b2df', '2020-07-20 16:17:51.537278+00', 'Cas d''usages traités (MVP)', '1', '21d6b502-b496-4761-8723-86550e76dd68');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('826e5462-7fae-47b4-9bb9-c3aa851f3d8a', '2020-07-20 16:17:51.537278+00', 'Taux de calculs des nouveaux axes / indicateurs calculés (depuis le MVP)', '80%', '21d6b502-b496-4761-8723-86550e76dd68');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4dd0c548-74f3-4c32-ac9a-86789d0486d2', '2020-07-21 08:00:15.656878+00', 'Structures en production', '131', 'fb5db02e-88a8-4cbc-9d5f-d63faed8cdb6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('83159fbf-46d8-483f-97b4-96aae226dce1', '2020-07-21 08:00:15.656878+00', 'Domiciliés enregistrés', '21 132', 'fb5db02e-88a8-4cbc-9d5f-d63faed8cdb6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f87fc84f-1753-4278-a20b-898887133d02', '2020-07-21 08:00:15.656878+00', 'Comptes utilisateurs', '404', 'fb5db02e-88a8-4cbc-9d5f-d63faed8cdb6');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9d2263c3-6b2b-4f40-8a4f-4e223acb73c3', '2020-07-22 10:30:24.010019+00', 'Dossier APT Déposés', '28303', '883e8125-5031-43e5-9913-d11135b03c04');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f65f9ca4-7778-4ab6-b92d-24ba50186c8f', '2020-07-28 08:26:36.58461+00', 'Conso moyenne crédit Azure cette semaine', '106 %', 'cd057068-7a57-4a7d-8ee4-6813de249df2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('742fea30-ee7b-49fc-8602-d974d9bd2bb5', '2020-07-28 08:26:36.58461+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', 'cd057068-7a57-4a7d-8ee4-6813de249df2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('162762f1-1399-425b-963d-ed48c08f4069', '2020-07-28 08:26:36.58461+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', 'cd057068-7a57-4a7d-8ee4-6813de249df2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('06f8e9d7-0831-4906-9754-a383ffe89e52', '2020-07-28 08:55:13.015538+00', 'n/a', 'n/a', '5baac1a1-f3c6-4b0b-ab6e-9dcc6837c4fa');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9e6dc59a-3d4e-41bc-b27a-6f7b935f420e', '2020-07-28 08:57:00.388584+00', 'établissements', '27/ 47', 'bde66a0e-e118-4daa-a269-19fd31b9aec7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f321e1f3-1396-450b-8e2c-82ca6ce9bc0b', '2020-07-28 08:57:00.388584+00', 'actes', '30k', 'bde66a0e-e118-4daa-a269-19fd31b9aec7');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7ab67e07-10fe-4325-a86f-fe39d4d50a6c', '2020-07-28 09:17:25.981505+00', 'Taux de calcul des KPI utiles pour le MVP', '100%', '61ab13eb-708a-41c7-bd2e-84e09fe38c54');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8a455781-6b75-4043-8069-26eacf0b9573', '2020-07-28 09:17:25.981505+00', 'Cas d''usages traités (MVP)', '1', '61ab13eb-708a-41c7-bd2e-84e09fe38c54');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d6bde479-2c99-45c4-a4a9-e9157796c814', '2020-07-28 09:17:25.981505+00', 'Taux de calculs des nouveaux axes / indicateurs calculés (depuis le MVP)', '100%', '61ab13eb-708a-41c7-bd2e-84e09fe38c54');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c820f9b2-f547-47d6-8d22-f79faab7bec2', '2020-07-28 09:31:55.781145+00', 'réponses au sondage', '1156', '8c73a6a4-786e-46fd-9377-a36143197bd9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('713a2852-5639-4cc3-bba7-220b01d105d3', '2020-07-28 09:31:55.781145+00', 'téléchargements tableau index', '4800', '8c73a6a4-786e-46fd-9377-a36143197bd9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8c9404b7-a22a-4ffd-8d0a-db738d63dac9', '2020-08-03 15:05:51.568337+00', 'réponses au sondage', '1200', '9ad6f6fc-0eda-48a2-a5c6-0986d40659af');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0ce6b3b7-152f-41de-abb3-e61a0f92a448', '2020-08-03 15:05:51.568337+00', 'téléchargements tableau index +1000', '4878', '9ad6f6fc-0eda-48a2-a5c6-0986d40659af');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('c30bda82-de25-4d33-a01c-e51beaf8965e', '2020-08-03 15:05:51.568337+00', 'taux de satisfaction', '77%', '9ad6f6fc-0eda-48a2-a5c6-0986d40659af');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0044dca6-cf51-40c7-b303-e321a8eb52a8', '2020-08-04 08:07:42.584142+00', 'Visites', '160.000', '24262af8-7e85-4956-80db-4defe9c73274');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e39af85c-b5d5-4613-b66e-bff3dccb44ac', '2020-08-04 08:07:42.584142+00', 'Tests publics', '184', '24262af8-7e85-4956-80db-4defe9c73274');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('adcc066c-a1ba-4bf1-a94c-93c00b7fb578', '2020-08-04 08:08:59.17695+00', ' ', '42', '90c53238-0d97-4035-b994-82b76ffa4454');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9b815292-bca8-4c62-ac26-489e76a99211', '2020-08-04 08:19:51.074871+00', 'Conso moyenne crédit Azure cette semaine', '105 %', '0f47532e-9337-4be5-8ade-882def4c620e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('862053a1-2440-4af7-94c2-1b4991307bbe', '2020-08-04 08:19:51.074871+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '0f47532e-9337-4be5-8ade-882def4c620e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('70994e92-bbed-4776-8b7e-7a5f930a6221', '2020-08-04 08:19:51.074871+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '0f47532e-9337-4be5-8ade-882def4c620e');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('99507d4b-eb30-42bb-bbfb-da1aadd3d351', '2020-08-04 08:58:52.182928+00', 'Structures en production', '138', '58ae522b-2132-445e-8dae-ee0ded7a4cca');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0dcbbe4d-4cb2-4465-a549-af9cfdfe0a82', '2020-08-04 08:58:52.182928+00', 'Domiciliés enregistrés', '21 714', '58ae522b-2132-445e-8dae-ee0ded7a4cca');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e44882a4-1108-418b-8746-949cd84934c8', '2020-08-04 08:58:52.182928+00', 'Comptes utilisateurs', '430', '58ae522b-2132-445e-8dae-ee0ded7a4cca');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5221df7e-efc1-471b-97d2-098fe15945e2', '2020-08-04 08:59:33.979348+00', 'Téléchargements de la v3', '66', '1f3addaa-3cd7-4c04-b4bc-1191bfd4ea89');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0b9a0439-4347-4aba-8bb5-885799ce8b23', '2020-08-04 08:59:33.979348+00', 'Analyses depuis le confinement', '6524', '1f3addaa-3cd7-4c04-b4bc-1191bfd4ea89');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8dd3e8c0-1356-4b68-9d99-d8f318bcd97d', '2020-08-04 09:46:11.879386+00', 'n/a', 'n/a', '8fa8215f-89c2-4798-bc6f-508ec87b97d9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('45b2c287-155d-4dcd-a9ea-f331e496151e', '2020-08-04 09:54:53.3711+00', 'Établissements', '27/47', '6456fec1-03d5-4110-8eda-01f37e2c2c65');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('973e38b1-58e7-4911-9d5b-a70eb27ed839', '2020-08-04 09:54:53.3711+00', 'Actes', '33K', '6456fec1-03d5-4110-8eda-01f37e2c2c65');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e6fb0ff3-0585-4d68-b45a-1c9261e0a129', '2020-08-04 10:06:30.080434+00', 'Visites/Jour', '8000', '775038d6-8512-4bbc-9011-676acaabbc03');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('fa9771c7-c596-47a0-8f55-46af6402cb9e', '2020-08-11 09:14:34.749879+00', 'établissements', '27/ 47', '769d8b19-d15e-488c-b050-febde16f071d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2d65007c-2a25-4631-bb7f-4776fb52b720', '2020-08-11 09:14:34.749879+00', 'actes', '36K', '769d8b19-d15e-488c-b050-febde16f071d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('957a83f7-7849-4ee0-aa60-4440555f278c', '2020-08-11 09:15:19.765029+00', 'Structures en production', '144', '0fd84879-a4dc-4065-8bcc-af8b6df7f6ab');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('89d445f1-5ab5-4dc9-817b-32789f92aad4', '2020-08-11 09:15:19.765029+00', 'Domiciliés enregistrés', '21 757', '0fd84879-a4dc-4065-8bcc-af8b6df7f6ab');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('31981677-52e7-4f54-b6c0-5d5081be78ca', '2020-08-11 09:21:27.30709+00', 'téléchargements tableau index', '4 939', '93fe58a5-c376-44c7-9fec-d4f35dbd7d3a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7312b771-1493-4c87-82a3-cb9cd2e365ab', '2020-08-11 09:21:27.30709+00', 'taux de satisfaction', '77%', '93fe58a5-c376-44c7-9fec-d4f35dbd7d3a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f6e8c81e-b387-4c65-9b60-8a3349fb5608', '2020-08-11 09:24:10.836009+00', 'n/a', 'n/a', '347624fe-c566-4c26-8916-92a1a30b962c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2e883bbb-27ff-4013-85b4-3caf2540eba5', '2020-08-11 10:00:38.291204+00', 'Téléchargements de la v3', '141', 'e4cf85a5-ba05-4dd6-b21c-62f63c1f572a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('92144f4c-f881-44d7-a4f9-72272bf5cea6', '2020-08-11 10:00:38.291204+00', 'Analyses en 1 semaine', '143', 'e4cf85a5-ba05-4dd6-b21c-62f63c1f572a');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('dc1f7126-57e7-4845-bf59-e8bb815bcb91', '2020-08-18 07:47:00.834388+00', 'Conso moyenne crédit Azure cette semaine', '100 %', '88d6ed97-562d-4ad3-9384-906b1a9127e5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5e93cb03-ec80-422b-93e0-a388ebd22ce2', '2020-08-18 07:47:00.834388+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '88d6ed97-562d-4ad3-9384-906b1a9127e5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('45385148-abca-4232-95a3-24c45ef82939', '2020-08-18 07:47:00.834388+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '88d6ed97-562d-4ad3-9384-906b1a9127e5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('69d9858c-a0f1-4c20-9f5a-905e0041b919', '2020-08-18 08:34:46.295714+00', 'téléchargements fichier index', '4 973', '66e21ffa-66f5-4ac5-983b-0be360c67dac');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9f9ab37a-1e54-466f-811a-82268b55fe66', '2020-08-18 08:34:46.295714+00', 'taux de satisfaction', '77%', '66e21ffa-66f5-4ac5-983b-0be360c67dac');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7c1f5ef0-d8d1-40eb-a432-a906f9b7516f', '2020-08-18 08:44:27.178553+00', 'Téléchargements de la v3', '199', '208e8f90-c3cc-4910-af07-b1fcdf559ea9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('7bc30d4e-1f51-4006-90db-659e8d316666', '2020-08-18 08:44:27.178553+00', 'Analyses en 1 semaine', '180 ', '208e8f90-c3cc-4910-af07-b1fcdf559ea9');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ddd0bf6b-4a17-494f-a537-02e393b6cd96', '2020-08-18 08:50:36.876646+00', 'n/a', 'n/a', '265f369d-835b-4149-a1d2-f8edbd0002af');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5d9b5323-56b2-4de6-b7b1-66549a8de76d', '2020-08-18 08:57:07.418286+00', '27/47', 'établissements', 'b22ebc09-6886-4021-bce9-11b61381f9ba');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8de1de42-9d43-46cb-b8de-2d664b7321c4', '2020-08-18 08:57:07.418286+00', '39K', 'actes', 'b22ebc09-6886-4021-bce9-11b61381f9ba');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2d26a0a6-b590-4e0f-b976-ee2db6f5ce68', '2020-08-18 09:12:38.280751+00', 'Structures en production', '146', '49445c96-abf3-46b8-9d0c-47e57a1a1788');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('6d11ed01-da9c-427c-88c9-d79cd8a9adeb', '2020-08-18 09:12:38.280751+00', 'Domiciliés enregistrés', '22 356', '49445c96-abf3-46b8-9d0c-47e57a1a1788');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('adf7b9ad-72b5-46a8-a5ea-22a116ca2781', '2020-08-25 08:57:25.773411+00', 'Téléchargements de la v3', '255', '1805bcee-6cee-493d-8322-2cb1f7b080fd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ccb2f481-d802-4aed-b47e-eaee85a10bc3', '2020-08-25 07:32:43.318642+00', 'Conso moyenne crédit Azure cette semaine', '100 %', '958c15a3-90b3-443c-a1fb-eb8233b752c2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9c955b12-9122-4d95-b86c-1442a0c465b7', '2020-08-25 07:32:43.318642+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '958c15a3-90b3-443c-a1fb-eb8233b752c2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b86d082c-5aa5-4c18-834e-f4c9475dd703', '2020-08-25 07:32:43.318642+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '958c15a3-90b3-443c-a1fb-eb8233b752c2');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('141f91fb-3b2e-4851-96b5-760f1c0cc1c2', '2020-08-25 08:57:25.773411+00', 'Analyses en 1 semaine', '183', '1805bcee-6cee-493d-8322-2cb1f7b080fd');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2a9800ee-17e4-4c5e-96ba-063ab41d6838', '2020-08-25 09:05:41.1612+00', 'Follows Insta', '910', '298fc1f5-7094-4bc1-b849-c2bb06d80828');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ca4209af-d441-4690-9824-b4340f67c728', '2020-08-25 09:13:40.01818+00', 'Structures en production', '155', '59ac32f0-4a7b-426b-8561-586213bb6bb0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('022cf9b1-6c58-41a0-9c8b-11cb3f890ffc', '2020-08-25 09:13:40.01818+00', 'Domiciliés enregistrés', '24 175', '59ac32f0-4a7b-426b-8561-586213bb6bb0');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('67611881-f211-415f-8ef7-c462e00dcd23', '2020-08-25 09:21:19.406188+00', 'téléchargements fichier index', '5 026', '03e87c7e-8d9b-40c8-9e45-2ed7b8de55ee');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ed5c5646-8ff4-4104-8968-e23c8b67743a', '2020-08-25 09:21:19.406188+00', 'taux de satisfaction', '77%', '03e87c7e-8d9b-40c8-9e45-2ed7b8de55ee');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('0a30b22d-b119-4152-9cf4-f842822b0dc9', '2020-08-25 09:53:48.426962+00', 'n/a', 'n/a', '6c945701-883b-4461-8fc7-c788c7f48531');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('2b1b74be-2eb0-43ea-b1e0-efb4104d19b7', '2020-08-25 09:53:56.958156+00', 'établissements', '27/ 47', '1cc4bf17-46b4-4a6d-ae64-ce423ea9a38d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('e9a6f12d-ad80-49b9-bd57-d17b8be19f0e', '2020-08-25 09:53:56.958156+00', 'actes', '42K', '1cc4bf17-46b4-4a6d-ae64-ce423ea9a38d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('d6b8bbcc-8086-474d-b85f-55e0296d818f', '2020-09-01 08:59:57.10225+00', 'Structures en production', '157', '62ebf3fc-d9ca-450a-af5c-00dd0481b40d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('66d19f1c-cfac-4eba-a431-091d090885de', '2020-09-01 08:59:57.10225+00', 'Domiciliés enregistrés', '24 279', '62ebf3fc-d9ca-450a-af5c-00dd0481b40d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('de25e9c9-f4f8-414c-bf20-60414c35c763', '2020-09-01 09:39:57.275173+00', 'établissements', '27/ 47', '58a68421-86f6-47e0-aba4-bfba0e82ba70');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ff11e522-bf6d-4c04-9e6a-45f9fe4bc66c', '2020-09-01 09:39:57.275173+00', 'actes', '45K', '58a68421-86f6-47e0-aba4-bfba0e82ba70');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('25be6f79-3163-42e0-a81b-99af9d113007', '2020-09-01 09:53:13.067639+00', 'Téléchargements de la v3', '321', '66d56ccc-e888-41e5-a606-3bcd017d8058');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('13fcca51-3d17-4922-a77e-10695c3b19e0', '2020-09-01 09:53:13.067639+00', 'Analyses en 1 semaine', '358', '66d56ccc-e888-41e5-a606-3bcd017d8058');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('40a41ac7-b9b9-4b08-b828-a86590a04efc', '2020-09-01 09:55:13.926199+00', 'n/a', 'n/a', 'c9b970a4-e4f4-4e80-91c1-a3373c95f123');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4040a70f-b171-4924-b26a-23cc03f061cd', '2020-09-08 08:17:53.123494+00', 'Conso moyenne crédit Azure cette semaine', '100 %', '702b8c95-a097-49bc-b6c8-bb089b9caa02');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5fc88ff8-712e-4100-9b45-5bc44b45c654', '2020-09-08 08:17:53.123494+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '702b8c95-a097-49bc-b6c8-bb089b9caa02');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('12925989-02f8-4491-ab1f-e89ab481a6ea', '2020-09-08 08:17:53.123494+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '702b8c95-a097-49bc-b6c8-bb089b9caa02');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5740866d-94eb-4335-8314-8ceb2812cb3c', '2020-09-08 08:36:46.367162+00', 'des +1000 ayant déclaré', '97%', '839f6457-41f4-4ef4-a333-95e7db6b7ed4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('55009c42-2d00-4e32-a088-936349855078', '2020-09-08 08:36:46.367162+00', 'des 250-1000 ayant déclaré', '83%', '839f6457-41f4-4ef4-a333-95e7db6b7ed4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('67f1cafa-2eb7-4082-af51-722be3751a9b', '2020-09-08 08:36:46.367162+00', 'des 50-250 ayant déclaré', '52%', '839f6457-41f4-4ef4-a333-95e7db6b7ed4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('20179f03-d5ca-46f4-b377-fac2baf3e949', '2020-09-08 08:58:39.405417+00', 'Magistrats  connectés dans le dernier mois', '41 / 187', '270de76b-4784-411e-b68b-f37d78a2d5d4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4cf8e699-acba-4755-ad58-6f76bf3a2930', '2020-09-08 08:58:39.405417+00', 'Individuels  connectés dans le dernier mois', '248 / 1113', '270de76b-4784-411e-b68b-f37d78a2d5d4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9e9a9eee-14b0-4423-811f-4d7f9f77a806', '2020-09-08 08:58:39.405417+00', 'Services  connectés dans le dernier mois', '32 /122', '270de76b-4784-411e-b68b-f37d78a2d5d4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('fb88e85f-6a9f-4b22-b49f-f4ab8ce6e3ba', '2020-09-08 08:58:39.405417+00', 'Préposés  connectés dans le dernier mois', '22 / 128', '270de76b-4784-411e-b68b-f37d78a2d5d4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8957247b-a263-486a-bfc7-8a4c705aea41', '2020-09-08 08:58:39.405417+00', 'Mesures réservées', '542', '270de76b-4784-411e-b68b-f37d78a2d5d4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('9abe6b52-55e6-4b76-8dd6-8eae1e57406b', '2020-09-08 09:16:54.790448+00', 'AT - Cas d''usage réalisé', '0/1', '9ca3953c-a6dc-4ef4-9967-d1c01ecd1f90');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('32fe82f5-136d-4d90-a30b-9ff128a1f88f', '2020-09-08 09:28:40.098711+00', 'Structures en production', '159', '717e10fa-6b4d-427f-884c-cea24029aaaf');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('dbb11d11-f19a-44f4-aaad-5ab695b381e1', '2020-09-08 09:28:40.098711+00', 'Domiciliés enregistrés', '24 642', '717e10fa-6b4d-427f-884c-cea24029aaaf');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('92cd0c50-2b7d-482a-86a0-50d6a2e1a843', '2020-09-08 09:30:48.56664+00', 'Téléchargements de la v3', '401', 'dfbe50ac-9585-4920-9319-06687045a837');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('ac0cb661-962e-478f-ae97-2f562fe2ede1', '2020-09-08 09:30:48.56664+00', 'Analyses réalisées', '1345', 'dfbe50ac-9585-4920-9319-06687045a837');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('bd2dd4a3-7ea3-4183-b4a2-cedcdf68094c', '2020-09-08 09:39:31.157187+00', 'Abonné·e·s', '957', '6233037b-fccb-4a44-875a-248f59a48783');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f0d89a4a-d80e-464a-a351-10bea0b05882', '2020-09-08 09:59:33.682182+00', 'Apps restantes', '5', '5e668ca8-dca6-4569-b37e-f3828e3ea59d');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('18e1cdca-5e52-4d09-85d5-542cff129e40', '2020-09-14 11:38:51.878456+00', 'Conso moyenne crédit Azure cette semaine', '100 %', '9ea958b5-eb9f-49ea-9ec8-bc21026dc3e4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('cc07a3b5-70ff-4f23-a106-18f7a225888b', '2020-09-14 11:38:51.878456+00', 'Produits hébergés sur VM (Azure / MCAS)', '7 / 2', '9ea958b5-eb9f-49ea-9ec8-bc21026dc3e4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('8fa8b92f-4abe-4503-8df5-f13d23181bd4', '2020-09-14 11:38:51.878456+00', 'Produits hébergés sur Kubernetes (Azure / MCAS)', '12 / 2', '9ea958b5-eb9f-49ea-9ec8-bc21026dc3e4');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('eda8e4f8-5d1b-4a83-9a04-1fc46d6939b5', '2020-09-14 15:50:04.627925+00', 'des +1000 ayant déclaré', '97%', 'd49f5bd8-1b13-44db-aa63-3a821ce84c16');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('25824119-ca95-486b-ba80-4ef4e777d985', '2020-09-14 15:50:04.627925+00', 'des 250-1000 ayant déclaré', '83%', 'd49f5bd8-1b13-44db-aa63-3a821ce84c16');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f79e1788-5472-4519-a32c-443ee7afc3ad', '2020-09-14 15:50:04.627925+00', 'des 50-250 ayant déclaré', '52%', 'd49f5bd8-1b13-44db-aa63-3a821ce84c16');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b2fc0557-9385-4830-8da0-cf58858e1c92', '2020-09-15 08:56:55.113437+00', 'Visites', '185.000', '745f1f60-f0b8-401e-a6ea-41bc8c93d06c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('aec9a9df-12de-430d-9cda-30bbdd0f22ac', '2020-09-15 08:56:55.113437+00', 'Utilisateurs', '900', '745f1f60-f0b8-401e-a6ea-41bc8c93d06c');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('4aaa0a7a-c8c3-40e7-8441-a2ed2728d564', '2020-09-15 08:58:35.284679+00', 'Visites/jour', '>10.000', 'b548b55c-20fe-4c30-808b-bace5ca19b72');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('b0a3060b-cd6e-4568-9521-ec6decf10f57', '2020-09-15 09:23:18.166712+00', 'Structures en production', '165', '2a823d15-e120-4e6b-b159-d020128701d5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('5b8b39ae-59fe-4113-8e2e-43656da3ea17', '2020-09-15 09:23:18.166712+00', 'Domiciliés enregistrés', '25 082', '2a823d15-e120-4e6b-b159-d020128701d5');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('1fdc4b5f-783e-4adb-9a1e-bed12dad7de9', '2020-09-15 09:44:52.65911+00', '27/ 47', 'établissements', 'b73b2037-5280-44b6-87a4-67796bd185eb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('beca67a0-2745-4dec-93e5-27c0e0aef19e', '2020-09-15 09:44:52.65911+00', '51K', 'actes', 'b73b2037-5280-44b6-87a4-67796bd185eb');
INSERT INTO public.kpis (id, created_at, name, value, post_id) VALUES ('f675f9c2-2c52-498e-9ac0-d3bd6128b4bc', '2020-09-15 09:50:50.828537+00', 'N/A', 'N/A', '4462deae-3a39-4bb4-8f08-6c1774884791');


--
-- Name: remote_schemas_id_seq; Type: SEQUENCE SET; Schema: hdb_catalog; Owner: carnetsuser
--

SELECT pg_catalog.setval('hdb_catalog.remote_schemas_id_seq', 105, true);


--
-- PostgreSQL database dump complete
--

