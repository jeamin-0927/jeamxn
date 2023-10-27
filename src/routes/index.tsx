import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./home.module.css";

import Top from "~/components/main/top/top";
import About from "~/components/main/about/about";
import Projects from "~/components/main/projects/projects";
import Getready from "~/components/main/getready/getready";
import ProjectsList from "~/components/main/projectsList/projectsList";
import Socials from "~/components/main/socials/socials";
import Experience from "~/components/main/experience/experience";
import Connect from "~/components/main/connect/connect";
import Copyright from "~/components/main/copyright/copyright";

export default component$(() => {
  const pages = [
    Top,
    About,
    Projects,
    ProjectsList,
    Getready,
    Socials,
    Experience,
    Connect,
    Copyright
  ]

  return (
    <div class={styles.main}>
      {
        pages.map((Page, index) => {
          return (
            <div class={styles.page} key={index}>
              <Page />
            </div>
          )
        })
      }
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
