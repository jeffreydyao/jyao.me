// @ts-nocheck
import Block from "./Block";
import Link from "next/link";
import React from "react";
import DateFormatter from "./DateFormatter";

export default function Posts({ posts }: any) {
  return (
    <Block>
      <div className="md:relative md:mt-16 mt-8 transition-all duration-[100]">
        <h2 className="text-neutral-50 text-sm md:absolute md:left-[-4.45rem] md:top-0 pb-7 font-medium">
          Posts
        </h2>
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={"/posts/" + post.slug} passHref>
                <h3 className="text-sm text-neutral-50 hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]">
                  {post.title}
                </h3>
              </Link>
              <div className="text-neutral-400 text-sm pt-1">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}
