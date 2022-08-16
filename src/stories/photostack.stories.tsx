/* eslint-disable @typescript-eslint/ban-ts-comment, @next/next/no-img-element */
import type { Story } from "@ladle/react";
import "tailwindcss/tailwind.css";
import PhotoStack1 from "../img/photostack1.webp";
import PhotoStack2 from "../img/photostack2.webp";
import PhotoStack3 from "../img/photostack3.webp";

// Create story for photo stack
export const PhotoStack: Story = () => (
  <div className="relative">
    <div className="overflow-hidden border-8 border-gray-50 drop-shadow-md rounded-3xl w-60 h-80">
      {/* @ts-ignore */}
      <img src={PhotoStack1} alt="" />
    </div>
    <div className="absolute overflow-hidden border-8 rotate-[3deg] top-4 left-5 -z-10 border-gray-50 drop-shadow-lg rounded-3xl w-60 h-80">
      {/* @ts-ignore */}
      <img src={PhotoStack2} alt="" />
    </div>
    <div className="absolute overflow-hidden border-8 border-gray-100 -z-20 top-8 left-11 rotate-6 drop-shadow-xl rounded-3xl w-60 h-80">
      {/* @ts-ignore */}
      <img src={PhotoStack3} alt="" />
    </div>
  </div>
);

// Parameterise story
