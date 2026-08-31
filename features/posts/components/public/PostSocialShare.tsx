"use client";

import { Button } from "@/components/ui/button";
import { Copy, Share2 } from "lucide-react";

import { toast } from "sonner";

type PostSocialShareProps = {
  title: string;
  slug: string;
};

export function PostSocialShare({ title, slug }: PostSocialShareProps) {
  const handleShare = async () => {
    const url = `${window.location.origin}/aktuality/${slug}`;

    if (navigator.share) {
      await navigator.share({
        title,
        url,
      });

      return;
    }

    await navigator.clipboard.writeText(url);

    toast.success("Odkaz byl zkopírován");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-dark-red">
          <Share2 className="h-4 w-4 text-white" />
        </div>

        <div>
          <p className="font-semibold text-custom-dark-grey">
            Sdílet příspěvek
          </p>

          <p className="text-xs text-custom-light-grey">
            Sdílejte tuto aktualitu
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          onClick={handleShare}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-custom-red hover:text-white"
          aria-label="Sdílet příspěvek"
        >
          <Share2 className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => {
            const url = `${window.location.origin}/aktuality/${slug}`;

            navigator.clipboard.writeText(url);

            toast.success("Odkaz byl zkopírován");
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-custom-red hover:text-white"
          aria-label="Kopírovat odkaz"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
