import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import listeningTo from "../public/listeningto.png";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="md:relative mt-12 transition-all duration-[100]">
        <h2 className="text-neutral-50 text-sm md:absolute md:left-[-4rem] md:top-0 pb-2 font-medium">
          Now
        </h2>
        <Link href="/now" passHref>
          <p className="text-neutral-50 text-sm hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]">
            Settling into CS, building things for fun and exploring Sydney 
            more! →
          </p>
        </Link>
      </div>

      <div className="md:relative md:mt-16 mt-8 transition-all duration-[100]">
        <h2 className="text-neutral-50 text-sm md:absolute md:left-[-5.5rem] md:top-0 pb-7 font-medium">
          Projects
        </h2>
        <div className="flex flex-col">
          <div>
            <Image
              src={listeningTo}
              alt="Mockup of Listening To app"
              width={500}
              height={220}
              className="rounded-[0.875rem]"
            />
          </div>

          <h3 className="text-neutral-50 text-base md:pt-9 pt-7">
            Listening To
          </h3>
          <p className="text-neutral-400 text-sm pt-1">January 2022</p>
          <div className="flex md:flex-row flex-col justify-start pt-3 md:gap-14 gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-300 text-sm md:max-w-xs leading-5">
                Lets Last.fm users share a link with their friends that
                shows what music they’ve been listening to recently.
              </p>
              <p className="text-neutral-300 text-sm md:max-w-xs leading-5">
                Built with Next.js + React + Last.fm API, deployed with
                Vercel.
              </p>
            </div>
            <div>
              <div className="border-t-2 w-8 border-neutral-600 md:pb-2 pb-3" />
              <div className="flex md:flex-col flex-row align-middle md:gap-2 gap-3">
                <a
                  href="https://listening-to.vercel.app"
                  className="text-neutral-100 text-xs md:pt-1 hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]"
                >
                  Check it out →
                </a>
                <a
                  href="https://github.com/jeffreydyao/listening-to-v2"
                  className="text-neutral-100 text-xs hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]"
                >
                  GitHub →
                </a>
                {/* Update once finished */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
