import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./projects.module.css";

export default component$(() => {
  const today = new Date();
  const isShow = useSignal(false);

  useVisibleTask$(() => {
    setTimeout(() => {
      isShow.value = true;
    }, 100);
    return () => {
      isShow.value = false;
    }
  });

  return (
    <div class={styles.outer}>
      <div class={styles.projects_title}>
        <div 
          class={[
            styles.date, 
            isShow.value && styles.dateAnimationIn,
          ]}
          >{today.toDateString()}</div>
        <div class={styles.title}>PROJECTS</div>
        <div class={styles.desc}>DIVE INTO THE AMAZING PROJECTS THAT JEAMIN HAS CRAFTED WITH HIS CODING PROWESS. HERE LIES THE TREASURE TROVE OF TALENT.</div>
        <div class={styles.learn_more}>LEARN MORE</div>
      </div>
    </div>
  )
});