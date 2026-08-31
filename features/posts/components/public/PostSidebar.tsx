import { PostSidebarProps } from "../../types";
import { AuthorCard } from "./AuthorCard";
import { PostSocialShare } from "./PostSocialShare";

export function PostSidebar({ author, title, slug }: PostSidebarProps) {
  return (
    <div className="space-y-4">
      <AuthorCard author={author} />

      <PostSocialShare title={title} slug={slug} />
    </div>
  );
}
