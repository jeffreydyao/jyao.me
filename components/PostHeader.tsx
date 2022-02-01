import DateFormatter from "./DateFormatter";
import PostTitle from "./PostTitle";

// Type props properly later
export default function PostHeader({ title, date }: any) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="pt-2 text-sm text-neutral-400">
        <DateFormatter dateString={date} />
      </div>
    
    </>
  )
}