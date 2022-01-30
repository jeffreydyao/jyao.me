import Meta from "./Meta";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <div className="bg-neutral-900 min-h-screen flex flex-col items-center md:px-0 px-6">
        <div className="items-start md:mt-24 mt-8 mb-8 transition-all duration-[100]">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
