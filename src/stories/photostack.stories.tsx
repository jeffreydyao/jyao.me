/* eslint-disable @typescript-eslint/ban-ts-comment, @next/next/no-img-element */
import { animate, stagger } from "motion";
import "tailwindcss/tailwind.css";
import PhotoStack1 from "../img/photostack1.webp";
import PhotoStack2 from "../img/photostack2.webp";
import PhotoStack3 from "../img/photostack3.webp";

export function PhotoStack() {
  // On mouse enter, stagger animating all the elements up.

  const animation = animate(
    "#stack-card",
    { y: [0, -20] },
    {
      delay: stagger(0.1),
      duration: 0.5,
      // easing: spring(),
      // offset: [0, 0.25, 0.75],
    }
  );

  return (
    <div
      className="relative"
      id="stack"
      onMouseEnter={() => {
        animation.playbackRate = 1;
        animation.play();
      }}
      onMouseLeave={() => {
        animation.playbackRate = -1; // Reverse animation
        animation.play();
      }}
    >
      <div
        id="stack-card"
        className="overflow-hidden border-8 border-gray-50 drop-shadow-md rounded-3xl w-60 h-80"
      >
        {/* @ts-ignore */}
        <img src={PhotoStack1} alt="" />
      </div>
      <div
        id="stack-card"
        className="absolute overflow-hidden border-8 rotate-[3deg] top-4 left-5 -z-10 border-gray-50 drop-shadow-lg rounded-3xl w-60 h-80"
      >
        {/* @ts-ignore */}
        <img src={PhotoStack2} alt="" />
      </div>
      <div
        id="stack-card"
        className="absolute overflow-hidden border-8 border-gray-100 -z-20 top-8 left-11 rotate-6 drop-shadow-xl rounded-3xl w-60 h-80"
      >
        {/* @ts-ignore */}
        <img src={PhotoStack3} alt="" />
      </div>
    </div>
  );
}

// Parameterise story
