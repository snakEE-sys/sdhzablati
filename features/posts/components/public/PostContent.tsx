type PostContentProps = {
  content: string;
};

export function PostContent({ content }: PostContentProps) {
  return (
    <article className="min-w-0">
      <div
        className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-custom-dark-grey prose-p:text-custom-light-grey prose-p:leading-relaxed prose-a:text-custom-red prose-img:rounded-2xl"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </article>
  );
}
