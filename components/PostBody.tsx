// TODO: Force enable prose-invert for Tailwind Typography instead of overriding default neutral dark theme

export default function PostBody({ content }: any) {
  return (
    <div className="max-w-[500px] pt-4">
      <article
        className="prose prose-sm prose-neutral dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
