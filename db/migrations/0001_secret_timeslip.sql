CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "jednotky" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subcategories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"category_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "technika" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vyjezd" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"time" time NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"category_id" integer
);
--> statement-breakpoint
CREATE TABLE "vyjezdToJednotky" (
	"vyjezd_id" integer NOT NULL,
	"jednotky_id" integer NOT NULL,
	CONSTRAINT "vyjezdToJednotky_vyjezd_id_jednotky_id_pk" PRIMARY KEY("vyjezd_id","jednotky_id")
);
--> statement-breakpoint
CREATE TABLE "vyjezdToTechnika" (
	"vyjezd_id" integer NOT NULL,
	"technika_id" integer NOT NULL,
	CONSTRAINT "vyjezdToTechnika_vyjezd_id_technika_id_pk" PRIMARY KEY("vyjezd_id","technika_id")
);
--> statement-breakpoint
ALTER TABLE "subcategories" ADD CONSTRAINT "subcategories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vyjezd" ADD CONSTRAINT "vyjezd_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vyjezdToJednotky" ADD CONSTRAINT "vyjezdToJednotky_vyjezd_id_vyjezd_id_fk" FOREIGN KEY ("vyjezd_id") REFERENCES "public"."vyjezd"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vyjezdToJednotky" ADD CONSTRAINT "vyjezdToJednotky_jednotky_id_jednotky_id_fk" FOREIGN KEY ("jednotky_id") REFERENCES "public"."jednotky"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vyjezdToTechnika" ADD CONSTRAINT "vyjezdToTechnika_vyjezd_id_vyjezd_id_fk" FOREIGN KEY ("vyjezd_id") REFERENCES "public"."vyjezd"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vyjezdToTechnika" ADD CONSTRAINT "vyjezdToTechnika_technika_id_technika_id_fk" FOREIGN KEY ("technika_id") REFERENCES "public"."technika"("id") ON DELETE cascade ON UPDATE no action;