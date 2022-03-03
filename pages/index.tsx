import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Projects from '../components/Projects';
import {getAllPosts} from '../lib/api';
import {CMS_NAME} from '../lib/constants';
import Head from 'next/head';
import Link from 'next/link';

// Check type for allPosts
export default function Home({allPosts}: any) {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <div className="md:relative mt-12 transition-all duration-[100]">
        <h2 className="text-neutral-50 text-sm md:absolute md:left-[-4rem] md:top-[0.175rem] pb-2 font-medium">
          Now
        </h2>
        <Link href="/now" passHref>
          <a className="text-neutral-50 text-sm hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]">
            Learning by building things, diving into new opportunities and
            shooting film! →
          </a>
        </Link>
      </div>

      <Projects />

      <Posts posts={allPosts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug']);

  return {
    props: {allPosts},
  };
}
