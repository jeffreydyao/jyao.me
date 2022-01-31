// prose-code:before:content-none prose-code:after:content-none fixes inline code blocks from rendering with backticks.
// See https://github.com/tailwindlabs/tailwindcss-typography/issues/135#issuecomment-991251524 for more info.

export default function PostBody({ content }: any) {
  return (
    <div className="md:w-[500px] max-w-[500px] pt-4">
      <article
        className="prose prose-sm prose-neutral dark:prose-invert prose-code:before:content-none prose-code:after:content-none prose-quoteless"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
