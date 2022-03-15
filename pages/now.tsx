import Layout from '../components/Layout';
import {CMS_NAME} from '../lib/constants';
import film1 from '../public/film1.jpg';
import film2 from '../public/film2.jpg';
import film3 from '../public/film3.jpg';
import film4 from '../public/film4.jpg';
import film5 from '../public/film5.jpg';
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
          Last updated March 16th, 2022, from Sydney.
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Seeking out as many opportunities as possible
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          I competed in my{' '}
          <a
            href="https://devpost.com/software/greenways-bkytwg?ref_content=user-portfolio&ref_feature=in_progress"
            className="text-blue-400 transition-all hover:text-blue-500 hover:cursor-pointer"
          >
            first hackathon
          </a>{' '}
          recently, and our team won second prize, best design and four sponsor
          prizes - I'm extremely proud! Through it, I landed my first internship
          at Bukalapak starting later this year, where I'm excited to be working
          on real-world projects that make a difference to warungs in Indonesia.
          I'm also now in the DigiSoc Careers and CSESoc Education subcommittees
          at UNSW, which is awesome. My aim is still to gain experience across a
          broad range of domains as quickly as possible, so I can scope out what
          I like while building a T-shaped knowledge base.
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Building cool stuff
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          Developing ideas that I have and using them as a chance to try new
          frameworks / libraries / technologies + expand my knowledge!
        </p>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-4 max-w-[500px]">
          At CSESoc Education, I'm hacking on an interactive coding tutorials
          platform which uses WebAssembly to compile code. The idea is to
          provide an introduction to commonly used languages and concepts in CS
          by working through real-world examples. There's lots to get stuck
          into, and I'm excited to learn!
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
          while keeping my options open. Recently, I&apos;ve taken an interest
          in ambient computing. I wonder how we&apos;ll be interacting with
          technology in a decade - and I want to be at the edge of that field.
        </p>

        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          Exploring more
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          I&apos;ve been exploring Sydney more recently, which makes me very
          happy. The past two years have made me appreciate small moments, like
          basking in the glow of a sunset and taking in the smell of nature,
          more. Here&apos;s to more moments like that this year!
        </p>
        <h3 className="pt-6 font-semibold text-neutral-50 text-md">
          My first roll of film
        </h3>
        <p className="text-neutral-300 text-sm leading-[1.5rem] pt-3 max-w-[500px]">
          Fujifilm Superia X-TRA 400, on a Canon Canonet QL17.
        </p>
        <div className="flex flex-col gap-8 py-6 overflow-hidden duration-300">
          <Image
            src={film1}
            alt="test"
            layout="responsive"
            className="rounded-xl hover:brightness-[1.10] transition-all"
          />
          <Image
            src={film2}
            alt="test"
            layout="responsive"
            className="rounded-xl hover:brightness-[1.10] transition-all"
          />
          <Image
            src={film3}
            alt="test"
            layout="responsive"
            className="rounded-xl hover:brightness-[1.10] transition-all"
          />
          <Image
            src={film4}
            alt="test"
            layout="responsive"
            className="rounded-xl hover:brightness-[1.10] transition-all"
          />
          <Image
            src={film5}
            alt="test"
            layout="responsive"
            className="rounded-xl hover:brightness-[1.10] transition-all"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
