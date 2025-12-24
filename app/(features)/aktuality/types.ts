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
  };

export type RelatedPostsProps = {
    currentSlug: string;
    currentCategory: string;
    posts: Post[];
  };