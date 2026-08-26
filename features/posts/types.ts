export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured: boolean;
  image?: string;
  date: Date;
  author: Author;
  category: Category;
  content: string;
  published: boolean;
};

export type RelatedPostsProps = {
  currentSlug: string;
  currentCategory: string;
  posts: Post[];
};

export type Category = {
  id: string;
  name: string;
};

type Author = {
  id: string;
  name: string;
  description: string;
};

export type PostSidebarProps = {
  author: Author;
  category: Category;
};
