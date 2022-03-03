// @ts-nocheck
import Block from './Block';
import DateFormatter from './DateFormatter';
import Link from 'next/link';
import React from 'react';

export default function Posts({posts}: any) {
  return (
    <Block>
      <div className="md:relative md:mt-16 mt-8 transition-all duration-[100]">
        <h2 className="text-neutral-50 text-sm md:absolute md:left-[-4.45rem] md:top-[0.175rem] pb-2 font-medium">
          Posts
        </h2>
        <div className="flex flex-col gap-5">
          {posts.map(post => (
            <div key={post.slug}>
              <Link href={'/posts/' + post.slug} passHref>
                <a className="text-sm text-neutral-50 hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]">
                  {post.title}
                </a>
              </Link>
              <div className="pt-1 text-sm text-neutral-400">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}
