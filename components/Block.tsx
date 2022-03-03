export default function Block({children}: any) {
  return (
    <div className="md:relative md:mt-16 mt-8 transition-all duration-[100]">
      {children}
    </div>
  );
}
