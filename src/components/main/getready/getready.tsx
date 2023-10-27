import { component$ } from "@builder.io/qwik";
import styles from "./getready.module.css";

export default component$(() => {
  return (
    <div class={styles.main}>
      <div class={styles.inner}>
        <div class={styles.title}>Intro</div>
        <div class={styles.desc}>Get ready to be captivated by Jeamin's world!</div>
      </div>
    </div>
  )
});