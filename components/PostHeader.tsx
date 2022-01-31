import DateFormatter from "./DateFormatter";
import PostTitle from "./PostTitle";

// Type props properly later
export default function PostHeader({ title, date }: any) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-sm text-white">
        <DateFormatter dateString={date} />
      </div>
    
    </>
  )
}