--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: app_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.app_permissions (
    user_id bigint,
    scope character varying,
    date_insert bigint,
    last_update bigint
);


ALTER TABLE public.app_permissions OWNER TO postgres;

--
-- Name: blocked; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blocked (
    user_id bigint,
    blocked_id bigint
);


ALTER TABLE public.blocked OWNER TO postgres;

--
-- Name: preferences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.preferences (
    user_id bigint,
    theme integer,
    locale integer
);


ALTER TABLE public.preferences OWNER TO postgres;

--
-- Name: profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profile (
    user_id bigint,
    avatar character varying,
    url character varying,
    location character varying,
    bio text,
    username character varying
);


ALTER TABLE public.profile OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint,
    username character varying,
    first_name character varying,
    last_name character varying,
    age integer,
    email character varying,
    phone character varying,
    last_update bigint
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: app_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_permissions (user_id, scope, date_insert, last_update) FROM stdin;
\.


--
-- Data for Name: blocked; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blocked (user_id, blocked_id) FROM stdin;
\.


--
-- Data for Name: preferences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.preferences (user_id, theme, locale) FROM stdin;
\.


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profile (user_id, avatar, url, location, bio, username) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, first_name, last_name, age, email, phone, last_update) FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

