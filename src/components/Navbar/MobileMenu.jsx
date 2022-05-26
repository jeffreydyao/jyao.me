import { createEffect, createSignal, onCleanup } from "solid-js";
import { animate, stagger } from "motion";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  function toggleMenu() {
    if (isMenuOpen()) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  function Separator() {
    return <div class="w-full border-t border-gray-6" />;
  }

  createEffect(() => {
    if (isMenuOpen()) {
      const menu = document.getElementById("menu-root");
      const titles = menu.querySelectorAll("li");
      const separators = menu.querySelectorAll("div");

      animate(titles, { opacity: [0, 1] }, { duration: 0.415, delay: stagger(0.115) });
      animate(separators, { width: [0, 1] }, { duration: 0.465, delay: stagger(0.16) });
      console.log("Menu is open!");
    }
  });

  // TODO: Refactor to following when Motion One for Solid fixed:
  // 1. Move menu out into another component
  // 2. Add Presence wrapped to animate unmount/mount into DOM
  return (
    <>
      <button
        class="tham tham-e-squeeze tham-w-4 md:hidden z-50"
        classList={{ "tham-active": isMenuOpen() }}
        onClick={toggleMenu}
      >
        <div class="tham-box">
          <div class="tham-inner" />
        </div>
      </button>
      {isMenuOpen() && (
        <ul
          id="menu-root"
          class="absolute top-0 left-0 w-screen h-screen text-md font-medium pt-24 px-8 bg-gray-3 z-10 flex flex-col gap-4"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <Separator />
          <li>
            <a href="/blog">Blog</a>
          </li>
          <Separator />
          <li>
            <a href="/projects">Projects</a>
          </li>
          <Separator />
          <li>
            <a href="/now">Now</a>
          </li>
          <Separator />
          <li>
            <a href="/about">About</a>
          </li>
          <Separator />
        </ul>
      )}
    </>

    // Store open closed signal

    // When signal open, render menu

    // When signal closed, close menu
  );
}
