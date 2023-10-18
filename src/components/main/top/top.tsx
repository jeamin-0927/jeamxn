import { component$ } from "@builder.io/qwik";
import styles from "./top.module.css";
import { Logo } from "~/components/icons";

export default component$(() => {
  return (
    <div class={styles.top} id="top">
      <div class={styles.logo}>
        <div class={styles.logoAnimation}>
          <Logo />
        </div>
      </div>
      <h1 class={styles.title}>PORTFOLIO</h1>
      <div class={styles.buttons}>
        <a href="#about">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
});