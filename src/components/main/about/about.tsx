import { component$ } from "@builder.io/qwik";
import styles from "./about.module.css";

export default component$(() => {
  return (
    <div class={styles.inner} id="about">
      <div class={styles.about}>
        <div class={[styles.box, styles.image].join(" ")}>
          <img src="image.jpeg" width={80} height={80} class={styles.image} />
        </div>
        <div class={[styles.box, styles.decs].join(" ")}>
          <div class={styles.title}>Jeamin Choi</div>
          <div class={styles.dec}>Introducing Jeamin Choi, a dedicated programmer excelling in Qwik, React/Next.JS, React Native, Express.js, and Fastify! Adept at utilizing tools such as GitHub, Vercel, Figma, and Framer, Jeamin gives life to code.</div>
        </div>
      </div>
    </div>
  )
});