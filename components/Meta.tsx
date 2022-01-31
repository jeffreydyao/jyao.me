import Head from "next/head";

export default function Meta({title, desc}:any) {
  return (
    <Head>
      <meta
        name="description"
        content="First-year Computer Science student @ UNSW"
      />
      <meta property="og:image" content="public/opengraph.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}