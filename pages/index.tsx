import type { NextPage } from "next";
import Image from "next/image";
import listeningTo from "../public/listeningto.png";
import Link from "next/link";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { CMS_NAME } from "../lib/constants";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <div className="md:relative mt-12 transition-all duration-[100]">
        <h2 className="text-neutral-50 text-sm md:absolute md:left-[-4rem] md:top-0 pb-2 font-medium">
          Now
        </h2>
        <Link href="/now" passHref>
          <p className="text-neutral-50 text-sm hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]">
            Settling into CS, building things for fun and exploring Sydney more!
            →
          </p>
        </Link>
      </div>

      <Projects />

      <div className="md:relative md:mt-16 mt-8 transition-all duration-[100]">
        <h2 className="text-neutral-50 text-sm md:absolute md:left-[-4.45rem] md:top-0 pb-7 font-medium">
          Posts
        </h2>
        <div className="flex flex-col">{/* Map posts here */}</div>
      </div>
    </Layout>
  );
};

export default Home;
