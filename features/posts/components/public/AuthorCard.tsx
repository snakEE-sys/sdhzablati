import { User } from "lucide-react";

import { PostSidebarProps } from "../../types";

export function AuthorCard({ author }: Pick<PostSidebarProps, "author">) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-custom-red">
          <User className="h-5 w-5 text-white" />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Autor
          </p>

          <h3 className="font-semibold text-custom-dark-grey">{author.name}</h3>
        </div>
      </div>

      <p className="text-sm font-light leading-relaxed text-custom-light-grey">
        {author.description}
      </p>
    </div>
  );
}
