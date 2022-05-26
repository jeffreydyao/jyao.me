import { createEffect, createSignal } from "solid-js";
import { Moon, Sun } from "../Icons";

function getTheme() {
  if (import.meta.env.SSR) {
    return undefined;
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal(getTheme());

  createEffect(() => {
    if (theme() === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  });

  return (
    <button
      class="flex justify-center items-center p-4 fill-gray-12"
      aria-label={`Toggle theme to ${theme()}`}
      onClick={() => {
        const newTheme = theme() === "light" ? "dark" : "light";
        console.log(newTheme);

        const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        console.log("newTheme: ", newTheme, "systemPref: ", systemPref);

        if (newTheme === systemPref) {
          localStorage.removeItem("theme");
        } else {
          localStorage.setItem("theme", newTheme);
        }

        setTheme(newTheme);
      }}
    >
      {theme() === "dark" ? Moon : Sun}
    </button>
  );
}
