import { component$ } from "@builder.io/qwik";
import styles from "./socials.module.css";

export default component$(() => {
  return (
    <div class={styles.main}>
      <div class={styles.inner}>
        <div class={styles.title}>Socials</div>
        <div class={styles.desc}>Follow Jeamin's coding adventures on Instagram and access more genius on GitHub with the click of a button!</div>

      </div>
    </div>
  )
});