CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"category_id" integer NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"excerpt" text NOT NULL,
	"image" varchar(255),
	"author" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "posts_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"vyjezd_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "vyjezdToTechnika" DROP CONSTRAINT "vyjezdToTechnika_vyjezd_id_technika_id_pk";--> statement-breakpoint
ALTER TABLE "vyjezd" ADD COLUMN "address" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_category_id_posts_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."posts_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "images" ADD CONSTRAINT "images_vyjezd_id_vyjezd_id_fk" FOREIGN KEY ("vyjezd_id") REFERENCES "public"."vyjezd"("id") ON DELETE cascade ON UPDATE no action;