import { component$ } from "@builder.io/qwik";
import styles from "./copyright.module.css";

export default component$(() => {

  return (
    <div class={styles.main}>
      <div class={styles.inner}>
        <image src="/Shapes.webp" width="64" height="64" />
        <div class={styles.padding}></div>
        <div class={styles.jeaminChoi}>© Jeamin Choi, 2023.</div>
        <div class={styles.Generated}>Generated on October 17, 2023</div>
      </div>
    </div>
  )
});