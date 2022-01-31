import DateFormatter from "./DateFormatter";
import PostTitle from "./PostTitle";

// Type props properly later
export default function PostHeader({ title, date }: any) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-neutral-400 text-sm pt-2">
        <DateFormatter dateString={date} />
      </div>
    
    </>
  )
}