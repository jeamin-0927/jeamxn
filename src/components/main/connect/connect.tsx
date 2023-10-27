import { component$ } from "@builder.io/qwik";
import styles from "./connect.module.css";

export default component$(() => {

  return (
    <div class={styles.main}>
      <div class={styles.inner}>
        <div class={styles.title}>Got a burning question?<br />Let's connect!</div>
        <div class={styles.buttons}>
          <div class={styles.email}>
            <a href="mailto:admin@chicken-moo.com" target="_blank">Email Jeamin</a>
          </div>
          <div class={styles.github}>
            <a href="https://github.com/jeamin-0927" target="_blank">GitHub Profile</a>
          </div>
        </div>
      </div>
    </div>
  )
});