SET check_function_bodies = false;
CREATE TABLE public.files (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    team_slug text NOT NULL,
    blob_name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    size integer NOT NULL,
    type text NOT NULL
);
CREATE TABLE public.followups (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    team_slug text NOT NULL,
    data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);
CREATE TABLE public.github_data (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    admins_and_teams jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.kpis (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    value text NOT NULL,
    post_id uuid NOT NULL
);
CREATE TABLE public.posts (
    team_slug text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    mood text NOT NULL,
    priorities text NOT NULL,
    term text,
    needs text,
    author text
);
COMMENT ON TABLE public.posts IS 'Tables containing all posts for the Carnets application.';
CREATE VIEW public.posts_stat AS
 SELECT sub.year,
    sub.week,
    count(*) AS count
   FROM ( SELECT DISTINCT date_part('year'::text, (posts.created_at)::date) AS year,
            date_part('week'::text, (posts.created_at)::date) AS week,
            posts.team_slug AS team
           FROM public.posts) sub
  GROUP BY sub.year, sub.week;
CREATE VIEW public.teams_status AS
 SELECT DISTINCT p.team_slug,
    ( SELECT max(posts.created_at) AS max
           FROM public.posts
          WHERE (posts.team_slug = p.team_slug)) AS last_post,
    ( SELECT max(xxx.count) AS max
           FROM ( SELECT count(*) AS count
                   FROM public.kpis
                  WHERE (kpis.post_id = ( SELECT posts.id
                           FROM public.posts
                          WHERE ((posts.team_slug = p.team_slug) AND (posts.created_at = ( SELECT max(posts_1.created_at) AS max
                                   FROM public.posts posts_1
                                  WHERE (posts_1.team_slug = p.team_slug))))))) xxx) AS kpis_count,
    ( SELECT posts.mood
           FROM public.posts
          WHERE ((posts.team_slug = p.team_slug) AND (posts.created_at = ( SELECT max(posts_1.created_at) AS max
                   FROM public.posts posts_1
                  WHERE (posts_1.team_slug = p.team_slug))))) AS mood
   FROM public.posts p;
ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_blob_name_key UNIQUE (blob_name);
ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.followups
    ADD CONSTRAINT followups_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.followups
    ADD CONSTRAINT followups_team_slug_key UNIQUE (team_slug);
ALTER TABLE ONLY public.github_data
    ADD CONSTRAINT github_data_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.kpis
    ADD CONSTRAINT kpis_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.kpis
    ADD CONSTRAINT kpis_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
