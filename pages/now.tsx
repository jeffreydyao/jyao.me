import Layout from "../components/Layout";
import { CMS_NAME } from "../lib/constants";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Now | {CMS_NAME}</title>
      </Head>
      <div className="mt-12 md:relative">
        <Link href="/" passHref>
          <a className="text-neutral-50 text-sm md:absolute md:left-[-5.2rem] pb-2 md:top-0 hover:text-blue-300 hover:cursor-pointer transition-all duration-[100] font-medium">
            ← Back
          </a>
        </Link>
        <p className="pt-3 text-sm text-neutral-400 md:pt-0">
          Last updated February 16th, 2022, from Sydney.
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Considering the direction of my career
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          Before studying CS, I used to want to become a doctor and studyed
          Biomedical Engineering while gunning med admissions. CS and Medicine
          overlap in that you can help people - just in different ways. For
          example, working in health tech to improve patient outcomes.
        </p>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-4 max-w-[500px]">
          I&apos;m trying to find the shape of what that career would look like
          while keeping my options open.
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Building cool stuff
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          Developing ideas that I have and using them as a chance to try new
          frameworks / libraries / technologies!
        </p>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-4 max-w-[500px]">
          I just finished a web app that shows people what you've been listening
          to recently on Spotify! I had to get deep into Next.js, React and
          JS/TS to do it. Next I&apos;m planning on doing something with data
          visualisation or real-time collaboration, or learning more C / Go.
          There&apos;re heaps of cool things being developed on the web, and I'm
          keen to get stuck into trying some new things!
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Seeking out as many opportunities as possible
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          Internships and ways of gaining practical experience.
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Exploring more
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          I've been exploring Sydney more recently, which makes me very happy.
          The past two years have made me appreciate small moments, like basking
          in the glow of a sunset and taking in the smell of nature, more.
          Here's to more moments like that this year!
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Trying to take more photos
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          I got a film camera recently! It's beautiful and I just shot my first
          roll of film on it. Photos coming soon.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
