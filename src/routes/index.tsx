import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./home.module.css";

import Top from "~/components/main/top/top";
import About from "~/components/main/about/about";
import Projects from "~/components/main/projects/projects";

export default component$(() => {
  return (
    <div class={styles.main}>
      <Top />
      <About />
      <Projects />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jeamxn :: Portfolio",
  meta: [
    {
      name: "description",
      content: "Jeamxn's portfolio",
    },
  ],
};
