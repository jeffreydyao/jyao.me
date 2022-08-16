import type { Story } from "@ladle/react";
import "tailwindcss/tailwind.css";

// Create story for photo stack
export const PhotoStack: Story = () => (
  <div className="relative">
    <div className="overflow-hidden border-8 border-gray-50 drop-shadow-md rounded-3xl w-60 h-80">
      <img src="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
    </div>
    <div className="absolute overflow-hidden border-8 rotate-[3deg] top-4 left-5 -z-10 border-gray-50 drop-shadow-lg rounded-3xl w-60 h-80">
      <img src="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
    </div>
    <div className="absolute overflow-hidden border-8 border-gray-100 -z-20 top-8 left-11 rotate-6 drop-shadow-xl rounded-3xl w-60 h-80">
      <img src="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
    </div>
  </div>
);

// Parameterise story
