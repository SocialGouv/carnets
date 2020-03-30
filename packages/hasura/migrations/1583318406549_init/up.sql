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
    term text NOT NULL,
    needs text NOT NULL,
    author text
);
COMMENT ON TABLE public.posts IS 'Tables containing all posts for the Carnets application.';
ALTER TABLE ONLY public.kpis
    ADD CONSTRAINT kpis_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.kpis
    ADD CONSTRAINT kpis_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
