ALTER TABLE "posts" RENAME COLUMN "author" TO "author_id";--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "posts_category_id_posts_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "slug" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "title" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "category_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "image" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "posts_categories" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "posts_categories" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "posts_categories" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" text DEFAULT 'Editor' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_category_id_posts_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."posts_categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_slug_unique" UNIQUE("slug");