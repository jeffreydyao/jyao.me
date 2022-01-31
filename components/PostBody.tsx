// Type props properly later
// TODO: What is dangerouslySetInnerHTML?


export default function PostBody({ content }: any) {
  return (
    <div className="max-w-2xl mx-auto">
      <div 
      className="text-white"
      dangerouslySetInnerHTML={{ __html: content }} 
      /> 
    </div>
  )
}