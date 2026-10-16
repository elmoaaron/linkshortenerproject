CREATE TABLE "links" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "links_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" varchar(255) NOT NULL,
	"short_code" varchar(16) NOT NULL UNIQUE,
	"original_url" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
