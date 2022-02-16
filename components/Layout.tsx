import Meta from "./Meta";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <div className="flex flex-col items-center min-h-screen px-6 bg-neutral-900 md:px-0 dark">
        <div className="items-start md:mt-24 md:mb-24 mt-8 mb-8 transition-all duration-[100]">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
