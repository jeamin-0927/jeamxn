import { component$ } from "@builder.io/qwik";
import styles from "./experience.module.css";

export default component$(() => {
  return (
    <div class={styles.main}>
      <div class={styles.blur}>
      <div class={styles.text}>Experience the unbelievable.</div>
      </div>
    </div>
  )
});