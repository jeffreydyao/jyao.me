import React from "react";
import listeningTo from "../public/listeningto.png";
import Block from "../components/Block";
import Image from "next/image";

// Type component props to ensure variables are valid
interface ProjectItem {
  name: string;
  date: string;
  image: StaticImageData; // Import images for each project
  alt: string;
  description: string;
  builtwith: string;
  link: string;
  github: string;
}

// Edit projects here.
// TODO: Define post as prop; if boolean operator "no" is passed (aka a post hasn't been written for the project yet) the Post link won't display
const projects: ProjectItem[] = [
  {
    name: "Listening To",
    date: "January 2022",
    image: listeningTo,
    alt: "Mockup of Listening To app",
    description:
      "Lets Last.fm users share a link with their friends that shows what music they've been listening to recently.",
    builtwith:
      "Built with Next.js + React + Last.fm API, deployed with Vercel.",
    link: "https://listening-to.vercel.app/",
    github: "https://github.com/jeffreydyao/listening-to-v2",
  },
];

export default function Projects() {
  return (
    <Block>
      <h2 className="text-neutral-50 text-sm md:absolute md:left-[-5.55rem] md:top-0 pb-7 font-medium">
        Projects
      </h2>

      <div className="flex flex-col">
        {projects.map(
          (
            { name, date, image, alt, description, builtwith, link, github },
            i
          ) => (
            <div key={`${i}`}>
              <div>
                <Image
                  src={image}
                  alt={alt}
                  width={500}
                  height={220}
                  className="rounded-[0.875rem]"
                />
              </div>

              <h3 className="text-neutral-50 text-base md:pt-9 pt-7">{name}</h3>
              <p className="text-neutral-400 text-sm pt-1">{date}</p>
              <div className="flex md:flex-row flex-col justify-start pt-3 md:gap-14 gap-8">
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-300 text-sm md:max-w-xs leading-5">
                    {description}
                  </p>
                  <p className="text-neutral-300 text-sm md:max-w-xs leading-5">
                    {builtwith}
                  </p>
                </div>
                <div>
                  <div className="border-t-2 w-8 border-neutral-600 md:pb-2 pb-3" />
                  <div className="flex md:flex-col flex-row align-middle md:gap-2 gap-3">
                    <a
                      href={link}
                      className="text-neutral-100 text-xs md:pt-1 hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]"
                    >
                      Check it out →
                    </a>
                    <a
                      href={github}
                      className="text-neutral-100 text-xs hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]"
                    >
                      GitHub →
                    </a>
                    {/* Update with blog post once finished */}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Block>
  );
}
