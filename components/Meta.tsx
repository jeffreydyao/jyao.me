import Head from 'next/head';

export default function Meta({title, desc}: any) {
  return (
    <Head>
      <meta
        name="description"
        content="A first-year Computer Science student @ UNSW Sydney who builds things for fun."
      />
      <meta property="og:image" content="/opengraph.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://www.jyao.me/opengraph.png" />
      <meta name="twitter:title" content="Jeffrey Yao" />
      <meta
        name="twitter:description"
        content="First-year Computer Science student @ UNSW"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
