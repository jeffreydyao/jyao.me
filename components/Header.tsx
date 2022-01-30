import React from "react";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header className="flex flex-col justify-start ">
      <h1 className="text-md text-neutral-50 font-semibold">Jeffrey Yao</h1>
      <p className="text-neutral-400 text-sm pt-2">
        First-year Computer Science student · UNSW · Sydney
      </p>
      <p className="text-neutral-300 text-sm pt-6 md:max-w-[26rem]">
        When I’m not studying, I develop side projects that scratch the itch
        to build beautiful, performant things that solve problems.
      </p>
      <SocialIcons />
    </header>
  )
}