export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  featured: boolean;
  image?: string;
  date: string;
  author: string;
  category: string;
  content: string;
  published: boolean;
};

export type RelatedPostsProps = {
  currentSlug: string;
  currentCategory: string;
  posts: Post[];
};

export type Category = {
  id: number;
  name: string;
};
