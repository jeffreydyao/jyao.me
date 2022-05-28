import { createEffect, createSignal, Show } from "solid-js";
import { animate, stagger } from "motion";
import { Motion, Presence } from "@motionone/solid";

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
    return <div class="w-full border-t border-gray-7" />;
  }

  createEffect(() => {
    if (isMenuOpen()) {
      const menu = document.getElementById("menu-root");
      const titles = menu.querySelectorAll("li");
      const separators = menu.querySelectorAll("div");

      animate(titles, { opacity: [0, "100%"] }, { duration: 0.415, delay: stagger(0.115) });
      animate(separators, { width: [0, "100%"] }, { duration: 0.465, delay: stagger(0.16) });
    }
  });

  return (
    <>
      <button
        class="tham tham-e-squeeze tham-w-4  md:hidden z-50"
        classList={{ "tham-active": isMenuOpen() }}
        onClick={toggleMenu}
        aria-label={isMenuOpen() ? "Close menu" : "Open menu"}
      >
        <div class="tham-box ">
          <div class="tham-inner bg-gray-12" />
        </div>
      </button>
      <Presence>
        <Show when={isMenuOpen()}>
          <Motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.155 }}
            id="menu-root"
            class="absolute top-0 left-0 w-screen h-screen text-md font-medium text-gray-12 pt-24 px-8 bg-gray-3 z-10 flex flex-col gap-4"
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
          </Motion.ul>
        </Show>
      </Presence>
    </>
  );
}
