// @ts-nocheck
// TODO: Type below properly
// post.content and post.slug return error ts(2339)
// Property '___' does not exist on type '{}'.
// Fix sometime
import Block from "../../components/Block";
import Layout from "../../components/Layout";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import PostTitle from "../../components/PostTitle";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Post({ post }: any) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />;
  }
  return (
    <Layout>
      <Block>
        <Link href="/" passHref>
          <a className="text-neutral-50 text-sm md:absolute md:left-[-5.025rem] pb-2 pt-[0.185rem] md:top-0 hover:text-blue-300 hover:cursor-pointer transition-all duration-[100] font-medium">
          ← Back
          </a>
        </Link>
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Jeffrey Yao</title>
              </Head>
              <PostHeader title={post.title} date={post.date} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Block>
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
