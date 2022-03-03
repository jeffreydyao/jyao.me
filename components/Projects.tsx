import Block from '../components/Block';
import greenways from '../public/greenways.png';
import recentlyplayed from '../public/recentlyplayed.png';
import Image from 'next/image';
import React from 'react';

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
    name: 'Greenways',
    date: '25–⁠27 February 2022',
    // Place gif image here
    image: greenways,
    alt: 'Demonstration of Greenways web app',
    description:
      "A UNIHACK '22 hackathon project built in under two days. Led development of front/back-end + designed UX. Visualises postcode-level climate data using a multi-layer map and information cards. Provides calculators which weigh multiple parameters to find savings if solar panels / an EV are used over their less eco-friendly counterparts.",
    builtwith:
      'Built with Next.js + React + Chakra UI + Mapbox GL JS + MySQL, deployed on Vercel + PlanetScale.',
    link: 'https://greenways.vercel.app/',
    github: 'https://github.com/UNIHACK2022/UNIHACK-22',
  },
  {
    name: 'Recently Played',
    date: 'January–⁠February 2022',
    image: recentlyplayed,
    alt: 'Mockup of Recently Played web app',
    description:
      "Show the world what you've been playing recently on Spotify, listen to track previews and find each song's full version on Spotify and Apple Music.",
    builtwith:
      'Built with Next.js + React + TypeScript + Spotify / MusicKit API, deployed on Vercel.',
    link: 'https://mixtape.jyao.me/',
    github: 'https://github.com/jeffreydyao/recently-played',
  },
];

export default function Projects() {
  return (
    <Block>
      <h2 className="text-neutral-50 text-sm md:absolute md:left-[-5.55rem] md:top-0 pb-7 font-medium">
        Projects
      </h2>

      <div className="flex flex-col gap-14">
        {projects.map(
          (
            {name, date, image, alt, description, builtwith, link, github},
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

              <h3 className="text-base text-neutral-50 md:pt-9 pt-7">{name}</h3>
              <p className="pt-1 text-sm text-neutral-400">{date}</p>
              <div className="flex flex-col justify-start gap-8 pt-3 md:flex-row md:gap-14">
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-5 text-neutral-300 md:max-w-xs">
                    {description}
                  </p>
                  <p className="text-sm leading-5 text-neutral-300 md:max-w-xs">
                    {builtwith}
                  </p>
                </div>
                <div>
                  <div className="w-8 pb-3 border-t-2 border-neutral-600 md:pb-2" />
                  <div className="flex flex-row gap-3 align-middle md:flex-col md:gap-2">
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
